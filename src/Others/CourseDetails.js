import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const CourseDetails = () => {
  const details = useLoaderData();
  const { id, img, subject, lecturer, lectures, description } = details;

  return (
    <div className="mt-12 p-10">
      <h1 className="text-2xl text-gray-700 font-extrabold">
        Become a wise in {subject}
      </h1>
      <img
        src={img}
        alt="thumbnail"
        className="w-1/4 border mx-auto my-10 border-black rounded-full"
      ></img>
      <p className="text-left mx-2">{description}</p>
      <div className="flex justify-center items-center mt-10">
        <span className="mr-5">Mentor: {lecturer}</span>
        <span>The Number of Lectures {lectures}</span>
      </div>
      <Button className="mt-10">
        <Link to={`/details/${id}`}>Get Premium Access</Link>
      </Button>
      ;
    </div>
  );
};

export default CourseDetails;
