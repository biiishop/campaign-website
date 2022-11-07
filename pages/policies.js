import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { createClient } from "next-sanity";

export default function Policies({ policies }) {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<ul>
            {policies.map((policy) => (
              <li key={policy._id}>{policy?.policies}</li>
            ))}
          </ul>
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
  const policies = await client.fetch(`*[_type == "policies"]`);
  
  return {
    props: {
      policies
    }
  };
}