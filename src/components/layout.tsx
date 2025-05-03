import { SidebarProvider } from './ui/sidebar';
import AppSidebar from './custom/app-sidebar/app-sidebar';
import { SidebarTrigger } from './ui/sidebar';
import { Outlet } from '@tanstack/react-router';
const Layout = () => {
  return (
    <SidebarProvider className='bg-background text-foreground'>
      <SidebarTrigger />
      <AppSidebar />
      <main className='bg-background text-foreground w-full'>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
