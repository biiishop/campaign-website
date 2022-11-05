import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Orlin Dyankov';
export const siteTitle = 'Title';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <p className={styles.box}>
                Hello, World! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel sagittis neque. In hendrerit condimentum placerat. Donec tellus erat, condimentum sit amet consectetur sit amet, fringilla vel augue. Nulla eget feugiat mauris. Nullam pretium varius pulvinar. Curabitur laoreet felis nibh, at fermentum quam efficitur vel. Etiam facilisis mi in nibh aliquam, non dapibus neque iaculis. In sit amet viverra lorem. Suspendisse luctus enim erat, in varius mi aliquet vel. Donec neque ipsum, egestas id lectus vitae, molestie imperdiet justo. Nullam augue erat, venenatis vitae auctor non, lobortis eget quam. Phasellus dolor quam, semper eu leo ut, tristique sagittis velit. Nullam urna sapien, faucibus vitae placerat id, viverra nec orci. Duis turpis nibh, tristique non nisi eu, dictum tincidunt nibh. Nam malesuada vitae orci vel vestibulum.
            </p>
            <button className={styles.button}>
                Click Me
            </button>

            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}