export interface CacheAdapterTypeClass<T> {
  getItem(k: string): Promise<T>;
  setItem(k: string, v: T): Promise<T>;
}
