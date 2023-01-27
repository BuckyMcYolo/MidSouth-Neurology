import React from "react";
import Link from "next/link";
import { Container, Paper } from "@mui/material";

const PatientRegistration = () => {
  return (
    <Container>
      {" "}
      <Paper className="flex flex-col items-center mt-8 text-lg md:text-xl">
        <h1 className="text-xl md:text-2xl">Patient Registration Form</h1>
        <h2>
          This is a secure form. Your information will not be shared with
          anyone.
        </h2>
        <p>
          To read more about how we secure your information please read our
          security policy
          <Link href="security">
            <span className="text-blue-500 hover:cursor-pointer ml-1 hover:underline">
              here
            </span>
          </Link>
        </p>
      </Paper>
    </Container>
  );
};

export default PatientRegistration;
