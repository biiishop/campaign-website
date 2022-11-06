import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>T&S</title>
        <link rel="icon" href="/images/profile" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to bals!
        </h1>

        <p className="description">
          Vote for us or bad smh!!!
        </p>

        <div className="grid">
          <a href="/socials" className="card">
            <h3>Out socials</h3>
            <p>Idk tbh</p>
          </a>

          <a
            href="/policies"
            className="card"
          >
            <h3>Policies</h3>
            <p>Our policies!</p>
          </a>
          
		  <a href="/contact" className="card">
            <h3>Contact Us!</h3>
            <p>Idk why'd you'd want to we're pretty lame ngl.</p>
          </a>

		  <a target="_blank" href="https://vote.stuysu.org/" className='card'>
			<h3>Vote!</h3>
			<p>Vote for president/co-presidents of the freshman cacaus! (doesn't have to be us)</p>
		  </a>
        </div>
      </main>

      <footer>
        ur less ugly than trisetsan
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}