'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <main style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Selamat Datang 👋</h1>
        <p style={styles.subtitle}>diaplikasi CBT</p>

        <div style={styles.buttonGroup}>
          <button style={styles.primary} onClick={() => router.push('/login')}>
            Login
          </button>

          <button style={styles.secondary} onClick={() => router.push('/register')}>
            Register
          </button>
        </div>
      </div>
    </main>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#fff',
    padding: '40px',
    borderRadius: '16px',
    width: '350px',
    textAlign: 'center' as const,
    boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
  },
  title: {
    marginBottom: '10px',
  },
  subtitle: {
    color: '#666',
    marginBottom: '25px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  },
  primary: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    background: '#4facfe',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  secondary: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: '1px solid #4facfe',
    background: '#fff',
    color: '#4facfe',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
