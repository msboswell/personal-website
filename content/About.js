// content/About.js
import { Segment, Grid, Header } from 'semantic-ui-react';

export default () => (
	<Segment style={{ padding: "8em 0em" }} vertical>
		<Grid container stackable verticalAlign="middle">
			<Grid.Row>
				<Grid.Column width={10}>
					<p style={{ fontSize: "1.33em" }}>Kindust, formerly "Pak", was started in the Spring of 2013 as a game server. Then, in May of 2014, the game server was no longer public, and abandoned by all. Now, Kindust has other things to offer, including hosting services of many types, website creation, programming, and more!  Contact us and we'll see what we can do to help you out.  We'd love to hear feedback!</p>
				</Grid.Column>
				<Grid.Column width={5}>
					<Header
						align="right"
						as="h2"
						style={{ fontSize: "3em" }}
						content="About Me" />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Segment>
);
