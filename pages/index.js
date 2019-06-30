import React from 'react';

// Page structure
import Page from './_page';

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
            <main id="main-content" className={styles.main}>
                <header className={styles.hero}>
                    <h1 className={styles.title}>Hello World!</h1>
                </header>
            </main>
        </Page>);
    }
}
