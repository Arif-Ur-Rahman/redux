// app/page.tsx
'use client';

import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/Button';
import Sidebar from '@/components/Sidebar';
import { RootState } from '@/redux/store';
import { decrement, increment } from '@/redux/features/counterSlice';

export default function HomePage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Redux Learning Playground</h1>
        <p className="text-lg mb-4">Current count: <span className="font-semibold text-cyan-500">{count}</span></p>

        <div className="flex gap-4">
          <Button onClick={() => dispatch(increment())}>Increment</Button>
          <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        </div>
      </main>
    </div>
  );
}
