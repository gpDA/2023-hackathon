import './App.scss';
import React, { useState } from 'react'
import Bar from "./components/Bar/Bar";
import StackedBar from "./components/StackedBar/StackedBar";
import AreaChart from "./components/AreaChart/AreaChart";
import PieGraph from "./components/PieGraph/PieGraph";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

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
  { label: "Apples", value: 200, diff: 100, value1: 50, diff1: 50  },
  { label: "Bananas", value: 200, diff: 0 },
  { label: "Oranges", value: 50, diff: 150  },
  { label: "Kiwis", value: 150, diff: 50  },
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

  const setData = (file) => {
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
          <Route path='bar' element={<Bar data={data} setDataCB={setData} />}/>
          <Route path='stacked-bar' element={<StackedBar data={STACKED_BAR_CHART_DATA} />}/>
          <Route path='area-chart' element={<AreaChart data={AREA_CHART_DATA} />}/>
          <Route path='pie-graph' element={<PieGraph data={BAR_CHART_DATA} dataKey="label" value="value" />}/>
          {/* route fallback - redirect to the following path for non catchable routh path */}
          <Route
              path="*"
              element={<Navigate to="/2023-hackathon/bar" replace />}
          />          
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {

  return <div style={{
    padding: '0px 0px 0px 320px'
}}>
    <Sidebar />
    <Outlet />
</div>;
}

export default App;
