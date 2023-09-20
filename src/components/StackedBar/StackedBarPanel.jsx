import React, { useState } from 'react';
import './StackedBarPanel.scss'
import Switch from 'react-switch';


const StackedBarPanel = ({ handleClick, handleLabel, labels, hover: { checked, setChecked } }) => {
  const btns = ['right', 'left', 'top', 'bottom'];

  const handleSwitch = (nextChecked) => {
    setChecked(nextChecked);
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
          </div>
          <div className="panel-item">
            <h2>{"Max Value"}</h2>
          </div>
          <div className="panel-item">
            <h2>{"Min Value"}</h2>
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