import React, { useState } from 'react';
import { courses } from '../data/data';

const CourseDetails = ({ showCourses = true }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  if (!showCourses) {
    return null;
  }

  const renderCourseList = () => {
    return courses.length > 0 ? (
      courses.map(course => (
        <div key={course.id} className="course-item">
          <h3>{course.name}</h3>
          <p>{course.date}</p>
          <button onClick={() => setSelectedCourse(course)}>
            Select Course
          </button>
        </div>
      ))
    ) : (
      <p>No courses available</p>
    );
  };

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      {renderCourseList()}

      {selectedCourse && (
        <div className="selected-course">
          <h4>Selected: {selectedCourse.name}</h4>
          <p>Date: {selectedCourse.date}</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
