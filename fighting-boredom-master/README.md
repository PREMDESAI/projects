# gqler

<!--
[![CircleCI](https://img.shields.io/circleci/project/github/phenax/pipey/master.svg?style=for-the-badge)](https://circleci.com/gh/phenax/pipey)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/pipey.svg?style=for-the-badge)](https://www.npmjs.com/package/pipey)
[![Codecov](https://img.shields.io/codecov/c/github/phenax/pipey.svg?style=for-the-badge)](https://codecov.io/gh/phenax/pipey)

-->

[Read the documentation for more information](https://github.com/yTakkar/fighting-boredom/tree/master/docs)


## Gettings started

### Install the package
```
yarn add gqler
```

### Create a gql instance

```ts
import GQLer from 'gqler';
import MemoryCache from 'gqler/lib/cache/MemoryCache';

const gql = GQLer({
  url: 'https://example.com/graphql',
  cacheAdapter: MemoryCache(),
});
```


### Creating and executing a query

```ts
const userData = gql.query`
  query UserData($uid: String) {
    user(uid: $uid) {
      uid
      name
      age
      addresses {
        id
        line1
        line2
        city
        country
      }
    }
  }
`;

async function fetchUser() {
  const response = await userData.run({ uid: '13wsffw' });
  return response.data;
}
```


### Creating and using fragments

```ts
const userAddressFragment = gql.fragment`
  fragment UserAddressPart on User {
    addresses {
      id
      line1
      line2
      city
      country
    }
  }
`;

const userData = gql.query`
  query UserData($uid: String) {
    user(uid: $uid) {
      uid
      name
      age
      ${userAddressFragment}
    }
  }
`;
```


