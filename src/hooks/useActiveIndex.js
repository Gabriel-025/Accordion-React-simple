import { useState } from 'react';

export function useActiveIndex() {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index);
      return;
    }
    setActiveIndex(null);
  };

  return {
    activeIndex,
    onTitleClick,
  };
}
