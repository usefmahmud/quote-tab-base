import { Button } from './components/ui/button';

function App() {
  return (
    <div className='bg-background font-greta text-foreground flex h-screen flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl font-light'>تبويب الاقتباسات</h1>
      <a href='/api'>
        <Button className='cursor-pointer'>API Here</Button>
      </a>
    </div>
  );
}

export default App;
