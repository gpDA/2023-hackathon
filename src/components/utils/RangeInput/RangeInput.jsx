import styles  from './RangeInput.module.scss'

const RangeInput = ({ id, handleRangeInput, step = 1, value, min, max }) => {
    

    return (
        <div className={styles['input-wrapper']}>
            <input style={{width: '30px'}} readOnly value={value === -1 ? 0 : value} />
            <input style={{width: '100px'}} type="range" step={step} min={min} max={max} onChange={(e) => handleRangeInput(e, id)} value={value} />
        </div>
    )
}

export default RangeInput;