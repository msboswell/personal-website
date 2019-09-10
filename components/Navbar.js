// components/Header.js
import {
	Menu,
	Container,
	Image,
	Button,
	Dropdown,
	Header,
	Icon,
	Segment,
	Visibility
} from 'semantic-ui-react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = ({ fixed, transparent }) => {
	const { pathname } = useRouter();

	const fmtClass = (route) => (route === pathname) ? "active-link" : ""

	let background = "black";
	if (transparent) {
		background = !fixed ? "transparent" : "black";
	}

	return (
		<Menu
			fixed={fixed ? "top" : null}
			size="large"
			inverted
			borderless
			style={{ background }}
		>
			<Container style={{ marginBottom: "0.5rem" }}>
				<Link href="/">
					<Menu.Item as="a" header className={fmtClass("/")}>
						Miles Boswell
					</Menu.Item>
				</Link>
				<Link href="/tutor">
					<Menu.Item as="a" header className={fmtClass("/tutor")}>Tutoring</Menu.Item>
				</Link>
				<Link href="/contact">
					<Menu.Item as="a" header className={fmtClass("/contact")}>Contact</Menu.Item>
				</Link>

				<Menu.Item position="right">
					<Link href="#"><Button as="a" inverted>Sign Up</Button></Link>
				</Menu.Item>
			</Container>
		</Menu>
	);
}

export default Navbar;
