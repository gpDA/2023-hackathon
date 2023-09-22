import React, { useState } from 'react';
import Switch from 'react-switch';
import Cell from '../Cell/Cell';
import GroupButton from '../utils/GroupButton/GroupButton';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const StackedBarPanel = ({ colorType, setColorType, range: { minMaxVal, rangeVal, setRangeVal }, handleClick, handleLabel, labels, hover: { checked, setChecked, checked2, setChecked2 } }) => {
  const [rotateId, setRotateId] = useState(2);

  const handleSwitch = (nextChecked) => {
    setChecked(nextChecked);
  }

  const handleSwitch2 = (nextChecked) => {
    setChecked2(nextChecked);
  }

  const handleRotate = (index) => {
    const angle = ["right", "top", "left", "bottom"][index];
    handleClick(angle);
    setRotateId(index)
  }

  const onChangeLabel = (e) => {
    const type = e.target.name;
    const value = e.target.value;
    handleLabel(type, value);
  };

  const handleRange = (e) => {
    const value = e.target.value;
    setRangeVal(value);
  }

    return (
        <div className="graph-pannel-container">
          <Cell title={"Rotate Graph"}>
            <GroupButton
              buttons={["right", "top", "left", "bottom"]}
              buttonGroupCB={handleRotate}
              id={rotateId}
            />
          </Cell>
          <Cell title={"Color"}>
            <Dropdown
              options={[
                { value: 'Color-1', label: 'Color-1'},
                { value: 'Color-2', label: 'Color-2'},
                { value: 'Color-3', label: 'Color-3'},
                { value: 'Color-4', label: 'Color-4'},
                { value: 'Color-5', label: 'Color-5'},
                { value: 'Color-6', label: 'Color-6'},
              ]}
              onChange={setColorType}
              value={colorType}
            />
          </Cell>
          <Cell title={"Max Value"}>
            <Switch 
              onChange={handleSwitch2}
              checked={checked2}
            />
            { !checked2 &&
              <input 
                type="range" 
                name="maxValue" 
                min={Math.ceil(minMaxVal)}
                max={Math.ceil(minMaxVal) + 300}
                onChange={handleRange}
                value={rangeVal} 
              />
            }
          </Cell>
          <Cell title={"INTERACTIVE"}>
            <Switch 
              onChange={handleSwitch}
              checked={checked}
            />
          </Cell>
          <Cell title={"Labels"}>
            <div>
              <label>{"xLabel"}</label>
              <input 
                name="xLabel"
                onChange={onChangeLabel}
                type="text" 
                value={labels?.xLabel} 
              />
            </div>
            <div>
              <label>{"yLabel"}</label>
              <input 
                name="yLabel"
                onChange={onChangeLabel}
                type="text" 
                value={labels?.yLabel} 
              />
            </div>
          </Cell>
          <Cell title={"DATA"}>
            // TODO: dropdown? for csv
          </Cell>
        </div>
    )
};

export default StackedBarPanel;