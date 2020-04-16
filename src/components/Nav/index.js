import React from 'react';
import Link from 'next/link';

// Styles
import styles from './styles.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        const { open } = this.state;
        return (<nav id="main-menu" className={[styles.nav, open ? styles.navOpen : ''].join(' ').trim()}><h2 className={styles.hideVisually}>Main Nenu</h2>
            <Link href="#main-menu"><a className={styles.naviconContainer} onClick={this.toggle} onTouchEnd={this.toggle}><img class={styles.navicon} src="/static/bars.svg" alt="nav icon" /><span className={styles.hideVisually}>Toggle Main Menu</span></a></Link>
            <ul className={styles.navMenu}>
                <li className={styles.navClose}><Link href="#main-content"><a className={styles.closeiconContainer} onClick={this.toggle} onTouchEnd={this.toggle}><img class={styles.closeicon} src="/static/close.svg" alt="close icon" /><span className={styles.hideVisually}>Toggle Main Menu</span></a></Link></li>
                <li><Link href="/"><a className={[styles.navAnchor, styles.logoContainer].join(' ')}><img class={styles.logo} src="/static/logo.svg" alt="KC" /> Kyle A. Carter</a></Link></li>
                <li><a href="" className={styles.navAnchor}>Resume</a></li>
                <li><a href="https://github.com/kylecarter" rel="nofollow" target="_blank" className={styles.navAnchor}>Github</a></li>
                <li><a href="https://www.linkedin.com/in/kyle-carter-8425a369/" rel="nofollow" target="_blank" className={styles.navAnchor}>LinkedIn</a></li>
            </ul>
        </nav>);
    }

    toggle(event) {
        event.preventDefault();
        this.setState({
            open: !this.state.open
        });
    }
}
