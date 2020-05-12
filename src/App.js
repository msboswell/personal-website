import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Posts from './pages/Posts';
import general from './theme.js';

const useStyles = makeStyles({
  pageContainer: {
    position: 'relative',
    minHeight: '100vh',
  },
  container: {
    padding: '2rem',
    minHeight: '100%',
  },
});

export default () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={general}>
      <div className={classes.pageContainer}>
        <Navbar />
        <Container maxWidth="xl" className={classes.container}>
          <Route exact path="/" component={Home} />
          <Route path="/blog/" component={Posts} />
          <Route path="/contact/" component={Contact} />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
