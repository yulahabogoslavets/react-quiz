import React from 'react';
import style from './AnswerItem.module.css';

const AnswerItem = props => {

    const cls = [style.AnswerItem];

    if(props.state) {
        cls.push(style[props.state])
    }

    return(
        <li
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            { props.answer.text }
        </li>
    )
};

export default AnswerItem;