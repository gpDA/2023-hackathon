import { useState } from 'react'
import './GroupButton.scss'

const GroupButton = ({id, buttons, buttonGroupCB}) => {

    const handleClick = (event, id) => {
        buttonGroupCB(id);
      };    

    return (
        <>
            {buttons.map((buttonLabel, i) => (
                <button
                key={i}
                name={buttonLabel}
                onClick={(event) => handleClick(event, i)}
                className={i === id ? "customButton active" : "customButton"}
                >
                {buttonLabel}
                </button>
            ))}
        </>
      );
}

export default GroupButton;