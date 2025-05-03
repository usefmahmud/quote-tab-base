import { SidebarProvider } from './ui/sidebar';
import AppSidebar from './custom/app-sidebar/app-sidebar';
import { SidebarTrigger } from './ui/sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className='bg-background text-foreground'>
      <SidebarTrigger />
      <AppSidebar />
      <main className='bg-background text-foreground w-full'>{children}</main>
    </SidebarProvider>
  );
};

export default Layout;
