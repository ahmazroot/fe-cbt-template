'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) router.push('/login');
  }, [router]);

  return (
    <>
      <Navbar />

      <main style={styles.container}>
        <h1>Dashboard CBT</h1>
        <p>Selamat datang di halaman ujian berbasis komputer.</p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>📘 Ujian Aktif</h3>
            <p>Belum ada ujian tersedia</p>
          </div>

          <div style={styles.card}>
            <h3>📊 Nilai</h3>
            <p>Belum ada data nilai</p>
          </div>

          <div style={styles.card}>
            <h3>👤 Profil</h3>
            <p>User CBT</p>
          </div>
        </div>
      </main>
    </>
  );
}

const styles = {
  container: {
    padding: '30px',
  },
  grid: {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  card: {
    background: '#f8fafc',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  },
};
