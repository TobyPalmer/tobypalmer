import React from 'react';
import Course from './Course';
import data from './data.json';

import './styles.scss';

const sum = data.courses.reduce((a, b) => ({hp: a.hp + b.hp}));

const Courses = () => {
  return (
    <>
      <h1>Courses</h1>
      <ul className="course-list">
        {data.courses.map(course => (
          <Course key={course.code} course={course} />
        ))}
      </ul>
    </>
  );
};

export default Courses;