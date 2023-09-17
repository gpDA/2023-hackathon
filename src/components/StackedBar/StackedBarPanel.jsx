import './StackedBarPanel.scss'

const StackedBarPanel = ({ handleClick }) => {
  const btns = ['right', 'left', 'top', 'bottom'];

  const handleRotate = (e) => {
    const angle = e.target.getAttribute('data-rotate');
    handleClick(angle);
  }
    return (
        <div className="horizontal-stacked-bar-left">
          <div>
            {btns.map(btn => (
              <button data-rotate={btn} key={btn} onClick={handleRotate}>{btn}</button>
            ))}
          </div>
        </div>
    )
};

export default StackedBarPanel;