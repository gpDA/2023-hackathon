import Cell from '../Cell/Cell';
import ToggleButton from '../utils/ToggleButton/ToggleButton';
import GroupButton from '../utils/GroupButton/GroupButton';
import ColorPicker from '../utils/ColorPicker/ColorPicker';
import styles from './Bar.module.scss';

const BarPanel = ({
    rotateId, rotateButtonGroupCB, 
    recColor, interactiveTextColor, handleColorPick,
    toggleCB, 
    maxValue, maxValueCB,
    }) => {

    return (
        <div className="graph-pannel-container">

            <Cell title={'ROTATE'}>
                <GroupButton
                    buttons={["right", "top", "left", "bottom"]}
                    buttonGroupCB={rotateButtonGroupCB}
                    id={rotateId}
                />
            </Cell>

            <Cell title={'MAX VALUE'}>
                <ToggleButton 
                    id="max"
                    label="auto"
                    toggled={true}
                    onClick={toggleCB}
                    onChange={maxValueCB}
                    value={maxValue}
                />
            </Cell>

            <Cell title={'BAR COLOR'}>
                <ColorPicker
                    id='rec-color'
                    handleChange={handleColorPick}
                    color={recColor}
                 />
            </Cell>
            

            <Cell title={'IS INTERACTIVE'}>
                <ToggleButton 
                    id="interactive"
                    label="is interactive"
                    toggled={true}
                    onClick={toggleCB}
                />
            </Cell>
            <Cell title={'HOVER TEXT COLOR'}>
                <ColorPicker
                    id='interactive-text-color'
                    handleChange={handleColorPick}
                    color={interactiveTextColor}
                 />
            </Cell>                        
        </div>
    )
};

export default BarPanel;