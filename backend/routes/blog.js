const express = require('express');
const blogModel = require('../model/blog')
const router = express.Router()

router.use(express.json())

router.post('/addblog', async (req, res) => {
    const { title, content, author } = req.body
    try {
        await blogModel.create({
            title,
            content,
            author
        })
        return res.status(200).json({
            message: "Blog Added Successfully"
        })


    } catch (error) {
        console.log(error)
        return res.status(400).json({
            status: 'Failed to add a blog',
            Error: error.message
        })
    }
})


router.put('/editblog', async (req, res) => {
    try {
        const { id, title, content } = req.body;


        if (!id) {
            return res.status(400).json({ message: 'Please provide the id to update the blog' });
        }
        const blog = await blogModel.findById(id);

        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        if (title) {
            blog.title = title
        }

        if (content) {
            blog.content = content
        }

        blog.date_updated = Date.now();
        const updatedBlog = await blog.save();

        return res.status(200).json({
            Status: "Blog Updated Successfully",
            Updated: updatedBlog
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

router.get('/authorBlogs', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const author = req.headers['author'];
        console.log(author)
        const totalBlogs = await blogModel.countDocuments({ author: author});
        const blogs = await blogModel.find({ author: author}).skip(startIndex).limit(limit);

        return res.status(200).json({
            Status: "Blogs are fetch Scuccessfully",
            totalBlogs,
            currentPage: page,
            totalPages: Math.ceil(totalBlogs / limit),
            blogs
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/blogs', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        // Calculate the starting index of the blogs on the current page
        const startIndex = (page - 1) * limit;

        // Calculate the ending index of the blogs on the current page
        const endIndex = page * limit;

        // Get the total number of blogs in the database
        const totalBlogs = await blogModel.countDocuments();

        // Get the blogs for the current page
        const blogs = await blogModel.find().skip(startIndex).limit(limit);

        // Return the paginated blogs as a JSON object
        return res.status(200).json({
            Status: "Blogs are fetch Scuccessfully",
            totalBlogs,
            currentPage: page,
            totalPages: Math.ceil(totalBlogs / limit),
            blogs
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get("/blogs/:id", async (req, res) => {
    try {
        const { id } = req.body
        const blog = await blogModel.findOne(id)
        return res.status(200).json({
            Status: "Blog is fetched Scuccessfully",
            blog
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
})

router.delete('/blogs/:id', async (req, res) => {
    try {
      const blogId = req.params.id;
  
      const deletedBlog = await blogModel.findByIdAndDelete(blogId);
  
      if (!deletedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      return res.status(200).json({
        message: `Blog with ID ${blogId} deleted successfully`,
        deletedBlog
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router