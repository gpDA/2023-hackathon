import Cell from '../Cell/Cell';
import RangeInput from '../utils/RangeInput/RangeInput';
import ToggleButton from '../utils/ToggleButton/ToggleButton';
import ColorPicker from '../utils/ColorPicker/ColorPicker';
import GroupButton from '../utils/GroupButton/GroupButton';
import Dropdown from 'react-dropdown';

const AreaChartPanel = ({
    handleRangeInput, curveValue, pointValue, lineWidthValue, pointVerticalShift,
    toggleCB,
    handleColorPick, pointColor, lineColor, fillColor,
    pointShapeButtonGroupCB, pointShapeType,

}) => {
    return (
        <div className="graph-pannel-container">
            <Cell title={'CURVE'}>
                <RangeInput 
                    id="curveArea"
                    handleRangeInput={handleRangeInput}
                    value={curveValue}
                    min={0.1}
                    max={1}
                    step={0.1}
                />
            </Cell>

            <Cell title={'LINE WIDTH'}>
            <RangeInput 
                    id="lineWidth"
                    handleRangeInput={handleRangeInput}
                    value={lineWidthValue}
                    min={1}
                    max={10}
                />
            </Cell>

            <Cell title={'POINT COLOR'}>
                <ColorPicker
                    id='point-color'
                    handleChange={handleColorPick}
                    color={pointColor}
                 />
            </Cell>

            <Cell title={'LINE COLOR'}>
                <ColorPicker
                    id='line-color'
                    handleChange={handleColorPick}
                    color={lineColor}
                 />
            </Cell>            

            <Cell title={'FILL COLOR'}>
                <ColorPicker
                    id='fill-color'
                    handleChange={handleColorPick}
                    color={fillColor}
                 />
            </Cell>

            <Cell title={'POINT SIZE'}>
            <RangeInput 
                    id="pointSize"
                    handleRangeInput={handleRangeInput}
                    value={pointValue}
                    min={1}
                    max={15}
                    step={1}
                />
            </Cell>            

            {/* version 2 - customize its point shape */}
            <Cell title={'POINT SHAPE'}>
                <Dropdown
                options={[
                    { value: 'symbolCircle', label: 'symbolCircle'},
                    { value: 'symbolStar', label: 'symbolStar'},
                    { value: 'symbolTriangle', label: 'symbolTriangle'},
                    { value: 'symbolDiamond2', label: 'symbolDiamond2'},
                    { value: 'symbolSquare', label: 'symbolSquare'},
                ]}
                onChange={pointShapeButtonGroupCB}
                value={pointShapeType}
                />
            </Cell> 

            <Cell title={'POINT SHIFT'}>
                <RangeInput 
                    id="pointShift"
                    handleRangeInput={handleRangeInput}
                    value={pointVerticalShift}
                    min={-15}
                    max={15}
                />
            </Cell>

            <Cell title={'FILL SHADE'}>
                <ToggleButton 
                    id="fill-shade"
                    label="auto"
                    toggled={true}
                    onClick={toggleCB}
                />
            </Cell>            
        </div>
    )
};

export default AreaChartPanel;