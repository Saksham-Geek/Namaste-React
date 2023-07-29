# Create Your Own React APP

NPM != Node Package Manager
NPM is anything but Node Package Manager, Does not have a fullform.

- All the Libraries, Utilities we need, comes from NPM
  `npm init`
- `pakage.json` is a configuration for NPM
- takes care of version of packages
- Packages === Dependencies

- The Most important Package in the project is a `Bundler` our whole code needs to be bundled, cached, compressed, cleaned (remove comments and minified) before we send it to Production.

- A `Bundler` Helps to do this. webpack, parcel, vite are Bundlers. These Bundlers, `Bundels` the App so that we can push the App in Production

`npm install -D parcel`

### There are 2 Kind of Depencencies

1. Dev Depencencies -D.

- Generally required in development phase

2. Normal Depencencies

- These are used in Production Also.
- "parcel": "^2.9.3" `'^' caret` if new version comes package will be updated automatically to a `Minor` update. SAFE to update to a minor version.
- "parcel": "~2.9.3" `'^' tilde` if new version comes package will be updated automatically to a `Major` update. NOT safe to update to a major version

#### Difference between package.json & package-lock.json

- package.json : configuration for NPM, keeps track of what version of package is installed. It has Approx version with ^ or ~
- package-lock.json keeps track of the exact version without ^ or ~ that is being installed.
- package-lock.json - Integrity : Hash : sha512

### Node Modules

- Contains all the code that we fetched from NPM, it is a collection of Dependencies data (code).
- Transitive Dependencies -- when Dependencies have other Dependencies and those Dependencies also have other Dependencies
- Every Dependencies in the project has a package.json.
- if we have package.json & package-lock.json we can re create all the node_modules with  
  `npm install` so, NEVER PUSH node_modules on Github.

### .gitignore

- It contains all the files that git will ignore from pushing in repository.

### Using Parcel to Build app and run App in Localhost

`npx parcel index.html`

### Using Parcel to Build app for Production

`npx parcel build index.html`

### NPM vs NPX

- NPM : used to install the package
- NPX : used to Executing a package.

### Installing React

1. npm i react
2. npm install react-dom

- In index.html 🚨 [parcel]: @parcel/transformer-js: Browser scripts cannot have imports or exports. Add type="module" in where html is linking the script App.js as NORMAL JS does not have import inside it. we should make it type="module"

## Parcel

### Using Parcel to Build app and run App in Localhost

`npx parcel index.html`

### Using Parcel to Build app for Production

`npx parcel build index.html`

[Parcel](https://parceljs.org/)

1. Remove `Main:"App.js"` from package.json because we give entry point as `npx parcel index.html`

2. When we execute Parcel ==> `npx parcel index.html`, It generates a development build of project and puts into `dist` and when we do `npx parcel build index.html` the `dist` folder contains Build Files and overrides the development. and Build gives 3 main files inside `dist` folder, HTML, CSS, JS.
   It is hosted at http://localhost:1234
3. when we refresh the page, dist folder and parcel-cache folder is used to do update HMR (refresh)

- `dist` and `.parcel-cache` can be re-generated whenever we run `parcel index.html`. we should not upload them to git.

## Speciality of Parcel Bundler

- Dev Build
- Reliable Caching - Faster Builds
- Local Server
- HMR - Hot Module Replacement [Refreshes Browser]
- File watching Algorithm - Written in C++
- Image Optimization
- Minification
- Bundle Files
- Compress Files
- Consistent Hashing \*\*
- Code Splitting
- Differential Bundling - Support older browsers
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - Algo : It will remove unused code from files.
- Different Dev and Produnction Builds.

### Browserslist

- This is for Froduction ready App, The App will definately support In the browsers of which we have given details about
  [Browerslist](https://browserslist.dev/)

```
  "Browserslist": [
    "last 2 versions"
  ]
```
