import './HorizontalBarPanel.scss';
import Cell from '../Cell/Cell';
import ToggleButton from '../utils/ToggleButton/ToggleButton';
import GroupButton from '../utils/GroupButton/GroupButton';
import ColorPicker from '../utils/ColorPicker/ColorPicker';
import { FileUploader } from "react-drag-drop-files"; // in case, drag & drop file is useful

const HorizontalBarPanel = ({
    rotateId, rotateButtonGroupCB, 
    recColor, handleColorPick,
    setDataCB, toggleCB, 
    maxValue, maxValueCB,
    minValue, minValueCB,
    }) => {

    return (
        <div className="horizontal-bar-left">
            {/* in case, drag & drop file is useful */}
            {/* <Cell title={'cell-title'}>
                <FileUploader handleChange={setDataCB} name="files" types={["JPG", "PNG", "GIF"]} />
            </Cell>             */}

            <Cell title={'cell-title'}>
                <button
                    onClick={() => setDataCB('test')}
                >
                    I am test button
                </button>
            </Cell>

            <Cell title={'rotate'}>
                <GroupButton
                    buttons={["right", "top", "left", "bottom"]}
                    buttonGroupCB={rotateButtonGroupCB}
                    id={rotateId}
                />
            </Cell>

            <Cell title={'maxValue'}>
                <ToggleButton 
                    id="max"
                    label="auto"
                    toggled={true}
                    onClick={toggleCB}
                    onChange={maxValueCB}
                    value={maxValue}
                />
            </Cell>

            <Cell title={'minValue'}>
                <ToggleButton 
                    id="min"
                    label="auto"
                    toggled={true}
                    onClick={toggleCB}
                    onChange={minValueCB}
                    value={minValue}
                />
            </Cell>

            <Cell title={'change color'}>
                <ColorPicker
                    id='rec-color'
                    handleChange={handleColorPick}
                    color={recColor}
                 />
            </Cell>

            <Cell title={'interactive'}>
                <ToggleButton 
                    id="interactive"
                    label="is interactive"
                    toggled={true}
                    onClick={toggleCB}
                />
            </Cell>
            <Cell title={'interactiveTextColor'}>
                <ToggleButton 
                    id="interactiveTextColor"
                    label="is interactiveTextColor"
                    toggled={true}
                    onClick={toggleCB}
                />
            </Cell>
            <Cell title={'interactiveLine'}>
                <ToggleButton 
                    id="interactiveLine"
                    label="is interactiveLine"
                    toggled={true}
                    onClick={toggleCB}
                />
            </Cell>                        
        </div>
    )
};

export default HorizontalBarPanel;