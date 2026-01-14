import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export function AlertSuccess() {
  return (
    <Alert variant="success">
      <AlertTitle>Pendaftaran Berhasil!</AlertTitle>
      <AlertDescription>Akun berhasil dibuat</AlertDescription>
    </Alert>
  );
}
