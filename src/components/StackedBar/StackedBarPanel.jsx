import React, { useState } from 'react';
import './StackedBarPanel.scss'
import Switch from 'react-switch';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const StackedBarPanel = ({ colorType, setColorType, range: { minMaxVal, rangeVal, setRangeVal }, handleClick, handleLabel, labels, hover: { checked, setChecked, checked2, setChecked2 } }) => {
  const btns = ['right', 'left', 'top', 'bottom'];

  const handleSwitch = (nextChecked) => {
    setChecked(nextChecked);
  }

  const handleSwitch2 = (nextChecked) => {
    setChecked2(nextChecked);
  }

  const handleRotate = (e) => {
    const angle = e.target.getAttribute('data-rotate');
    handleClick(angle);
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
        <div className="horizontal-stacked-bar-left">
          <div className="panel-item">
            <h2>{"Rotate Graph"}</h2>
            {btns.map(btn => (
              <button data-rotate={btn} key={btn} onClick={handleRotate}>{btn}</button>
            ))}
          </div>
          <div className="panel-item">
            <h2>{"Color"}</h2>
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
          </div>
          <div className="panel-item">
            <h2>{"Max Value"}</h2>
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
          </div>
          <div className="panel-item">
            <h2>{"Hover"}</h2>
            <Switch 
              onChange={handleSwitch}
              checked={checked}
            />
          </div>
          <div className="panel-item">
            <h2>{"Labels"}</h2>
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
          </div>
          <div className="panel-item">
            <h2>{"Data"}</h2>
            // TODO: dropdown? for csv
          </div>
        </div>
    )
};

export default StackedBarPanel;