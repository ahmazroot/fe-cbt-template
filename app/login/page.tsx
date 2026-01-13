'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = localStorage.getItem('user');

    if (!user) {
      alert('Akun belum terdaftar');
      return;
    }

    const parsed = JSON.parse(user);

    if (parsed.email === email && parsed.password === password) {
      alert('Login berhasil');
      router.push('/dashboard');
    } else {
      alert('Email atau password salah');
    }
  };

  return (
    <main style={styles.wrapper}>
      <div style={styles.card}>
        <h2>Login</h2>

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

        <button style={styles.button} onClick={handleLogin}>
          Login
        </button>
      </div>
    </main>
  );
}

const styles = {
  wrapper: {
    height: '100vh',
    background: 'linear-gradient(135deg, #43cea2, #185a9d)',
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
    background: '#43cea2',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
