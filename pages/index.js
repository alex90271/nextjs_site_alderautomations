import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alder Automations</title>
        <meta name="description" content="Alder Automations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.gradient}>Hello, my name is Alex</h1>
      <h1>Full stack software developer</h1>
      <p>Bringing your next idea alive with innovative software</p>
        <ul>
          <li>Custom software</li>
          <li>Design, Build, and Deploy your website</li>
          <li>Implement automated data managment, able to provide meaningful insight</li>
        </ul>
      </main>
    </div>
  )
}