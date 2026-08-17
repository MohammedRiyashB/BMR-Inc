import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function ScrollHandler(): null {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // 1. On every hard reload, force the page strictly to the top.
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      
      // Clear the hash from the router state without pushing a new history entry
      if (hash) {
        navigate(pathname, { replace: true });
      }
      
      // Aggressively force to top
      const forceTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };
      
      forceTop();
      setTimeout(forceTop, 10);
      setTimeout(forceTop, 50);
      setTimeout(forceTop, 150);
      
      // Do not process hash scrolling on initial load
      return;
    }

    // 2. Handle subsequent in-app navigation
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash, navigate]);

  return null;
}
