import { useState } from 'react';

interface UseLoadMoreProps<T> {
  data: T[];
  initialCount: number;
  step: number;
}

export function useLoadMore<T>({
  data,
  initialCount,
  step,
}: UseLoadMoreProps<T>) {
  const [items, setItems] = useState<T[]>(data.slice(0, initialCount));

  const loadMore = () => {
    setItems((currentItems) => [
      ...currentItems,
      ...data.slice(currentItems.length, currentItems.length + step),
    ]);
  };

  const hasMore = items.length < data.length;

  return {
    items,
    loadMore,
    hasMore,
  };
}
