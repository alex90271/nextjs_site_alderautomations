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
        <div className={styles.grid}><div className={styles.centercard}>
      <h1 >Hello, my name is Alex</h1>
      <h1>Full stack software developer</h1>
      <p>Bringing your next idea alive with innovative software</p>
        </div>
        <div className={styles.centercard}><ul>
          <li>Custom software</li>
          <li>Design, Build, and Deploy your website</li>
          <li>Implement automated data managment, able to provide meaningful insight</li>
        </ul>
        </div>
        </div>
      </main>
    </div>
  )
}