import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('all');
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'courses':
        return <CourseDetails showCourses={showCourses} />;
      case 'books':
        return <BookDetails showBooks={showBooks} />;
      case 'blogs':
        return <BlogDetails showBlogs={showBlogs} />;
      case 'all':
      default:
        return (
          <>
            <CourseDetails showCourses={showCourses} />
            <BookDetails showBooks={showBooks} />
            <BlogDetails showBlogs={showBlogs} />
          </>
        );
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>BloggerApp - Conditional Rendering Demo</h1>

        <nav className="navigation">
          {['all', 'courses', 'books', 'blogs'].map(section => (
            <button
              key={section}
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        <div className="toggle-controls">
          <label>
            <input
              type="checkbox"
              checked={showCourses}
              onChange={(e) => setShowCourses(e.target.checked)}
            />
            {showCourses ? 'Hide' : 'Show'} Courses
          </label>
          <label>
            <input
              type="checkbox"
              checked={showBooks}
              onChange={(e) => setShowBooks(e.target.checked)}
            />
            {showBooks ? 'Hide' : 'Show'} Books
          </label>
          <label>
            <input
              type="checkbox"
              checked={showBlogs}
              onChange={(e) => setShowBlogs(e.target.checked)}
            />
            {showBlogs ? 'Hide' : 'Show'} Blogs
          </label>
        </div>
      </header>

      <main className="main-content">
        {renderSectionContent()}
      </main>
    </div>
  );
}

export default App;
