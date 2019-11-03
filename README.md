This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Plan of attack

The plan was to first make the UI, because this is where I would use the bigger part of the time. This being creating the basic components, and provide styling. After that I'd start the internal logic of the form and tie it all together.

## Decisions

### Form state

I considered making the Form component handling the state for all inputs. This would've made it easier to handle simple input fields using just the `name` attribute. It would also make the `onSubmit` event simpler as it would just proved an object of data the consumer could care about. But, it'd also require a different approach to custom inputs like `Dropdown` where the onChange even would have a different flow. Not impossible, but it would alter the data flow I had used up to this point.
**Conclusion:** Form is stateless, and the `onSubmit` event only exists to tell the form
state handler that the submit event has occured.

## Libraries

### react-scripts

Create-react-app comes with what to me is a ton of benefits; One does no longer have to care about updating the single components of a React setup. For instance react-dom version, webpack, jest and other tools. It also provides a sensible webpack configuration with a bunch of smart functionality and well tested configurations. It also provides a default jest version that's tested with the current React version.

### node-sass

SCSS rocks! And to add support for it with react-scripts, the only thing one has to do is installing this package.

### classnames

A neat way of doing conditional classnames for components.

### reboot.scss

Reboot is the CSS reset from Bootstrap which provides a nice way of ensuring the baseline for your DOM looks the same across all browsers.

### Why not use a framework like bootstrap you say?

As the size of this application is set, I felt for going with doing the UI library myself. It's not very complicated, and does not set requirements for e.g. complex grid behaviour. I considered both Bootstrap, Semantic UI and Bulma, but concluded I could handle this myself.


### react-final-form

In retrospect I think I should've gone with using `react-final-form` which is a library for creating and controlling forms. It provides a nice solution for state management, whilst opening for things like good validation and error handling, which is the part I am least happy about in my own solution.

## Accessibility

I would want to spend more time on accessibility to provide better context for screen readers, and ensure that components like the `Dropdown` works properly with a screen reader and arrow key navigation.

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
