'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  return (
    <nav style={styles.nav}>
      <h3>CBT APP</h3>
      <button onClick={logout} style={styles.button}>
        Logout
      </button>
    </nav>
  );
}

const styles = {
  nav: {
    height: '60px',
    background: '#1e293b',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
  },
  button: {
    background: '#ef4444',
    border: 'none',
    padding: '8px 14px',
    borderRadius: '6px',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
