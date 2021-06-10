import styles from '../styles/pages/404.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h3>Route not found</h3>

        <p>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Click here
          </a>{' '}
          to access documentation.
        </p>
      </div>
    </main>
  );
}
