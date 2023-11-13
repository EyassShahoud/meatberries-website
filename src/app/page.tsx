import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (    
    <main className={styles.pageMain}>
      <div className={styles.description}>
        <Image
          className={styles.vercelLogo}
          src="/Meatberries-Logo.png"
          alt="Meatberries Logo"
          width={800}
          height={800}
          priority
        />
      </div>
    </main>
  )
}