import React from "react";
import {
  Accordion,
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import {
  FaAngleRight,
  FaArrowDown,
  FaArrowUp,
  FaAsterisk,
  FaCopy,
  FaGithub,
  FaInfoCircle,
  FaPlus,
  FaQuestionCircle,
  FaSave,
  FaStar,
  FaTrashAlt,
} from "react-icons/fa";
import "./App.css";
import redirectImage from "./redirect.webp";

import "bootstrap/dist/css/bootstrap.min.css";
import copy from "copy-to-clipboard";
import { useLocalStorage } from "react-storage-complete";
import { useMomentaryBool } from "react-use-precision-timer";

export const RedirectorSetup = () => {
  const [hideGreeting, setHideGreeting] = React.useState(false);
  const [redirects, setRedirects] = useLocalStorage<string[]>("redirects", []);
  const [enteredRedirect, setEnteredRedirect] = React.useState("");
  const [copied, toggleCopied] = useMomentaryBool(false, 1500);
  const [imported, toggleImported] = useMomentaryBool(false, 1500);
  const redirectFieldRef = React.useRef<HTMLInputElement | null>(null);
  const redirectsTextAreaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [error, setError] = React.useState("");

  const handleAddRedirect = () => {
    const val = enteredRedirect.trim();
    if (val) {
      const newRedirects = [...(redirects ?? []), enteredRedirect.trim()];
      setRedirects(newRedirects);
      setEnteredRedirect("");
    }
  };

  const handleDeleteRedirect = (index: number) => {
    if (index >= 0 && index < (redirects ?? []).length) {
      const newRedirects = [...(redirects ?? [])];
      newRedirects.splice(index, 1);
      setRedirects(newRedirects);
    }
  };

  const handleMoveUp = (index: number) => {
    if (index > 0 && index < (redirects ?? []).length) {
      const newRedirects = [...(redirects ?? [])];
      const removed = newRedirects.splice(index, 1);
      newRedirects.splice(index - 1, 0, ...removed);
      setRedirects(newRedirects);
    }
  };

  const handleMoveDown = (index: number) => {
    if (index >= 0 && index < (redirects ?? []).length - 1) {
      const newRedirects = [...(redirects ?? [])];
      const removed = newRedirects.splice(index, 1);
      newRedirects.splice(index + 1, 0, ...removed);
      setRedirects(newRedirects);
    }
  };

  const handleCopy = () => {
    copy(JSON.stringify(redirects));
    toggleCopied();
  };

  const handleImport = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        try {
          const importedRedirects = JSON.parse(text);
          if (Array.isArray(importedRedirects)) {
            const newRedirects = importedRedirects.filter(
              (v) => typeof v === "string"
            );
            setRedirects(newRedirects);
            toggleImported();
          } else {
            setError(
              `Error: The data you provided was not valid. To import redirects, you must copy the REDIRECTS environment variable value from your existing Netlify site.`
            );
          }
        } catch (e) {
          console.error(e);
          setError(
            `Error: The data you provided was not valid. To import redirects, you must copy the REDIRECTS environment variable value from your existing Netlify site.`
          );
        }
      })
      .catch((e) => {
        console.error(e);
        setError(
          `Error: To import redirects, you must copy the REDIRECTS environment variable value from your existing Netlify site.`
        );
      });
  };

  const redirectElements = (redirects ?? []).map((r, i, arr) => {
    return (
      <ListGroup.Item
        key={`redirect-${i}`}
        className="d-flex gap-4 justify-content-between align-items-center"
      >
        <code className="text-danger text-break">{r}</code>
        <div className="d-flex gap-4">
          <div className="d-flex gap-2">
            <FaArrowUp
              className={`cursor-pointer ${i === 0 ? "invisible" : ""}`}
              onClick={() => handleMoveUp(i)}
            />
            <FaArrowDown
              className={`cursor-pointer ${
                i >= arr.length - 1 ? "invisible" : ""
              }`}
              onClick={() => handleMoveDown(i)}
            />
          </div>
          <FaTrashAlt
            className="cursor-pointer"
            onClick={() => handleDeleteRedirect(i)}
          />
        </div>
      </ListGroup.Item>
    );
  });

  return (
    <div className="App pt-5">
      <Navbar bg="light" variant="light" className="shadow-sm fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <div className="d-flex gap-2 align-items-center">
              <img
                src={redirectImage}
                alt="Arrow pointing to the right"
                style={{ height: 30 }}
              />
              Netlify Redirector
            </div>
          </Navbar.Brand>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="https://github.com/justinmahar/netlify-redirector">
              <FaGithub className="mb-1" />
            </Nav.Link>
            <Nav.Link href="https://github.com/justinmahar/netlify-redirector/stargazers">
              Star It &rarr; <FaStar className="mb-1" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="my-5">
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            {!hideGreeting && (
              <Alert
                variant="primary"
                dismissible
                onClose={() => setHideGreeting(true)}
              >
                <p>
                  Welcome to Netlify Redirector! Below you can set up the
                  redirects for your Netlify deploy. Enjoy!
                </p>
                <p className="mb-0">
                  {" "}
                  If you find this project helpful, please{" "}
                  <a
                    href="https://github.com/justinmahar/netlify-redirector/stargazers"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Star it on GitHub
                  </a>{" "}
                  so others can find it. :)
                </p>
              </Alert>
            )}
            {error && (
              <Alert variant="danger" dismissible onClose={() => setError("")}>
                <p className="mb-0">{error}</p>
              </Alert>
            )}
          </Col>
        </Row>
        <Row>
          <Col md={{ offset: 2, span: 8 }}>
            <div className="d-flex align-items-center justify-content-between gap-2">
              <h3>Setup </h3>
              {hideGreeting && (
                <FaInfoCircle
                  className="text-info cursor-pointer"
                  onClick={() => setHideGreeting(false)}
                />
              )}
            </div>
            <div className="d-flex flex-column gap-3">
              <div>
                <Card>
                  <Card.Header>
                    <FaAsterisk className="mb-1" /> Create Redirects
                  </Card.Header>
                  <Card.Body className="d-flex flex-column gap-3">
                    <div>
                      <div className="d-flex flex-column gap-2">
                        <Card>
                          <Card.Header>Your Redirects</Card.Header>
                          <Card.Body className="p-0">
                            <ListGroup
                              style={{
                                borderStartStartRadius: 0,
                                borderStartEndRadius: 0,
                              }}
                            >
                              {redirectElements.length === 0 && (
                                <ListGroup.Item className="fst-italic small">
                                  Add a redirect below.
                                </ListGroup.Item>
                              )}
                              {redirectElements}
                            </ListGroup>
                          </Card.Body>
                        </Card>
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleAddRedirect();
                          }}
                        >
                          <Form.Group
                            controlId="new-redirect-id"
                            className="d-flex gap-2"
                          >
                            <Form.Control
                              ref={redirectFieldRef}
                              type="text"
                              placeholder="Enter redirect"
                              value={enteredRedirect}
                              onChange={(e) =>
                                setEnteredRedirect(e.target.value)
                              }
                              onFocus={() => redirectFieldRef.current?.select()}
                              className="font-monospace"
                            />
                            <Button
                              type="submit"
                              variant={
                                enteredRedirect ? "primary" : "outline-primary"
                              }
                              onClick={() => console.log("Add")}
                            >
                              <FaPlus className="mb-1" />
                            </Button>
                          </Form.Group>
                          <Form.Text className="text-muted">
                            Refer to the{" "}
                            <a
                              href="https://docs.netlify.com/routing/redirects/redirect-options/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Netlify redirect options
                            </a>{" "}
                            for how to configure redirects.
                          </Form.Text>
                        </Form>
                      </div>
                    </div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <div className="d-flex align-items-center gap-2">
                            <FaQuestionCircle />
                            Help &amp; Examples{" "}
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Some common redirects from the{" "}
                            <a
                              href="https://docs.netlify.com/routing/redirects/redirect-options/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              documentation
                            </a>
                            :
                          </p>
                          <hr />
                          <p>
                            To redirect all traffic to new domain, use the
                            following redirect:
                          </p>
                          <p>
                            <code className="text-danger">
                              {`/* https://example.com/:splat 301!`}
                            </code>
                          </p>
                          <p>
                            This will force redirect all paths to example.com,
                            and is a common use case for Netlify Redirector.
                          </p>
                          <hr />
                          <p>
                            To redirect all traffic to a specific page, use the
                            following redirect:
                          </p>
                          <p>
                            <code className="text-danger">
                              {`/* https://example.com/my/page 301!`}
                            </code>
                          </p>
                          <p>
                            This will force redirect all traffic to the page
                            https://example.com/my/page.
                          </p>
                          <hr />
                          <p>
                            An asterisk indicates a splat that will match
                            anything that follows it. You can use the splat in
                            your rewrites or redirects like this:
                          </p>
                          <p>
                            <code className="text-danger">
                              {`/news/* https://example.com/blog/:splat 301!`}
                            </code>
                          </p>
                          <p>
                            This would force redirect paths like
                            /news/2004/01/10/my-story to
                            https://example.com/blog/2004/01/10/my-story.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card>
                  <Card.Header>
                    <FaSave className="mb-1" /> Save Redirects to Netlify
                  </Card.Header>
                  <Card.Body className="d-flex flex-column gap-2">
                    <Card.Text className="mb-0">
                      When finished, open the{" "}
                      <a
                        href="https://netlify.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Netlify
                      </a>{" "}
                      site, open Site configuration{" "}
                      <FaAngleRight style={{ marginBottom: 2 }} /> Environment
                      variables, set the environment variable{" "}
                      <code className="text-danger">REDIRECTS</code> to the
                      following value, and trigger a deploy:
                    </Card.Text>
                    <Form.Control
                      ref={redirectsTextAreaRef}
                      as="textarea"
                      rows={3}
                      value={JSON.stringify(redirects)}
                      className="font-monospace"
                      onFocus={() => redirectsTextAreaRef.current?.select()}
                    />
                    <div className="d-flex gap-1">
                      <Button variant="primary" onClick={handleCopy}>
                        {copied ? (
                          "Copied!"
                        ) : (
                          <>
                            <FaCopy className="mb-1" /> Copy
                          </>
                        )}
                      </Button>
                      <Button
                        variant="outline-secondary"
                        onClick={handleImport}
                      >
                        {imported ? "Imported!" : "Import From Clipboard"}
                      </Button>
                    </div>
                    <Card.Text>
                      After your deploy has finished, your redirects will be
                      active. You can assign a domain to the site in Netlify
                      after you confirm the redirects are working as expected.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
