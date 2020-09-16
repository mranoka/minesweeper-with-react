import React from 'react'; 
import './Styles.css';

const TurnsCounter = (props) => {

        return (
            <div>
                <p className='display-text'>{props.turnsLeft}</p>
                <p className='display-text'>{props.turns}</p>
            </div>
        );
    }
export default TurnsCounter; 