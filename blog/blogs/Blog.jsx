import React, { useEffect, useState } from 'react';
import "./Blog.css";

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const dataget = async () => {
            try {
                const response = await fetch("http://localhost:2000/Blog/User");
                const data = await response.json();
                setBlogs(data);
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        dataget();
    }, []);

    return (
        <div className='container'>
            {blogs.map((val, index) => {
                const date = new Date(val.createdAt); // Create a Date object from the createdAt string
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true, // Set to true for 12-hour format, false for 24-hour format
                };
                const formattedDateTime = date.toLocaleString("en-US", options); // Format the date and time

                return (
                    <div key={index} className='blog'>
                        <h1>{val.title}</h1>
                        <p>{val.content}</p>
                        <p className='date'>{formattedDateTime}</p> {/* Display the formatted date and time */}
                    </div>
                );
            })}
        </div>
    );
}

export default Blog;
