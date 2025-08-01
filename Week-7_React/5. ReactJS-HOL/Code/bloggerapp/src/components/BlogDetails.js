import React, { useState } from 'react';
import { blogs } from '../data/data';

const BlogDetails = ({ showBlogs = true }) => {
  const [selectedAuthor, setSelectedAuthor] = useState('all');
  const [expandedBlog, setExpandedBlog] = useState(null);

  const authorFilters = {
    all: () => blogs,
    stephen: () => blogs.filter(blog => blog.author === 'Stephen Biz'),
    schwerzdenier: () => blogs.filter(blog => blog.author === 'Schwerzdenier')
  };

  const renderBlogContent = () => {
    const filteredBlogs = authorFilters[selectedAuthor]();
    
    if (filteredBlogs.length === 0) {
      return <div className="no-blogs">No blogs found for selected author</div>;
    }

    return filteredBlogs.map(blog => (
      <div key={blog.id} className="blog-item">
        <h3>{blog.title}</h3>
        <p><strong>Author:</strong> {blog.author}</p>

        {expandedBlog === blog.id ? (
          <div>
            <p>{blog.content}</p>
            <button onClick={() => setExpandedBlog(null)}>Show Less</button>
          </div>
        ) : (
          <div>
            <p>{blog.content.substring(0, 50)}...</p>
            <button onClick={() => setExpandedBlog(blog.id)}>Read More</button>
          </div>
        )}
      </div>
    ));
  };

  const canShowBlogs = showBlogs && blogs.length > 0;

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      
      {canShowBlogs && (
        <>
          <div className="author-filter">
            <label>Filter by author: </label>
            <select 
              value={selectedAuthor} 
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="all">All Authors</option>
              <option value="stephen">Stephen Biz</option>
              <option value="schwerzdenier">Schwerzdenier</option>
            </select>
          </div>
          
          {renderBlogContent()}
        </>
      )}

      {!canShowBlogs && (
        <div className="no-content">
          <p>No blog content available</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
