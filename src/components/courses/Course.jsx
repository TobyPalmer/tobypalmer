import React from 'react';

const Course = ({course}) => {
  return (
    <li className="course-list__item">
      <p className="course-list__item-name">{course.name}</p>
      <div className="course-list__item-attributes">
        <p className="course-list__item-attribute">{course.code}</p>
        <p className="course-list__item-attribute">HP: {course.hp}</p>
        <p className="course-list__item-attribute">Betyg: {course.grade}</p>
      </div>
    </li>
  );
};

export default Course;