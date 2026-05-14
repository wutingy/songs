import { useState, useEffect } from 'react';

export function useHash(): string {
  const [hash, setHash] = useState<string>(() => location.hash.replace(/^#/, ''));

  useEffect(() => {
    const onHashChange = () => setHash(location.hash.replace(/^#/, ''));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}
