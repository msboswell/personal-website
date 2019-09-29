// components/PostList.js
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import withData from '../lib/apollo';

const GET_POSTS = gql`
	query allPosts($first: Int!, $skip: Int!) {
		allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
			id
			title
			votes
			url
			createdAt
		}
		_allPostsMeta {
			count
		}
	}
`;

const PostList = () => {
	const { loading, error, data } = useQuery(GET_POSTS, {
		variables: { skip: 0, first: 10 },
		notifyOnNetworkStatusChange: true
	});
	if (data && data.allPosts) {
		return (
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
				<p style={{ fontSize: "1.5em" }}>Check out some of my Posts!</p>
				</Grid.Row>
				<Grid.Row>
					{ data.allPosts.map(({ title, votes, id }) => (
						<Grid.Column width={5}>
							<Card
							header={title}
							style={{ minHeight: "100px", padding: "1em" }}
							description={`Votes: ${votes} ID: ${id}`}/>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		);
	}
}

export default withData(PostList);
