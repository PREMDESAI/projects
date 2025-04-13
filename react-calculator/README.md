## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### How to edit Questionnaire Data 

Open `src/data/questionnaire.ts` and you'll see the configuration for the Questionnaire. Should you need to edit a Question, you can do a search with appropriate content and make the changes as necessary.

The Structure can be defined as :

```typescript
interface IQuestionnaire {
    currency: string;
    title: string;
    estimatorTitle: string;
    tabs: Array<{
        title: string;
        sections: Array<{
            questionNumber: number;
            hint: {
                title: string;
                description: string;
            };
            title: string;
            pseudoTitle: string;
            options: Array<{
                title: string;
                range: {
                    min: number;
                    max: number;
                } | string;
                default?: boolean;
            }>;
        }>;
    }>;
}
```

This tree structured model describes the view. Adding another option to a question : 

```typescript
// Add the following object inside "options" property of a "question" object
{
    title: 'We need a concept and storyboard',
    range: {
        max: 1000,
        min: 300,
    }
}
```