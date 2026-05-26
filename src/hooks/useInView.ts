import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.01) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Already on screen or near it — show immediately, no observer needed
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 300) {
      setIsInView(true);
      return;
    }

    // Below fold: pre-trigger 600px before reaching viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px 600px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

