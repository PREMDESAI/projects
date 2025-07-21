import { CacheAdapterTypeClass } from './CacheAdapterTypeClass';

export default function NoCacheAdapter(): CacheAdapterTypeClass<any> {
  return {
    getItem: async (key: string) => null,
    setItem: async (key: string, value: any) => null,
  };
}
