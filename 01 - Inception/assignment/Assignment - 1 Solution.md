### Namaste React
# *Assignment - 1 Solution*

## Q1: What is `Emmet`?
**A:** Emmet is a plugin that helps you to write HTML and CSS code faster. You type a short abbreviation, and emmet expands it into full code.
Read More about [Emmet](https://docs.emmet.io/).



## Q2: Difference between a `Library` and a `Framework`?
**A:** Both libraries and framework are *reusable* code written by someone.

**Libraries**

 - Provides specific functionality. ( e.g. Image carousel )
 - Provide reusable blocks of code that perform a particular task or set of tasks. Examples include math functions, data manipulation tools, or UI component libraries like jQuery.
 - Relatively easy to integrate into existing projects.

**Frameworks**

 - Provides overall application structure.
 - Provide a foundation and predefined architecture for building an entire application. They often come with a set of tools and libraries included. Examples include Django, Spring, or Angular.
 - More challenging to integrate into existing projects due to their comprehensive nature.

The main difference b/w a library and a framework is **`inversion of control`**. By using library you have control over the flow of the program, The library can be invoked whenever and wherever you like. Whereas, when you use framework, the flow is controlled by the framework. The framework instructs you where to put your code, but it will call your code as required.



## Q3: What is CDN? Why do we use it?

**A:** A **Content Delivery Network** (CDN) is a geographically distributed network of servers that work together to speed up the delivery of website content to users.
Types of content a CDN can deliver:
-   **Static Content:**  Perfectly suited for CDNs. Static content rarely changes, so it can be cached on CDN servers for long periods, significantly reducing load times for users.
-   **Dynamic Content:**  More complex for CDNs. Since dynamic content can change, CDNs need to be instructed to invalidate (remove) outdated versions from their caches. This adds some complexity but can still be beneficial for certain dynamic content that doesn't update constantly.

## Q4: Why React is known as React? <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" widht="25px" height ="25px"/>

**A:**   
React, the JavaScript library for building user interfaces, is called "React" because it reflects its core functionality, **reacting to changes**. When a component's state changes, React "reacts" by efficiently updating the DOM (Document Object Model) to reflect those changes.

Read More : [History of React](https://legacy.reactjs.org/blog/2016/09/28/our-first-50000-stars.html#fbolt-is-born)

## Q5: What is crossorigin in script tag?

A: The `crossorigin` attribute, provides support for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
When you include a resource (like a script, image, font, etc.) in your web page from a different website (origin), the browser needs to ensure that it's safe to use that resource. This is especially important for security reasons.

The `crossorigin` attribute is a way for you to specify to the browser how it should handle requests for that resource when it's from a different origin.
**So, how does it work?**

1.  **Request:**  When a webpage tries to load a resource from a different domain (in our case, from a server hosting react files), the browser sends a request to the server hosting that resource.

3.  **CORS Headers:**  The server responds with HTTP headers indicating whether the request is allowed and which origins are authorized.
4.  **Access Granted/Denied:**  Based on the CORS headers, the browser either allows the resource to be loaded or blocks it.

### Q5: Whats is difference between React and ReactDOM?

**A:** `React` and `ReactDOM` are two separate packages in React ecosystem.

**React:** React is a JavaScript library for ***building user interfaces***. It provides a declarative and component-based approach to building UIs, allowing developers to create reusable UI components and manage the state of those components efficiently.

**ReactDom:** ReactDOM is a package that provides [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#what_is_the_dom)-specific methods for working with React. It's responsible for ***rendering*** React components to the DOM (Document Object Model) and for managing updates to those components. ReactDOM is used in web applications to take React components and render them into the browser's DOM, allowing users to interact with the UI.

### Q6: What is difference between `react.development.js` and `react.production.js` files via CDN?

**A:** React offers two versions of its library: `react.development.js` and `react.production.js`.

-   **Development version:**  Larger, easier to read for debugging, includes extra features for development like hot reloading. Used by default with CDNs.
-   **Production version:**  Smaller, minified for faster loading, optimized for performance in deployed applications.


### Q7: What is `async` and `defer`?

**A:** `Async` and `defer` are attributes you can use with the `<script>` tag in HTML to control how JavaScript files are loaded and executed.
**Async:**

-   **Execution:**  Executes the script as soon as it's downloaded and  **doesn't guarantee order**. This means multiple async scripts can execute in any order, even if they appear in a different order in your HTML.
-  eg: `<script src="async-script.js" async></script>` 

**Defer:**

-   **Execution:**  Waits until the HTML parsing is complete, then executes the script in the  **order they appear**  in the HTML.
- eg: `<script src="defer-script.js" defer></script>`


