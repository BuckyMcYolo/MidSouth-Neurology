import React, { useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Paper,
  TextField,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  IconButton,
  FormLabel,
  InputLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import NavBar from "../components/NavBar";
import { SiDocusign } from "react-icons/si";
import { MdUploadFile } from "react-icons/md";

const PatientRegistration = () => {
  const [display, setDisplay] = React.useState(1);
  //first page
  const [date, setDate] = React.useState("");
  const [sign1, setSign1] = React.useState(false);
  const [is1Signed, setIs1Signed] = React.useState(false);
  const [date1Signed, setDate1Signed] = React.useState("");
  const [sign1Error, setSign1Error] = React.useState(false);
  //third page
  const [sign3, setSign3] = React.useState(false);
  const [is3Signed, setIs3Signed] = React.useState(false);
  const [date3Signed, setDate3Signed] = React.useState("");
  const [sign3Error, setSign3Error] = React.useState(false);
  //fourth page
  const [sign4, setSign4] = React.useState(false);
  const [is4Signed, setIs4Signed] = React.useState(false);
  const [date4Signed, setDate4Signed] = React.useState("");
  const [sign4Error, setSign4Error] = React.useState(false);
  //fifth page
  const [sign5, setSign5] = React.useState(false);
  const [is5Signed, setIs5Signed] = React.useState(false);
  const [date5Signed, setDate5Signed] = React.useState("");
  const [sign5Error, setSign5Error] = React.useState(false);

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
    onSubmit: () => {
      if (!is1Signed) {
        setSign1Error(true);
      } else {
        nextPage();
      }
    },
  });

  const formikHistory = useFormik({
    initialValues: {
      reasonForVisit: "",
      refferringMD: "",
      pharmacy: "",
      height: "",
      weight: "",
      allergies: "",
      medications: "",
      medicalHistory: "",
      surgicalHistory: "",
      familyHistory: "",
      useTobaccoBool: false,
      useCiggarrettes: false,
      useCigars: false,
      useChewingTobacco: false,
      useVapes: false,
      useOther: false,
      useAlcoholBool: false,
      useBeer: false,
      useWine: false,
      useLiquor: false,
      useIllicitDrugsPresent: false,
      useIllicitDrugsPast: false,
      pastImaging: "",
      pastImagingLocation: "",
    },
    validationSchema: yup.object({
      reasonForVisit: yup.string().required("Required"),
      refferringMD: yup.string().required("Required"),
      pharmacy: yup.string().required("Required"),
      height: yup.string().required("Required"),
      weight: yup.string().required("Required"),
      allergies: yup.string().required("Required"),
      medications: yup.string().required("Required"),
      medicalHistory: yup.string().required("Required"),
      surgicalHistory: yup.string().required("Required"),
      familyHistory: yup.string().required("Required"),
      pastImaging: yup.string().required("Required"),
      pastImagingLocation: yup.string().required("Required"),
    }),
    onSubmit: () => {
      alert(JSON.stringify(formikHistory.values, null, 2));
    },
  });

  const name = "   " + formik.values.firstName + " " + formik.values.lastName;

  const today = new Date();

  useEffect(() => {
    const date = today.toLocaleDateString("en-US");
    setDate(date);
  }, []);

  const handlesign1 = () => {
    setSign1(false);
    setIs1Signed(true);
    const date = today.toLocaleString();
    setDate1Signed(date);
    setSign1Error(false);
  };
  const handlesign3 = () => {
    setSign3(false);
    setIs3Signed(true);
    const date = today.toLocaleString();
    setDate3Signed(date);
    setSign3Error(false);
  };

  const handlesign4 = () => {
    setSign4(false);
    setIs4Signed(true);
    const date = today.toLocaleString();
    setDate4Signed(date);
    setSign4Error(false);
  };

  const handlesign5 = () => {
    setSign5(false);
    setIs5Signed(true);
    const date = today.toLocaleString();
    setDate5Signed(date);
    setSign5Error(false);
  };

  const nextPage = () => {
    setDisplay((prevDisplay) => prevDisplay + 1);
  };

  const prevPage = () => {
    setDisplay((prevDisplay) => prevDisplay - 1);
  };

  const nextPage3 = () => {
    if (!is3Signed) {
      setSign3Error(true);
    } else {
      nextPage();
    }
  };

  const nextPage4 = () => {
    if (!is4Signed) {
      setSign4Error(true);
    } else {
      nextPage();
    }
  };

  const nextPage5 = () => {
    if (!is5Signed) {
      setSign5Error(true);
    } else {
      nextPage();
    }
  };

  return (
    <div className="pb-12">
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
              </header>{" "}
              {display === 1 && (
                <section className="pb-10">
                  <h2 className="text-xl md:text-2xl underline underline-offset-8 pb-4">
                    Patient Demographics
                  </h2>

                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div>
                      <FormLabel htmlFor="firstName">
                        Patient&apos;s First Name:{" "}
                      </FormLabel>
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
                      <InputLabel htmlFor="lastName">
                        Patient&apos;s Last Name:{" "}
                      </InputLabel>
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
                      <label htmlFor="dob">
                        Patient&apos;s Date of birth:{" "}
                      </label>
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
                          formik.touched.city && formik.errors.city
                            ? true
                            : false
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
                    <div className="text-center md:text-start flex flex-col items-center md:flex-row mb-3 md:mb-0">
                      <label htmlFor="prefferedContact">
                        Preffered Contact Method:{" "}
                      </label>

                      <TextField
                        select
                        className="ml-2 mt-3 md:mt-0 w-20"
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

                    <div className={"grid grid-cols-1 sm:flex sm:items-center"}>
                      Patient/Responsible Party Signature:{" "}
                      {is1Signed ? (
                        <TextField
                          inputProps={{
                            style: {
                              fontFamily: "Great Vibes",
                              fontSize: "20px",
                            },
                          }}
                          type="text"
                          onBlur={formik.handleBlur}
                          size="small"
                          value={name}
                          variant="standard"
                        ></TextField>
                      ) : (
                        <IconButton
                          className="ml-2 text-blue-600 "
                          onClick={() => setSign1(true)}
                          disabled={
                            formik.values.lastName.length < 2 ||
                            formik.values.firstName.length < 2
                          }
                        >
                          <SiDocusign size={25} />
                        </IconButton>
                      )}
                    </div>
                    <div>
                      Date signed:{" "}
                      {is1Signed ? <span>{date1Signed}</span> : null}
                    </div>
                  </div>
                  <div className="flex justify-center my-6">
                    <Button
                      variant="contained"
                      className="bg-blue-500"
                      onClick={formik.handleSubmit}
                    >
                      Next
                    </Button>
                  </div>
                  {sign1Error && (
                    <p className="text-red-500 text-center text-base">
                      You must sign the document before continuing
                    </p>
                  )}
                </section>
              )}
              {/* section 2 
              
              
                  section 2 */}
              {display === 2 && (
                <section className="flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center">
                      Patient History
                    </h2>
                  </div>
                  <div className="flex justify-between my-6">
                    <Button
                      variant="contained"
                      className="bg-[#de5e73] hover:bg-[#de5e73]"
                      onClick={prevPage}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="contained"
                      className="bg-blue-500"
                      onClick={nextPage}
                    >
                      Next
                    </Button>
                  </div>
                </section>
              )}
              {/* section 3 */}
              {display === 3 && (
                <section className="pb-12">
                  <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center pb-1">
                      HIPPA Notice of Privacy Practices
                    </h2>
                    <h3 className="pb-4">Summary of your privacy rights</h3>
                  </div>
                  <div>
                    <h3 className="pb-2">
                      The Midsouth Neurology Clinic may share your health
                      information to:
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>To other physicians for continued care</li>
                      <li>Insurance carriers</li>
                      <li>Health and safety reasons</li>
                      <li>Military purposes</li>
                      <li>Lawsuits or disability claims</li>
                      <li>Workers compensation</li>
                      <li>Law enforcement requests</li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <h3>You as a patient have a right to:</h3>
                    <ul className="list-disc list-inside py-1">
                      <li>Get a copy of your medical records</li>
                      <li>
                        Receive a copy of whom we shared your information with
                      </li>
                      <li>Ask for a copy of our privacy notice</li>
                      <li>
                        Complain in writing if you feel your privacy rights have
                        been violated
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4">
                    <p className="text-base italic pb-3">
                      Your signature below is an acknowledgement that you have
                      received this notice:
                    </p>
                  </div>
                  <div className={"grid grid-cols-1"}>
                    <div>
                      Patient/Responsible Party Signature:{" "}
                      {is3Signed ? (
                        <TextField
                          inputProps={{
                            style: {
                              fontFamily: "Great Vibes",
                              fontSize: "20px",
                            },
                          }}
                          type="text"
                          size="small"
                          value={name}
                          variant="standard"
                        ></TextField>
                      ) : (
                        <IconButton
                          className="ml-2 text-blue-600 "
                          onClick={() => setSign3(true)}
                        >
                          <SiDocusign size={25} />
                        </IconButton>
                      )}
                    </div>
                    <div className="pt-4">
                      {" "}
                      Date signed:{" "}
                      {is3Signed ? <span>{date3Signed}</span> : null}{" "}
                    </div>
                  </div>
                  <div className="flex justify-between my-6">
                    <Button
                      variant="contained"
                      className="bg-[#de5e73] hover:bg-[#de5e73]"
                      onClick={prevPage}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="contained"
                      className="bg-blue-500"
                      onClick={nextPage3}
                    >
                      Next
                    </Button>
                  </div>
                  {sign3Error && (
                    <p className="text-red-500 text-center text-base">
                      You must sign the document before continuing
                    </p>
                  )}
                </section>
              )}
              {/* section 4 */}
              {display === 4 && (
                <section className="mb-12">
                  <div className="flex flex-col md:items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="flex flex-col items-center">
                        <p>609 Brunson Drive</p>
                        <p>Tupelo, MS</p>
                        <p>Phone: 662-250-4486</p>
                        <p>Fax : 662-205-4588</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p>2425 Proper Street</p>
                        <p>Corinth, MS</p>
                        <p>Phone: 662-396-9447</p>
                        <p>Fax: 662-396-9449</p>
                      </div>
                    </div>

                    <div className="py-4 font-semibold text-center">
                      Release of authorization for medical records from other
                      medical facilities{" "}
                    </div>
                    <div className="text-sm italic text-center md:w-[33rem] pb-3">
                      The Patient hereby authorizes Midsouth Neurology Clinic
                      (“Medical Provider”) to release all medical records,
                      including but not limited to medical history, test
                      results, and any other information related to the
                      Patient&apos;s care, to any other medical provider or
                      (“Recipient”). The Patient understands and agrees that the
                      Medical Provider will release the Patient&apos;s records
                      to the Recipient electronically. The Patient further
                      understands that the Medical Provider is not responsible
                      for any security breaches of the Patient&apos;s records
                      while they are in the possession of the Recipient. The
                      Patient hereby agrees to electronically sign this
                      Authorization, which will be considered valid and binding.
                      By signing below, the Patient hereby confirms that he/she
                      understands and agrees to the terms of this Authorization.
                    </div>
                    <div className="grid grid-cols-1 pt-4">
                      <div>
                        Patient/Responsible Party Signature:{" "}
                        {is4Signed ? (
                          <TextField
                            inputProps={{
                              style: {
                                fontFamily: "Great Vibes",
                                fontSize: "20px",
                              },
                            }}
                            type="text"
                            size="small"
                            value={name}
                            variant="standard"
                          ></TextField>
                        ) : (
                          <IconButton
                            className="ml-2 text-blue-600 "
                            onClick={() => setSign4(true)}
                          >
                            <SiDocusign size={25} />
                          </IconButton>
                        )}
                      </div>
                      <div className="pt-4">
                        Date signed:
                        {is4Signed ? <span>{date4Signed}</span> : null}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-10">
                    <Button
                      variant="contained"
                      className="bg-[#de5e73] hover:bg-[#de5e73]"
                      onClick={prevPage}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="contained"
                      className="bg-blue-500"
                      onClick={nextPage4}
                    >
                      Next
                    </Button>
                  </div>
                  {sign4Error && (
                    <p className="text-red-500 text-center text-base">
                      You must sign the document before continuing
                    </p>
                  )}
                </section>
              )}
              {/* section 5 */}
              {display === 5 && (
                <section className="pb-12">
                  <div className="my-4">
                    <span className="text-center text-base md:text-lg font-semibold">
                      CONSENT FOR TREATMENT:
                    </span>
                    <p className="text-sm md:text-base">
                      The undersigned consents to air medical transportation and
                      the performance of medical services, administration of
                      medications and blood or blood products, and other medical
                      procedures ("Services") by the company listed above
                      ("Provider"), as deemed appropriate by Provider's medical
                      crew or medical control personnel. I understand that
                      medical care is not an exact science and no guarantees
                      have been made regarding the outcome of treatment.
                    </p>
                  </div>
                  <div className="mb-4">
                    <span className="text-center text-base md:text-lg font-semibold">
                      RELEASE OF INFORMATION:
                    </span>
                    <p className="text-sm md:text-base">
                      I authorize Provider and any other holder of information
                      about me to disclose all or any part of my medical record
                      or other information needed to determine my eligibility
                      for benefits or the amount of benefits payable for
                      Services rendered by Provider, now or in the future, to
                      any financially responsible party, including but not
                      limited to, the Centers for Medicare and Medicaid (CMS),
                      Medicaid, their intermediaries or carriers, Worker's
                      Compensation carriers, health or liability insurers, or
                      any other insurance organization or billing agent
                      (collectively, "Insurer"). I authorize any holder of
                      medical and billing information about me to release to
                      Provider or any Insurer any information necessary for
                      billing and payment purposes. I consent to the use of a
                      copy of this authorization in lieu of the original.
                    </p>
                  </div>
                  <div className="mb-4">
                    <span className="text-center text-base md:text-lg font-semibold">
                      ASSIGNMENT OF BENEFITS:
                    </span>
                    <p className="text-sm md:text-base">
                      I request and authorize direct payment to Provider of any
                      Medicare and other Insurance benefits payable to me or on
                      my behalf for Services rendered by Provider, now or in the
                      future. At Provider's election, I also assign to Provider
                      all of my rights and interest in all such insurance
                      benefits or proceeds, including but not limited to the
                      right to appeal any denial of benefits or to file any
                      lawfully authorized lien necessary to agree to immediately
                      remit all payments received from insurance for those
                      services. I agree to cooperate with Provider or its agent
                      in collecting any such responsibility for any changes not
                      paid by an Insurer.
                    </p>
                  </div>
                  <div className="mb-4">
                    <span className="text-center text-base md:text-lg font-semibold">
                      FINANCIAL RESPONSIBILTY:
                    </span>
                    <p className="text-sm md:text-base">
                      I acknowledge that many Insurers will only pay for
                      services that they determine to be medically necessary and
                      that meet other coverage requirements. For example, some
                      Insurers require prior authorization for certain services.
                      If my Insurer determines that the Services, or any part of
                      them, are not medically necessary or fail to meet other
                      coverage requirements, the Insurer may deny payment for
                      that Service. Notwithstanding any other provision herein,
                      I agree that if my Insurer denies all or part of
                      Provider's charges for any reason or if I have no
                      insurance, I will be personally and fully responsible for
                      payment of Provider's charges. Should my account be
                      referred to an attorney or collection agency, I agree to
                      pay actual attorney's fees and collection expenses. "Your
                      obligation to make payment on the invoice is governed by
                      Mississippi/Tennessee/Alabama law"
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs md:text-sm italic">
                      The undersigned certifies that he/she has read the
                      foregoing, and is the patient, the patient's legal
                      representative or is duly authorized by the patient as the
                      patient's agent to execute this Authorization and Consent
                      form and to accept its terms.
                    </p>
                  </div>
                  <div className="text-center">
                    <span className=" font-semibold">
                      Authorization to release medical information
                    </span>
                    <p className="pt-2 text-sm">
                      I hereby authorize Dr. William E. Owens and/or staff to
                      release labs or other diagnostic testing, medications or
                      other medical information to individuals as indicated
                      below:
                    </p>
                  </div>
                  <div className="pt-4 md:flex md:justify-center">
                    <ul
                      className="
                      list-decimal list-inside
                    text-sm pb-4
                    "
                    >
                      <li className="flex flex-col md:flex-row pb-4 ">
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm">
                            Name:
                          </FormLabel>{" "}
                          <TextField
                            variant="standard"
                            size="small"
                            className="ml-2"
                          />
                        </div>
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm md:ml-2">
                            Phone:
                          </FormLabel>
                          <TextField
                            variant="standard"
                            size="small"
                            className="ml-2"
                          />
                        </div>
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm md:ml-2">
                            Relationship:
                          </FormLabel>
                          <TextField
                            select
                            variant="standard"
                            size="small"
                            className="ml-2 w-32"
                          >
                            <MenuItem value="Spouse">Spouse</MenuItem>
                            <MenuItem value="Parent">Parent</MenuItem>
                            <MenuItem value="Child">Child</MenuItem>
                            <MenuItem value="Sibling">Sibling</MenuItem>
                            <MenuItem value="Grandparent">Grandparent</MenuItem>
                            <MenuItem value="Friend">Friend</MenuItem>
                            <MenuItem value="Caregiver">Caregiver</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </TextField>
                        </div>
                      </li>
                      <li className="flex flex-col md:flex-row pb-4 ">
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm">
                            Name:
                          </FormLabel>{" "}
                          <TextField
                            variant="standard"
                            size="small"
                            className="ml-2"
                          />
                        </div>
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm md:ml-2">
                            Phone:
                          </FormLabel>
                          <TextField
                            variant="standard"
                            size="small"
                            className="ml-2"
                          />
                        </div>
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm md:ml-2">
                            Relationship:
                          </FormLabel>
                          <TextField
                            select
                            variant="standard"
                            size="small"
                            className="ml-2 w-32"
                          >
                            <MenuItem value="Spouse">Spouse</MenuItem>
                            <MenuItem value="Parent">Parent</MenuItem>
                            <MenuItem value="Child">Child</MenuItem>
                            <MenuItem value="Sibling">Sibling</MenuItem>
                            <MenuItem value="Grandparent">Grandparent</MenuItem>
                            <MenuItem value="Friend">Friend</MenuItem>
                            <MenuItem value="Caregiver">Caregiver</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </TextField>
                        </div>
                      </li>
                      <li className="flex flex-col md:flex-row">
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm">
                            Name:
                          </FormLabel>{" "}
                          <TextField
                            variant="standard"
                            size="small"
                            className="ml-2"
                          />
                        </div>
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm md:ml-2">
                            Phone:
                          </FormLabel>
                          <TextField
                            variant="standard"
                            size="small"
                            className="ml-2"
                          />
                        </div>
                        <div className="flex flex-row items-center pb-2">
                          <FormLabel className="font-semibold text-sm md:ml-2">
                            Relationship:
                          </FormLabel>
                          <TextField
                            select
                            variant="standard"
                            size="small"
                            className="ml-2 w-32"
                          >
                            <MenuItem value="Spouse">Spouse</MenuItem>
                            <MenuItem value="Parent">Parent</MenuItem>
                            <MenuItem value="Child">Child</MenuItem>
                            <MenuItem value="Sibling">Sibling</MenuItem>
                            <MenuItem value="Grandparent">Grandparent</MenuItem>
                            <MenuItem value="Friend">Friend</MenuItem>
                            <MenuItem value="Caregiver">Caregiver</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </TextField>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="grid grid-cols-1 pt-4">
                    <div>
                      Patient/Responsible Party Signature:{" "}
                      {is5Signed ? (
                        <TextField
                          inputProps={{
                            style: {
                              fontFamily: "Great Vibes",
                              fontSize: "20px",
                            },
                          }}
                          type="text"
                          size="small"
                          value={name}
                          variant="standard"
                        ></TextField>
                      ) : (
                        <IconButton
                          className="ml-2 text-blue-600 "
                          onClick={() => setSign5(true)}
                        >
                          <SiDocusign size={25} />
                        </IconButton>
                      )}
                    </div>
                    <div className="pt-4">
                      Date signed:
                      {is5Signed ? <span>{date5Signed}</span> : null}
                    </div>
                  </div>
                  <div className="flex flex-row justify-between my-6 text-white">
                    <Button
                      variant="contained"
                      className="bg-[#de5e73] hover:bg-[#de5e73]"
                      onClick={prevPage}
                    >
                      Previous
                    </Button>
                    <Button
                      endIcon={<MdUploadFile />}
                      variant="contained"
                      className="bg-blue-500 "
                    >
                      Submit
                    </Button>
                  </div>
                  {sign5Error && (
                    <p className="text-red-500 text-center text-base">
                      You must sign the document before continuing
                    </p>
                  )}
                </section>
              )}
            </form>
          </Container>
        </Paper>
        <Dialog open={sign1}>
          <DialogTitle className="text-center">
            Electronically sign this document
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              By electronically signing this document, I affirm that I am the
              person, or legally responsible person, mentioned herein and agree
              to abide by the terms set forth. I understand that this electronic
              signature has the same legal effect as a handwritten signature. I
              further understand that any false statements made herein are
              subject to legal consequences.
            </DialogContentText>
          </DialogContent>
          <DialogActions className="flex justify-center">
            <Button
              className="bg-blue-500"
              size="small"
              onClick={handlesign1}
              variant="contained"
            >
              sign
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={sign3}>
          <DialogTitle className="text-center">
            Electronically sign this document
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              By electronically signing this document, I affirm that I am the
              person, or legally responsible person, mentioned herein and agree
              to abide by the terms set forth. I understand that this electronic
              signature has the same legal effect as a handwritten signature. I
              further understand that any false statements made herein are
              subject to legal consequences.
            </DialogContentText>
          </DialogContent>
          <DialogActions className="flex justify-center">
            <Button
              onClick={handlesign3}
              className="bg-blue-500"
              size="small"
              variant="contained"
            >
              sign
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={sign4}>
          <DialogTitle className="text-center">
            Electronically sign this document
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              By electronically signing this document, I affirm that I am the
              person, or legally responsible person, mentioned herein and agree
              to abide by the terms set forth. I understand that this electronic
              signature has the same legal effect as a handwritten signature. I
              further understand that any false statements made herein are
              subject to legal consequences.
            </DialogContentText>
          </DialogContent>
          <DialogActions className="flex justify-center">
            <Button
              onClick={handlesign4}
              className="bg-blue-500"
              size="small"
              variant="contained"
            >
              sign
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={sign5}>
          <DialogTitle className="text-center">
            Electronically sign this document
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              By electronically signing this document, I affirm that I am the
              person, or legally responsible person, mentioned herein and agree
              to abide by the terms set forth. I understand that this electronic
              signature has the same legal effect as a handwritten signature. I
              further understand that any false statements made herein are
              subject to legal consequences.
            </DialogContentText>
          </DialogContent>
          <DialogActions className="flex justify-center">
            <Button
              onClick={handlesign5}
              className="bg-blue-500"
              size="small"
              variant="contained"
            >
              sign
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default PatientRegistration;
