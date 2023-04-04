const express=require('express');
const userModel=require('../model/user');
const {body, validationResult}=require('express-validator')
const router=express.Router()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

router.use(express.json())


const secret="RESTAPI"


router.post('/register', async(req, res)=>{
    try {
        const {email, password, role}=req.body;
        const user=await userModel.findOne({email})

        if(user){
            return res.status(403).json({Error: 'User is already exists'})
        }
        bcrypt.hash(password, 10, async (err, hash)=>{
            if (err) {
                return res.status(500).json({
                    error: err.message
                })
            }
            await userModel.create({
                email,
                password: hash,
                role
            })
            return res.status(200).json({
                message: "SignUp Successfully"
            })
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'Failed to register',
            Error: error.message
        })
    }
})

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(403).json({
                error: "Unkown User"
            })
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (err) {
                return res.status(500).json({
                    error: err.message
                })  
            }
            if (result) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                    data: user._id
                }, secret);
                return res.status(200).json({
                    message: "Login successfull",
                    token: token,
                    user : user.email,
                    author: user.id,
                    role:user.role
                })
            } else {
                return res.status(400).json({
                    error: "Invallid Password"
                })
            }
        })
    } catch (err) {
        return res.status(400).json({
            status: "Failed",
            message: err.message
        })
    }
})

module.exports=router