import React from 'react';
import './Styles.css';

const MineCounter = (props) => {
    return (
        <div>
            <p className='display-text'>{props.mines}</p>
        </div>
    );
}

export default MineCounter;