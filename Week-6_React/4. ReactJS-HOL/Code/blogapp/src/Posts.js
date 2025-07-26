import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      this.setState({ posts: data, error: null });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, errorInfo) {
    alert(`Error: ${error.message}\nDetails: ${errorInfo.componentStack}`);
    this.setState({ error: error.message });
  }

  render() {
    const { posts, error } = this.state;
    return (
      <div>
        <h2>Blog Posts</h2>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    );
  }
}

export default Posts;