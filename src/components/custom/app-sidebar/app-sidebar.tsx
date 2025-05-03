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
import { PlusIcon, QuoteIcon, ListIcon } from 'lucide-react';

const AppSidebar = () => {
  return (
    <Sidebar side='right' className='bg-background text-foreground'>
      <SidebarHeader className='text-center'>
        <a href='/'>
          <h1 className='py-3 text-2xl font-bold select-none'>
            تبويب الاقتباسات
          </h1>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6'>
                  <a href='/add-quote' className='text-xl font-light'>
                    <PlusIcon className='mr-2 h-4 w-4' />
                    إضافة اقتباس
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6'>
                  <a href='/quotes' className='text-xl font-light'>
                    <QuoteIcon className='mr-2 h-4 w-4' />
                    الاقتباسات
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className='py-6'>
                  <a href='/categories' className='text-xl font-light'>
                    <ListIcon className='mr-2 h-4 w-4' />
                    التصنيفات
                  </a>
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
