// pages/contact.js
import { Segment, Header, Form as SemanticForm, Button } from 'semantic-ui-react';
// import { withFormik, Form, Field } from 'formik';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const ContactForm = ({
	values,
	touched,
	errors,
	isSubmitting
}) => {

	return (
		<Segment style={{ padding: "2em 4em", width: "50%" }}>
			<SemanticForm>
				<SemanticForm.Field>
					<label>First Name</label>
					<input placeholder="First Name" />
				</SemanticForm.Field>
				<SemanticForm.Field>
					<label>Last Name</label>
					<input placeholder="Last Name" />
				</SemanticForm.Field>
				<Button type="submit">Submit</Button>
			</SemanticForm>
		</Segment>
	);
}

export default () => {
	return (
		<Layout>
			<Navbar fixed={false} transparent={false} />
			<Segment
				textAlign="center"
				vertical
				style={{ minHeight: "100vh" }}
			>
				<Header as="h1">Contact Me</Header>
				<div align="center">
					<ContactForm />
				</div>
			</Segment>
		</Layout>
	);
}
