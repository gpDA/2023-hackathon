import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { MdStackedBarChart } from 'react-icons/md';
import { LuAreaChart } from 'react-icons/lu';
import { AiOutlinePieChart } from 'react-icons/ai';
import { GiElephant } from 'react-icons/gi';

const sidebarNavItems = [
    {
        display: 'Bar',
        icon: <BiBarChartAlt2 />,
        to: '/2023-hackathon/bar',
        section: 'bar'
    },
    {
        display: 'Stacked Bar',
        icon: <MdStackedBarChart />,
        to: '/2023-hackathon/stacked-bar',
        section: 'stacked-bar'
    },
    {
        display: 'Area Chart',
        icon: <LuAreaChart />,
        to: '/2023-hackathon/area-chart',
        section: 'area-chart'
    },
    {
        display: 'Pie Graph',
        icon: <AiOutlinePieChart />,
        to: '/2023-hackathon/pie-graph',
        section: 'pie-graph'
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const location = useLocation();

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[2];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath?.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className={styles.sidebar}>
        <div className={styles['sidebar__logo']}>
            <span>Dumbo</span> <GiElephant /> <span>in Dumbo</span>
        </div>
        <div className={styles['sidebar__menu']}>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={activeIndex === index ? `${styles['sidebar__menu__item']} ${styles['active']}`: styles['sidebar__menu__item']}>
                            <div className={styles["sidebar__menu__item__icon"]}>
                                {item.icon}
                            </div>
                            <div className={styles["sidebar__menu__item__text"]}>
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