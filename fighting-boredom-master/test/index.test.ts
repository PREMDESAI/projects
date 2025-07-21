import GraphQL from '../src';
import MemoryCacheAdapter from '../src/cache/MemoryCacheAdapter';

describe('GraphQL', () => {
  let mockMakeRequest = jest.fn(() => Promise.resolve({}));

  afterEach(() => {
    mockMakeRequest.mockClear();
  });

  it('should create an instance without errors', () => {
    GraphQL({
      url: 'https://someapi.com/graphql',
      makeRequest: mockMakeRequest,
    });
  });
});

describe('Query instance', () => {
  let mockMakeRequest = jest.fn((request) => Promise.resolve(request));

  afterEach(() => {
    mockMakeRequest.mockClear();
  });

  it('should return a gql instance', async () => {
    const gql = GraphQL({
      url: 'https://someapi.com/graphql',
      makeRequest: mockMakeRequest,
    });

    const hwQuery = gql.query`
      query HelloWorld {
        hello
        world
      }
    `;

    const resp = await hwQuery.run();

    expect(mockMakeRequest).toHaveBeenCalledTimes(1);
    expect(resp).toEqual({
      url: 'https://someapi.com/graphql',
      variables: undefined,
      query: `query HelloWorld { hello world }`,
    });
  });


  it('should interpolate the string and return gql instance', async () => {
    const gql = GraphQL({
      url: 'https://someapi.com/graphql',
      makeRequest: mockMakeRequest,
    });

    const hwQuery = gql.query`
      query HelloWorld {
        hello
        ${'world'}
      }
    `;

    const resp = await hwQuery.run();

    expect(mockMakeRequest).toHaveBeenCalledTimes(1);
    expect(resp).toEqual({
      url: 'https://someapi.com/graphql',
      variables: undefined,
      query: `query HelloWorld { hello world }`,
    });
  });

  it('should call makeRequest twice (no cache)', async () => {
    const gql = GraphQL({
      url: 'https://someapi.com/graphql',
      makeRequest: mockMakeRequest,
    });

    const hwQuery = gql.query`
      query HelloWorld {
        hello
        world
      }
    `;

    const r1 = await hwQuery.run();
    expect(mockMakeRequest).toHaveBeenCalledTimes(1);
    const r2 = await hwQuery.run();

    expect(r1).toEqual(r2);
    expect(mockMakeRequest).toHaveBeenCalledTimes(2);
  });

  it('should only call makeRequest once (memory cached)', async () => {
    const gql = GraphQL({
      url: 'https://someapi.com/graphql',
      makeRequest: mockMakeRequest,
      cacheAdapter: MemoryCacheAdapter()
    });

    const hwQuery = gql.query`
      query HelloWorld {
        hello
        world
      }
    `;

    const r1 = await hwQuery.run();
    expect(mockMakeRequest).toHaveBeenCalledTimes(1);
    const r2 = await hwQuery.run();

    expect(r1).toEqual(r2);
    expect(mockMakeRequest).toHaveBeenCalledTimes(1);
  });
});
