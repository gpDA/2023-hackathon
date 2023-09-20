import { useEffect, useState } from 'react'
import './ToggleButton.scss'

const ToggleButton = ({ id, label, toggled, onClick, onChange, value }) => {
    const [isToggled, toggle] = useState(toggled);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(300);


    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled, id)
    }

    useEffect(() => {
        if (id === "min") {
            setMin(-300)
            setMax(0);
        }
    }, [])

    return (
        <>
            <label>
                <div style={{marginBottom: '30px'}}>
                    <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                    <span />
                </div>
                {
                    !isToggled && (id === 'max' || id === 'min')  && 
                    (
                        <div className="input-wrapper">
                            <input style={{width: '30px'}} readonly value={value === -1 ? 0 : value} />
                            <input style={{width: '100px'}} type="range" min={min} max={max} onChange={onChange} value={value} />
                        </div>
                    )
                }               
            </label>

            {isToggled && label}
        </>
    )
}

export default ToggleButton;