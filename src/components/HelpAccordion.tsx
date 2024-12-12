import classNames from "classnames";
import { Accordion, AccordionProps, Alert, Card, Form } from "react-bootstrap";
import { FaExclamationTriangle, FaQuestionCircle } from "react-icons/fa";
import { useLocalStorage } from "react-storage-complete";
import { RedirectCopier } from "./RedirectCopier";

export interface HelpAccordionProps extends AccordionProps {}

export const HelpAccordion = ({ ...props }: HelpAccordionProps) => {
  const [enteredDomainName, setEnteredDomainName] = useLocalStorage(
    "targetDomain",
    "example.com"
  );

  const domainName = (enteredDomainName ?? "").trim() || "example.com";
  const allTrafficRedirect = `/* https://${domainName}/:splat 301!`;
  const specificPageRedirect = `/* https://${domainName}/my/page 301!`;
  const splatExampleRedirect = `/news/* https://${domainName}/blog/:splat 301!`;

  return (
    <Accordion
      {...props}
      className={classNames(props.className)}
      style={{ ...props.style }}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="d-flex align-items-center gap-2">
            <FaQuestionCircle />
            Help &amp; Examples{" "}
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-column gap-3">
            <Alert variant="info" className="mb-0">
              <p>
                Here are some common example redirects that may be helpful to
                you. You can enter your target domain below to make it easy to
                copy the examples.
              </p>
              <p className="mb-0">
                You can always refer to the{" "}
                <a
                  href="https://docs.netlify.com/routing/redirects/redirect-options/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentation
                </a>{" "}
                for a more advanced configuration.
              </p>
            </Alert>
            <Card>
              <Card.Header>Enter your target domain</Card.Header>
              <Card.Body className="d-flex flex-column gap-2">
                <Form.Control
                  type="text"
                  placeholder="Enter a domain"
                  value={`${enteredDomainName}`}
                  onChange={(e) => setEnteredDomainName(e.target.value)}
                  className="font-monospace"
                />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Redirect all traffic to another domain</Card.Header>
              <Card.Body className="d-flex flex-column gap-2">
                <p className="mb-0">
                  To permanently redirect all traffic to another domain while
                  preserving links, use the following redirect:
                </p>
                <RedirectCopier redirect={allTrafficRedirect} />
                <p className="mb-0">
                  This will force redirect all paths to {domainName}, and is a
                  common use case for Netlify Domain Redirector.
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Redirect all traffic to a specific page</Card.Header>
              <Card.Body className="d-flex flex-column gap-2">
                <p className="mb-0">
                  To permanently redirect all traffic to a specific page, use
                  the following redirect:
                </p>
                <RedirectCopier redirect={specificPageRedirect} />
                <p className="mb-0">
                  This will force redirect all traffic to the page https://
                  {domainName}/my/page.
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>How to use splats</Card.Header>
              <Card.Body className="d-flex flex-column gap-2">
                <p className="mb-0">
                  An asterisk indicates a splat that will match anything that
                  follows it. You can use the splat in your redirects, like
                  this:
                </p>
                <RedirectCopier redirect={splatExampleRedirect} />
                <p className="mb-0">
                  This would redirect paths like /news/
                  {new Date().getFullYear()}/01/10/my-story to https://
                  {domainName}/blog/{new Date().getFullYear()}/01/10/my-story.
                </p>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Redirect status codes and forced redirects
              </Card.Header>
              <Card.Body className="d-flex flex-column gap-2">
                <p className="mb-0">
                  The two most common{" "}
                  <a
                    href="https://docs.netlify.com/routing/redirects/redirect-options/#http-status-codes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTTP status codes
                  </a>{" "}
                  used for redirects are 301 Moved Permanently, and 302
                  Found/Moved Temporarily.
                </p>
                <p className="mb-0">
                  If you use a bang <code className="text-danger">!</code> after
                  the status code, the redirect will be forced, meaning none of
                  the pages in the Netlify site matching the URL will be used
                  (such as this setup page at{" "}
                  <code className="text-danger">/index.html</code>).
                </p>
                <RedirectCopier redirect={allTrafficRedirect} />
                <Alert variant="warning" className="mb-0">
                  <p className="d-flex gap-2 mb-0 fw-bold">
                    <div className="mt-0 me-1 d-none d-sm-block">
                      <FaExclamationTriangle className="fs-5" />
                    </div>
                    You will most likely want to force your redirects so that
                    this setup page and its assets are no longer served. To do
                    so, be sure to use ! after your redirect codes.
                  </p>
                </Alert>
              </Card.Body>
            </Card>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
