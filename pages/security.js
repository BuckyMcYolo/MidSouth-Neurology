import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button,
  Container,
  Divider,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

const Security = () => {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Container>
        <Card>
          <CardHeader title="Our Security Practices" />
          <Divider />
          <CardContent component={Container} className="text-base md:text-lg">
            At Midsouth Neurology, we take data security very seriously. Here
            are some of the ways we keep your data safe:
            <ul className="list-disc list-inside">
              <li className="my-3">
                {" "}
                We use the highest security measures possible to protect our
                users' data.
              </li>
              <li className="mb-3">
                {" "}
                All data is encrypted in transit using SSL, HTTPS, and TLS 1.3
                protocols.
              </li>
              <li className="mb-3">
                {" "}
                Any information sent is routed through a HIPPA compliant server,
                ensuring that all data is kept confidential and secure.
              </li>
              <li className="mb-3">
                {" "}
                To send dynamic form data through email we use{" "}
                <a
                  className="text-blue-700 underline"
                  target="_blank"
                  href="https://www.mailgun.com/solutions/industries/healthcare/"
                >
                  MailGun's HIPPA compliant email service.{" "}
                </a>
              </li>
              <li className="mb-3">
                {" "}
                Furthermore, we use{" "}
                <a
                  className="text-blue-700 underline"
                  target="_blank"
                  href="https://proton.me/business/healthcare"
                >
                  Proton Mail,{" "}
                </a>{" "}
                a HIPPA compliant email service that encrypts data at rest, to
                store the emails sent from our webpage.
              </li>
              <li className="my-3">
                {" "}
                We do not and would never use third party cookies or display ads
                to our users.
              </li>
              <li className="mb-3">
                {" "}
                All of these measures ensure that our users' data is kept safe
                and secure at all times.
              </li>
            </ul>
          </CardContent>
          <CardActions className="flex flex-row justify-end">
            <Button
              variant="contained"
              className="bg-blue-500 text-white"
              onClick={() => router.back()}
            >
              go back
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
};

export default Security;
