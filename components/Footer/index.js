import React from 'react';

// Styles
import styles from './styles.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { } = this.state;
        return (<footer className={styles.footer}>
            <div className={[styles.footerColumn, styles.footerDiv].join(' ')}>
                <p>Kyle A. Carter. All Rights Reserved &copy;&nbsp;2019</p>
            </div>
            <nav className={[styles.footerColumn, styles.footerNav].join(' ')}><h2 className={styles.hideVisually}>Footer Nenu</h2><ul className={styles.footerMenu}>
                <li><a href="" className={styles.footerAnchor}>Resume</a></li>
                <li><a href="https://github.com/kylecarter" rel="nofollow" target="_blank" className={styles.footerAnchor}>Github</a></li>
                <li><a href="https://www.linkedin.com/in/kyle-carter-8425a369/" rel="nofollow" target="_blank" className={styles.footerAnchor}>LinkedIn</a></li>
            </ul></nav>
        </footer>);
    }
}
