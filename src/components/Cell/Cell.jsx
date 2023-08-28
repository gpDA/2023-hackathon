import './Cell.scss'

const Cell = ({title, children,}) => {
    return (
        <div className="cell">
            I am Cell {title}
            {children}
        </div>
    )
};

export default Cell;