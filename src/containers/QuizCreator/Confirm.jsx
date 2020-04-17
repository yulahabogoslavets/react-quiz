import React, {Component} from "react";
import Button from "../../components/UI/Button/Button";
import style from "./FormQuestion.module.css";

class Confirm extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    createQuizHandler = (event) => {
        event.preventDefault();
    };

    render() {
        const {values: {question, answer1, answer2, answer3}} = this.props;
        return (
            <div className={style.QuizCreator}>
                <div>
                <ul>
                    <li>
                        Question: <span>{question}</span>
                    </li>
                    <li>
                        Answer 1: <span>{answer1}</span>
                    </li>
                    <li>
                        Answer 2: <span>{answer2}</span>
                    </li>
                    <li>
                        Answer 3: <span>{answer3}</span>
                    </li>

                </ul>

                <Button
                    onClick={this.back}
                    type="primary"
                >
                    back
                </Button>
                    <Button
                        onClick={this.createQuizHandler}
                        type="success"
                    >
                        Confirm
                    </Button>
                </div>

           </div>
        );
    }
}

export default Confirm;