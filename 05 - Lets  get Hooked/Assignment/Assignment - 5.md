> <p style="color:red">5 | Assignment</p>

<div align="center">
    <h1>|  Namaste-React &#128303; | Lets Get Hooked | </h1>
</div>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Q1:** What is the difference between `Named Export`, `Default export` and `* as export`?
**Answer:** In JavaScript `export` is used inside modules to export **_variables, functions, and classes_**. It allows the part of code to be accessible outside the module. It imporoves resuability as well as readibility of the code, inturn resultnig in cleaner and maintainable code.

**Note:** Names for export declarations must be distinct from each other. Having exports with duplicate names or using more than one `default` export will result in a [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) and prevent the module from being evaluated.

1.  **Named Export:** Named exports in JavaScript allow you to export multiple functions, variables, or classes from a single file as separate entities. Named exports are useful when you need to export several values. When importing these named exports into other files, You need to wrap the items you want to export in curly braces `{}`.

- Syntax: `export const variableName = value;`

2.  **Default Export**: Used to export a single "main" value from a module.

- Syntax: `export default value;` (can be a function, object, etc.)

3.  **`* as export`:** Also Known as Wildcard export. Imports all exports from a module under a single name.

- Syntax: `export * from './module.js';`

---

**Q2** What is the importance of config.js file?
**Answer:** Config file is used to store all the hard coded data or confliguration data.
For example, API urls, API credentials, application settings.

---

**Q3:** What are React Hooks?
**Answer:** React Hooks are special JavaScript functions that allows us to control component's state variables.
**Common Hooks:**

- `useState`: This is the most fundamental Hook, used to manage component state. It returns an array with the current state value and a function to update it.
- `useEffect`: This Hook is used for performing side effects in functional components. It can handle data fetching, subscriptions, timers, or any other operations that interact with external resources.
- `useContext`: This Hook allows you to access context values defined elsewhere in the component tree. It's useful for sharing data across components without manually passing props through multiple levels.

---

**Q4:** Why do we need a `useState` Hook?
**Answer:** the `useState` Hook is essential for building interactive React applications with functional components. It provides a lightweight and reusable way to manage component state, leading to better code organization and maintainability.

---

<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/) </span>
