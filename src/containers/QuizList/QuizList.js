import React, {Component} from "react";
import classes from './QuiList.module.css';
import {NavLink} from "react-router-dom";

class QuizList extends Component {

    renderQuizes() {
        return [1,2,3].map((quiz, index) => {
            return(
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>
                             Test {quiz}
                    </NavLink>

                </li>

            )
        })
    }
    render(){
        return(
            <div className={classes.QuizList}>
                <div>
                    <h1>List of the question</h1>
                    <ul>
                        { this.renderQuizes() }
                    </ul>
                </div>
            </div>
        )
    }
}

export default QuizList;