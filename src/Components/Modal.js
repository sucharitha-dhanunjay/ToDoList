import "./Modal.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";
const Backdrop = props => {
  return (
    <div className="backdrop" onClick={props.onClick}>  
    </div>
  );
};

const ModalOverlay = props => {
  return <div className="modal">{props.children}</div>;
};

const Modal = props => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay> {props.children} </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
