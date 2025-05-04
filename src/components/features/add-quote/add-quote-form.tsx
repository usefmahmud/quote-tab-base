import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface Quote {
  quote: string;
  author: string;
}

const AddQuoteForm = () => {
  const form = useForm<Quote>({
    defaultValues: {
      quote: '',
      author: '',
    },
  });

  const handleSubmit = (data: Quote) => {
    console.log(data);
    toast.success('ستعمل هذه الخاصية قريبا');
  };

  return (
    <div className='border-border w-full max-w-md rounded-md border-1 p-6'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='flex w-full flex-col gap-5'
        >
          <FormField
            control={form.control}
            name='quote'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg font-bold'>المقولة</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='أدخل مقولة'
                    {...field}
                    rows={4}
                    className='resize-none text-lg'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-lg font-bold'>القائل</FormLabel>
                <FormControl>
                  <Input placeholder='أدخل اسم المؤلف' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className='w-1/2 self-center text-lg'>
            إضافة المقولة
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddQuoteForm;
