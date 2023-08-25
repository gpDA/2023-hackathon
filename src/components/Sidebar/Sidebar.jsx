import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Horizontal Bar',
        icon: <i className='bx bx-home'></i>,
        to: '/2023-hackathon/horizontal-bar',
        section: ''
    },
    {
        display: 'Vertical Bar',
        icon: <i className='bx bx-star'></i>,
        to: '/2023-hackathon/vertical-bar',
        section: 'started'
    },
    {
        display: 'Vertical Staked Bar',
        icon: <i className='bx bx-calendar'></i>,
        to: '/2023-hackathon/vertical-stacked-bar',
        section: 'calendar'
    },
    {
        display: 'Horizontal Stacked Bar',
        icon: <i className='bx bx-user'></i>,
        to: '/2023-hackathon/horizontal-stacked-bar',
        section: 'user'
    },
    {
        display: 'Area Chart',
        icon: <i className='bx bx-receipt'></i>,
        to: '/2023-hackathon/area-chart',
        section: 'order'
    },
    {
        display: 'Pie Graph',
        icon: <i className='bx bx-receipt'></i>,
        to: '/2023-hackathon/pie-graph',
        section: 'order'
    },    
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Animate
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;