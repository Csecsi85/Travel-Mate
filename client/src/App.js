import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto/400.css';
import 'fontsource-roboto/500.css';
import 'fontsource-roboto/300.css';
import 'fontsource-roboto/700.css';

const App = () => (
	<Fragment>
		<CssBaseline />
		<Navbar />
	</Fragment>
);

export default App;
