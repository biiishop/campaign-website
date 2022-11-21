import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { createClient } from "next-sanity";

export default function Policies({ policies }) {
	return (
		<Layout>
			<Head>
				<title>Policies</title>
			</Head>
      {/* <ul>
            {policies.map((policy) => (
              <li key={policy._id}>{policy?.policies}</li>
            ))}
          </ul> */}
      <iframe width="100%" height="1000" src="https://docs.google.com/document/d/e/2PACX-1vTIwCRQU7-TTi19KqZ-gE58c5j0YW1vk_ki69qh1evP6V7vjk1NIsAVxztZlrAHED4C1F1_YSrM3psM/pub?embedded=true"></iframe>
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
