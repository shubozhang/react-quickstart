This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## CH01 Introduction
npx create-react-app my-app
cd my-app
npm start


* JSX (Javascript XML)
    * An extension that created by reactjs.
    * react uses it to create virtual DOM
    * babel.js translates it to JS
* var, const , and let
    * var is an old and unsafe way to declare variable. You should not use it.
    * const: use by default. It is a signal that the variable won’t be reassigned.
    * let: only if rebinding is needed. It is a signal that the variable may be reassigned

* module and component
    * component(html/css/js)
    * module (js)


## CH02: Component-Based Programming
* Two ways to create component
    * factory function (simple component: without state)
    ```javascript
    function MyComponent() {
        return <h2>My Component</h2>
    }
    ```
    * ES6 class component ( complex component: with state)
    ```javascript
    class MyComponent2 extends React.Component{
          render() {
                  console.log(this)
                  return <h2>My Component2</h2>
                  }
      } 
    ```
* Two kinds of exports
    * Named exports - for example export function func() {} is a named export with the name of func. 
    Named modules can be imported using import { exportName } from 'module';. In this case, the name of the 
    import should be the same as the name of the export. To import the func in the example, you'll have to 
    use import { func } from 'module';. There can be multiple named exports in one module.
    * Default export - is the value that will be imported from the module, if you use the simple import statement 
    import X from 'module'. X is the name that will be given locally to the variable assigned to contain the value, 
    and it doesn't have to be named like the origin export. There can be only one default export.
    * A module can contain both named exports and a default export, and they can be i


* Component: three properties
    * state
        * constructor / read state / update state
        * bind this to new function
        ```javascript
         1. construct state
             constructor(props){
                 super(props)
                 this.state = {
                     stateProp1: value1,
                     stateProp2: value2
                 }
             }
         2. read state: this.state.statePropertyName
         3. update state:
             this.setState({
                 stateProp1: value1,
                 stateProp2: value2
             })
        ```
    * props
        * defaultProps
        * propTypes
        * ``...`` is used to zip and unzip
            * zip: function fn(...f) == function fn(1, 2, 3)
            * unzip: const arr1 = [1, 2, 3], const arr2 = [4,...arr1, 5]
    * refs
* state vs props

| state | props|
|---|---|
|mutable| immutable (react can do fast reference check)|        
|worse performance|better performance|
|should be managed by view-controller|are used to pass data down from view-controller|
|should not be accessed from child components (father-child may not have extend relationship, but position relationship)| are used to pass data to child components|
|should only be updated within the component, not from child component| |

* Callback
A callback is a function that is passed as an argument to another function 
and is executed after its parent function has completed.



## Ch03: Component Example
* design components
* implementation in static web page
* dynamic page
    * dynamic data
    * 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
