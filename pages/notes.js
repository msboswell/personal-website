// pages/notes.js
import { Segment, Header } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

export default () => (
	<Layout>
		<Navbar fixed={false} transparent={false} />
		<Segment
			textAlign="center"
			vertical
			style={{ minHeight: "100vh" }}
		>
			<Header as="h1">Notes Blog</Header>
		</Segment>
	</Layout>
);
