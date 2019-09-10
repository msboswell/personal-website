// components/Layout.js
import Head from 'next/head';
import { Container } from 'semantic-ui-react';
import Footer from './Footer.js';

export default ({ children }) => (
	<div>
		<Head>
			<title>Miles Boswell</title>
			<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
		</Head>
		<div className="content">
			{children}
		</div>
		<Footer />
	</div>
);
