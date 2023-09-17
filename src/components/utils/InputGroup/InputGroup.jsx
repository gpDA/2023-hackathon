import { useState } from 'react'
import './InputGroup.scss'

const InputGroup = ({inputs, value, marginInputGroupCB}) => {

    const handleClick = (event, id) => {
        marginInputGroupCB(id, event.target.value);
      };    

    return (
        <form style={{marginTop: '20px'}}>
            {
                inputs.map((ele) => {
                    return (
                        <>
                            <input className='inputName' type="number" value={value} onChange={(event) => handleClick(event, ele)} />
                        </>
                    )
                })
            }
        </form>
      );
}

export default InputGroup;