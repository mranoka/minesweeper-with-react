import React from 'react';
import './Styles.css';

const rules = [
    'The Grid has mines hidden behind some of its buttons;',
    'Your mission - should you choose to accept it - is to safely navigate the grid without triggering any mines;',
    'Navigate the treacherous grid by clicking on all the neutral buttons until the number of turns left until you win is 0;',
    'With each click, the number of escapes you have will increase;',
    'A neutral button will turn green when clicked and a mine will turn a dangerous red;',
    'The number of mines will also be displayed;',
    'Good Luck and tread carefully'
]

const Help = () => {
    let rulesList = rules.map((item, index) => {
        let keySet = Math.random() * index;
        return (
            <>
            <li key={keySet} className='rule-item'>{item}</li>
            </>
        );
    })
    return (
        <div id='help-div'>
            <h1 id='head-help'>Here Are The Rules:</h1>
            <ul>
               {rulesList}
            </ul>
        </div>
    );
}

export default Help;