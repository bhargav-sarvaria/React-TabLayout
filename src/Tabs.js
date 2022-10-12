import classes from './tabs.module.css';
import { useState, useRef } from 'react';

const DUMMY_TABS = [{
    key: "1",
    title: "🎬 Movies",
    contentTitle: "This is Movies section",
    active: 1
}, {
    key: "2",
    title: "📚 Books",
    contentTitle: "This is Books section",
    active: 0
}, {
    key: "3",
    title: "📱 Apps",
    contentTitle: "This is Apps section",
    active: 0
}]

const Tabs = (props) => {

    const [recTabs, setRecTabs] = useState(DUMMY_TABS);
    const indicator = useRef();

    const tabClick = (tabKey) => {

        setRecTabs((exTabs) => {
            return exTabs.map((tab) => {
                return {
                    ...tab,
                    active: tabKey === tab.key ? 1 : 0
                }
            });
        });

        indicator.current.style.left = `calc(calc(100% / 3) * ${recTabs.findIndex((tab) => tab.key === tabKey)})`;
    }

    return (
        <div className={classes.tabs}>
            <div className={classes.tabHeader}>
                {recTabs.map((tab) => {
                    return (
                        <div onClick={() => tabClick(tab.key)} key={tab.key} className={tab.active ? classes.active : ''}>
                            <p>{tab.title}</p>
                        </div>
                    );

                })}
            </div>
            <div ref={indicator} className={classes.tabIndicator}></div>
            <div className={classes.tabBody}>

                {recTabs.map((tab) => {
                    return (
                        <div key={tab.key} className={tab.active ? classes.active : ''}>
                            <h2>{tab.contentTitle}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Tabs;