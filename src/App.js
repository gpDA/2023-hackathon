import './App.scss';
import HorizontalBar from "./components/HorizontalBar";
import VerticalBar from "./components/VerticalBar";
import HorizontalStackedBar from "./components/HorizontalStackedBar";
import VerticalStackedBar from "./components/VerticalStackedBar";
import AreaChart from "./components/AreaChart";
import PieGraph from "./components/PieGraph";

const BAR_CHART_DATA = [
  { label: "Apples", value: 100 },
  { label: "Bananas", value: 200 },
  { label: "Oranges", value: 50 },
  { label: "Kiwis", value: 150 }
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
      component: <VerticalStackedBar />,
      imgSrc: '/vertical-stacked-bar.png',
    },
    {
      id: 'test1',
      component: <HorizontalStackedBar />,
      imgSrc: '/horizontal-stacked-bar.png',
    },     
    {
      id: 'test1',
      component: <AreaChart />,
      imgSrc: '/area-chart.png',
    },
    {
      id: 'test1',
      component: <PieGraph />,
      imgSrc: '/pie-graph.png',
    },               
  ]

  return (
    <div className="wrapper">
      {
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
      }
      
    </div>
  );
}

export default App;
