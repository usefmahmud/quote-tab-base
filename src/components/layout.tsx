import { SidebarProvider } from './ui/sidebar';
import AppSidebar from './custom/app-sidebar/app-sidebar';
import { SidebarTrigger } from './ui/sidebar';
import { Outlet } from '@tanstack/react-router';
const Layout = () => {
  return (
    <SidebarProvider className='h-full'>
      <SidebarTrigger className='absolute start-4 top-4' />
      <AppSidebar />
      <main className='w-full flex-1 px-4 py-10 md:px-8'>
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
