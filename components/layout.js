
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Title';

export default function Layout({ children, home }) {
    return (
		<div class="sidebar">
		<div><Link href="/">Home</Link></div>
		<div><Link href="/policies">Policies</Link></div>
		<div><Link href="/socials">Social Media</Link></div>
			<div className="container">
            <Head>
                <title>{siteTitle}</title>
            </Head>
		<main>{children}</main>
		</div>
		</div>
    );
}