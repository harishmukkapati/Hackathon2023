"use client";
// SearchResults.js
import React from 'react';

function SearchResults({ courses }) {
    return (
      <div>
        <h2>Search Results</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.course_code} - {course.alternate_name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default SearchResults;