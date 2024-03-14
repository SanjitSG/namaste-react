### Namaste React - Chapter 2 igniting our app
# *Assignment - 2 Solution*


### Q1: What is `NPM`?
**A**: `NPM` is a package manager that provides tools to manage dependencies/packages. These packages are pre-written code for JavaScript which developers can easily integrate in their project.
**NPM  consist of three distinct components:**
1. The npm website helps developers to find the desirable packages.
2. The command line interface (CLI): Using CLI, developer can interact with npm packages.
3. The software/package registry: it is large public database for JavaScript packages and metadata.

We can initialize npm in our project using command

    npm init

It will create a config file `package.json` that allows us to save our configuration details in case we want to recreate this environment later on
(Make sure that Node.js environment is installed on you machine to use npm.)

### Q2: What is a Parcel/Webpack? Why do we need it?
**A:** Both Parcel and Webpack are module bundlers. A Module bundler is a tool that take JavaScript code and their dependencies, organize and combine the, into one file, usually for use in the browser. 
We need bundler to 
1. Code organization: Bundlers enable developers to organize their codebase more effectively by allowing them to split their code into modules or components.
2. Performance optimization: Bundlers optimize the code for production by performing tasks like minification (removing unnecessary whitespace and comments), code splitting (breaking code into smaller chunks to load only what is needed), and tree shaking (eliminating dead or unused code). These optimizations help reduce the size of the bundled files, leading to faster load times and improved performance for web applications.
3. Compatibility: They handle dependencies and support various file types, ensuring compatibility with different browsers and environments.
4. Development: Parcel and webpack produce optimized bundles ready for deployment, making it easier to deploy web applications to production environments.

To summarize, The Bundlers are essential tools in modern web development workflows, providing developers with the necessary tools to organize, optimize, and deploy their applications effectively.

### Q3: What is `.parcel-cache`?
**A:** `.parcel-cache` is a directory created by Parcel. Parcel uses this directory to store temporary files and packages while building web application. Parcel analyze dependencies and processes the source files and bundle them together. Parcel cache certain files and dependencies to avoid reprocessing them unnecessarily in subsequent builds.

### Q4: What is `npx`? 
**A:** `npx` stands for Node Package Execute, Also known as npm package runner it comes bundled with npm, It allows you to execute packages directly from the npm registry.

    npx <package-name> <entry-point>

### Q5: What is difference between `dependencies` vs `devDependencies`?
A: `dependencies` and `devDependencies` are listed inside package.json file. Both keep track of external dependencies used in the project.

`Dependencies`: These are packages that your project directly relies on. They are essential for the functionality of your application when it's deployed in a production environment.

`DevDependencies`: DevDependencies, as the name suggests, are packages that are only needed during development or testing. They are not necessary for the application to run in a production environment. 

### Q6: What is tree shaking?
**A:** Tree shaking is optimization technique used for removal of unused code from JavaScript bundles. This leads to smaller bundle sizes, which translates to faster loading time for web application.

### Q7: What is `Hot Module Replacement`? 
A: `Hot Module Replacement (HMR)` is a feature used in development environments. It allows developers to update modules (component, styles) in an application without having  to perform full page reload. This is done in real-time, allowing developers to see the changes immediately without having to manually refresh the page.

Full page reload is completely reloading the webpage in the browser, it discards current state of the web page, including any data and requests entire page content again from the server. This process involves in reloading all the resources such as HTML, CSS, JS, Images, etc.

In contrast, the HMR allows developers to reload specific module without triggering a Full page reload.


### Q8: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
**A:**
a. `Development server`: Parcel includes a build-in server for live reloading.
b. `Caching while development`: Parcel caches frequently accessed files, this speeds up subsequent buillds.
c. `Minification`: Minification removes unnecessary white-spaces and comments, renaming variables with shorter name hence reducing output bundle size.
d. `File watcher algorithm`: Parcel uses c++ based file watching algorithm for detection of changes in project files.
e. `Hot Module Replacement`: Reloads a module in realtime without need for full page reload.

### Q9: What is `.gitIgnore`? What should we add and not add into it?
**A:** `.gitIgnore` is a special file located in project directory, which tell Git which files to upload on github and files to ignore. This helps keep your Git repository clean and organized.

What to add- Anything we can regenerate on server we should add in out .gitIgnore
ex: node_modules - we can recreate using package.json

What not to add inside .gitIgnore - Source code, configuration files, documentation, there are the type of files which cannot be recreated and essential for project.
ex- html, js, css files, .json

### Q10: What is the difference between `package.json` and `package-lock.json`?
**A:** `package.json`: This file is primarily used for managing and documenting metadata about the project, including its name, version, author, dependencies, scripts, and other configuration details. It acts as a manifest for the project.

`package-lock.json`: This file is generated and updated automatically by npm when installing or updating packages. It is used to lock the exact versions of dependencies installed in the project, ensuring reproducibility and consistent installations across different environments.

### Q11: Why should i not modify `package-lock.json`?
**A:** `package-lock.json` is automatically generated information about the exact version of dependencies and sub-dependencies, Modifying it manually can break this record and lead to inconsistencies between your development environment, other developers' environments, and the production environment. Everyone might end up with slightly different versions of the code, causing potential bugs.


### Q12: What is node_modules? Is it a good idea to push that on git?
**A:** node_modules folder in node.js project stores all the dependencies of the project.
We should not push node_modules on git. Node modules are large in size. Using package.json we can replicate the dependency list on any machine.

### Q13: What is the `dist` folder?
**A:** `dist` or distribution folder contains processed code that is ready for deployment to a production environment.
The code us usually optimized for performance, by performing minification, transpoling, and bundling.

### Q14: What is `browserlists` ?
A: `browserlists` is a configuration found inside package.json. It allows to specify which web browsers you want to support in your project. This information is then used by various tools and libraries to ensure your code works correctly across those browsers.


