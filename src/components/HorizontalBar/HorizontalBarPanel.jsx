import './HorizontalBarPanel.scss';
import Cell from '../Cell/Cell';
import ToggleButton from '../utils/ToggleButton/ToggleButton';

const HorizontalBarPanel = () => {
    const toggleCB = toggleState => {
        // false | true
    }

    return (
        <div className="horizontal-bar-left">
            hello HorizontalBarPanel

            <Cell title={'cell-title'}>
                <ToggleButton 
                    label="Toggle me"
                    toggled={true}
                    onClick={toggleCB}
                />
            </Cell>
        </div>
    )
};

export default HorizontalBarPanel;