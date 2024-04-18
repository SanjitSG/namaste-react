><p style="color:red">11 | Assignment</p>
<div align="center">
    <h1>|  Namaste-React &#128303; | Data is the New Oil | </h1>
</div> 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

 **Q1: What is prop drilling?**
 **Answer:** Prop drilling in React refers to the practice of passing data or state down through multiple layers of a component hierarchy using props.

---

 **Q2: What is lifting the state up?**
 **Answer:** Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as _lifting state up_

---
Q3: What is Context Provider and Context Consumer?
Answer: 
**1. Context Provider:**

-   This component acts like a central store for the data you want to share.
-   You create a context using  `React.createContext()`.
-   The provider component wraps the part of your component tree where the data needs to be accessible.
-   It takes a value prop that represents the data you want to make available to consumers.

**2. Context Consumer:**

-   This component is used within the component tree to access the data from the provider.
-   There are two ways to consume the context:
    -   **Using the  `useContext`  hook (functional components):**  This hook allows you to access the context value directly within a functional component.
    -   **Using the  `Consumer`  component (class components, less common):**  This component is a React component provided by the Context API. It takes a child function that receives the context value as an argument.
---
Q4: If you don’t pass a value to the provider does it take the default value?
Answer: No, if you don't pass a value to the Context Provider in React's Context API, it **does not** automatically take a default value. This behavior differs slightly from how some other mechanisms, like function arguments with default parameters, handle missing values.
`undefined` is assigned insted of the default value.

**Reasons for this Behavior:**

-   **Clarity and Explicitness:**  Context API aims to be explicit about data flow. By requiring a value to be passed to the provider, it avoids potential confusion about what value might be used if none is provided.
-   **Error Handling:**  The lack of a value can sometimes indicate an error or missing configuration. Receiving  `undefined`  from the consumer can serve as a signal to handle such cases gracefully in your components.

---
<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/)  </span>

