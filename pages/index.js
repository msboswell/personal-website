// pages/index.js
import {
	Header,
	Button,
	Icon,
	Visibility,
	Segment
} from 'semantic-ui-react';
import { useState } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import About from '../content/About';
import Projects from '../content/Projects';
import '../static/sass/styles.scss';

const MainContent = () => (
	<div style={{ marginLeft: '2em' }}>
		<Header
			as="h1"
			content="Miles Boswell"
			inverted
			style={{
				fontSize: '6em',
				fontWeight: 'normal',
				marginTop: '1em'
			}}/>
		<Header
			as="h2"
			content="Developer | Programmer | Problem Solver"
			inverted
			style={{
				fontSize: '1.7em',
				fontWeight: 'normal',
				margin: '1em 0 1.5em 0'
			}}/>
		<Button primary size="huge">
			Check me out
			<Icon name="right arrow" />
		</Button>
	</div>
);

export default () => {
	const [fixed, setFixed] = useState(false);

	return (
		<Layout>
			<Visibility
				once={false}
				onBottomPassed={() => setFixed(true)}
				onBottomPassedReverse={() => setFixed(false)}
			>
				<Segment
					textAlign="center"
					vertical
					className="bg-img"
					style={{ minHeight: "100vh" }}
				>
					<Navbar fixed={fixed} transparent={!fixed} />
					<MainContent />
				</Segment>
			</Visibility>

			<About />
			<Projects />
		</Layout>
	);
}
