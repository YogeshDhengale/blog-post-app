const APIURL = 'https://blogpost-lgcn.onrender.com'

export async function getLogin(email, password) {
    console.log(email, password)
    try {
        const response = await fetch(APIURL, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getRegister(email, password, role) {
    try {
        const response = await fetch( `${APIURL}/register`, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
                role: role
            })
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}



export async function getAllPosts(page) {

    try {
        const response = await fetch(`${APIURL}/blogs?page=${page}&limit=4`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return error
    }
}

export async function getPost(id) {
    try {
        //console.log(id)
        const response = await fetch(`${APIURL}/blogs/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return error
    }
}


export async function getdeleteAblog(id) {
    try {
        const response = await fetch(`${APIURL}/blogs/${id}`, {
            method: "DELETE"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function getCreateBlog(title, content, author) {

    try {
        const response = await fetch(`${APIURL}/addblog`, {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify({
                title: title,
                content: content,
                author: author
            })
        });
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log(error)
        return error
    }
}

export async function getupdatePost(id, title, content) {
    try {
      const response = await fetch(`${APIURL}/editblog`, {
        method: "PUT",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            id: id,
            title: title,
            content: content,
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  

