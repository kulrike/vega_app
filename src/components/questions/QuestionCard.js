import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const QuestionCardWrapper = styled.div`
    border: 2px solid blue;
    border-radius: 5px;
    margin: 15px;
    width: 230px;
    height: 180px;
    padding: 0;
    hr{
        margin: 0;
    }
    a{
        text-decoration: none;
    }
`

const Question = styled.div`
    height: 50px;
    overflow: auto;
    color: white;
    background-color: black;
    text-align: left;
    padding-left: 2px;
`

const Answer = styled.div`
    height: 127px;
    overflow: auto;
    font-weight: bold;
    text-align: right;
    padding-right: 2px;
`

const QuestionCard = (props) => {
    return(
        <QuestionCardWrapper>
            <NavLink to={`/questions/${props.id}`}><Question>{props.title}</Question></NavLink>
            <hr></hr>
            <Answer>{props.body}</Answer>
        </QuestionCardWrapper>
    );
}

export default QuestionCard;