import "../styles/globals.css";
import Navbar from "../components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { StyledEngineProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <QueryClientProvider client={new QueryClient()}>
          <Component {...pageProps} />
          <Analytics />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
