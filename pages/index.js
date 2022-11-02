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
        <div className={styles.grid2}>
          <div className={styles.centercard1}>
      <h1 >Hello, my name is Alex</h1>
      <h1>Full stack software developer</h1>
      <p>Bringing your next idea alive with innovative software</p>
        </div>
        <div className={styles.centercard3}>
          <ul>
            <li>Custom software</li>
            <li>Design, Build, and Deploy your website</li>
            <li>Implement automated data managment, able to provide meaningful insight</li>
          </ul>
         </div>
        </div>
        <h1>Services</h1>
        <div className={styles.grid3}>
          <div className={styles.centercard1}>
            <h1>Web and UX/UI Design</h1>
          </div>
          <div className={styles.centercard2}>
            <h1>Custom software development</h1>
          </div>
          <div className={styles.centercard3}>
          <h1>Hosting Services</h1>
          </div>
          
        </div>
        <h1>Projects and skills</h1>
        <div className={styles.grid3}>
          <div className={styles.centercard3}>
            <h1>Mandarin Restaurant Wordpress Website</h1>
          </div>
          <div className={styles.centercard1}>
            <h1>Github Projects</h1>
          </div>
          <div className={styles.centercard2}>
          <h1>Other Work</h1>
          </div>
        </div>
      </main>
    </div>
  )
}