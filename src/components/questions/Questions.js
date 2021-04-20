import React from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import QuestionCard from "./QuestionCard";
import { getQuestions } from "../../redux/questions-reducer";
import AddpostForm from '../common/forms/Addpost';
import Spinner from "../common/spinner/Spinner";
import { fetching } from "../../redux/questions-reducer";
import { addPost } from "../../redux/questions-reducer";
import { withRouter } from "react-router-dom"
import { setCategory } from "../../redux/questions-reducer";



const CategoriesWrapper = styled.div`
    margin: 0 auto;
    span {
        margin: 0 10px;
        font-weight: bold;
        cursor: pointer;
    }
`

const QuestionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 0 50px 0;
`


const Questions = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData);
    }

    const setCategory = (num) => {
        props.fetching();
        props.setCategory(num);
        props.getQuestions(num);
    }

    return (
        <div>
            {props.isAbleToModerate ? <AddpostForm onSubmit={onSubmit} /> : null}
            <CategoriesWrapper>
                {props.questions.categories.map(c => <span onClick={() => setCategory(c.id)} key={c.id}>{c.name}</span>)}
            </CategoriesWrapper>
            {props.isFetching ? <Spinner black />
                :
                <QuestionsWrapper>
                    {props.questions.posts.map(p => <QuestionCard key={p.id} id={p.id} title={p.title} body={p.body} />)}
                </QuestionsWrapper>
            }

        </div>
    );
}

class QuestionsClass extends React.Component {
    componentDidMount() {
        this.props.fetching();
        this.props.getQuestions(this.props.category);
    }
    render() {
        return (<Questions {...this.props} />);
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.questions,
        isAbleToModerate: state.auth.isAbleToModerate,
        isFetching: state.questions.isFetching,
        category: state.questions.category
    }
}

const withRouterQuestionClass = withRouter(QuestionsClass);

const QuestionsContainer = connect(mapStateToProps, { getQuestions, fetching, addPost, setCategory })(withRouterQuestionClass);

export default QuestionsContainer;