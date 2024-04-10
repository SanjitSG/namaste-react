><p style="color:red">8 | Assignment</p>
<div align="center">
    <h1>|  Namaste-React &#128303; | Let's get Classy | </h1>
</div> 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Q1:  How do you create Nested Routes react-router-dom cofiguration?**
**Answer:** 
Nested Routing is the general idea of ***coupling segments of the URL to component hierarchy*** and data.
This [Visualistion](https://remix.run/_docs/routing) might help to get better grasp. 

To create nested routes inside a react application, react-router-dom library faciliates us with a function `createBrowserRouter`.
we provide an array of elements to `createBrowserRouter` containing *Route objects*.
Each route object defines.

 1. Path: URL that triggers the rendering of the associated component.
 2. element: React component to rendered for that path.
 3. children (optional) : An array of nested route objects tah tdefines child routes rel;ative to the parent routes path. i.e. *children inherits the parents path as a prefix*.
 4. errorElement: in case there is any issue with mentioned path and react is not able to load the element, An error element is loaded.
  
We can create a `Nested Routes` inside a react router configuration as follows: first call createBrowserRouter for routing different pages

    const router = createBrowserRouter([
       {
          path: "/", // show path for routing
          element: <Parent />, // show component for particular path
          errorElement: <Error />, // show error component for path is different
          children: [ // show children component for routing
             {
                path: "/path",
                element: <Child />
             }
          ],
       }
    ])

Now we can create a nested routing for `/path` using `children` again as follows:

    const router = createBrowserRouter([
       {
          path: "/",
          element: <Parent />,
          errorElement: <Error />,
          children: [
             {
                path: "/path",
                element: <Child />,
                children: [ // nested routing for subchild
                   {
                      path: "child",      // Don't use '/' because then react-router-dom will understand it it's the direct path.
                      // The child inherits the parents path.
                      element: <SubChild />,
                   }
                ],
             }
          ],
       }
    ])
---

**Q2: Read about `createHashRouter`, `createMemoryRouter` from React Router docs?**
**Answer:** 

 - **`createHashRouter`:**  HashRouter in React Router is a component used for implementing client-side routing with a specific method: using the URL hash or hash fragment (the part of the URL after the `#` symbol).
 **How it Works:**
 
	-   When a user navigates to a URL with a hash fragment (e.g.,  `https://example.com/#/about`), the browser interprets everything after the  `#`  as part of the client-side application state, not a request to the server.
	-   React Router's  `HashRouter`  component monitors changes to the hash fragment using the  `window.location.hash`  property.
	-   Based on the hash fragment,  `HashRouter`  renders the appropriate React component for that route.

 - **`createMemoryRouter`:** `createMemoryRouter` is a function that creates a special kind of router specifically designed for testing and development scenarios.
		 **Purpose:**
	-   Unlike the standard  `BrowserRouter`  or  `HashRouter`  used in production,  `createMemoryRouter`  doesn't rely on the browser's history API for navigation.
	-   Instead, it maintains its own history stack entirely in memory, making it ideal for testing components that interact with React Router in a controlled environment.
---
**Q3: What is the order of life cycle method calls in Class Based Components?**
**Answer:**

    1. constructor()

    2. render()

    3. componentDidMount()

    4. componentDidUpadte()

    5. componentWillUnmount()

[**React Lifecycle**](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

---

**Q4: Why do we use componentDidMount?**
**Answer:** We use `componentDidMount()` in React because in react lifecycle, it is called after the component is mounted onto the DOM. Hence it is useful to fetch the data from the API.
Note: we can make `componentDidMount()` **`async`** funciton.

---
**Q5: Why do we use componentWillUnmount? Show with example**
**Answer:** We use `componentWillUnmount()` to perform cleanup duty. It is invoked right before the component is removed from the DOM tree.
Example: Consider a scenario,  a Timer function is started when user visits the component ( page ).

    componentDidMount(){
    this.timer = setInterval(()=>{
    console.log('timer');
    },1000) 
When user leaves the component ( page ), this instance will not stop. If user revisits the component a new instance of the Timer will start, resulting in two instance of the Timer running simulteneously.

To prevent this we can make use of `clearInterval`()  inside `componentWillUnmount()`,since it is invoked right before the component is removed form the DOM tree, it will clear the Timer instance.

    componentWillUnmount(){
		    clearInterval(Timer)
    } 

---
**Q6: (Research) Why do we use  `super(props)`  in constructor?**
**Answer:** `super(prop)` is used to invoke parent class constructor.
`super(prop)` is employed ***inside child*** class's constructor to explicitly call class constructor of its parent class.
*super()* is used inside constructor of a class to derive the parent's all properties inside the class that extended it.

---
 
 **Q: (Research) Why can't we have the  `callback function`  of  `useEffect async`?**
 **Answer:** You cannot have an async callback function directly in a React `useEffect` hook for a couple of reasons:

1.  **Return Expectations:** `useEffect` expects its callback function to return either nothing (most common) or a cleanup function. An async function inherently returns a promise, which doesn't fulfill either of these expectations. This would cause errors during rendering.
    
2.  **Asynchronous Nature:** `useEffect` itself runs asynchronously and doesn't block the rendering process. If you had an async function inside, it wouldn't guarantee the asynchronous operation (like an API call) would complete before the component renders. This could lead to unexpected behavior, such as the component rendering with empty data before the data is fetched.
---
<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/)  </span>
