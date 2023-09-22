import './Cell.scss'

const Cell = ({title, children,}) => {
    return (
        <div className="cell">
            <div className="title">
                {title}
            </div>
            {children}
        </div>
    )
};

export default Cell;