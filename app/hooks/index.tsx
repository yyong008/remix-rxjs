
import { useEffect, useRef, useState } from 'react';
import { fromEvent, Subscription } from 'rxjs';

function useKeyPress(resetTime) {
  const [key, setKey] = useState('');
  const keyDownSubscription = new Subscription();
  const tRef = useRef<any>()

  useEffect(() => {
    const keyDownObservable = fromEvent(document, 'keydown');

    keyDownObservable.subscribe((event) => {
      if (event.key) {
        setKey(event.key)
      }

      if (resetTime) {
        if (tRef.current) {
          clearInterval(tRef.current)
          tRef.current = setTimeout(() => {
            setKey('')
          }, resetTime)
        }

      }
    });

    return () => {
      keyDownSubscription.unsubscribe();
      tRef.current = null;
    };
  }, []);

  return [key];
}

export default useKeyPress;
