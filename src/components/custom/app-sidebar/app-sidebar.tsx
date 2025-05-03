import {
  SidebarHeader,
  SidebarMenuItem,
  SidebarGroupContent,
  SidebarGroup,
  SidebarMenuButton,
  SidebarMenu,
  SidebarContent,
  Sidebar,
} from '@/components/ui/sidebar';
import { Link } from '@tanstack/react-router';
import { PlusIcon, QuoteIcon, ListIcon } from 'lucide-react';

const AppSidebar = () => {
  return (
    <Sidebar side='right' className='bg-background text-foreground'>
      <SidebarHeader className='text-center'>
        <Link to='/'>
          <h1 className='py-3 text-2xl font-bold select-none'>
            تبويب الاقتباسات
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6'>
                  <Link to='/add-quote'>
                    <PlusIcon className='mr-2 h-4 w-4' />
                    إضافة اقتباس
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6'>
                  <Link to='/quotes'>
                    <QuoteIcon className='mr-2 h-4 w-4' />
                    الاقتباسات
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6'>
                  <Link to='/categories'>
                    <ListIcon className='mr-2 h-4 w-4' />
                    التصنيفات
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
