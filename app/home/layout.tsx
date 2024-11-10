import {ComplexNavbar} from '@/app/components/ui/navbar/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <nav className="fixed w-full z-20 top-0 left-0 mt-2 px-4">
          <ComplexNavbar></ComplexNavbar>
        </nav>
        <div>{children}</div>
    </>
  );
}
