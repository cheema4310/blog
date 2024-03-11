import Link from 'next/link';
import { HeaderAuth } from './header-auth';

export function Header() {
  return (
    <header className="bg-darkest">
      <div className="p-3 flex justify-around items-center">
        <div className="text-lighter">
          <Link href="/">YinYang</Link>
        </div>
        <div className="">
          <input
            className="bg-darker outline-none p-2 text-lightest placeholder:text-lighter rounded-lg focus:bg-dark"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <HeaderAuth />
        </div>
      </div>
    </header>
  );
}
