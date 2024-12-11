import React from "react";
import "./App.css";
import redirectImage from "./redirect.webp";

export const Redirector = () => {
  const [pageVisible, setPageVisible] = React.useState(false);
  const { REACT_APP_REDIRECT_URL } = process.env;

  /** Redirect to the URL */
  React.useEffect(() => {
    if (REACT_APP_REDIRECT_URL) {
      window.open(REACT_APP_REDIRECT_URL);
    } else {
      console.error("No redirect URL has been configured.");
    }
  }, [REACT_APP_REDIRECT_URL]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPageVisible(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!pageVisible) {
    return <></>;
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <a href={REACT_APP_REDIRECT_URL} rel="noopener noreferrer">
            <img src={redirectImage} alt="Redirecting..." width={100} />
          </a>
          <p>Redirecting...</p>
          <a
            className="App-link"
            href={REACT_APP_REDIRECT_URL}
            rel="noopener noreferrer"
            style={{ fontSize: "50%" }}
          >
            Click here to proceed.
          </a>
        </header>
      </div>
    );
  }
};
