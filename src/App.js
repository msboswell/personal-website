import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar.js';
import Footer from './footer.js';
import Home from './home.js';
import Posts from './posts.js';
import Contact from './contact.js';
import { Container } from '@material-ui/core';

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import general from './theme.js';

const useStyles = makeStyles({
	pageContainer: {
		position: 'relative',
		minHeight: '100vh'
	},
	container: {
		padding: '2rem',
		minHeight: '100%',
	}
});

export default () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={general}>
			<div className={classes.pageContainer}>
				<Navbar />
					<Container maxWidth="xl" className={classes.container}>
						<Route exact path="/" component={Home}	/>
						<Route path="/blog" component={Posts}	/>
						<Route path="/contact" component={Contact}	/>
					</Container>
				<Footer />
			</div>
		</ThemeProvider>
	);
}
