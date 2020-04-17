import React, {Component} from 'react';
import style from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";


class Quiz extends Component {
    state={
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz:[
            {
                question: 'Welche Farbe hat der Himmel?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'schwarz', id:1},
                    {text: 'blau', id:2},
                    {text: 'rot', id:3},
                    {text: 'grün', id:4}
                ]
            },
            {
                question: 'Wie viel month im Year?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '13', id:1},
                    {text: '7', id:2},
                    {text: '12', id:3},
                    {text: '9', id:4}
                ]
            }
        ]
    };

    onAnswerClickHandler = (answerId) => {
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') {
                return
            }
        }

        console.log('Answer Id:', answerId);

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results: results
            });

            const timeout = window.setTimeout(() =>{
                if(this.isQuizFinished()){
                    //console.log('finished')
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results: results
            })
        }
    };

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    };

    render(){
        return(
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Quiz</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                            />
                            :<ActiveQuiz
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                question={this.state.quiz[this.state.activeQuestion].question}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz;