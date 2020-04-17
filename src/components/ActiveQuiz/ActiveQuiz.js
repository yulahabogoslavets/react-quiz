import React from 'react';
import style from './ActiveQuiz.module.css';
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz=(props) =>{
    return(
    <div className={style.ActiveQuiz}>
        <p className={style.Question}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>

            <small>{props.answerNumber} von {props.quizLength}</small>
        </p>

        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)};

export default ActiveQuiz;

