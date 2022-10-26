import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { img, subject, lectures, lecturer, avilabe_seats, id } = course;

  return (
    <Card className="mt-10">
      <CardHeader color="blue" className="relative h-56">
        <img src={img} alt="img-blur-shadow" className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {subject}
        </Typography>
        <Typography>
          <Button>
            <Link to={`/course/${id}`}>See Details</Link>{" "}
          </Button>
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{lectures} lectures</Typography>
        <Typography variant="small">{lecturer}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          {avilabe_seats} Seats
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
