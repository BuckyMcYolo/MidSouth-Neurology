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
  Snackbar,
  Alert,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  Autocomplete,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import NavBar from "../components/NavBar";
import { SiDocusign } from "react-icons/si";
import { MdUploadFile, MdAddCircleOutline, MdDelete } from "react-icons/md";
import { DatePicker } from "@mui/x-date-pickers";
import { useQuery } from "react-query";
import { data } from "autoprefixer";

const PatientRegistration = () => {
  const [display, setDisplay] = React.useState(1);
  const [isValid, setIsValid] = React.useState(true);
  //first page
  const [date, setDate] = React.useState("");
  const [sign1, setSign1] = React.useState(false);
  const [is1Signed, setIs1Signed] = React.useState(false);
  const [date1Signed, setDate1Signed] = React.useState("");
  const [sign1Error, setSign1Error] = React.useState(false);
  //second page
  const [allergyArray, setAllergyArray] = React.useState([]);
  const [selectedAllergy, setSelectedAllergy] = React.useState("");
  const [selectedAllergyReaction, setSelectedAllergyReaction] =
    React.useState("");
  const [terms, setTerms] = React.useState("");
  const [medicationFullArray, setMedicationFullArray] = React.useState([]);
  const [selectedMed, setSelectedMed] = React.useState(null);
  const [selectedDosage, setSelectedDosage] = React.useState(null);
  const [selectedFrequency, setSelectedFrequency] = React.useState("Daily");
  const [selectedMedicalCondition, setSelectedMedicalCondition] =
    React.useState("");
  const [medicalHistoryArray, setMedicalHistoryArray] = React.useState([]);
  const [selectedSurgicalHistory, setSelectedSurgicalHistory] =
    React.useState("");
  const [selectedSurgicalHistoryDate, setSelectedSurgicalHistoryDate] =
    React.useState("");
  const [surgicalHistoryArray, setSurgicalHistoryArray] = React.useState([]);

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

  const getMeds = async () => {
    const res = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?ef=STRENGTHS_AND_FORMS&maxList&terms=${terms}}`
    );
    const data = await res.json();
    return data;
  };

  const getMedicationDosage = async (medication) => {
    const res = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?ef=STRENGTHS_AND_FORMS&maxList&terms=${medication}}`
    );
    const data = await res.json();

    return data[2].STRENGTHS_AND_FORMS[0];
  };

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
      prefferedContact: "",
      dob: "",
      insuredName: "",
      insuredSocial: "",
      insuredDOB: null,
    },
    // validationSchema: yup.object({
    //   firstName: yup.string().required("Required"),
    //   lastName: yup.string().required("Required"),
    //   address: yup.string().required("Required"),
    //   city: yup.string().required("Required"),
    //   state: yup.string().required("Required"),
    //   zip: yup.string().required("Required"),
    //   social: yup.string().required("Required"),
    //   pcp: yup.string().required("Required"),
    //   phone: yup.string().required("Required"),
    //   email: yup.string().required("Required").email("Invalid email address"),
    //   prefferedContact: yup.string().required("Required"),
    //   dob: yup.string().required("Required").nullable(),
    // }),
    onSubmit: () => {
      // if (!is1Signed) {
      //   setSign1Error(true);
      // } else {
      nextPage();
      // }
    },
  });

  const form1submitHandler = (e) => {
    e.preventDefault();
    if (!formik.isValid) {
      setIsValid(false);
    }
    formik.handleSubmit();
  };

  const formikHistory = useFormik({
    initialValues: {
      reasonForVisit: "",
      refferringMD: "",
      pharmacy: "",
      heightFt: "",
      heightIn: "",
      weight: "",
      medications: [],
      medicalHistory: [],
      surgicalHistory: [],
      familyHistory: [],
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
      heightFt: yup.number().required("Required"),
      heightIn: yup.number().required("Required"),
      weight: yup.string().required("Required"),
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

  const handleInputChange = (event, newValue) => {
    setTerms(newValue);
  };
  const handleValueChange = (event, newValue) => {
    setSelectedMed(newValue);
  };

  console.log(selectedMed);

  const {
    data: fetchedMeds,
    isLoading,
    isError,
    error,
  } = useQuery(["medications", terms], getMeds, {
    refetchOnWindowFocus: true,
  });

  return (
    <div className="pb-12">
      <NavBar />
      <Container>
        <Paper>
          <Container className="flex flex-col items-center mt-8 text-lg md:text-xl">
            <div className="text-center border mt-3 pb-3 px-2 rounded-lg border-black border-solid">
              <h1 className="text-2xl md:text-3xl underline underline-offset-8 py-4">
                Patient Registration Form
              </h1>
              <h2>
                This is a secure form. Your information will not be shared with
                anyone.
              </h2>
              <p className="text-sm">
                To read more about how we secure your information please read
                our security policy
                <Link href="security">
                  <span className="text-blue-500 hover:cursor-pointer ml-1 hover:underline">
                    here
                  </span>
                </Link>
              </p>
            </div>
            <form className="pt-8 flex flex-col items-center">
              <header className="flex flex-col items-center pb-6">
                <h1 className="text-2xl md:text-2xl">Mid-South Neurology</h1>
                <div className="text-lg md:text-xl">Dr. William Owens</div>
                <div className="text-base md:text-lg">Date: {date}</div>
              </header>{" "}
              {display === 1 && (
                <section className="pb-10">
                  <h2 className="text-xl md:text-2xl underline underline-offset-8 pb- text-center pb-4">
                    Patient Demographics
                  </h2>
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel
                        // focused={formik.status.firstName}
                        htmlFor="firstName"
                      >
                        Patient&apos;s First Name:{" "}
                      </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="lastName">
                        Patient&apos;s Last Name:{" "}
                      </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="dob">
                        Patient&apos;s Date of birth:{" "}
                      </InputLabel>
                      <DatePicker
                        className="mt-2 sm:mt-0 ml-0 sm:ml-2"
                        id="dob"
                        name="dob"
                        onChange={(event) => {
                          formik.setFieldValue("dob", event);
                        }}
                        value={formik.values.dob}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="standard"
                            size="small"
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched.dob && formik.errors.dob
                                ? true
                                : false
                            }
                            FormHelperTextProps={{
                              className: "text-red-500",
                            }}
                            helperText={
                              formik.touched.dob && formik.errors.dob
                                ? formik.errors.dob
                                : null
                            }
                          />
                        )}
                      />{" "}
                    </div>{" "}
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="social">
                        Patient&apos;s SS#:{" "}
                      </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="pcp">
                        Family Physician (PCP):{" "}
                      </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="address">
                        Street Address:{" "}
                      </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="city">City: </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="state">State: </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="zip">Zip: </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="phone">Mobile Phone: </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="email">Email: </InputLabel>
                      <TextField
                        className="sm:ml-2"
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
                    <div className=" flex flex-col items-start sm:flex-row sm:items-center ">
                      <InputLabel htmlFor="prefferedContact">
                        Preffered Contact Method:{" "}
                      </InputLabel>

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
                        FormHelperTextProps={{
                          className: "text-red-500",
                        }}
                        helperText={
                          formik.touched.prefferedContact &&
                          formik.errors.prefferedContact
                            ? formik.errors.prefferedContact
                            : null
                        }
                        error={
                          formik.touched.prefferedContact &&
                          formik.errors.prefferedContact
                            ? true
                            : false
                        }
                      >
                        <MenuItem value="phone">Phone</MenuItem>
                        <MenuItem value="text">Text</MenuItem>
                        <MenuItem value="email">Email</MenuItem>
                      </TextField>
                    </div>
                    <div className="py-5 text-base text-center">
                      **If Your insurance is under someone else such as a spouse
                      or parent please provide the following: **
                    </div>
                    <section className="grid grid-cols-1 md:grid-cols-3">
                      <div className="flex flex-col items-start sm:flex-row sm:items-center">
                        <InputLabel htmlFor="insuredName">
                          Insured Name:{" "}
                        </InputLabel>
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
                      <div className="flex flex-col items-start sm:flex-row sm:items-center">
                        {" "}
                        <InputLabel htmlFor="insuredDOB">
                          Insured DOB:{" "}
                        </InputLabel>
                        <DatePicker
                          className="mt-2 md:ml-2"
                          id="insuredDOB"
                          name="insuredDOB"
                          value={formik.values.insuredDOB}
                          onChange={(event) => {
                            formik.setFieldValue("insuredDOB", event);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="standard"
                              size="small"
                              onBlur={formik.handleBlur}
                            />
                          )}
                        />
                      </div>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center">
                        <InputLabel htmlFor="insuredSocial">
                          Insured Social:{" "}
                        </InputLabel>
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
                      onClick={form1submitHandler}
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
                <section>
                  <h2 className="text-2xl font-bold text-center">
                    Patient History
                  </h2>
                  <article className="grid grid-cols-1 sm:grid-cols-2 py-5">
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel>Reason for visit</InputLabel>
                      <TextField
                        id="reasonForVisit"
                        name="reasonForVisit"
                        type="text"
                        onChange={formikHistory.handleChange}
                        onBlur={formikHistory.handleBlur}
                        value={formikHistory.values.reasonForVisit}
                        size="small"
                        variant="standard"
                        FormHelperTextProps={{
                          className: "text-red-500",
                        }}
                        helperText={
                          formikHistory.touched.reasonForVisit &&
                          formikHistory.errors.reasonForVisit
                            ? formikHistory.errors.reasonForVisit
                            : null
                        }
                        error={
                          formikHistory.touched.reasonForVisit &&
                          formikHistory.errors.reasonForVisit
                            ? true
                            : false
                        }
                      />
                    </div>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="refferringMD">
                        Refferring Physician
                      </InputLabel>
                      <TextField
                        id="refferringMD"
                        name="refferringMD"
                        type="text"
                        onChange={formikHistory.handleChange}
                        onBlur={formikHistory.handleBlur}
                        value={formikHistory.values.refferringMD}
                        size="small"
                        variant="standard"
                        FormHelperTextProps={{
                          className: "text-red-500",
                        }}
                        helperText={
                          formikHistory.touched.refferringMD &&
                          formikHistory.errors.refferringMD
                            ? formikHistory.errors.refferringMD
                            : null
                        }
                        error={
                          formikHistory.touched.refferringMD &&
                          formikHistory.errors.refferringMD
                            ? true
                            : false
                        }
                      />
                    </div>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="pharmacy">
                        Current Pharmacy
                      </InputLabel>
                      <TextField
                        id="pharmacy"
                        name="pharmacy"
                        type="text"
                        onChange={formikHistory.handleChange}
                        onBlur={formikHistory.handleBlur}
                        value={formikHistory.values.pharmacy}
                        size="small"
                        variant="standard"
                        FormHelperTextProps={{
                          className: "text-red-500",
                        }}
                        helperText={
                          formikHistory.touched.pharmacy &&
                          formikHistory.errors.pharmacy
                            ? formikHistory.errors.pharmacy
                            : null
                        }
                        error={
                          formikHistory.touched.pharmacy &&
                          formikHistory.errors.pharmacy
                            ? true
                            : false
                        }
                      />
                    </div>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                        <InputLabel htmlFor="heightFt">
                          Height (feet)
                        </InputLabel>
                        <TextField
                          className="w-12 ml-2"
                          id="heightFt"
                          name="heightFt"
                          type="number"
                          onChange={formikHistory.handleChange}
                          onBlur={formikHistory.handleBlur}
                          value={formikHistory.values.heightFt}
                          size="small"
                          variant="standard"
                          FormHelperTextProps={{
                            className: "text-red-500",
                          }}
                          helperText={
                            formikHistory.touched.heightFt &&
                            formikHistory.errors.heightFt
                              ? formikHistory.errors.heightFt
                              : null
                          }
                          error={
                            formikHistory.touched.heightFt &&
                            formikHistory.errors.heightFt
                              ? true
                              : false
                          }
                        />
                      </div>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                        <InputLabel htmlFor="heightIn">
                          Height (inches)
                        </InputLabel>
                        <TextField
                          className="w-12 ml-2"
                          id="heightIn"
                          name="heightIn"
                          type="number"
                          onChange={formikHistory.handleChange}
                          onBlur={formikHistory.handleBlur}
                          value={formikHistory.values.heightIn}
                          size="small"
                          variant="standard"
                          FormHelperTextProps={{
                            className: "text-red-500",
                          }}
                          helperText={
                            formikHistory.touched.heightIn &&
                            formikHistory.errors.heightIn
                              ? formikHistory.errors.heightIn
                              : null
                          }
                          error={
                            formikHistory.touched.heightIn &&
                            formikHistory.errors.heightIn
                              ? true
                              : false
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:flex-row sm:items-center my-2">
                      <InputLabel htmlFor="weight">Weight (lbs)</InputLabel>
                      <TextField
                        id="weight"
                        name="weight"
                        type="number"
                        onChange={formikHistory.handleChange}
                        onBlur={formikHistory.handleBlur}
                        value={formikHistory.values.weight}
                        size="small"
                        variant="standard"
                        FormHelperTextProps={{
                          className: "text-red-500",
                        }}
                        helperText={
                          formikHistory.touched.weight &&
                          formikHistory.errors.weight
                            ? formikHistory.errors.weight
                            : null
                        }
                        error={
                          formikHistory.touched.weight &&
                          formikHistory.errors.weight
                            ? true
                            : false
                        }
                      />
                    </div>{" "}
                  </article>

                  <div className="pb-10">
                    <InputLabel
                      className="text-center text-xl pb-3 underline underline-offset-8"
                      htmlFor="allergies"
                    >
                      Allergies
                    </InputLabel>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <TextField
                        label="Allergy"
                        className="my-3 md:mr-2"
                        id={"allergies"}
                        name={"allergies"}
                        type="text"
                        size="small"
                        value={selectedAllergy}
                        onChange={(e) => setSelectedAllergy(e.target.value)}
                      />
                      <TextField
                        label="Reaction"
                        className="w-36 mb-3 md:my-0 md:mr-2"
                        id="allergyReaction"
                        name="allergyReaction"
                        size="small"
                        select
                        value={selectedAllergyReaction}
                        onChange={(e) =>
                          setSelectedAllergyReaction(e.target.value)
                        }
                      >
                        <MenuItem value="Itching">Itching</MenuItem>
                        <MenuItem value="Hives">Hives</MenuItem>
                        <MenuItem value="Rash">Rash</MenuItem>{" "}
                        <MenuItem value="Sneezing">Sneezing</MenuItem>
                        <MenuItem value="Swelling">Swelling</MenuItem>
                        <MenuItem value="Wheezing">Wheezing</MenuItem>
                        <MenuItem value="Anaphylaxis">Anaphylaxis</MenuItem>
                      </TextField>
                      <Button
                        disabled={
                          selectedAllergy === "" ||
                          selectedAllergy.length < 2 ||
                          selectedAllergyReaction === ""
                        }
                        variant="outlined"
                        className=""
                        endIcon={<MdAddCircleOutline />}
                        onClick={() => {
                          setAllergyArray([
                            ...allergyArray,
                            {
                              name: selectedAllergy,
                              reaction: selectedAllergyReaction,
                            },
                          ]);
                        }}
                      >
                        Add
                      </Button>
                    </div>
                    <TableContainer
                      component={Paper}
                      className="mt-3 maxsm:max-w-[300px] md:max-w-2xl"
                      style={{ maxHeight: 300 }}
                    >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Allergy
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Reaction
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {allergyArray.map((allergy, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {allergy.name}
                              </TableCell>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {allergy.reaction}
                              </TableCell>

                              <TableCell className="p-2">
                                <IconButton
                                  onClick={() => {
                                    setAllergyArray(
                                      allergyArray.filter(
                                        (allergy) =>
                                          allergy !== allergyArray[index]
                                      )
                                    );
                                  }}
                                >
                                  {" "}
                                  <MdDelete
                                    className="text-red-500"
                                    size={25}
                                  />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="pb-12">
                    <InputLabel
                      className="text-center text-xl pb-3 underline underline-offset-8"
                      htmlFor="allergies"
                    >
                      Current Medications
                    </InputLabel>
                    <div className="flex flex-col md:flex-row md:justify-between items-center">
                      <Autocomplete
                        loading={isLoading || !fetchedMeds[1] ? true : false}
                        name="patientMeds"
                        id="patientMeds"
                        value={selectedMed}
                        inputValue={terms}
                        onInputChange={handleInputChange}
                        onChange={handleValueChange}
                        options={fetchedMeds ? fetchedMeds[1] : []}
                        className="w-60 md:w-60 mr-2 my-3 "
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Start typing to search"
                            size="small"
                          />
                        )}
                      />
                      <TextField
                        disabled={selectedMed ? false : true}
                        className="w-60 md:w-40 mr-2 my-3 md:my-0"
                        select
                        size="small"
                        label="Dosage"
                        id="selectedDosage"
                        name="selectedDosage"
                        value={selectedDosage}
                        onChange={(e) => {
                          setSelectedDosage(e.target.value);
                        }}
                      >
                        {fetchedMeds ? (
                          fetchedMeds[2].STRENGTHS_AND_FORMS[0].map(
                            (dosage) => (
                              <MenuItem value={dosage}>{dosage}</MenuItem>
                            )
                          )
                        ) : (
                          <MenuItem value="No Dosage Available">
                            No Dosage Available
                          </MenuItem>
                        )}
                      </TextField>
                      <TextField
                        disabled={selectedMed ? false : true}
                        className="w-60 md:w-40 mr-2 my-3 md:my-0"
                        label="Frequency"
                        select
                        size="small"
                        id="selectedFrequency"
                        name="selectedFrequency"
                        value={selectedFrequency}
                        onChange={(e) => {
                          setSelectedFrequency(e.target.value);
                        }}
                      >
                        <MenuItem value="Daily">Daily</MenuItem>
                        <MenuItem value="BID">Twice per day (BID)</MenuItem>
                        <MenuItem value="TID">
                          Three times per day (TID)
                        </MenuItem>
                        <MenuItem value="QID">
                          Four times per day (QID)
                        </MenuItem>
                        <MenuItem value="QOD">Every other day (QOD)</MenuItem>
                        <MenuItem value="PRN">As needed (prn)</MenuItem>
                      </TextField>
                      <div className="ml-2">
                        <Button
                          onClick={() => {
                            let temp = [...medicationFullArray];
                            temp.push({
                              name: selectedMed,
                              dosage: selectedDosage,
                              frequency: selectedFrequency,
                            });
                            setMedicationFullArray(temp);
                            setSelectedMed(null);
                            setSelectedFrequency(null);
                            setSelectedDosage("No Dosage Available");
                            setTerms("");
                          }}
                          disabled={
                            selectedMed == null || selectedFrequency == null
                              ? true
                              : false
                          }
                          variant="outlined"
                          endIcon={<MdAddCircleOutline />}
                          className=""
                        >
                          add
                        </Button>{" "}
                      </div>
                    </div>{" "}
                    <TableContainer
                      component={Paper}
                      className="mt-3 maxsm:max-w-[300px] md:max-w-2xl"
                      style={{ maxHeight: 300 }}
                    >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Medication
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Dosage
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Frequency
                            </TableCell>
                            <TableCell className="maxsm:hidden text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {medicationFullArray.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {med.name}
                              </TableCell>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {med.dosage}
                              </TableCell>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {med.frequency}
                                <IconButton
                                  className="sm:hidden"
                                  onClick={() => {
                                    let temp = [...medicationFullArray];
                                    temp.splice(index, 1);
                                    setMedicationFullArray(temp);
                                  }}
                                >
                                  {" "}
                                  <MdDelete
                                    className="text-red-500"
                                    size={25}
                                  />
                                </IconButton>
                              </TableCell>
                              <TableCell className="maxsm:hidden p-0">
                                <IconButton
                                  onClick={() => {
                                    let temp = [...medicationFullArray];
                                    temp.splice(index, 1);
                                    setMedicationFullArray(temp);
                                  }}
                                >
                                  {" "}
                                  <MdDelete
                                    className="text-red-500"
                                    size={25}
                                  />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

                  <div className="pb-12">
                    <InputLabel className="text-center text-xl pb-3 underline underline-offset-8">
                      Medical History
                    </InputLabel>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <TextField
                        label="Medical Condition"
                        className="my-3 md:mr-2"
                        id={"medicalHistory"}
                        name={"medicalHistory"}
                        type="text"
                        size="small"
                        value={selectedMedicalCondition}
                        onChange={(e) =>
                          setSelectedMedicalCondition(e.target.value)
                        }
                      />

                      <Button
                        disabled={
                          selectedMedicalCondition == "" ||
                          selectedMedicalCondition.length < 2
                        }
                        variant="outlined"
                        endIcon={<MdAddCircleOutline />}
                        onClick={() => {
                          let temp = [...medicalHistoryArray];
                          temp.push({
                            name: selectedMedicalCondition,
                          });
                          setMedicalHistoryArray(temp);
                          setSelectedMedicalCondition("");
                        }}
                      >
                        Add
                      </Button>
                    </div>
                    <TableContainer
                      component={Paper}
                      className="mt-3 maxsm:max-w-[300px] md:max-w-2xl"
                      style={{ maxHeight: 300 }}
                    >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Medical Condition
                            </TableCell>

                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {medicalHistoryArray.map((history, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {history.name}
                              </TableCell>

                              <TableCell className="p-2">
                                <IconButton
                                  onClick={() => {
                                    let temp = [...medicalHistoryArray];
                                    temp.splice(index, 1);
                                    setMedicalHistoryArray(temp);
                                  }}
                                >
                                  {" "}
                                  <MdDelete
                                    className="text-red-500"
                                    size={25}
                                  />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>

                  <div className="pb-12">
                    <InputLabel className="text-center text-xl pb-5 underline underline-offset-8">
                      Surgical History
                    </InputLabel>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                      <TextField
                        label="Surgery / Procedure"
                        className="mt-3 sm:mt-0 ml-0 sm:ml-2 sm:mr-2 mb-3"
                        id={"surgicalHistory"}
                        name={"surgicalHistory"}
                        type="text"
                        size="small"
                        value={selectedSurgicalHistory}
                        onChange={(e) =>
                          setSelectedSurgicalHistory(e.target.value)
                        }
                      />
                      <DatePicker
                        className=" sm:mt-0 ml-0 sm:ml-2 sm:mr-2 mb-3"
                        id="dob"
                        name="dob"
                        label="Date of Surgery"
                        value={selectedSurgicalHistoryDate}
                        onChange={(date) =>
                          setSelectedSurgicalHistoryDate(date)
                        }
                        renderInput={(params) => (
                          <TextField {...params} size="small" />
                        )}
                      />{" "}
                      <Button
                        className=" sm:mt-0 ml-0 sm:ml-2 sm:mr-2 mb-3"
                        disabled={
                          selectedSurgicalHistory == "" ||
                          selectedSurgicalHistory.length < 2 ||
                          selectedSurgicalHistoryDate == null
                        }
                        variant="outlined"
                        endIcon={<MdAddCircleOutline />}
                        onClick={() => {
                          let temp = [...surgicalHistoryArray];
                          temp.push({
                            name: selectedSurgicalHistory,
                            date: selectedSurgicalHistoryDate,
                          });
                          setSurgicalHistoryArray(temp);
                          setSelectedSurgicalHistory("");
                          setSelectedSurgicalHistoryDate(null);
                        }}
                      >
                        Add
                      </Button>
                    </div>
                    {console.log(surgicalHistoryArray)}
                    <TableContainer
                      component={Paper}
                      className="mt-3 maxsm:max-w-[300px] md:max-w-2xl"
                      style={{ maxHeight: 300 }}
                    >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Surgery / Procedure
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Date
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {surgicalHistoryArray.map((surgery, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {surgery.name}
                              </TableCell>
                              <TableCell className="text-xs md:text-base p-2 sm:p-4">
                                {new Date(surgery.date).toDateString()}
                              </TableCell>
                              <TableCell className="p-2">
                                <IconButton
                                  onClick={() => {
                                    let temp = [...surgicalHistoryArray];
                                    temp.splice(index, 1);
                                    setSurgicalHistoryArray(temp);
                                  }}
                                >
                                  {" "}
                                  <MdDelete
                                    className="text-red-500"
                                    size={25}
                                  />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <div className="pb-12">
                    <InputLabel className="text-center text-xl pb-5 underline underline-offset-8">
                      Family History
                    </InputLabel>
                  </div>
                  <div className="pb-12">
                    {" "}
                    <FormControl>
                      <FormLabel htmlFor="useTobaccoBool">
                        Do you use tobacco products?
                      </FormLabel>
                      <RadioGroup
                        id="useTobaccoBool"
                        aria-label="tobacco"
                        name="useTobaccoBool"
                        value={formikHistory.values.useTobaccoBool}
                        onChange={formikHistory.handleChange}
                      >
                        <FormControlLabel
                          value={true}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={false}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
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
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={2000}
          open={isValid === false}
          onClose={() => setIsValid(true)}
        >
          <Alert severity="error">Please fill out the required fields</Alert>
        </Snackbar>
        {/* {selectedMed && (
          <div>
            {" "}
            {isLoading ? (
              <Dialog open={selectedMed !== null}>
                <DialogTitle className="text-center">
                  Select a dosage
                </DialogTitle>
                <DialogContent>
                  <CircularProgress />
                </DialogContent>
              </Dialog>
            ) : (
              <Dialog
                open={selectedMed !== null}
                maxWidth="md"
                fullWidth={true}
              >
                <DialogTitle className="text-center">
                  Select a dosage for {selectedMed}
                </DialogTitle>
                <DialogContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {data.map((med) => {
                      return (
                        <Card key={med} className="w-24 p-0">
                          <CardActionArea>
                            <CardContent
                              className="bg-blue-500 text-white text-center
                            "
                              onClick={() => {
                                setMedicationDosageArray([
                                  ...medicationDosageArray,
                                  med,
                                ]);
                              }}
                            >
                              {med}
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      );
                    })}
                  </div>
                </DialogContent>
                <DialogActions className="flex justify-center">
                  <Button
                    onClick={() => setSelectedMed(null)}
                    className="bg-blue-500"
                    size="small"
                    variant="contained"
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </div>
        )} */}

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
