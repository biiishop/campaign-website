import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import React from 'react'


export default function Socials({ socials }) {
	return (
		<Layout>
			<h1 className='title'>Socials</h1>
			<div className='grid'>
				{socials.map((social) => (
					<a href={social.url} target="_" className='card'>
						<h3 className='title'>
							{social.title}
						</h3>
						<center>
							<img src={urlFor(social.image).width(100).height(100).url()} alt="A picture"/>
							<p>
								{social.description}
							</p>
						</center>
					</a>
            	))}
			</div>
		</Layout>
	);
}

const client = createClient({
	projectId: "dr264hba",
	dataset: "production",
	apiVersion: "2022-03-25",
	useCdn: false
});


export async function getStaticProps() {
	const socials = await client.fetch(`*[_type == "socials"]`);
	
	return {
		props: {
			socials
		}
	};
}

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}