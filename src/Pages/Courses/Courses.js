import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../Others/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid grid-cols-2">
      <div>
        {courses.map((course) => (
          <Link key={course.id}>{course.subject}</Link>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10 container">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
