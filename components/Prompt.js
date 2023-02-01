import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";

export default function usePromptIfDirty(when) {
  const router = useRouter();
  const [{ nextRoute, confirmed }, setState] = useState({
    nextRoute: null,
    confirmed: false,
  });

  useEffect(() => {
    if (!when) return;

    const onCloseOrRefreshWindow = (e) => {
      return (e.returnValue = "you may lose unsaved changes.");
    };

    const onRouteChangeStart = (route) => {
      setState({ nextRoute: route, confirmed: false });
      router.events.emit("routeChangeError");
      throw "routeChange aborted.";
    };

    const onRouterChangeError = () => {
      window.history.forward();
    };

    const registerListeners = () => {
      // window.addEventListener("beforeunload", onCloseOrRefreshWindow);
      router.events.on("routeChangeStart", onRouteChangeStart);
      router.events.on("routeChangeError", onRouterChangeError);
    };

    const cleanUpListeners = () => {
      // window.removeEventListener("beforeunload", onCloseOrRefreshWindow);
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeError", onRouterChangeError);
    };

    if (confirmed) {
      router.replace(nextRoute);
      return cleanUpListeners;
    }

    registerListeners();
    return cleanUpListeners;
  }, [when, nextRoute, confirmed, router]);

  // customize alert component.
  const Prompt = () => {
    return when && nextRoute ? (
      // <div className="fixed top-0 z-50 ml-96  text-center w-auto backdrop-blur-lg transition duration-700 ease-linear">
      <Dialog
        open={true}
        className="backdrop-blur-lg bg-[#212020c3] flex flex-row justify-center items-center rounded-2xl"
      >
        <DialogContent className="bg-[#1b1919d4] ">
          <DialogTitle
            id="describe-event"
            className="text-white text-lg md:text-xl"
          >
            You may lose any changes.
            <p className="pt-2"> Are you sure you want to leave?</p>
          </DialogTitle>
          <div className="flex flex-row justify-center pt-4">
            <DialogActions>
              <Button
                variant="contained"
                className="bg-red-600 text-white ml-4 hover:bg-red-700"
                onClick={() => setState({ nextRoute: null, confirmed: false })}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className="bg-green-600 text-white ml-4 hover:bg-green-700"
                onClick={() => setState({ nextRoute, confirmed: true })}
              >
                Confirm
              </Button>
            </DialogActions>
          </div>
        </DialogContent>
      </Dialog>
    ) : // </div>
    null;
  };

  return [Prompt];
}
