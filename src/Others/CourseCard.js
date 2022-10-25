import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const CourseCard = ({ course }) => {
  const { img, subject, lectures, lecturer, avilabe_seats, course_type } =
    course;
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
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
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
