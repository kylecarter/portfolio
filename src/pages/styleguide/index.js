import Head from 'next/head';

// Page structure
import Page from '../../components/Page';

// Styles
import styles from './styles.css';

export default () => {
    return (<Page className = { styles.page } >
        <Head>
            <title>Styleguide | Kyle A. Carter</title>
        </Head>
        <main id="main-content" className={styles.main} role="main">
            <header className={[styles.header, styles.container].join(' ')}>
                <h1 className={styles.title}>Styleguide</h1>
            </header>
            <article className={styles.article} role="article">

            </article>
        </main>
    </Page>);
}
