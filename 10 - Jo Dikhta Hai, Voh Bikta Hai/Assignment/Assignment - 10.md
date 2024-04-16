><p style="color:red">10 | Assignment</p>
<div align="center">
    <h1>|  Namaste-React &#128303; | Jo Dikhta Hai, Vo Bikta Hai | </h1>
</div> 

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**Q1: Explore all the ways of writing css?**
**Answer:** 
1.  **External Stylesheets:**
    
    -   This is the most fundamental method, similar to styling HTML pages.
    -   Create a CSS file (e.g.,  `style.css`) and import it into your React component using the  `import`  statement.
    -   **Pros:**  Simple setup, good for basic styling, and maintains separation of concerns.
    -   **Cons:**  Styles might become global unintentionally, leading to conflicts across components.
2.  **Inline Styles:**
    
    -   Apply styles directly to JSX elements using the  `style`  attribute.
    -   The value of the  `style`  attribute is a JavaScript object with camelCase property names corresponding to CSS properties (e.g.,  `backgroundColor`  instead of  `background-color`).
    -   **Pros:**  Inline styles can be dynamic based on props or state.
    -   **Cons:**  Can make components cluttered and harder to maintain for complex styles.
3.  **CSS Modules:**
    
    -   A popular approach that leverages a loader to generate unique class names for each CSS rule within a module.
    -   Import the generated CSS module file into your React component.
    -   Apply the unique class names to your JSX elements.
    -   **Pros:**  Encapsulation of styles within components, prevents naming conflicts, promotes reusability.
    -   **Cons:**  Requires additional setup with loaders.
4.  **CSS-in-JS Libraries:**
    
    -   Libraries like styled-components, Emotion, JSS, and others allow you to write CSS styles directly within your JavaScript code using template literals.
    -   Styles are typically defined as functions or tagged template literals that accept props and return CSS.
    -   **Pros:**  Highly dynamic styles, easy integration with component logic and state, promotes component reusability.
    -   **Cons:**  Steeper learning curve compared to traditional CSS, might affect bundle size.
5.  **Utility-first CSS Frameworks:**
    
    -   Frameworks like Tailwind CSS or Windy CSS provide pre-built, atomic utility classes that you can combine to style your components.
    -   Offer a large collection of classes for various styles (e.g.,  `text-red-500`  for red text color).
    -   **Pros:**  Rapid UI development, promotes consistency, reduces custom CSS needs.
    -   **Cons:**  Might lead to verbose class names, less control over specific styles.

---
**Q2: How do we configure tailwind?**
**Answer:** 
Tailwind is a utility first framework. In this approach, instead of pre-designed components, the framework offers a collection fo basic, reusable CSS classes that target specofic aspects of an element's style.

Since we're using Parcel in our app, to configure Tailwind as follows.

 

 1. Docs > Framework and Guides > Parcel

 2. Create your project (skip to step 3 if project already exists).

 3.  Install Tailwind CSS. 

`    npm install -D tailwindcss postcss
    npx tailwindcss init`
 
 4. Configure PostCSS.

 `{
  "plugins": {
    "tailwindcss": {}
  }
}`

 5. Configure your template paths. 

`module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ]`

 6. Add the Tailwind directives to your CSS. 

`@tailwind base;
@tailwind components;
@tailwind utilities;`

---
**Q3: In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?**
**Answer:** 
**Content :** The `content` section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.
**Theme:** The `theme` section is where you define your color palette, fonts, type scale, border sizes, breakpoints — anything related to the visual design of your site.
**Plugins:** The `plugins` section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.

    module.exports  =  {  
    // ...  
    plugins:  [  
		    require('@tailwindcss/forms'),  
		    require('@tailwindcss/aspect-ratio'),  
		    require('@tailwindcss/typography'),  
		    require('tailwindcss-children'),  
		    ],  
		  }
**Extend:** If you’d like to preserve the default values for a theme option but also add new values, add your extensions under the `theme.extend` key in your configuration file. Values under this key are merged with existing `theme` values and automatically become available as new classes that you can use.
 - [Example](https://tailwindcss.com/docs/theme#extending-the-default-theme)
  
---
**Q4: Why do we have .postcssrc file?**
**Answer:** 
- The `.postcssrc` file serves as a configuration file for PostCSS. PostCSS is a  CSS preprocessor tool. A **transpiler** for css (like babel) that turns a special PostCSS plugin syntax into a Vanilla CSS.
- `.postcssrc` this configuration tells PostCSS to include the Tailwind CSS plugin during the CSS processing step. This allows Tailwind to inject its utility classes and styles into your CSS code based on your Tailwind configuration files (`tailwind.config.js`).

**Without this configuration:**

-   Your CSS won't understand the Tailwind utility classes you use in your HTML.
-   The styles won't be applied correctly.

**With this configuration:**

-   PostCSS recognizes the Tailwind classes and processes them accordingly.
-   Your final CSS code will have the necessary styles to match your Tailwind class usage.

---
<span style="display: flex; justify-content: space-between; width: fit-content;"> [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://www.Github.com/sanjitsg) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sanjitgawade/)  </span>

