import './HorizontalBarPanel.scss';
import Cell from '../Cell/Cell';
import ToggleButton from '../utils/ToggleButton/ToggleButton';
import GroupButton from '../utils/GroupButton/GroupButton';
import InputGroup from '../utils/InputGroup/InputGroup';
import { FileUploader } from "react-drag-drop-files"; // in case, drag & drop file is useful

const HorizontalBarPanel = ({
    rotateId, rotateButtonGroupCB, 
    marginInputGroupCB, marginValue, 
    setDataCB}) => {
    const toggleCB = toggleState => {
        // false | true
    }

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

            <Cell title={'margin'}>
                <InputGroup
                    inputs={["right", "top", "left", "bottom"]}
                    marginInputGroupCB={marginInputGroupCB}
                    marginValue={marginValue}
                />
            </Cell>            

            {/* <Cell title={'cell-title'}>
                <ToggleButton 
                    label="Toggle me"
                    toggled={true}
                    onClick={toggleCB}
                />
            </Cell> */}
        </div>
    )
};

export default HorizontalBarPanel;