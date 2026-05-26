import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  // useLayoutEffect fires synchronously BEFORE the browser paints.
  // If the section is already on screen (or close to it), we set isInView=true
  // immediately so the element is NEVER rendered invisible to the user.
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 200) {
      setIsInView(true);
    }
  }, []);

  // For sections below the fold, use IntersectionObserver
  useEffect(() => {
    if (isInView) return; // already visible, skip
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px 150px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, isInView]);

  return { ref, isInView };
}
