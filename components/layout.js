
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


export const siteTitle = 'Title';

export default function Layout({ children, home }) {
    return (
		<>
		{/* <div className="topnav">
		<a href="/">Home</a>
		<a href="/policies">Policies</a>
		<a href="/socials">Social Media</a>
		<a href="/contact">Contact Us</a>
		</div> */}
		<Head>
			<title>{siteTitle}</title>
		</Head>
		

		<main>{children}</main>
		</>
	);
}