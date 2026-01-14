'use client';

import { BrandingColumn } from '../../login/components/BrandingColumn';
import { RegisterForm } from './RegisterForm';

export function RegisterView() {
  return (
    <div className="h-screen w-full overflow-hidden bg-white lg:grid lg:grid-cols-2">
      {/* Left Column: Branding */}
      <BrandingColumn />

      {/* Right Column: Form */}
      <div className="flex h-full items-center justify-center p-8 lg:p-12 overflow-y-auto">
        <RegisterForm />
      </div>
    </div>
  );
}
