import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../../Others/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col mt-10">
        {courses.map((course) => (
          <Link
            className="mt-5 text-xl underline"
            to={`/course/${course.id}`}
            key={course.id}
          >
            {course.subject}
          </Link>
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
