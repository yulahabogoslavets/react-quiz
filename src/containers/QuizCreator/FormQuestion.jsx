import React, {Component} from "react";
import style from './FormQuestion.module.css';
import Button from "../../components/UI/Button/Button";
import classes from "../../components/UI/Button/Button.module.css";
import Select from "../../components/UI/Select/Select";
import Input from "../../components/UI/Input/Input";

class FormQuestion extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render(){
        return(
            <div className={style.QuizCreator}>
                <div>
                     <h1>Create test</h1>
                    <form onSubmit={this.submitHandler}>

                <input
                    type='text'
                    placeholder='question'
                    onChange={this.props.handleChange('question')}
                    defaultValue={this.props.values.question}
                />
                <br/>
                <input
                    type='text'
                    placeholder='answer1'
                    onChange={this.props.handleChange('answer1')}
                    defaultValue={this.props.values.answer1}
                />
                <br/>
                <input
                    type='text'
                    placeholder='answer2'
                    onChange={this.props.handleChange('answer2')}
                    defaultValue={this.props.values.answer2}
                />
                <br/>
                <input
                        type='text'
                        placeholder='answer3'
                        onChange={this.props.handleChange('answer3')}
                        defaultValue={this.props.values.answer3}
                />
                <br/>

                <Button
                    onClick={this.continue}
                     type="primary"
                >
                   Create test
                </Button>
                        
                    </form>
                </div>
            </div>
        )
    }

}

export default FormQuestion;