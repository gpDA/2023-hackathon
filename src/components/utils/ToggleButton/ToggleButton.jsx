import { useState } from 'react'
import './ToggleButton.scss'

const ToggleButton = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(toggled)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <>
            <label>
                <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                <span />
            </label>

            {label}
        </>
    )
}

export default ToggleButton;