interface LayoutProps {
  children?: React.ReactNode;
}
import Image from 'next/image';
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className=" sticky top-0 z-40 text-white bg-black  ">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6 flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width="40" height="40" />
            <a href="#" className="hover:text-slate-600 cursor-pointer">
              Home
            </a>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
