import "../styles/globals.css";
import Navbar from "../components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import { StyledEngineProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
        <Analytics />
      </StyledEngineProvider>
    </>
  );
}

export default MyApp;
