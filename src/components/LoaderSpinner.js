import React from "react";
import { Spinner } from "react-bootstrap";

function LoaderSpinner({ loaderClass }) {
  return (
    <div className={"d-flex justify-content-center " + loaderClass}>
      <Spinner animation="border" />
    </div>
  );
}

export default LoaderSpinner;
