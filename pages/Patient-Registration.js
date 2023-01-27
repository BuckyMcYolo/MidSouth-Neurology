import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Paper, TextField, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import NavBar from "../components/NavBar";
import formStyles from "../styles/patientRegistration.module.css";

const PatientRegistration = () => {
  const [date, setDate] = React.useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      social: "",
      pcp: "",
      phone: "",
      email: "",
      prefferedContact: "phone",
      dob: "",
      insuredName: "",
      insuredSocial: "",
      insuredDOB: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("Required"),
      lastName: yup.string().required("Required"),
      address: yup.string().required("Required"),
      city: yup.string().required("Required"),
      state: yup.string().required("Required"),
      zip: yup.string().required("Required"),
      social: yup.string().required("Required"),
      pcp: yup.string().required("Required"),
      phone: yup.string().required("Required"),
      email: yup.string().required("Required").email("Invalid email address"),
      dob: yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const name = formik.values.firstName + " " + formik.values.lastName;

  useEffect(() => {
    const today = new Date();
    const date = today.toLocaleDateString("en-US");
    setDate(date);
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <Paper>
          <Container className="flex flex-col items-center mt-8 text-lg md:text-xl">
            <h1 className="text-xl md:text-2xl underline underline-offset-8 py-4">
              Patient Registration Form
            </h1>
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

            <form className="pt-8 flex flex-col items-center">
              <header className="flex flex-col items-center pb-4">
                <h1 className="text-xl md:text-2xl">Mid-South Neurology</h1>
                <div className="text-lg md:text-xl">Dr. William Owens</div>
                <div className="text-base md:text-lg">Date: {date}</div>
              </header>
              <h2 className="text-xl md:text-2xl underline underline-offset-8 pb-4">
                Patient Demographics
              </h2>{" "}
              <section>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName">
                      Patient&apos;s First Name:{" "}
                    </label>
                    <TextField
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                          ? formik.errors.firstName
                          : null
                      }
                      error={
                        formik.touched.firstName && formik.errors.firstName
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Patient&apos;s Last Name: </label>
                    <TextField
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                          ? formik.errors.lastName
                          : null
                      }
                      error={
                        formik.touched.lastName && formik.errors.lastName
                          ? true
                          : false
                      }
                    />{" "}
                  </div>
                  <div>
                    <label htmlFor="dob">Patient&apos;s Date of birth: </label>
                    <TextField
                      id="dob"
                      name="dob"
                      type="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.dob}
                      size="small"
                      variant="standard"
                      error={
                        formik.touched.dob && formik.errors.dob ? true : false
                      }
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.dob && formik.errors.dob
                          ? formik.errors.dob
                          : null
                      }
                    />{" "}
                  </div>{" "}
                  <div>
                    <label htmlFor="social">Patient&apos;s SS#: </label>
                    <TextField
                      id="social"
                      name="social"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.social}
                      size="small"
                      variant="standard"
                      error={
                        formik.touched.social && formik.errors.social
                          ? true
                          : false
                      }
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.social && formik.errors.social
                          ? formik.errors.social
                          : null
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="pcp">Family Physician (PCP): </label>
                    <TextField
                      id="pcp"
                      name="pcp"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.pcp}
                      size="small"
                      variant="standard"
                      placeholder="Input N/A if no PCP"
                      FormHelperTextProps={{
                        className:
                          formik.touched.pcp && formik.errors.pcp
                            ? "text-red-500"
                            : "text-black",
                      }}
                      helperText={
                        formik.touched.pcp && formik.errors.pcp
                          ? formik.errors.pcp
                          : null
                      }
                      error={
                        formik.touched.pcp && formik.errors.pcp ? true : false
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Street Address: </label>
                    <TextField
                      id="address"
                      name="address"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.address && formik.errors.address
                          ? formik.errors.address
                          : null
                      }
                      error={
                        formik.touched.address && formik.errors.address
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="city">City: </label>
                    <TextField
                      id="city"
                      name="city"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.city && formik.errors.city
                          ? formik.errors.city
                          : null
                      }
                      error={
                        formik.touched.city && formik.errors.city ? true : false
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="state">State: </label>
                    <TextField
                      id="state"
                      name="state"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.state}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.state && formik.errors.state
                          ? formik.errors.state
                          : null
                      }
                      error={
                        formik.touched.state && formik.errors.state
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="zip">Zip: </label>
                    <TextField
                      id="zip"
                      name="zip"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.zip}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.zip && formik.errors.zip
                          ? formik.errors.zip
                          : null
                      }
                      error={
                        formik.touched.zip && formik.errors.zip ? true : false
                      }
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl underline underline-offset-8 py-4 text-center">
                    Contact information
                  </h2>
                  <div>
                    <label htmlFor="phone">Phone: </label>
                    <TextField
                      id="phone"
                      name="phone"
                      type="tel"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.phone && formik.errors.phone
                          ? formik.errors.phone
                          : null
                      }
                      error={
                        formik.touched.phone && formik.errors.phone
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email: </label>
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      size="small"
                      variant="standard"
                      FormHelperTextProps={{
                        className: "text-red-500",
                      }}
                      helperText={
                        formik.touched.email && formik.errors.email
                          ? formik.errors.email
                          : null
                      }
                      error={
                        formik.touched.email && formik.errors.email
                          ? true
                          : false
                      }
                    />
                  </div>
                  <div className="text-center md:text-start  mb-3 md:mb-0">
                    <label htmlFor="prefferedContact">
                      Preffered Contact Method:{" "}
                    </label>

                    <TextField
                      select
                      className="ml-2  mt-3 md:mt-0"
                      variant="standard"
                      id="prefferedContact"
                      name="prefferedContact"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.prefferedContact}
                      size="small"
                    >
                      <MenuItem value="phone">Phone</MenuItem>
                      <MenuItem value="text">Text</MenuItem>
                      <MenuItem value="email">Email</MenuItem>
                    </TextField>
                  </div>
                  <div className="py-3">
                    **If Your insurance is under someone else such as a spouse
                    or parent please provide the following: **
                  </div>
                  <section className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                      <label htmlFor="insuredName">Insured Name: </label>
                      <TextField
                        id="insuredName"
                        name="insuredName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.insuredName}
                        size="small"
                        variant="standard"
                      />
                    </div>
                    <div className="flex flex-col items-start md:flex-row md:items-center">
                      {" "}
                      <label htmlFor="insuredDOB">Insured DOB: </label>
                      <TextField
                        className="mt-2 md:ml-2"
                        id="insuredDOB"
                        name="insuredDOB"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.insuredDOB}
                        size="small"
                        variant="standard"
                      />
                    </div>
                    <div>
                      <label htmlFor="insuredSocial">Insured Social: </label>
                      <TextField
                        id="insuredSocial"
                        name="insuredSocial"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.insuredSocial}
                        size="small"
                        variant="standard"
                      />
                    </div>
                  </section>
                  <p className="italic py-4 px-4 text-sm md:text-base">
                    I have completed this form entirely and certify that I am
                    the patient or duly authorized agent of the patient to
                    furnish the information requested. I understand that even
                    though I may have insurance coverage, I am ultimately
                    responsible for the payment of services rendered.
                  </p>
                  <p>
                    Patient/Responsible Party Signature:{" "}
                    <TextField
                      inputProps={{ style: { fontFamily: "Great Vibes" } }}
                      type="text"
                      onBlur={formik.handleBlur}
                      size="small"
                      value={name}
                      variant="standard"
                      className="ml-10"
                    ></TextField>
                  </p>
                  <p className={formStyles.signature}>hello</p>
                </div>
              </section>
            </form>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default PatientRegistration;
