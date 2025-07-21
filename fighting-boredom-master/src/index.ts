import { stripWhitespace } from './utils';

import { CacheAdapterTypeClass } from './cache/CacheAdapterTypeClass';
import NoCacheAdapter from './cache/NoCacheAdapter';

interface GraphQLRequest<T> {
  url: string;
  query: string;
  variables?: T;
  operationName?: string;
  headers?: { [key: string]: string };
}

interface GraphQLError {
  message: string;
  locations: Array<{ lint: number; column: number }>;
  path: Array<any>;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<GraphQLError>;
}

interface QueryParser {
  run<V, R>(variables?: V): Promise<GraphQLResponse<R>>;
}

interface Fragment {
  name: string;
  toString(): string;
}

type Options = {
  url: string;
  cacheAdapter?: CacheAdapterTypeClass<any>;
  makeRequest?<V, R>(req: GraphQLRequest<V>): Promise<GraphQLResponse<R>>;
};

// TODO: Use fetch to make the api calls
function makeFetchRequest<V, R>({ query, variables }: GraphQLRequest<V>): Promise<GraphQLResponse<R>> {
  return Promise.resolve({});
}

function evaluateInterlop(query: string, queryFrag: string, value: any) {
  if (value == null) return query + queryFrag;
  // TODO: handle interlop Fragment
  return query + queryFrag + value;
}

export default function GraphQL({ url, makeRequest = makeFetchRequest, cacheAdapter = NoCacheAdapter() }: Options) {
  const interlopTemplateString = (strFrags: TemplateStringsArray, args: Array<Fragment | any>) =>
    strFrags.reduce((query, strFrag, index) => evaluateInterlop(query, strFrag, args[index]), '');

  const createQueryParser = () => (strFrags: TemplateStringsArray, ...args: Array<Fragment | any>): QueryParser => {
    const query = interlopTemplateString(strFrags, args);

    // Minification of final query
    const minifiedQuery = stripWhitespace(query);

    return {
      async run<V, R>(variables?: V) {
        const cacheKey = JSON.stringify({ query: minifiedQuery, variables });
        const cache = await cacheAdapter.getItem(cacheKey);
        if (cache) return cache;

        const response = await makeRequest<V, R>({ url, query: minifiedQuery, variables });

        cacheAdapter.setItem(cacheKey, response);
        return response;
      },
    };
  };

  const createFragment = () => (strFrags: TemplateStringsArray, ...args: Array<Fragment | any>): Fragment => {
    return {
      name: '<Fragmentname>',
      toString: () => '',
    };
  };

  return {
    query: createQueryParser(),
    fragment: createFragment(),
  };
}
