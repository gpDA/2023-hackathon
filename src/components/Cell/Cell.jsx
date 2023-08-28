import './Cell.scss'

const Cell = ({title, children,}) => {
    return (
        <div className="cell">
            <div>
                {title}
            </div>
            {children}
        </div>
    )
};

export default Cell;