import copy from "copy-to-clipboard";
import { Button, Form } from "react-bootstrap";
import { DivProps } from "react-html-props";
import { FaCheck, FaCopy } from "react-icons/fa";
import { useMomentaryBool } from "react-use-precision-timer";

export interface RedirectCopierProps extends DivProps {
  redirect: string;
}

export const RedirectCopier = ({ redirect, ...props }: RedirectCopierProps) => {
  const [copied, toggleCopied] = useMomentaryBool(false, 1500);

  const handleCopy = () => {
    copy(redirect);
    toggleCopied();
  };

  return (
    <div className="d-flex flex-column gap-1">
      <div className="d-flex gap-1">
        <Form.Control
          type="text"
          value={redirect}
          className="font-monospace text-primary"
          style={{ background: "#FAFAFF" }}
        />
        <div>
          <Button
            variant="outline-primary"
            className="px-3"
            onClick={handleCopy}
          >
            {copied ? (
              <FaCheck className="mb-1" />
            ) : (
              <FaCopy className="mb-1" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
