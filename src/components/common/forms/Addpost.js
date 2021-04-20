import React from 'react'
import {Field, reduxForm} from "redux-form";

const Addpost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="input" name="question" type="text" placeholder="Enter your question or case"></Field>
            <Field component="input" name="answer" type="text" placeholder="Enter answer"></Field>
            <button>Public</button>
        </form>
    );
}

const AddpostForm = reduxForm({form: "addpost"})(Addpost)

export default AddpostForm;