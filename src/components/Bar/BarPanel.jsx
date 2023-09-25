import Cell from '../Cell/Cell';
import ToggleButton from '../utils/ToggleButton/ToggleButton';
import GroupButton from '../utils/GroupButton/GroupButton';
import ColorPicker from '../utils/ColorPicker/ColorPicker';

const BarPanel = ({
    rotateId, rotateButtonGroupCB, 
    recColor, interactiveTextColor, handleColorPick,
    setDataCB, toggleCB, 
    maxValue, maxValueCB,
    }) => {

    return (
        <div className="graph-pannel-container">
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