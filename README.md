# React Redux Toolkit

Redux and redux-toolkit are two popular libraries used for managing state in JavaScript applications. While both libraries can be used to manage state in similar ways, there are some key differences between the two that developers should be aware of.

Redux is a state management library that was created by Dan Abramov and Andrew Clark in 2015. It is based on the principles of functional programming and focuses on immutability and predictability. Redux uses a unidirectional data flow, which means that data flows in one direction through the application. This makes it easier to track changes to state and debug applications.

One of the key features of Redux is its use of a single, immutable state tree. This means that when state is updated, a new state object is created, rather than modifying the existing state object. This makes it easier to track changes to state and debug applications.

Redux also includes support for middleware, which allows developers to extend the capabilities of the library. This can be used to add features like logging, asynchronous actions, and persistence.

# What is Redux Toolkit?

Redux Toolkit (RTK) is a new library that was created by the Redux team to make it easier to use Redux. It includes a collection of utilities and helpers that make it easier to manage state in Redux applications.

One of the key features of RTK is its use of the createReducer and createAction functions, which make it easier to create and manage reducers and actions in Redux. These functions provide a simplified, opinionated approach to creating reducers and actions, which can help reduce the amount of boilerplate code that developers need to write.

RTK also includes support for middleware, including the Redux Thunk middleware, which allows developers to write asynchronous actions. It also includes a configureStore function, which makes it easier to configure the Redux store.

# Setup

```bash
npx create-vite@latest ./

npm install
```

# Api

https://fakestoreapi.com/

```js
fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

# Packages

```bash
npm i react-bootstrap bootstrap
```

```bash
npm i react-router-dom
```

```bash
npm install @reduxjs/toolkit
npm install react-redux
```

```browser
instal redux dev-tools
```
