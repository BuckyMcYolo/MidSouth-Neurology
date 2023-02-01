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
  Select,
  Checkbox,
  createFilterOptions,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import NavBar from "../components/NavBar";
import { SiDocusign } from "react-icons/si";
import {
  MdUploadFile,
  MdAddCircleOutline,
  MdDelete,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { DatePicker } from "@mui/x-date-pickers";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { CgTrash } from "react-icons/cg";
import { BiErrorCircle } from "react-icons/bi";
import usePromptIfDirty from "../components/Prompt";
import { getCookie } from "cookies-next";
import {
  medicalHistoryOptions,
  surgicalHistoryOptions,
} from "../utils/arrayUtils";

export const getServerSideProps = async ({ req }) => {
  const token = getCookie("recaptcha", { req });
  if (!token) {
    return {
      redirect: {
        destination: "/imNotARobot",
        permanent: false,
      },
    };
  }
  return {
    props: {
      token,
    },
  };
};

const PatientRegistration = () => {
  const router = useRouter();

  const [display, setDisplay] = React.useState(1);
  const [isValid, setIsValid] = React.useState(true);
  //first page
  const [date, setDate] = React.useState("");
  const [sign1, setSign1] = React.useState(false);
  const [is1Signed, setIs1Signed] = React.useState(false);
  const [date1Signed, setDate1Signed] = React.useState("");
  const [sign1Error, setSign1Error] = React.useState(false);
  //second page
  const [isValid2, setIsValid2] = React.useState(true);
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
    React.useState(null);
  const [surgicalHistoryArray, setSurgicalHistoryArray] = React.useState([]);
  const [selectedFamilyMember, setSelectedFamilyMember] = React.useState(null);
  const [selectedFamilyMemberAge, setSelectedFamilyMemberAge] =
    React.useState("");
  const [selectedFamilyMemberAlive, setSelectedFamilyMemberAlive] =
    React.useState("");
  const [
    selectedFamilyMemberMedicalHistory,
    setSelectedFamilyMemberMedicalHistory,
  ] = React.useState([]);
  const [familyHistoryArray, setFamilyHistoryArray] = React.useState([]);

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
  const [success, setSuccess] = React.useState(false);

  const filter = createFilterOptions();

  const getMeds = async () => {
    const res = await fetch(
      `https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?ef=STRENGTHS_AND_FORMS&maxList&terms=${terms}}`
    );
    const data = await res.json();
    return data;
  };

  const sendEmail = async () => {
    const res = await fetch(
      "https://xmks-s250-ypw0.n7.xano.io/api:Zu4HHm2U/Patient_registration_form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `${formik.values.firstName} ${formik.values.lastName} New Patient Registration`,
          template: "registration_form",
          data: {
            name: formik.values.firstName + " " + formik.values.lastName,
            DOB: fixedDob,
            date: new Date().toLocaleString(),
            street_address: formik.values.address,
            city: formik.values.city,
            state: formik.values.state,
            zip: formik.values.zip,
            ss: formik.values.social,
            pcp: formik.values.pcp,
            email: formik.values.email,
            phone: formik.values.phone,
            communication: formik.values.prefferedContact,
            insuredName: formik.values.insuredName,
            InsuredSS: formik.values.insuredSocial,
            insuredDOB: fixedInsuredDob,
            visitReason: formikHistory.values.reasonForVisit,
            refferringPhys: formikHistory.values.refferringMD,
            currentPharmacy: formikHistory.values.pharmacy,
            height:
              formikHistory.values.heightFt +
              " ft " +
              formikHistory.values.heightIn +
              "in",
            weight: formikHistory.values.weight + " " + "lbs",
            allergies: allergyArray,
            medications: medicationFullArray,
            medicalHx: medicalHistoryArray,
            surgicalHx: surgicalHistoryArray,
            familyHx: familyHistoryArray,
            tabaccoBool: formikHistory.values.useTobaccoBool,
            cigs: formikHistory.values.useCiggarrettes,
            smokeless: formikHistory.values.useChewingTobacco,
            vapes: formikHistory.values.useVapes,
            alcoholBool: formikHistory.values.useAlcoholBool,
            beer: formikHistory.values.useBeer,
            wine: formikHistory.values.useWine,
            liquor: formikHistory.values.useLiquor,
            illicitDrugs: formikHistory.values.useIllicitDrugsPresent,
            pastIllicitDrugs: formikHistory.values.useIllicitDrugsPast,
            drugsUsed: formikHistory.values.useIllicitDrugs,
            imagingBool: formikHistory.values.pastImaging,
            testingLocation: formikHistory.values.pastImagingLocation,
            name1: formikLastPage.values.name1,
            phone1: formikLastPage.values.phone1,
            relationship1: formikLastPage.values.relationship1,
            name2: formikLastPage.values.name2,
            phone2: formikLastPage.values.phone2,
            relationship2: formikLastPage.values.relationship2,
            name3: formikLastPage.values.name3,
            phone3: formikLastPage.values.phone3,
            relationship3: formikLastPage.values.relationship3,
          },
        }),
      }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Something went wrong!");
    } else {
      setSuccess(true);
    }
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
      prefferedContact: yup.string().required("Required"),
      dob: yup.string().required("Required").nullable(),
    }),
    onSubmit: () => {
      if (!is1Signed) {
        setSign1Error(true);
      } else {
        nextPage();
      }
    },
  });

  const form1submitHandler = () => {
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
      useTobaccoBool: "No",
      useCiggarrettes: "0",
      useChewingTobacco: "0",
      useVapes: "0",
      useOther: "0",
      useAlcoholBool: "No",
      useBeer: "0",
      useWine: "0",
      useLiquor: "0",
      useIllicitDrugsPresent: "No",
      useIllicitDrugsPast: "No",
      useIllicitDrugs: "",
      pastImaging: "No",
      pastImagingLocation: "",
    },
    validationSchema: yup.object({
      reasonForVisit: yup.string().required("Required"),
      refferringMD: yup.string().required("Required"),
      pharmacy: yup.string().required("Required"),
      heightFt: yup.number().required("Required"),
      heightIn: yup.number().required("Required"),
      weight: yup.string().required("Required"),
    }),
    onSubmit: () => {
      nextPage();
    },
  });

  const form2submitHandler = () => {
    if (!formikHistory.isValid) {
      setIsValid2(false);
    }
    formikHistory.handleSubmit();
  };

  const formikLastPage = useFormik({
    initialValues: {
      name1: "",
      phone1: "",
      relationship1: "",
      name2: "",
      phone2: "",
      relationship2: "",
      name3: "",
      phone3: "",
      relationship3: "",
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
    window.scrollTo(0, 0);
  };

  const prevPage = () => {
    setDisplay((prevDisplay) => prevDisplay - 1);
    window.scrollTo(0, 0);
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

  const handleInputChange = (event, newValue) => {
    setTerms(newValue);
  };
  const handleValueChange = (event, newValue) => {
    setSelectedMed(newValue);
  };

  const { data: fetchedMeds, isLoading } = useQuery(
    ["medications", terms],
    getMeds,
    {
      refetchOnWindowFocus: true,
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!is5Signed) {
      setSign5Error(true);
    } else {
      sendEmail();
    }
  };

  const fixedDob = new Date(formik.values.dob).toLocaleDateString("en-US");
  const fixedInsuredDob = new Date(formik.values.insuredDOB).toLocaleDateString(
    "en-US"
  );
  const [Prompt] = usePromptIfDirty(display < 5);
  return (
    <div className="pb-12">
      <NavBar />
      <Prompt />
      <Container>
        <Paper>
          <Container className="flex flex-col items-center mt-8 text-lg md:text-xl">
            {display == 1 && (
              <div className="text-center mt-3 pb-3 px-2 rounded-lg ">
                <h1 className="text-2xl md:text-3xl underline underline-offset-8 py-4">
                  Patient Registration Form
                </h1>
                <h2>
                  This is a secure form. Your information will not be shared
                  with anyone.
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
            )}
            <form
              className="pt-8 flex flex-col items-center"
              onSubmit={handleSubmit}
            >
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="mt-2 sm:mt-0 ml-0 sm:ml-2 w-full sm:w-48"
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
                        Patient&apos;s SS# :{" "}
                      </InputLabel>
                      <TextField
                        className="sm:ml-2 w-full sm:w-48"
                        id="social"
                        name="social"
                        type="number"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className="sm:ml-2 w-full sm:w-48"
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
                        className=" ml-0 sm:ml-2 w-full sm:w-24 "
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
                      <div className="flex flex-col items-start sm:flex-row sm:items-center mt-4">
                        <InputLabel htmlFor="insuredName">
                          Insured Name:{" "}
                        </InputLabel>
                        <TextField
                          className=" ml-0 sm:ml-2 w-full sm:w-40 "
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
                      <div className="flex flex-col items-start sm:flex-row sm:items-center mt-4">
                        {" "}
                        <InputLabel htmlFor="insuredDOB">
                          Insured DOB:{" "}
                        </InputLabel>
                        <DatePicker
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
                              className=" ml-0 sm:ml-2 sm:w-40 w-full"
                              error={
                                formik.touched.insuredDOB &&
                                formik.errors.insuredDOB
                                  ? true
                                  : false
                              }
                            />
                          )}
                        />
                      </div>
                      <div className="flex flex-col items-start sm:flex-row sm:items-center mt-4">
                        <InputLabel htmlFor="insuredSocial">
                          Insured Social:{" "}
                        </InputLabel>
                        <TextField
                          className=" ml-0 sm:ml-2 sm:w-40 w-full "
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
                        className="ml-0 sm:ml-2 w-full sm:w-40"
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
                        className="ml-0 sm:ml-2 w-full sm:w-40"
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
                        className="ml-0 sm:ml-2 w-full sm:w-40"
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
                    <div className="flex flex-row items-center justify-between sm:flex-col sm:items-center md:flex-row my-2">
                      <div className="flex flex-col items-start sm:flex-row sm:items-center my-2 ">
                        <InputLabel htmlFor="heightFt">
                          Height (feet)
                        </InputLabel>
                        <TextField
                          className="w-16 ml-0 sm:ml-2"
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
                          className="w-16 sm:ml-2 m-0"
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
                        className="ml-0 sm:ml-2 w-20"
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
                        className="my-3 md:mr-2 w-64 sm:w-56"
                        id={"allergies"}
                        name={"allergies"}
                        type="text"
                        size="small"
                        value={selectedAllergy}
                        onChange={(e) => setSelectedAllergy(e.target.value)}
                      />
                      <TextField
                        label="Reaction"
                        className="w-64 sm:w-56 md:w-36 mb-3 md:my-0 md:mr-2"
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
                        <MenuItem value="Other">Other</MenuItem>
                      </TextField>
                      <Button
                        disabled={
                          selectedAllergy === "" ||
                          selectedAllergy.length < 2 ||
                          selectedAllergyReaction === ""
                        }
                        variant="outlined"
                        endIcon={<MdAddCircleOutline />}
                        onClick={() => {
                          setAllergyArray([
                            ...allergyArray,
                            {
                              name: selectedAllergy,
                              reaction: selectedAllergyReaction,
                            },
                          ]);
                          setSelectedAllergy("");
                          setSelectedAllergyReaction("");
                        }}
                      >
                        Add
                      </Button>
                    </div>
                    <TableContainer
                      component={Paper}
                      className="mt-3 max-w-[300px] minxs:max-w-2xl bg-neutral-100 shadow-md border border-t-neutral-200"
                      style={{ maxHeight: 300 }}
                    >
                      <Table
                        stickyHeader
                        aria-label="sticky table"
                        className="shadow-lg "
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-base md:text-lg font-semibold p-2 sm:p-4 font-[Roboto] bg-neutral-100">
                              Allergy
                            </TableCell>
                            <TableCell className="text-base md:text-lg   font-semibold p-2 sm:p-4 font-[Roboto] bg-neutral-100">
                              Reaction
                            </TableCell>
                            <TableCell className="text-base md:text-lg font-semibold p-2 sm:p-4 font-[Roboto] bg-neutral-100">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {allergyArray.map((allergy, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4 text-black">
                                {allergy.name}
                              </TableCell>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4 text-black">
                                {allergy.reaction}
                              </TableCell>

                              <TableCell className="p-2 ">
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
                                  <CgTrash className="text-red-500" size={25} />
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
                        {!fetchedMeds ? (
                          <MenuItem>No Dosage Available</MenuItem>
                        ) : fetchedMeds[2].STRENGTHS_AND_FORMS == undefined ? (
                          <MenuItem>No Dosage Available</MenuItem>
                        ) : fetchedMeds && fetchedMeds.length >= 1 ? (
                          fetchedMeds[2].STRENGTHS_AND_FORMS[0].map(
                            (dosage) => (
                              <MenuItem value={dosage}>{dosage}</MenuItem>
                            )
                          )
                        ) : (
                          <MenuItem>No Dosage Available</MenuItem>
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
                            selectedMed == null ||
                            selectedFrequency == null ||
                            !selectedDosage
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
                      className="mt-3 max-w-[300px] minxs2:max-w-[360px] minsm:max-w-2xl bg-neutral-100 shadow-md border border-t-neutral-200"
                      style={{ maxHeight: 300 }}
                    >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-base md:text-lg font-semibold p-2 sm:p-4  bg-neutral-100">
                              Medication
                            </TableCell>
                            <TableCell className="text-base md:text-lg font-semibold p-2 sm:p-4  bg-neutral-100">
                              Dosage
                            </TableCell>
                            <TableCell className="text-base md:text-lg font-semibold p-2 sm:p-4  bg-neutral-100">
                              Frequency
                            </TableCell>
                            <TableCell className="maxsm:hidden text-base md:text-lg font-semibold p-2 sm:p-4  bg-neutral-100">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {medicationFullArray.map((med, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4">
                                {med.name}
                              </TableCell>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4">
                                {med.dosage}
                              </TableCell>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4">
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
                                  <CgTrash className="text-red-500" size={25} />
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
                                  <CgTrash className="text-red-500" size={25} />
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
                      <Autocomplete
                        className="my-3 md:mr-2 w-64 "
                        id={"medicalHistory"}
                        name={"medicalHistory"}
                        type="text"
                        value={selectedMedicalCondition}
                        onChange={(event, newValue) => {
                          if (typeof newValue === "string") {
                            setSelectedMedicalCondition(newValue.title);
                          } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setSelectedMedicalCondition(newValue.inputValue);
                          } else if (newValue === null) {
                            setSelectedMedicalCondition(null);
                          } else {
                            setSelectedMedicalCondition(newValue.title);
                          }
                        }}
                        options={medicalHistoryOptions}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        freeSolo
                        renderOption={(props, option) => (
                          <li {...props}>{option.title}</li>
                        )}
                        filterOptions={(options, params) => {
                          const filtered = filter(options, params);

                          const { inputValue } = params;
                          // Suggest the creation of a new value
                          const isExisting = options.some(
                            (option) => inputValue === option.title
                          );
                          if (inputValue !== "" && !isExisting) {
                            filtered.push({
                              inputValue,
                              title: `Add "${inputValue}"`,
                            });
                          }

                          return filtered;
                        }}
                        getOptionLabel={(option) => {
                          // Value selected with enter, right from the input
                          if (typeof option === "string") {
                            return option;
                          }
                          // Add "xxx" option created dynamically
                          if (option.inputValue) {
                            return option.inputValue;
                          }
                          // Regular option
                          return option.title;
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Start typing to search"
                            size="small"
                          />
                        )}
                      ></Autocomplete>

                      <Button
                        disabled={
                          selectedMedicalCondition == null ||
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
                      className="mt-3 max-w-[300px] minxs:max-w-2xl bg-neutral-100 shadow-md border border-t-neutral-200"
                      style={{ maxHeight: 300 }}
                    >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-base md:text-lg font-semibold p-2 sm:p-4 bg-neutral-100">
                              Medical Condition
                            </TableCell>

                            <TableCell className="text-base md:text-lg font-semibold p-2 sm:p-4 bg-neutral-100">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {medicalHistoryArray.map((history, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4">
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
                                  <CgTrash className="text-red-500" size={25} />
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
                      <Autocomplete
                        className="my-3 md:mr-2 w-64 "
                        id={"surgicalHistory"}
                        name={"surgicalHistory"}
                        type="text"
                        value={selectedSurgicalHistory}
                        onChange={(event, newValue) => {
                          if (typeof newValue === "string") {
                            setSelectedSurgicalHistory(newValue.title);
                          } else if (newValue && newValue.inputValue) {
                            // Create a new value from the user input
                            setSelectedSurgicalHistory(newValue.inputValue);
                          } else if (newValue === null) {
                            setSelectedSurgicalHistory(null);
                          } else {
                            setSelectedSurgicalHistory(newValue.title);
                          }
                        }}
                        options={surgicalHistoryOptions}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        freeSolo
                        renderOption={(props, option) => (
                          <li {...props}>{option.title}</li>
                        )}
                        filterOptions={(options, params) => {
                          const filtered = filter(options, params);

                          const { inputValue } = params;
                          // Suggest the creation of a new value
                          const isExisting = options.some(
                            (option) => inputValue === option.title
                          );
                          if (inputValue !== "" && !isExisting) {
                            filtered.push({
                              inputValue,
                              title: `Add "${inputValue}"`,
                            });
                          }

                          return filtered;
                        }}
                        getOptionLabel={(option) => {
                          // Value selected with enter, right from the input
                          if (typeof option === "string") {
                            return option;
                          }
                          // Add "xxx" option created dynamically
                          if (option.inputValue) {
                            return option.inputValue;
                          }
                          // Regular option
                          return option.title;
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Start typing to search"
                            size="small"
                            className="mt-3 sm:mt-0 ml-0 sm:ml-2 sm:mr-2 mb-3 "
                          />
                        )}
                      ></Autocomplete>
                      <DatePicker
                        className="w-64 md:w-auto sm:mt-0 ml-0 sm:ml-2 sm:mr-2 mb-3"
                        id="dob"
                        name="dob"
                        label="Date of Surgery"
                        disabled={
                          selectedSurgicalHistory == null ||
                          selectedSurgicalHistory == "" ||
                          selectedSurgicalHistory.length < 2
                        }
                        value={selectedSurgicalHistoryDate}
                        onChange={(date) =>
                          setSelectedSurgicalHistoryDate(date)
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            size="small"
                            error={
                              selectedSurgicalHistoryDate == null &&
                              selectedSurgicalHistory != ""
                            }
                          />
                        )}
                      />{" "}
                      <Button
                        className=" sm:mt-0 ml-0 sm:ml-2 sm:mr-2 mb-3"
                        disabled={
                          selectedSurgicalHistoryDate == null ||
                          selectedSurgicalHistory == "" ||
                          selectedSurgicalHistory == null ||
                          selectedSurgicalHistory.length < 2
                        }
                        variant="outlined"
                        endIcon={<MdAddCircleOutline />}
                        onClick={() => {
                          let temp = [...surgicalHistoryArray];
                          temp.push({
                            name: selectedSurgicalHistory,
                            date: new Date(
                              selectedSurgicalHistoryDate
                            ).toLocaleDateString("en-US"),
                          });
                          setSurgicalHistoryArray(temp);
                          setSelectedSurgicalHistory("");
                          setSelectedSurgicalHistoryDate(null);
                        }}
                      >
                        Add
                      </Button>
                    </div>
                    <TableContainer
                      component={Paper}
                      className="mt-3 max-w-[300px] minxs:max-w-2xl bg-neutral-100 shadow-md border border-t-neutral-200"
                      style={{ maxHeight: 300 }}
                    >
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-base md:text-lg  p-2 font-semibold sm:p-4 bg-neutral-100">
                              Surgery / Procedure
                            </TableCell>
                            <TableCell className="text-base md:text-lg  p-2 font-semibold sm:p-4 bg-neutral-100">
                              Date
                            </TableCell>
                            <TableCell className="text-base md:text-lg  p-2 font-semibold sm:p-4 bg-neutral-100">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {surgicalHistoryArray.map((surgery, index) => (
                            <TableRow key={index}>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4">
                                {surgery.name}
                              </TableCell>
                              <TableCell className="text-sm md:text-base p-2 sm:p-4">
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
                                  <CgTrash className="text-red-500" size={25} />
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
                    <div className="flex flex-col md:flex-row md:justify-between items-center">
                      <Select
                        displayEmpty={true}
                        renderValue={(selected) =>
                          !selectedFamilyMember ? (
                            <em>Select Family Member</em>
                          ) : (
                            selectedFamilyMember
                          )
                        }
                        className="w-60 md:w-36 mr-2 my-3 "
                        placeholder="Family Member"
                        name="familyMember"
                        id="familyMember"
                        size="small"
                        value={selectedFamilyMember}
                        onChange={(e) =>
                          setSelectedFamilyMember(e.target.value)
                        }
                      >
                        <MenuItem value="Father">Father</MenuItem>
                        <MenuItem value="Mother">Mother</MenuItem>
                        <MenuItem value="Brother">Brother</MenuItem>
                        <MenuItem value="Sister">Sister</MenuItem>
                        <MenuItem value=" Maternal Grandfather">
                          Maternal Grandfather
                        </MenuItem>
                        <MenuItem value="Maternal Grandmother">
                          Maternal Grandmother
                        </MenuItem>
                        <MenuItem value="Paternal Grandfather">
                          Paternal Grandfather
                        </MenuItem>
                        <MenuItem value="Paternal Grandmother">
                          Paternal Grandmother
                        </MenuItem>
                      </Select>

                      <TextField
                        className="w-20 mr-2 my-3 md:my-0"
                        id={"familyMemberAge"}
                        name={"familyMemberAge"}
                        type="number"
                        value={selectedFamilyMemberAge}
                        onChange={(e) =>
                          setSelectedFamilyMemberAge(e.target.value)
                        }
                        label="Age"
                        size="small"
                      ></TextField>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-label="position"
                          name="selectedFamilyMemberAlive"
                          id="selectedFamilyMemberAlive"
                          defaultValue="Alive"
                          value={selectedFamilyMemberAlive}
                          onChange={(e) =>
                            setSelectedFamilyMemberAlive(e.target.value)
                          }
                        >
                          <FormControlLabel
                            value={"Alive"}
                            control={<Radio size="small" />}
                            label="Alive"
                          />
                          <FormControlLabel
                            value={"Deceased"}
                            control={<Radio size="small" />}
                            label="Deceased"
                          />
                        </RadioGroup>
                      </FormControl>
                      <Select
                        multiple
                        className="w-60 md:w-36 mr-2 my-3 "
                        displayEmpty={true}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return <em>Select Medical History</em>;
                          } else {
                            return selected.join(", ");
                          }
                        }}
                        name="disease"
                        id="disease"
                        size="small"
                        MenuProps={{
                          sx: {
                            width: "100%",
                            maxHeight: "300px",
                          },
                        }}
                        value={selectedFamilyMemberMedicalHistory}
                        onChange={(e) =>
                          setSelectedFamilyMemberMedicalHistory(e.target.value)
                        }
                      >
                        <MenuItem value="None">None</MenuItem>
                        <MenuItem value="Diabetes">Diabetes</MenuItem>
                        <MenuItem value="Hypertension">Hypertension</MenuItem>
                        <MenuItem value="Heart Disease">Heart Disease</MenuItem>
                        <MenuItem value="Lung Disease">Lung Disease</MenuItem>
                        <MenuItem value="Asthma">Asthma</MenuItem>{" "}
                        <MenuItem value="COPD">COPD</MenuItem>
                        <MenuItem value="Kidney Disease">
                          Kidney Disease
                        </MenuItem>
                        <MenuItem value="Liver Disease">Liver Disease</MenuItem>
                        <MenuItem value="Arthritis">Arthritis</MenuItem>
                        <MenuItem value="Cancer">Cancer</MenuItem>
                        <MenuItem value="Sleep Apnea">Sleep Apnea</MenuItem>
                        <MenuItem value="Multiple Sclerosis">
                          Multiple Sclerosis
                        </MenuItem>
                        <MenuItem value="Migraines">Migraines</MenuItem>
                        <MenuItem value="ALS">ALS</MenuItem>
                        <MenuItem value="Dementia">Dementia</MenuItem>
                        <MenuItem value="Alzheimer's disease">
                          Alzheimer&apos;s disease
                        </MenuItem>
                        <MenuItem value="Epilepsy">Epilepsy</MenuItem>
                        <MenuItem value="Parkinson's">
                          Parkinson&apos;s
                        </MenuItem>
                        <MenuItem value="Stroke">Stroke</MenuItem>
                        <MenuItem value="TIA">TIA</MenuItem>
                        <MenuItem value="Bipolar Disorder">
                          Bipolar Disorder
                        </MenuItem>
                        <MenuItem value="Schizophrenia">
                          {" "}
                          Schizophrenia
                        </MenuItem>
                        <MenuItem value="Anxiety">Anxiety</MenuItem>
                        <MenuItem value="Depression">Depression</MenuItem>
                        <MenuItem value="Other Neurological Disorder">
                          Other Neurological Disorder
                        </MenuItem>
                        <MenuItem value="Lupus">Lupus</MenuItem>
                        <MenuItem value="Sjogren's Syndrome">
                          Sjogren&apos;s Syndrome
                        </MenuItem>
                        <MenuItem value="Scleroderma">Scleroderma</MenuItem>
                        <MenuItem value="Sarcoidosis">Sarcoidosis</MenuItem>
                        <MenuItem value="Hashimoto's Thyroiditis">
                          Hashimoto&apos;s Thyroiditis
                        </MenuItem>
                        <MenuItem value="Graves' Disease">
                          Graves&apos; Disease
                        </MenuItem>
                        <MenuItem value="Celiac Disease">
                          Celiac Disease
                        </MenuItem>
                        <MenuItem value="Crohn's Disease">
                          Crohn&apos;s Disease
                        </MenuItem>
                        <MenuItem value="Ulcerative Colitis">
                          Ulcerative Colitis
                        </MenuItem>
                        <MenuItem value="Psoriasis">Psoriasis</MenuItem>
                        <MenuItem value="Psoriatic Arthritis">
                          Psoriatic Arthritis
                        </MenuItem>
                        <MenuItem value="Vitiligo">Vitiligo</MenuItem>
                        <MenuItem value="Other Autoimmune Disease">
                          Other Autoimmune Disease
                        </MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Select>

                      <div className="ml-2">
                        <Button
                          disabled={
                            !selectedFamilyMemberAge ||
                            !selectedFamilyMemberAlive ||
                            !selectedFamilyMember ||
                            selectedFamilyMemberMedicalHistory.length === 0
                          }
                          onClick={() => {
                            setFamilyHistoryArray((prev) => [
                              ...prev,
                              {
                                familyMember: selectedFamilyMember,
                                age: selectedFamilyMemberAge,
                                alive: selectedFamilyMemberAlive,
                                medicalHistory:
                                  selectedFamilyMemberMedicalHistory,
                              },
                            ]);
                            setSelectedFamilyMember(null);
                            setSelectedFamilyMemberAge("");
                            setSelectedFamilyMemberAlive(null);
                            setSelectedFamilyMemberMedicalHistory([]);
                          }}
                          variant="outlined"
                          endIcon={<MdAddCircleOutline />}
                        >
                          add
                        </Button>{" "}
                      </div>
                    </div>{" "}
                    <TableContainer
                      component={Paper}
                      className="mt-3 max-w-[300px] minxs:max-w-2xl bg-neutral-100 shadow-md border border-t-neutral-200"
                      style={{ maxHeight: 600 }}
                    >
                      <Table aria-label="Family history table">
                        <TableHead>
                          <TableRow>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Family Member
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Age
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Alive / Deceased
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4">
                              Medical History
                            </TableCell>
                            <TableCell className="text-sm md:text-lg font-semibold p-2 sm:p-4 maxsm:hidden">
                              Delete
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {familyHistoryArray.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell className="p-2 sm:p-4">
                                {item.familyMember}
                              </TableCell>
                              <TableCell className="p-2 sm:p-4">
                                {item.age}
                              </TableCell>
                              <TableCell className="p-2 sm:p-4">
                                {item.alive}
                              </TableCell>
                              <TableCell className="p-2 sm:p-4 ">
                                {item.medicalHistory.map((item, index) => (
                                  <ul key={index} className="list-disc ">
                                    <li> {item}</li>
                                  </ul>
                                ))}{" "}
                              </TableCell>
                              <TableCell className="p-2 sm:p-4 maxsm:hidden">
                                <IconButton
                                  onClick={() => {
                                    setFamilyHistoryArray((prev) => {
                                      const newArray = [...prev];
                                      newArray.splice(index, 1);
                                      return newArray;
                                    });
                                  }}
                                >
                                  <CgTrash className="text-red-500" size={25} />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                  <InputLabel className="text-center text-xl pb-5 underline underline-offset-8">
                    Enviromental History
                  </InputLabel>{" "}
                  <div className="pb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 ">
                    <div>
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
                            value={"Yes"}
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value={"No"}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      {formikHistory.values.useTobaccoBool == "Yes" && (
                        <div>
                          <InputLabel className="text-center text-base pb-2 underline underline-offset-8">
                            How many packs/cans per week?
                          </InputLabel>
                          <div className="flex flex-col items-start">
                            <div className="flex items-center">
                              <FormLabel htmlFor="useCiggarrettes">
                                Cigarettes/Cigars
                              </FormLabel>
                              <TextField
                                type="number"
                                placeholder="Amount"
                                className="ml-2 w-24 mt-2"
                                size="small"
                                id="useCiggarrettes"
                                name="useCiggarrettes"
                                value={formikHistory.values.useCiggarrettes}
                                onChange={formikHistory.handleChange}
                              />
                            </div>

                            <div className="flex items-center">
                              <FormLabel htmlFor="useChewingTobacco">
                                Smokeless
                              </FormLabel>
                              <TextField
                                type="number"
                                placeholder="Amount"
                                className="ml-2 w-24 mt-2"
                                size="small"
                                id="useChewingTobacco"
                                name="useChewingTobacco"
                                value={formikHistory.values.useChewingTobacco}
                                onChange={formikHistory.handleChange}
                              />
                            </div>
                            <div className="flex items-center">
                              <FormLabel htmlFor="useVapes">
                                E-cig/Vape
                              </FormLabel>
                              <TextField
                                type="number"
                                placeholder="Amount"
                                className="ml-2 w-24 mt-2"
                                size="small"
                                id="useVapes"
                                name="useVapes"
                                value={formikHistory.values.useVapes}
                                onChange={formikHistory.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <FormControl>
                        <FormLabel htmlFor="useAlcoholBool">
                          Do you drink alcohol?
                        </FormLabel>
                        <RadioGroup
                          id="useAlcoholBool"
                          aria-label="alcohol"
                          name="useAlcoholBool"
                          value={formikHistory.values.useAlcoholBool}
                          onChange={formikHistory.handleChange}
                        >
                          <FormControlLabel
                            value={"Yes"}
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value={"No"}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      {formikHistory.values.useAlcoholBool == "Yes" && (
                        <div>
                          <InputLabel className="text-center text-base pb-2 underline underline-offset-8">
                            How many drinks per week?
                          </InputLabel>
                          <div className="flex flex-col items-start">
                            <div className="flex items-center">
                              <FormLabel htmlFor="useBeer">Beer</FormLabel>
                              <TextField
                                type="number"
                                placeholder="Amount"
                                className="ml-2 w-24 mt-2"
                                size="small"
                                id="useBeer"
                                name="useBeer"
                                value={formikHistory.values.useBeer}
                                onChange={formikHistory.handleChange}
                              />
                            </div>
                            <div className="flex items-center">
                              <FormLabel htmlFor="useWine">Wine</FormLabel>
                              <TextField
                                type="number"
                                placeholder="Amount"
                                className="ml-2 w-24 mt-2"
                                size="small"
                                id="useWine"
                                name="useWine"
                                value={formikHistory.values.useWine}
                                onChange={formikHistory.handleChange}
                              />
                            </div>
                            <div className="flex items-center">
                              <FormLabel htmlFor="useLiquor">Liquor</FormLabel>
                              <TextField
                                type="number"
                                placeholder="Amount"
                                className="ml-2 w-24 mt-2"
                                size="small"
                                id="useLiquor"
                                name="useLiquor"
                                value={formikHistory.values.useLiquor}
                                onChange={formikHistory.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <FormControl>
                      <FormLabel htmlFor="useIllicitDrugsPast">
                        Do you presently use illicit drugs?
                      </FormLabel>
                      <RadioGroup
                        id="useIllicitDrugsPast"
                        aria-label="Illicit Drugs Past"
                        name="useIllicitDrugsPast"
                        value={formikHistory.values.useIllicitDrugsPast}
                        onChange={formikHistory.handleChange}
                      >
                        <FormControlLabel
                          value={"Yes"}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={"No"}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="useIllicitDrugsPresent">
                        Have you ever used illicit drugs in the past?
                      </FormLabel>
                      <RadioGroup
                        id="useIllicitDrugsPresent"
                        aria-label="Illicit Drugs Present"
                        name="useIllicitDrugsPresent"
                        value={formikHistory.values.useIllicitDrugsPresent}
                        onChange={formikHistory.handleChange}
                      >
                        <FormControlLabel
                          value={"Yes"}
                          control={<Radio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value={"No"}
                          control={<Radio />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                    {formikHistory.values.useIllicitDrugsPresent == "Yes" ||
                    formikHistory.values.useIllicitDrugsPast == "Yes" ? (
                      <div>
                        <div className="text-center text-base pb-2 ">
                          Please indicate which drugs you are using/have used
                        </div>
                        <TextField
                          placeholder="Ex.
                          Cocaine, Heroin, Meth, etc"
                          className="w-full mt-2"
                          size="small"
                          id="useIllicitDrugs"
                          name="useIllicitDrugs"
                          value={formikHistory.values.useIllicitDrugs}
                          onChange={formikHistory.handleChange}
                        />
                      </div>
                    ) : null}
                    <div>
                      <FormControl>
                        <FormLabel htmlFor="pastImaging">
                          Have you ever had any imaging done?
                        </FormLabel>
                        <RadioGroup
                          id="pastImaging"
                          aria-label="Past Imaging"
                          name="pastImaging"
                          value={formikHistory.values.pastImaging}
                          onChange={formikHistory.handleChange}
                        >
                          <FormControlLabel
                            value={"Yes"}
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value={"No"}
                            control={<Radio />}
                            label="No"
                          />
                        </RadioGroup>
                      </FormControl>
                      {formikHistory.values.pastImaging == "Yes" ? (
                        <div>
                          <div className="text-center text-base pb-2 ">
                            Where was the imaging done?
                          </div>
                          <TextField
                            placeholder="Ex.
                           Memphis Hospital, Baptist Imaging Center, etc"
                            className="w-full mt-2"
                            size="small"
                            id="pastImagingLocation"
                            name="pastImagingLocation"
                            value={formikHistory.values.pastImagingLocation}
                            onChange={formikHistory.handleChange}
                          />
                        </div>
                      ) : null}
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
                      onClick={form2submitHandler}
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
                  <div className="flex flex-row justify-between my-6">
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
                            name="name1"
                            id="name1"
                            value={formikLastPage.values.name1}
                            onChange={formikLastPage.handleChange}
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
                            name="phone1"
                            id="phone1"
                            value={formikLastPage.values.phone1}
                            onChange={formikLastPage.handleChange}
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
                            name="relationship1"
                            id="relationship1"
                            value={formikLastPage.values.relationship1}
                            onChange={formikLastPage.handleChange}
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
                            name="name2"
                            id="name2"
                            value={formikLastPage.values.name2}
                            onChange={formikLastPage.handleChange}
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
                            name="phone2"
                            id="phone2"
                            value={formikLastPage.values.phone2}
                            onChange={formikLastPage.handleChange}
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
                            name="relationship2"
                            id="relationship2"
                            value={formikLastPage.values.relationship2}
                            onChange={formikLastPage.handleChange}
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
                            name="name3"
                            id="name3"
                            value={formikLastPage.values.name3}
                            onChange={formikLastPage.handleChange}
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
                            name="phone3"
                            id="phone3"
                            value={formikLastPage.values.phone3}
                            onChange={formikLastPage.handleChange}
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
                            name="relationship3"
                            id="relationship3"
                            value={formikLastPage.values.relationship3}
                            onChange={formikLastPage.handleChange}
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
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                  {sign5Error && (
                    <p className="text-red-500 text-center text-base">
                      You must sign the document before submitting
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
          <Alert
            icon={<BiErrorCircle className="text-white" />}
            className="bg-red-500 text-white rounded-lg"
            severity="error"
          >
            Please fill out the required fields
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          autoHideDuration={2000}
          open={isValid2 === false}
          onClose={() => setIsValid2(true)}
        >
          <Alert
            icon={<BiErrorCircle className="text-white" />}
            className="bg-red-500 text-white rounded-lg"
            severity="error"
          >
            Please fill out the required fields
          </Alert>
        </Snackbar>

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

        <Dialog open={success} className="maxxs1:max-w-[300px] ">
          <DialogTitle className="text-center text-2xl text-green-500 bg-[#333333] underline underline-offset-8">
            Success!
          </DialogTitle>
          <DialogContent className="bg-[#333333] text-white">
            <DialogContentText className="text-white">
              <h2>
                Thank you for submitting your paperwork online. By doing so, you
                saved us paper and yourself time and made the process more
                convenient. We'll be in touch soon to schedule an appointment,
                if one has not already been scheduled.
              </h2>
            </DialogContentText>
          </DialogContent>
          <DialogActions className="flex justify-center bg-[#333333] ">
            <Button
              className="bg-green-600 text-white hover:bg-green-700 active:bg-green-600"
              variant="contained"
              onClick={() => {
                router.replace("/");
              }}
            >
              Back to homepage
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default PatientRegistration;
