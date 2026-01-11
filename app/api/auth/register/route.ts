import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { Email, Password, Firstname, Lastname } = body;

    const res = await fetch('http://be.retewe.site/api/auth/register-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ Email, Password, Firstname, Lastname }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { message: errorData.message || 'Register gagal' },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ message: err.message || 'Terjadi kesalahan' }, { status: 500 });
  }
}
