import { useState } from 'react'
import './GroupButton.scss'

const GroupButton = ({rotateId, buttons, rotateButtonGroupCB}) => {

    const handleClick = (event, id) => {
        // setClickedId(id);
        // console.log('>>> printButtonLabel', printButtonLabel);
        rotateButtonGroupCB(id);
      };    

    return (
        <>
            {buttons.map((buttonLabel, i) => (
                <button
                key={i}
                name={buttonLabel}
                onClick={(event) => handleClick(event, i)}
                className={i === rotateId ? "customButton active" : "customButton"}
                >
                {buttonLabel}
                </button>
            ))}
        </>
      );
}

export default GroupButton;