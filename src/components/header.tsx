import Link from 'next/link';
import { auth } from '../auth';
export async function Header() {
  const session = await auth();
  return (
    <header>
      <div>
        <div>
          <Link href="/">YinYang</Link>
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
        <div>{session?.user ? <div>Sign Out</div> : <div>Sign In</div>}</div>
      </div>
    </header>
  );
}
