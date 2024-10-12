import React, { useState } from 'react';
import './CreateBlog.css';

function BlogPage() {
    // Initialize state for blogs (optional)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:2000/Blog/User', {
                method: 'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({title , content}),
            });
    
            if (response.ok) {
                alert('Blog created successfully!');
                setTitle(''); // Reset title
                setContent(''); // Reset content
            } else {
                // Log the response for debugging
                const errorText = await response.text();
                console.error('Error Response:', errorText);
                alert('Failed to create blog.');
            }
        } catch (err) {
            console.error('Error while creating blog:', err);
            alert('Error while creating blog.');
        }
    };
    
    return (
        <div className="blog-page">
            <h1>Create Your Blog</h1>
            <form className="blog-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="blog-input"
                    required // Ensure title is required
                />
                <textarea
                    placeholder="Blog Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="blog-textarea"
                    required // Ensure content is required
                ></textarea>
                <button type="submit" className="submit-button">Submit Blog</button>
            </form>
        </div>
    );
}

export default BlogPage;
