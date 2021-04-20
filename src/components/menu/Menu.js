import React from 'react'
import styled, {css, keyframes} from "styled-components";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom"

const swipeIn = keyframes`
    from {
        left: -100px;
    }
    to {
        left: 0px;
    }
`

const swipeOut = keyframes`
from {
    left: 0px;
}
to {
    left: -100px;
}
`

const swipeInAnim = () =>
    css`
    ${swipeIn} 0.5s ease;
    left: 0px;
`

const swipeOutAnim = () =>
    css`
    ${swipeOut} 0.5s ease;
    left: -102px;
`


const MenuWrapper = styled.div`
    width: 100px;
    position: fixed;
    animation: ${props => props.isHidden ? swipeOutAnim : swipeInAnim};
    height: 100%;
    background-color: rgba(23, 17, 212, 0.8);
    div {
        a{
        color: white;
        text-decoration: none;
        }
    }
    border: 1px solid black;
`

const Menu = (props) => {
    return(
        <MenuWrapper isHidden={props.hidden}>
            <div><NavLink to="/questions">Questions</NavLink></div>
            <div><NavLink to="/employees">Employees</NavLink></div>
            <div><NavLink to="/documents">Documents</NavLink></div>
        </MenuWrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        hidden: state.menu.hidden
    }
}

const MenuContainer = connect(mapStateToProps, {} )(Menu);

export default MenuContainer;