import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Prem Predictor</title>
				<meta name="description" content="A Premier League predictor app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Prem Predictor</h1>
			</main>

			<footer className={styles.footer}>Created by Matt Webber</footer>
		</div>
	);
};

export default Home;
