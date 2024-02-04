import { useEffect } from 'react';

export const useScrollToTop = () => {
    useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
      }, []);
};
