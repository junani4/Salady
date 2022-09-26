import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/QuickMenu.module.css';

export default function QuickMenu() {
    return(
        <div id="quickMenu">
            <div className={styles.quickMenu}>
                <ul>
                    <li><Link to="/application"><img src="/images/quick_icop01.png" alt="" /></Link></li>
                    <li><Link to="/reservation"><img src="/images/quick_icop02.png" alt="" /></Link></li>
                    <li><img src="/images/_.png" alt="" /></li>
                </ul>
            </div>
        </div>
    )
}