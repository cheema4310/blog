import * as actions from '@/actions';
import { auth } from '@/auth';
import Profile from '@/components/profile';

export default async function Home() {
  const session = await auth();
  return (
    <div className="text-center">
      <Profile />
      <form action={actions.signIn}>
        <button type="submit">Sign In</button>
      </form>
      <form action={actions.signOut}>
        <button type="submit">Sign Out</button>
      </form>

      {session?.user ? <div>User Signed In</div> : <div>Signed Out of app</div>}
    </div>
  );
}
