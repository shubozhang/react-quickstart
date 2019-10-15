This project was bootstrapped with [Create React App01](https://github.com/facebook/create-react-app).

```
myfirstreactapp
├── package-lock.json // 锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致,对整个文件的描述,为的是让开发者知道只要你保存了源文件，到一个新的机器上、或者新的下载源，只要按照这个package-lock.json所标示的具体版本下载依赖库包，就能确保所有库包与你上次安装的完全一样，它是npm install自动生成的一文件
├── package.json // 对整个应用程序的描述,应用名称,版本号,一些依赖包,以及项目的启动,打包，测试配置，锁定大版本
├── public
│ ├── favicon.ico // icon图标
│ ├── index.html // 主页面,首页模板
│ └── manifest.json // 定义成app应用的方式来使用,快捷方式的图标,可以配置icons，定义快捷方式的图标,定义快捷方式跳转的网址到哪里,主题颜色,用于指定应用的显示名称、图标、应用入口文件地址及需要使用的设备权限等信息，类似于android里面的manifest.xlm配置文件
├── README.md // 说明文档
└── src // 源码目录
├── App01.css // App应用组件的样式
├── App0101.js // App应用组件的逻辑代码,构成一个react组件的基本组成部分
├── App01.test.js // App自动化测试文件
├── index.css // 首页入口index的样式
├── index.js // 整个程序运行的入口文件,这个应用所做的事情是,只是渲染一个名叫App的组件，App组件在同目录下的App.js文件中定义
├── logo.svg // 图标,资源
└── serviceWorker.js // 引入这个是为了帮助我们借助网页去写手机app应用这样的一个功能
```

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
    * state (maintain internal state)
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
    * props (passed from outside)
        * defaultProps
        * propTypes
        * ``...`` is used to zip and unzip
            * zip: function fn(...f) == function fn(1, 2, 3)
            * unzip: const arr1 = [1, 2, 3], const arr2 = [4,...arr1, 5]
    * refs
        * There are a few good use cases for refs:
            * Managing focus, text selection, or media playback.
            * Triggering imperative animations.
            * Integrating with third-party DOM libraries.
            * Avoid using refs for anything that can be done declaratively.
            * For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.
        * Don’t Overuse Refs: Your first inclination may be to use refs to “make things happen” in your app. If this is the case, 
        take a moment and think more critically about where state should be owned in the component hierarchy. 
        Often, it becomes clear that the proper place to “own” that state is at a higher level in the hierarchy. S
        ee the Lifting State Up guide for examples of this.

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
    * interaction


## Ch04 Form
* Example username input is uncontrolled-component that you have to use this.nameInput.value to read the value.
* Example password input is controlled-component that the value will be automatically saved to state. React prefers this way that operates on
states not dom



## Ch05 Liftcycle
* mount
* update
* unmount

* First time render
    * constructor
    * componentWillMount()
    * render()
    * componentDidMount(): start listen and send AJAX request. (asyn constructor)
* update state: this.setState()
    * componentWillUpdate()
    * render()
    * componentDidUpdate()
* remove component: ReactDOM.unmountComponentAtNode(containerDom)
    * componentWillUnmount(): do some clean up work, like removing timer


* Others
    * componentWillReceiveProps()

## Ch06 Dom Diff
* Initialization
    * create virtual DOM
    * create concrete DOM
    * render 
* Update
    * setState()
    * recreate virtual DOM
    * diff two virtual DOMS
    * update the differences on concrete DOM
    * partial update render



## Ch07 Redux
Redux workflow

Action creator(dispatch action) -> Store(send preState, action) <=> Reducers (return newState)

React Components (Store update newState to react component)


Redux API
* createStore()


* Redux Store Object:
    * Redux core management object
    * maintain: state and reducer
    * main api: 
        * getState() 
        * dispatch(action) 
        * subscribe(listener) 
        * store.getState() 
        * store.dispatch()
    
* Action
    * Two attributes:
        * type
        * data
    * Action Creator
    ```javascript
    const increment = (number) => ({type:'INCREMENT', data: number})
    ```

* Reducer
    * preState + Action => new state function
    * example
    ```javascript
    export default function counter(state = 0, action) {
      switch (action.type) {
        case "INCREMENT":
          return state + action.data
        case "DECREMENT":
          return state - action.data 
        default:
          return state 
      }
    }
    ```
    * Return a new state, not update preState






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

You can learn more in the [Create React App01 documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App01

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
