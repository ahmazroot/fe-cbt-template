import './globals.css';

export const metadata = {
  title: 'FE CBT',
  description: 'Frontend CBT Project',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
