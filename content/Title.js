// content/Title.js
import { Header, Button, Icon } from 'semantic-ui-react';

export default () => (
		<Header
			as="h1"
			content="Kindust"
			inverted
			style={{
				fontSize: '4em',
				fontWeight: 'normal',
				marginBottom: 0,
				marginTop: '3em'
			}}/>
		<Header
			as="h2"
			content="Do whatever you want to"
			inverted
			style={{
				fontSize: '1.7em',
				fontWeight: 'normal',
				marginTop: '1.5em'
			}}/>
		<Button primary size="huge">
			Get Started
			<Icon name="right arrow" />
		</Button>
);
