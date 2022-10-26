import React from "react";
import { useLoaderData } from "react-router-dom";

const PremiumInfo = () => {
  const { subject, id } = useLoaderData();

  return (
    <div>
      <h1>
        {`${id}.`} {subject}
      </h1>
    </div>
  );
};

export default PremiumInfo;
