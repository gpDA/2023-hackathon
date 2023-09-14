import { useState } from 'react'
import './InputGroup.scss'

const InputGroup = ({inputs, marginValue, marginInputGroupCB}) => {

    const handleClick = (event, id) => {
        // setClickedId(id);
        // console.log('')
        // console.log('>>> printButtonLabel', printButtonLabel);
        marginInputGroupCB(id, event.target.value);
      };    

    return (
        <form>
            {
                inputs.map((ele) => {
                    return (
                        <>
                            <label>{ele}:
                            <input className='inputName' type="number" value={marginValue[ele]} onChange={(event) => handleClick(event, ele)} />
                            </label>                        
                        </>
                    )
                })
            }
        </form>
      );
}

export default InputGroup;