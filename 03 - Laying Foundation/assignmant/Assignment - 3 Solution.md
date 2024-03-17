<p style="color:red">3 | Assignment</p>
<div align="center">
    <h1>|  Namaste-React &#128303; | Laying Foundation | </h1>
</div> 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)


**Q1:** What is *JSX*?
**Answer:** *JSX* is a syntax extension for JavsScript that lets you write **HTML-like** markup (HTML like instructions) inside a JavaScript file.
*Note: JSX is not HTML inside JavaScript, JSX is HTML **like** syntax.*

 - Why JSX is Not HTML  inside JavaScript?
Lets have a look at these two examples: Observe how we add class to the `<p>` tag. Inside HTML use use keywork `class` to and inside JSX we use `className`

| HTML | JSX |
|--|--|
|  `<p class="para">Example</p>` |  `<p className="para">Example</p>` |

How JS engine is able to render code written in JSX on to a DOM tree.
JSX intrernally uses react.CreateElement which is converted into object and that object is rendered onto DOM tree.

JSX ⇒ React.CreateElement ⇒ Object ⇒ HTML(DOM)

```js
 // react element written using jsx expression
  const  title  = (
    <h1  id="title"  key="1">
    Heading
    </h1>
    )
// output => {$$typeof: Symbol(react.element), type: 'h1', key: '1', ref: null, props: {…}, …}
```
Explanation: `title` is a react Element written in form of JSX expression. It is returning h1 tag. JSX is converted into regular JavaScript function `React.createElement` to create UI structure. When we execute the program, during compilation process tool like *Babel transforms* JSX code into regular JavaScript function.

```js
//Babe converts JSX into regular JavaScript function that react understands.
React.createElement('h1', {
id: 'title',
key:'1'
},
"Heading")
```
---
**Q1:** Superpowers of *JSX*?
**Answer:** 
 - **HTML-like syntax**: JSX closely resembles HTML, making it familiar and easy to learn for web developers.
 - **Declarative Syntax**: JSX allows you to write UI code in a declarative manner, making it easier to understand and maintain. You can describe what your UI should look like and React takes care of updating the DOM efficiently.
 - **Embedding Expressions**: JSX allows you to embed JavaScript expressions within curly braces `{}`. This makes it easy to dynamically generate content based on variables or state.
 - **Components**: JSX enables you to define custom components easily. You can compose complex UIs by nesting components within each other
 ---
 **Q3:** Role of `type` attributre in `<script>` tag? What options can i use there?
 **Answer:** `type` attribute indicates the type of script represented.
 **Default Value:**

 -   If the  `type`  attribute is omitted, it defaults to "text/javascript", indicating standard JavaScript code.

**Common Values:**

 -   **text/javascript:**  (default for classic scripts)
 -   **application/javascript:**  Equivalent to "text/javascript".
 -   **application/ecmascript:**  Older version, still valid.
 -   **module:**  Specifies JavaScript modules, loaded using the modern module system.
 -   **importmap:**  Contains an import map, a mechanism for defining a collection of URL-based mappings for loading modules.
---
 **Q4:** `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX`
A: 
 -   **`{TitleComponent}`**:  `TitleComponent`  points to a javascript expression or a variable. We can embed any JavaScript code inside a `component` using curly brackes `{}` . 
	 -   `{TitleComponent}`  is like having the blueprint in hand.
	 -    Avoid using just  `{TitleComponent}`  by itself for rendering.

 -   **`<TitleComponent/>`**  : This is the most common way to render a component. This value represents a Component that is basically returning Some JSX value. In simple terms  `TitleComponent`  a function that is returning a JSX value. A component is written inside the  `{< />}`  expression.
	 -    -   Use  `{{TitleComponent/>}`  to render a component without child elements in JSX..
	 
 -   **`<TitleComponent></TitleComponent>`**  : This is functionally equivalent to  `{{TitleComponent/>}`  for components that *don't have child element*s.
  Both  `<TitleComponent>`  and  `</TitleComponent>`  tags are included, even though there's no content between them.
This syntax is often used for readability or future compatibility if you might add child elements later. 
	  -   Use  `{{TitleComponent></TitleComponent>}`  for readability or if you might add child elements later.
---


<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/)  </span>



