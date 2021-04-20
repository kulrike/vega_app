import React from 'react'
import styled from "styled-components";
import Questions from "../questions/Questions";
import {Route} from "react-router-dom";
import Employees from "../employees/Employees";

const ContentWrapper = styled.div`
    margin-top: 15px;
    height: 100%;
    padding: 0 120px;
    width: 100%;
`

const Content = (props) => {
    return(
        <ContentWrapper>
            <Route path="/questions/:postId?" render={ () => <Questions/>}/>
            <Route path="/employees" render={ () => <Employees/>}/>
        </ContentWrapper>
    );
}

export default Content;