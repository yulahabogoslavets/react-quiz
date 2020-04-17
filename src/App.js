import React, {Component} from 'react';
import Layout from "./hoc/Loyout/Layout";
import {HashRouter, Route, Switch} from "react-router-dom";
import Quiz from "./containers/Quiz/Quiz";
import Auth from "./containers/Auth/Auth";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";

class App extends Component {
  render(){
    return(
        <HashRouter>
        <Layout>
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/quiz-creator" component={QuizCreator} />
                <Route path="/quiz/:id" component={Quiz} />
                <Route exact path="/" component={QuizList} />
            </Switch>
        </Layout>
        </HashRouter>
    )
  }
}

export default App;
