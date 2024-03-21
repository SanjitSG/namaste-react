><p style="color:red">4 | Assignment</p>
<div align="center">
    <h1>|  Namaste-React &#128303; | Show me the code | </h1>
</div> 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Q1:** Is *JSX* mandotary for React?
**Answer:** No, JSX is not mandotary for React.
We can write React using plain JavaScript by calling `React.createElement` function.
JSX is essentially a syntax for JavaScript that allows us to write HTML- like code.
It Improves readibility and makes describing the UI structure more convenient.

     Using JSX
    		const header = <h1>Header, welcome</h1>

     Using Plain JavaScript
    	const header = React.createElement("h1",{}, "Header, welcome")
---
**Q2:** Is ES6 mandatory for React?
**Answer:** No, ES6 is not mandatory for React. But it is recommanded and preferred approact for React Development, because features offered by ES6 makes code more concise, readable, and maintainable.
`Arrow function`, `destructuring` and `class syntax` for components are commonly used ES6 features.

---
**Q3:** `{TitleComponent} vs {<TitleComponent />} vs {<TitleComponent></<TitleComponent>} in JSX?`
**Answer:**

 - `{TitleComponent}`: It could be a variable or a react element. We can write any piece of JavaScript code inside JSX using curly braces `{ }`
 - `{<TitleComponent />}`: This is used to create instance of a component. Here instance of TitleComponent will be created.
 - `{<TitleComponent></<TitleComponent>}`: This is also create a instance of a component. This syntax is often used for readability or future compatibility if you might add child elements later. 
---
**Q4:** How can i write comments in JSX?
**Answer:** Using curly braces `{}`  inside JSX we can write single-line as well as multi-line comments.
```js
const title = (
<h1>Welcome, Devs</h1>   {// single-line JSX comment}

{/*
    multi-line JSX comment
*/} 
);
```
---
**Q5:** What is `<React.Fragment></React.Fragment>` and `<> </>`?
**Answer:** JSX expression must have only one parent element. This means, if there are multiple children, they needs to be wrapped inside a wrapper line `<div>`. This leads to adding an extra DOM node, we can eliminate this by using`<React.Fragment></React.Fragment>` as wrapper.
This results into a cleaner code and efficient rendering process.

**`<> </>`:** is the shorthand property for `<React.Fragment>`.

---
**Q6:** What is Virtual DOM?
**Answer:** Virtual DOM (VDOM) is a key concept in libraries like react where in a virtual representaion (light weight copy) of actual DOM is kept in memory.
It's essentially a lightweight copy of the real DOM that exists in JavaScript memory. 

---

**Q7:**What is Reconciliation in React?
**Answer:** The algorithm React uses to diff one tree with another to determine which parts need to be changed. In this process react efficiently updates the DOM (Document Object Model) to reflect the changes in your UI components. On change in state or prop `render()` function generates new tree. Reconcialiation uses diffing algorithm to compare between tree stored in VDOM and newly rendered tree.
React make two assumption
1.  Two elements of different types will produce different trees.
2.  The developer can hint at which child elements may be stable across different renders with a  `key`  prop.

React uses a clever algorithm called "diffing" to compare the old virtual DOM with the new virtual DOM after a change.
This diffing process identifies the minimal set of changes that need to be applied to the real DOM to bring it in line with the updated virtual DOM.

---

**Q8:** What is React Fiber?
**Answer:** Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.

---
**Q9:** Why we need keys in React? When do we need keys in React?
**Asnwer:** In React, when you render lists of elements (like `<li>` items, for instance), keys play a crucial role in optimizing performance and ensuring a smooth user experience. They act as unique identifiers for each item within the list, helping React determine which elements have changed, added, or removed when your data updates.

---
**Q10:** Can we use index as keys in React?
**Answer:** Yes, we can use index as keys. All thought we can use index, but it should be the last resort.

---
**Q11:** What is props in React? Ways to
**Answer:** In React, props short for poroperties are fundamental mechanism fo rpassing data down from parent component component. They act like function arguments inside component instance `<Header data ={exampleData} hello="world" /`>. This data is received by the functional component in wrapped inside an object. We can pass multiple props.

---
**Q12** What is a Config Driven UI ?
**Answer:** It is a development approach where the layout, styles, and behavior of a user interface are defined in a separate configuration file instead of being hardcoded directly into the application's code.

---
<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/)  </span>

