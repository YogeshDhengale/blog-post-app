# blog-post-app




Assignment : Create an Advanced Blog Application with Next.js, React, and User
             Authentication
Objective: Build a full-featured blog application that allows users to view a list of blog
            posts, read individual blog posts, create new blog posts, and interact with the content
            using Next.js and React.
Requirements:
1. Create a new Next.js project using create-next-app and set up a basic file
structure.
2. Introduce user roles (e.g., admin, author, and reader). Admins can edit or delete
any blog post. Authors can edit or delete only their own blog posts. Readers can
only view blog posts.
3. Implement the following pages and components:
a. HomePage: Display a paginated list of blog posts with their titles and a
short excerpt of their content. Each blog post should be clickable and
navigate to its individual post page.
b. PostPage: Display the full content of an individual blog post, including its
title, content, and associated comments. Allow users to leave comments
on the blog post.
c. CreatePostPage: Display a form allowing users to create a new blog post.
The form should include fields for the post's title, content, and an optional
image upload. Use a rich text editor like Quill or Draft.js for the content
field.
4. Use React hooks and functional components throughout the application.
5. Implement server-side rendering (SSR) for the HomePage and PostPage using
Next.js's getServerSideProps function to fetch blog posts and individual post
data, respectively.
6. Add search functionality to allow users to search for blog posts by title or
content.
7. Add basic CSS styling to make the application visually appealing and
user-friendly.
8. Implement client-side form validation for the CreatePostPage and comment
forms.
