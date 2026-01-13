'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Register berhasil');
    router.push('/login');
  };

  return (
    <main style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Register</h2>

        <input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleRegister}>
          Register
        </button>
      </div>
    </main>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    background: 'linear-gradient(135deg, #ff9966, #ff5e62)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    background: '#ff5e62',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
