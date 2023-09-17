import './HorizontalBarPanel.scss';
import Cell from '../Cell/Cell';
import ToggleButton from '../utils/ToggleButton/ToggleButton';
import GroupButton from '../utils/GroupButton/GroupButton';
import { FileUploader } from "react-drag-drop-files"; // in case, drag & drop file is useful

const HorizontalBarPanel = ({rotateId, rotateButtonGroupCB, setDataCB, toggleCB, 
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
                    rotateButtonGroupCB={rotateButtonGroupCB}
                    rotateId={rotateId}
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
        </div>
    )
};

export default HorizontalBarPanel;