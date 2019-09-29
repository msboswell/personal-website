// components/Footer.js
import {
	Segment,
	Container,
	Grid,
	List,
	Icon,
	Header
} from "semantic-ui-react";
import Link from "next/link";

export default () => (
	<Segment
		inverted
		vertical
		className="footer"
		style={{ padding: "5em 0em" }}
	>
		<Container>
			<Grid divided inverted stackable>
				<Grid.Row>
					<Grid.Column width={3}>
						<Header inverted as="h4" content="Links" />
						<List link inverted>
							<Link href="/tutor"><List.Item as="a">Tutoring</List.Item></Link>
							<Link href="#"><List.Item as="a">Website Creation</List.Item></Link>
							<Link href="#"><List.Item as="a">Projects</List.Item></Link>
							<Link href="/contact"><List.Item as="a">Contact</List.Item></Link>
						</List>
					</Grid.Column>
					<Grid.Column width={3}>
						<Header inverted as="h4" content="Services" />
						<List link inverted>
							<List.Item as="a">Banana Pre-Order</List.Item>
							<List.Item as="a">DNA FAQ</List.Item>
							<List.Item as="a">How To Access</List.Item>
							<List.Item as="a">Favorite X-Men</List.Item>
						</List>
					</Grid.Column>
					<Grid.Column width={7}>
						<Header as="h4" inverted>
						Footer Header
						</Header>
						<p>
							Hey, you reached the bottom of the page! While you're here, why not check out my socials?
						</p>
						<List link inverted horizontal>
							<Link href="https://github.com/msboswell">
								<List.Item as="a">
									<Icon name="github" />
									Github
								</List.Item>
							</Link>
							<List.Item as="a">
								<Icon name="instagram" />
								Instagram
							</List.Item>
							<List.Item as="a">
								<Icon name="twitter" />
								Twitter
							</List.Item>
						</List>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	</Segment>
);
