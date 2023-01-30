import { Paper, Button } from "@mui/material";
import React from "react";
import Link from "next/link";

const Success = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center  text-white">
      <Paper className="w-96 text-xl bg-green-500">
        <h1>Success</h1>
        <h2>
          Thank you for submitting your paperwork online. By doing so, we both
          saved time and made the process more convenient. We'll be in touch
          soon to schedule an appointment, if one has not already been
          scheduled. Keep up the good work!
        </h2>
        <Button>
          <Link href="/">Back to homepage</Link>
        </Button>
      </Paper>
    </div>
  );
};

export default Success;
