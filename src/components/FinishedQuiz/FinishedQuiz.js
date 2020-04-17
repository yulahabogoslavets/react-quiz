import React from 'react';
import style from './FinishedQuiz.module.css';
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) =>{
        if(props.results[key] === 'success') {
            total ++
        }
        return total
    }, 0);

    return(
        <div className={style.FinishedQuiz}>
            <ul>
               { props.quiz.map((quizItem, index) => {
                   const cls = [
                       'fa',
                       props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                       style[props.results[quizItem.id]]
                   ];

                   return (
                       <li key={index}>
                           <strong>{index + 1}</strong>. &nbsp;
                           {quizItem.question}
                           <i className={cls.join(' ')}/>

                       </li>
                   )
               })}
            </ul>
            <p>Richtig {successCount} von {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Repeat</Button>
                <Link to="/">
                    <Button type="success">List mit dem Test</Button>
                </Link>
            </div>
        </div>
    )
};

export default FinishedQuiz;