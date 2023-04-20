import React, { Fragment } from 'react';
import ReactDOM  from 'react-dom';
import classes from "./Model.module.css";

const portalElement = document.getElementById("overlays");

const Modeloverlay = (props) => {
    return(
        <div className={classes.model}>
        <div>{props.children}</div>
        </div>
    )
}

const Model = (props) => {
  return (
   <Fragment>{ReactDOM.createPortal(
   <Modeloverlay>{props.children}</Modeloverlay>,
   portalElement)}</Fragment>
  )
}

export default Model