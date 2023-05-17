import React, {useState} from 'react';
type Props = {
    postAnswer(answer:string):()=>void,
    question:string,
    answers:string[]
}
function QuizCard(props:Props) {

    return (
        <div>
            <h1>{props.question}</h1>
            <button onClick={props.postAnswer(props.answers[0])}> {props.answers[0]}</button>
            <button onClick={props.postAnswer(props.answers[1])}> {props.answers[1]}</button>
            <button onClick={props.postAnswer(props.answers[2])}> {props.answers[2]}</button>
            <button onClick={props.postAnswer(props.answers[3])}> {props.answers[3]}</button>
        </div>
    );
}

export default QuizCard;