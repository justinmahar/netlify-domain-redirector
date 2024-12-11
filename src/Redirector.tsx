import React from "react";
import "./App.css";
import redirectImage from "./redirect.webp";

export const Redirector = () => {
  const [pageVisible, setPageVisible] = React.useState(false);
  const { REACT_APP_REDIRECT_URL, REACT_APP_IGNORE_ROUTE } = process.env;
  const ignoreRoute = REACT_APP_IGNORE_ROUTE === "true";

  /** Redirect to the URL */
  React.useEffect(() => {
    if (REACT_APP_REDIRECT_URL) {
      // Preserve the route
      const route =
        window.location.pathname +
        window.location.search +
        window.location.hash;
      const fullUrl = !ignoreRoute
        ? (REACT_APP_REDIRECT_URL.endsWith("/")
            ? REACT_APP_REDIRECT_URL.substring(
                0,
                REACT_APP_REDIRECT_URL.length - 1
              )
            : REACT_APP_REDIRECT_URL) + route
        : REACT_APP_REDIRECT_URL;
      const headElem = document.getElementsByTagName("head")[0];
      if (headElem) {
        const meta = document.createElement("meta");
        meta.setAttribute("http-equiv", "refresh");
        meta.setAttribute("content", `0;url=${fullUrl}`);
        headElem.appendChild(meta);
      }
      window.open(fullUrl, "_self");
    } else {
      console.error("No redirect URL has been configured.");
    }
  }, [REACT_APP_REDIRECT_URL, ignoreRoute]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPageVisible(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (!pageVisible) {
    return (
      <div className="App">
        <header className="App-header"></header>
      </div>
    );
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
