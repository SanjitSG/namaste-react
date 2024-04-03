><p style="color:red">7 | Assignment</p>
<div align="center">
    <h1>|  Namaste-React &#128303; | Finding the path | </h1>
</div> 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Q1:** **What are various ways to add images into our App? Explain with code examples.**
**Answer:** **Loading image from URL**. You can display images hosted externally by providing their full URLs in the `src` attribute.
import React from 'react';

    function Header() {
      const imageUrl = 'https://example.com/images/remote-image.jpg';
    
      return (
        <img src={imageUrl} alt="alternative text" />
      );
    }

**Importing Local Images.** This is the most common approach for including images stored within your React project's directory structure.

    import React from 'react';
    import myImage from './path/to/your/image.jpg'; // Adjust the path accordingly
    
    function Body() {
      return (
        <img src={myImage} alt="alternative text" />
      );
    }

**Using a Public Folder.** If you're using Create React App, you can place images directly in the `public` folder and access them using their relative paths. This is convenient for simple images that aren't part of your component logic.

    import React from 'react';
    
    function MyComponent() {
      return (
        <img src="/images/my-image.png" alt="A descriptive alternative text" />
      );
    }

---
**Q2: What would happen if we do `console.log(useState())`?**
**Answer:** It returns an array containing two elements `[undefiend, f]`. At zeroth position represents a `local state variable` and and first position is a `setter function` used to update the state variable associated with it.

---
**Q3: How will `useEffect` behave if we don't add a dependency array ?**
**Answer:** If we do not add a dependency array to the useEffect, the callback function inside the useEffect will be call on initial render as well as every subsequent re-render.
useEffect syntax:

    useEffect{() => {
    // statements
    }, []}

---
**Q4: What is a SPA?** 
**Answer:** SPA stands for *Single Page Application*. SPA refers to a web application that loads a single HTML page in the browser and dynamically updates the content using JavaScript. This creates a more seamless and fluid user experience compared to traditional multi-page applications that require full page reloads for each navigation.

---
**Q5: What is difference between Client Side Routing and Server Side Routing?**
**Answer:** Client-side routing and server-side routing are two approaches to handling navigation within a web application. They differ in where the routing logic is executed and how the user experience is affected.

 - **Client Side Routing:** In client-side routing, the web browser manages navigation between different views (pages) of the application without refreshing the entire page. This creates a faster and more responsive user experience, similar to a desktop application.
 - **Server Side Routing:** In server-side routing, the web server handles navigation requests. When a user clicks a link or enters a URL, the server generates a complete HTML page for the requested view and sends it to the browser.


---
<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/)  </span>
