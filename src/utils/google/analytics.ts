import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-XRFL1F69ME"); // Replace with your GA4 Measurement ID
};

export const logPageView = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};