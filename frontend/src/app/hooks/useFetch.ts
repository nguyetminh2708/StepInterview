import { useEffect, useState } from 'react';
interface IFetchResult<T> {
  data?: T;

  error?: any;

  loading?: boolean;
}
export const useFetch = <T>(fn: () => Promise<T>, deps = []) => {
  const [result, setResult] = useState<IFetchResult<T>>({
    loading: true,
  });

  useEffect(() => {
    async function doFetch() {
      setResult({
        ...result,

        loading: true,
      });

      try {
        const response = await fn();

        setResult({
          data: response,

          loading: false,
        });
      } catch (error) {
        setResult({
          error,

          loading: false,
        });
      }
    }

    doFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return result;
};
