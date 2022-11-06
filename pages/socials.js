import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Socials() {
	return (
		<Layout>
			<h1 className='title'>Socials</h1>
			<div className='grid'>
				<a href="" className='card'>Joint Instagram account</a>
				<a href="" className='card'>Facebook Accuont</a>
			</div>
		</Layout>
	);
}