import React from 'react'
import spinner from "../../../icons/spinner.svg";
import spinnerBlack from "../../../icons/spinnerBlack.svg";

const Spinner = (props) => {
    return(
        <img src={props.black ? spinnerBlack : spinner} alt="spinner"></img>
    );
}

export default Spinner;