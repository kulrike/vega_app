import React from 'react'
import styled from "styled-components"
import { connect } from "react-redux";
import { AuthMeThunk } from "../../redux/auth-reducer";
import menu from "../../icons/bars-solid.svg"
import {toggleMenuVisibility} from "../../redux/menu-reducer";
import Spinner from "../common/spinner/Spinner"

const AppBarStyled = styled.div`
    height: 50px;
    background-color: #190773;
    color: white;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const AppBarIetmsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    div{
        display: flex;
        align-items: center;
        margin: 0 5px 0 0;
    }
    img{
        width: 20px;
        height: 20px;
    }
`

const Menu = styled.div`
    width: 30px;
    height: 100%;
    cursor: pointer;
        img {
        display: block;
        margin: 0 auto;
        width: 25px;
        height: 25px;
        }
`

const AppBar = (props) => {
    return (
        <AppBarStyled>
            <AppBarIetmsWrapper>
                {props.auth.isAuth ? <Menu onClick={() =>props.toggleMenuVisibility(!props.menu)}><img src={menu} alt="menu-button"/></Menu> : null}
                <div>Credit Europe Bank</div>
                {props.auth.isAuth ? <div>Search</div> : null}
            </AppBarIetmsWrapper>
            <AppBarIetmsWrapper>
                {props.auth.isAuth ? 
                <div><div>{props.auth.userName}</div><div>Logout</div></div> 
                : <div><Spinner/>Initializing</div>}
            </AppBarIetmsWrapper>
        </AppBarStyled>
    );
}

class AppBarClass extends React.Component {
    componentDidMount() {
            this.props.AuthMeThunk();
    }
    render() {
        return <AppBar {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        menu: state.menu.hidden,
        isFetching: state.auth.isFetching
    }
}

const AppBarCont = connect(mapStateToProps, { AuthMeThunk, toggleMenuVisibility })(AppBarClass);

export default AppBarCont;