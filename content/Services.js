// content/Services.js
import { Segment, Grid, Card } from 'semantic-ui-react';

export default () => (
	<Segment style={{ padding: "8em 0em" }} vertical>
		<Grid container stackable verticalAlign="middle">
			<Grid.Row>
			<p style={{ fontSize: "1.5em" }}>All of our products and services are unique, just like you!</p>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={5}>
					<Card
						header="Hosting"
						style={{ minHeight: "100px", padding: "1em" }}
						description="We can host almost anything - we have two servers available for use!  One server is strictly web, and the other can run a variety of Linux distributions." />
				</Grid.Column>
				<Grid.Column width={5}>
					<Card
						header="Website Design"
						style={{ minHeight: "100px", padding: "1em" }}
						description="Kindust can design and/or develop a website just for you! Rates and prices will vary between projects." />
				</Grid.Column>
				<Grid.Column width={5}>
					<Card
						header="Application Development"
						style={{ minHeight: "100px", padding: "1em" }}
						description="Kindust can make apps or software.  We can only make Android apps as of now.  Rates and prices will vary" />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</Segment>
);
