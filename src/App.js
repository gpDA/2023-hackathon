import './App.scss';
import HorizontalBar from "./components/HorizontalBar/HorizontalBar";
import VerticalBar from "./components/VerticalBar/VerticalBar";
import HorizontalStackedBar from "./components/HorizontalStackedBar/HorizontalStackedBar";
import VerticalStackedBar from "./components/VeritcalStackedBar/VerticalStackedBar";
import AreaChart from "./components/AreaChart/AreaChart";
import PieGraph from "./components/PieGraph/PieGraph";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, Outlet, Link } from "react-router-dom";

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
  const test = [
    {
      id: 'test',
      component: <HorizontalBar />,
      imgSrc: '/horizontal-bar.png',
    },
    {
      id: 'test1',
      component: <VerticalBar data={BAR_CHART_DATA} />,
      imgSrc: '/vertical-bar.png',
    },
    {
      id: 'test1',
      component: <VerticalStackedBar data={STACKED_BAR_CHART_DATA} />,
      imgSrc: '/vertical-stacked-bar.png',
    },
    {
      id: 'test1',
      component: <HorizontalStackedBar />,
      imgSrc: '/horizontal-stacked-bar.png',
    },     
    {
      id: 'test1',
      component: <AreaChart data={AREA_CHART_DATA} />,
      imgSrc: '/area-chart.png',
    },
    {
      id: 'test1',
      component: <PieGraph data={BAR_CHART_DATA} dataKey="label" value="value"/>,
      imgSrc: '/pie-graph.png',
    },               
  ]

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/horizontal-bar' element={<HorizontalBar />}/>
          <Route path='/vertical-bar' element={<VerticalBar data={BAR_CHART_DATA} />}/>
          <Route path='/vertical-stacked-bar' element={<VerticalStackedBar data={STACKED_BAR_CHART_DATA}  />}/>
          <Route path='/horizontal-stacked-bar' element={<HorizontalStackedBar />}/>
          <Route path='/area-chart' element={<AreaChart data={AREA_CHART_DATA} />}/>
          <Route path='/pie-graph' element={<PieGraph data={BAR_CHART_DATA} dataKey="label" value="value" />}/>
        </Route>
      </Routes>
      {/* {
        test.map((el) => (
          <div className="box">
            <div className="left-box">
              <img src={process.env.PUBLIC_URL + el.imgSrc} />  
            </div>
            <div className="right-box">
              {el.component}
            </div>
            
          </div>
        )
        )
      } */}
      
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
