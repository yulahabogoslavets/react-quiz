import React, {Component} from "react";
import FormQuestion from "./FormQuestion";
import Confirm from "./Confirm";

class QuizCreator extends Component {
    state = {
        step: 1,
        question: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    };

    render() {
        const {step} = this.state;
        const {question, answer1, answer2, answer3} = this.state;
        const values = {question, answer1, answer2, answer3};


        switch(step) {
            case 1:
                return (
                    <FormQuestion
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

                case 2:
                return (
                <Confirm
                prevStep={this.prevStep}
                values={values}
                />

                );

                default: return <h1>form</h1>;

            }

        }


}

export default QuizCreator;