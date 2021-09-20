import { FC } from "react";
import { createPortal } from "react-dom";

const ModalPortal: FC = ({ children }) => {
  const element = document.getElementById("modal");

  if (!element) {
    return <div>Can't use modal component</div>;
  }

  return createPortal(children, element);
};

export default ModalPortal;
