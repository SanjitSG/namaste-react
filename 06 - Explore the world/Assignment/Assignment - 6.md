> <p style="color:red">6 | Assignment</p>

<div align="center">
    <h1>|  Namaste-React &#128303; | Exploring the World | </h1>
</div>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Q1:** What is a microservice?
**Answer:** A microservice is a specific way of designing software applications. Instead of building one large program, you create a collection of smaller services that work together. Each microservice has a clearly defined purpose and operates independently.

- **Independent services:** Microservices are self-contained units that handle a specific task. They can be developed, deployed, and scaled independently.
- **Loose coupling:** Communication between microservices is minimal and happens through well-defined interfaces. This makes them interchangeable and easier to modify.
- **Small and focused:** Microservices are designed to be small and handle a single function. This makes them easier to understand, maintain, and test.

---

**Q2:** What is Monolithic architecture?
**Answer:** A monolithic architecture is the opposite of a microservices architecture. It's a traditional way of building software applications where everything is self-contained in a single, large codebase.
Here are the key characteristics of a monolithic architecture:

- **Single codebase:** All the functionalities of the application are bundled together in one codebase.
- **Tight coupling:** Different parts of the application are highly dependent on each other. A change in one area can impact other parts.
- **Large and complex:** Monolithic applications can grow quite large and complex over time, making them harder to maintain and update.

---

**Q3:** What is the difference between Monolithic and Microservice architecture?
**Answer:** A monolithic architecture is a traditional software development model that uses one code base to perform multiple business functions. All the software components in a monolithic system are interdependent due to the data exchange mechanisms within the system. It’s restrictive and time-consuming to modify monolithic architecture as small changes impact large areas of the code base. In contrast, microservices are an architectural approach that composes software into small independent components or services. Each service performs a single function and communicates with other services through a well-defined interface. Because they run independently, you can update, modify, deploy, or scale each service as required.

**Monolithic Architecture**

- **Pros:**
  - Easier to set up and deploy initially
  - Potentially faster development for smaller applications
  - Simpler debugging since everything is in one place
- **Cons:**
  - Becomes cumbersome and difficult to maintain as the application grows
  - Slow development for large applications due to complex codebase
  - Limited scalability - the entire application needs to scale even if only one part has high demand
  - Single point of failure - if one part fails, the whole application can crash

**Microservice Architecture**

- **Pros:**
  - Faster development and easier maintenance for complex applications due to smaller, independent services
  - Improved scalability - individual services can be scaled based on demand
  - Increased resilience - if one service fails, others can still function
- **Cons:**
  - More complex to set up and manage due to multiple services
  - Distributed tracing can be challenging since functionality is spread out

---

**Q4:** Why do we need `useEffect` Hook?
**Answer:** The `useEffect` hook in React is essential for managing side effects in functional components. Side effects are operations such as data fetching, subscriptions, or manually changing the DOM, which need to be executed after the render phase.

---

**Q5:** What is Optional Chaining?
**Answer:** Optional chaining is a feature introduced in ES2020 that simplifies and safeguards accessing properties of nested objects in JavaScript. It helps you avoid errors that might occur when dealing with potentially `null` or `undefined` values.
**Syntax:** Optional chaining is represented by the safe navigation operator (`?.`)

    const user = user?.profile?.name;

---

**Q6:** What is Shimmer UI?
**Answer:** A Shimmer UI is a visual element used in web and mobile applications to indicate that _data is still loading_. It replaces the eventual content with a _placeholder that mimics_ the shapes and layout of what will appear eventually. This creates a _smoother user experience_ by providing visual feedback and avoiding a blank screen while data is being fethced.

---

**Q7:** What is the difference between JS expression and JS statement?
**Answer:**
**JS Expressions:**

- **Evaluate to a value:** An expression is a piece of code that calculates or retrieves a single value. This value could be a number, string, boolean (true/false), an object, or even a function.
- **Used in various contexts:** Expressions are used in many places within your code, including:
  - Assigning values to variables (e.g., `let age = 25 + 3;`)
  - Performing calculations in mathematical operations (e.g., `5 * (10 + 2)`)
  - As conditions in control flow statements (e.g., `if (age > 18) { ... }`)
  - As arguments passed to functions (e.g., `console.log(user.name);`)

**Examples of JS Expressions:**

- `10 + 5` (evaluates to 15)
- `"Hello, " + name` (evaluates to a string like "Hello, Alice")
- `user.age > 30` (evaluates to true or false)
- `[1, 2, 3].length` (evaluates to 3)

**JS Statements:**

- **Perform actions:** Statements are complete instructions that tell the JavaScript engine to perform an action. They don't necessarily return a value on their own. Actions can include:
  - Declaring variables
  - Assigning values to variables
  - Calling functions
  - Creating control flow structures (if/else, loops)

**Examples of JS Statements:**

- `let message = "Welcome!";` (declares a variable and assigns a value)
- `if (isLoggedIn) { ... } else { ... }` (control flow statement)
- `for (let i = 0; i < 5; i++) { ... }` (loop)
- `console.log("Data is loading...");` (function call to print a message)

**Key Difference:**

The key distinction lies in whether the code produces a value (expression) or carries out an action (statement). Think of expressions as ingredients, and statements as recipes. Ingredients (expressions) have values, while recipes (statements) instruct you on what to do with those ingredients.

---

**Q8:** What is Conditional Rendering, explain with a code example?
**Answer:** Conditional rendering in React is a powerful technique for displaying content based on certain conditions. It allows you to create dynamic UIs that adapt to changes in data or user interactions.

Here's how it works:

1.  **Conditions:** You define a condition that evaluates to either true or false. This condition is typically based on your component's state or props.
2.  **JSX Expressions:** You write JSX elements (the building blocks of your UI) that represent the content you want to render.
3.  **Conditional Statements:** You use JavaScript's conditional statements (like `if` statements or the ternary operator) to control which JSX element gets displayed based on the condition's outcome.

**Example:**

    function Login() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const handleClick = () => {
        setIsLoggedIn(!isLoggedIn); // Toggle login state on button click
      };

      return (
        <div>
          {isLoggedIn ? ( // Conditional statement using the ternary operator
            <h1>Welcome back, user!</h1>
          ) : (
            <>
              <h1>Please log in</h1>
              <button onClick={handleClick}>Login</button>
            </>
          )}
        </div>
      );
    }

**Explanation:**

1.  The component has a state variable `isLoggedIn` to track the login status.
2.  The `handleClick` function toggles the `isLoggedIn` state on button click.
3.  The `return` statement uses a conditional expression with the ternary operator (`? :`).
    - If `isLoggedIn` is true, the `<h1>Welcome back, user!</h1>` element is rendered.
    - If `isLoggedIn` is false, a fragment (`<>`) groups two elements: `<h1>Please log in</h1>` and `<button onClick={handleClick}>Login</button>`.

So, based on the `isLoggedIn` state, either the welcome message or the login prompt is displayed. This is a basic example, but you can use conditional rendering for more complex scenarios as well.

---

**Q9** What is CORS?
**Answer:** CORS stands for Cross-Origin Resource Sharing. It's a security mechanism implemented by web browsers that restricts how a web page from one domain can request resources from a different domain.
CORS prevents malicious scripts from one website from accessing sensitive data on another website. This helps protect users from security vulnerabilities like cross-site scripting (XSS) attacks.
**How CORS Works:**

1.  **Request:** When a web page tries to access a resource from a different domain, the browser sends a preflight request (if applicable) to the server hosting the resource.
2.  **Preflight Request (Optional):** For certain HTTP methods (like PUT, DELETE, etc.), the browser sends a preflight request to check if the server allows the request from the originating domain.
3.  **CORS Headers:** The server responds with CORS headers in both the preflight response (if applicable) and the actual response. These headers indicate whether the request is allowed and from which origins access is permitted.
4.  **Access Granted/Denied:** The browser checks the CORS headers and determines whether to allow or block the request based on the permissions specified by the server.

---

**Answer:** Async/await is a powerful feature introduced in ES2017 that simplifies handling asynchronous code in JavaScript. It provides a cleaner and more synchronous-like way to work with Promises, which were the prevalent approach before.
**Traditional Promises:**

- Promises involve callbacks (`.then` and `.catch`) to handle the resolved or rejected state of an asynchronous operation. This can lead to nested callbacks, making code harder to read and maintain, especially for complex asynchronous tasks.

**Async/Await:**

- Async/await offers a more readable and sequential approach.
  - **Async Functions:** You define functions with the `async` keyword, indicating they potentially deal with asynchronous operations.
  - **Await Keyword:** Inside an async function, you use the `await` keyword before a Promise. This pauses the function's execution until the Promise settles (resolves or rejects). The resolved value of the Promise becomes the return value of the `await` expression.

**Benefits of Async/Await:**

- **Improved Readability:** Async/await makes asynchronous code appear more synchronous, resembling how synchronous code executes line by line. This enhances code readability and maintainability.
- **Error Handling:** You can use `try...catch` blocks within async functions to handle potential errors from Promises in a more structured way.
- **Cleaner Code:** Async/await eliminates the need for complex callback chains, leading to cleaner and less error-prone code.

---

**Q10:** What is the use of `const json = await data.json();` in getRestaurants()?
**Answer:** Async/await handles asycnhronous operation.
`await data.json()` handle fetching data from the response object.
The `await` keyword pauses the execution of the code at this point until the `data.json()` promise resolves (completes its operation).
Once the promise resolves, the parsed JSON data becomes the value assigned to the `json` constant.

---

<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/) </span>
