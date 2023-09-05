import './App.scss';
import React, { useMemo, useEffect, useCallback, useRef, useState } from 'react'
import HorizontalBar from "./components/HorizontalBar/HorizontalBar";
import VerticalBar from "./components/VerticalBar/VerticalBar";
import HorizontalStackedBar from "./components/HorizontalStackedBar/HorizontalStackedBar";
import VerticalStackedBar from "./components/VeritcalStackedBar/VerticalStackedBar";
import AreaChart from "./components/AreaChart/AreaChart";
import PieGraph from "./components/PieGraph/PieGraph";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const defaultData = [
  { Country: 'US', Value: 100 },
  { Country: 'S. Korea', Value: 85 },
  { Country: 'Italy', Value: 72 },
  { Country: 'Japan', Value: 80 },
]

const BAR_CHART_DATA = [
  { label: "Apples", value: 100 },
  { label: "Bananas", value: 200 },
  { label: "Oranges", value: 50 },
  { label: "Kiwis", value: 150 }
];

const STACKED_BAR_CHART_DATA = [
  { label: "Apples", value: 100, diff: 100, max: 200 },
  { label: "Bananas", value: 200, diff: 0, max: 200 },
  { label: "Oranges", value: 50, diff: 150, max: 200  },
  { label: "Kiwis", value: 150, diff: 50, max: 200  }
];

const AREA_CHART_DATA = [
  { data: "2001", value: 100 },
  { data: "2002", value: 150 },
  { data: "2003", value: 100 },
  { data: "2004", value: 400 },
  { data: "2005", value: 1070 },
  { data: "2006", value: 700 }
];


function App() {

  const [data, setDataCB] = useState(defaultData);

  // TADA: WORKING NOW - drag and drop - make 
  const setData = (file) => {
    console.log('setData', file)
    setDataCB(
      [
        { Country: 'USA', Value: 80 },
        { Country: 'S. Korea', Value: 85 },
        { Country: 'Italy', Value: 72 },
        { Country: 'Japan', Value: 80 },
      ]
    )
  }  

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/2023-hackathon" element={<Layout />}>
          <Route path='horizontal-bar' element={<HorizontalBar data={data} setDataCB={setData} />}/>
          <Route path='vertical-bar' element={<VerticalBar data={BAR_CHART_DATA} />}/>
          <Route path='vertical-stacked-bar' element={<VerticalStackedBar data={STACKED_BAR_CHART_DATA}  />}/>
          <Route path='horizontal-stacked-bar' element={<HorizontalStackedBar data={STACKED_BAR_CHART_DATA}/>}/>
          <Route path='area-chart' element={<AreaChart data={AREA_CHART_DATA} />}/>
          <Route path='pie-graph' element={<PieGraph data={BAR_CHART_DATA} dataKey="label" value="value" />}/>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return <div style={{
    padding: '50px 0px 0px 370px'
}}>
    <Sidebar />
    <Outlet />
</div>;
}

export default App;
