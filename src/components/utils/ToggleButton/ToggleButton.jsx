import { useEffect, useState } from 'react'
import styles  from './ToggleButton.module.scss'

const ToggleButton = ({ id, label, toggled, onClick, onChange, value }) => {
    const [isToggled, toggle] = useState(toggled);


    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled, id)
    }

    return (
        <>
            <label className={styles['toggleButton']}>
                <div style={{marginBottom: '30px'}}>
                    <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
                    <span />
                </div>
                {
                    !isToggled && (id === 'max' || id === 'min')  && 
                    (
                        <div className={styles['input-wrapper']}>
                            <input readOnly value={value === -1 ? 0 : value} />
                            <input className={styles['range-input']} type="range" min={0} max={300} onChange={onChange} value={value} />
                        </div>
                    )
                }               
            </label>

            {isToggled && label}
        </>
    )
}

export default ToggleButton;