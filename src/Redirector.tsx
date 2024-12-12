import React from "react";
import "./App.css";
import redirectImage from "./redirect.webp";

export const Redirector = () => {
  const {
    REACT_APP_REDIRECT_URL,
    REACT_APP_PRESERVE_PATH,
    REACT_APP_AUTOMATIC_REDIRECTION_DISABLED,
    REACT_APP_DARK_MODE_ENABLED,
    REACT_APP_BG_COLOR,
    REACT_APP_FG_COLOR,
    REACT_APP_IMG_DISABLED,
    REACT_APP_MESSAGE_TEXT,
    REACT_APP_MESSAGE_DISABLED,
    REACT_APP_LINK_TEXT,
    REACT_APP_LINK_DISABLED,
    REACT_APP_PAGE_TITLE,
    REACT_APP_RENDER_DELAY,
  } = process.env;
  const preservePath = REACT_APP_PRESERVE_PATH === "true";
  const redirectEnabled = REACT_APP_AUTOMATIC_REDIRECTION_DISABLED !== "true";

  const darkModeEnabled = REACT_APP_DARK_MODE_ENABLED === "true";
  const darkColor = "#282c34";
  const lightColor = "#ffffff";
  const bgColor =
    REACT_APP_BG_COLOR || (darkModeEnabled ? darkColor : lightColor);
  const fgColor =
    REACT_APP_FG_COLOR || (darkModeEnabled ? lightColor : darkColor);

  const renderDelayParsed = Number.parseInt(`${REACT_APP_RENDER_DELAY}`);
  const renderDelay = !isNaN(renderDelayParsed) ? renderDelayParsed : 3000;
  const [pageVisible, setPageVisible] = React.useState(renderDelay === 0);

  const imgDisabled = REACT_APP_IMG_DISABLED === "true";

  const messageText = REACT_APP_MESSAGE_TEXT || "Redirecting...";
  const messageDisabled = REACT_APP_MESSAGE_DISABLED === "true";

  const linkText = REACT_APP_LINK_TEXT || "Click here to proceed";
  const linkDisabled = REACT_APP_LINK_DISABLED === "true";

  const pageTitle = REACT_APP_PAGE_TITLE || "Redirecting...";

  /** Construct the redirect URL. */
  const redirectUrl = React.useMemo(() => {
    let url = REACT_APP_REDIRECT_URL || "";
    if (url) {
      // Preserve the path if configured to do so
      const path =
        window.location.pathname +
        window.location.search +
        window.location.hash;
      url = preservePath
        ? (url.endsWith("/") ? url.substring(0, url.length - 1) : url) + path
        : url;
    }
    return url;
  }, [REACT_APP_REDIRECT_URL, preservePath]);

  /** Redirect to the URL */
  React.useEffect(() => {
    if (redirectUrl) {
      const headElem = document.getElementsByTagName("head")[0];
      if (headElem) {
        const meta = document.createElement("meta");
        meta.setAttribute("http-equiv", "refresh");
        meta.setAttribute("content", `0;url=${redirectUrl}`);
        if (redirectEnabled) {
          // Technique #1 - meta refresh tag
          headElem.appendChild(meta);
        }
        document.title = pageTitle;
      }
      if (redirectEnabled) {
        // Technique #2 - window.open with _self target
        window.open(redirectUrl, "_self");
      }
    } else {
      console.error("No redirect URL has been configured.");
    }
  }, [pageTitle, redirectEnabled, redirectUrl]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPageVisible(true);
    }, renderDelay);

    return () => clearTimeout(timeout);
  }, [renderDelay]);

  if (!pageVisible) {
    return (
      <div
        className="App"
        style={{ color: fgColor, backgroundColor: bgColor }}
      />
    );
  } else {
    return (
      <div className="App" style={{ color: fgColor, backgroundColor: bgColor }}>
        {!imgDisabled && (
          <a href={redirectUrl} rel="noopener noreferrer">
            <img
              src={redirectImage}
              alt="Arrow pointing to the right"
              style={{ width: "calc(15vmin)" }}
            />
          </a>
        )}
        {!messageDisabled && <p>{messageText}</p>}
        {!linkDisabled && (
          <a
            href={redirectUrl}
            rel="noopener noreferrer"
            style={{ fontSize: "50%", color: "inherit" }}
          >
            {linkText}
          </a>
        )}
        {!redirectUrl && (
          <div style={{ marginTop: 20 }}>
            Error: No redirect URL has been configured.
          </div>
        )}
      </div>
    );
  }
};
