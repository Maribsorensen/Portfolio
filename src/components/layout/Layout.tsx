import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] gap-4 bg-background">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
