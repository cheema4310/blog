'use client';
import * as actions from '@/actions';
import Avatar from './avatar';
import { useSession } from 'next-auth/react';

export function HeaderAuth() {
  const session = useSession();
  let authContext: React.ReactNode;
  if (session.status === 'loading') {
  } else if (session.data?.user) {
    authContext = <Avatar src={session.data?.user.image || ''} />;
  } else {
    authContext = (
      <div>
        <form action={actions.signIn}>
          <button type="submit" className="leading-[50px] text-lighter">
            Sign In
          </button>
        </form>
      </div>
    );
  }
  return authContext;
}
