'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();
  return (
    <div>
      {session.data?.user ? (
        <div>Signed in from Client Cmp</div>
      ) : (
        <div>Signed Out from Client Cmp</div>
      )}
    </div>
  );
}
