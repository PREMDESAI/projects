# use-firebase-v2

### Simple hook for react-firebase

## Install

```npm i use-firebase-v2```

## Example
```js
// Import the package
import useFirebase from 'use-firebase-v2';

const myComponent = () => {

  // Create a doc ref
  const docRef = firebase.firestore().collection('myCollection').doc('myDoc');

  // use the hook
  const value = useFirebase(docRef);

  return(
    <p>Hello, {value && value.name}</p>
  )
}
```
