import { CacheAdapterTypeClass } from './CacheAdapterTypeClass';

export default function MemoryCacheAdapter(): CacheAdapterTypeClass<any> {
  const cache: { [key: string]: string } = {};
  return {
    getItem: async (key: string) => cache[key],
    setItem: async (key: string, value: any) => (cache[key] = value),
  };
}
