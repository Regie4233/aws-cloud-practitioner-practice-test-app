'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
export const useChangeView = () => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('page', term);
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return {handleSearch}
}