import styles from './BubblePlot.module.scss';

const BubblePlotPanel = ({legendMoveFlag, setLegendMoveFlag}) => {
    return (
        <div className="graph-pannel-container">

        <label>
            <input
            type="checkbox"
            checked={legendMoveFlag}
            onChange={() => setLegendMoveFlag(!legendMoveFlag)}
            />
            Have you tried to move legend over?
        </label>
        </div>
    )
};

export default BubblePlotPanel;