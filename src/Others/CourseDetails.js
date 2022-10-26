import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  const { id, img, subject, lecturer, lectures } = details;
  return (
    <div>
      <h1>This is the details page {lecturer}</h1>
    </div>
  );
};

export default CourseDetails;
