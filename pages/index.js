import React from 'react';
import Head from 'next/head';

// components
import Page from '../components/Page';

// Styles
import styles from './styles.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {} = this.state;
        return (<Page className={styles.page}>
            <Head>
                <title>Home | Kyle A. Carter</title>
            </Head>
            <main id="main-content" className={styles.main} role="main">
                <header className={styles.hero}>
                    <h1 className={styles.title}>Hello World!</h1>
                </header>
            </main>
        </Page>);
    }
}
