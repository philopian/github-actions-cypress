# Add Cypress

- setup and installation
  ```shell
  $ yarn add cypress -D
  ```
- It will install the Cypress Desktop App & CLI
- Now update your package.json file
  ```json:package.json
  {
    "scripts": {
      "e2e": "cypress open"
    },
  }
  ```
- When you run it for the first time it will provide a bunch of examples





# Github pages
- setup and installation
  ```shell
  $ yarn add gh-pages -D
  ```
- It will install the Cypress Desktop App & CLI
- Now update your package.json file
  ```json:package.json
  {
    "scripts": {
      "predeploy": "rm -rf ./build",
      "deploy": "npm run build && gh-pages -d build"
    },
  }
  ```
- Update your `vite.config.ts` so that it prefixes with the github repo name
  ```ts
  export default defineConfig({
    base:"/github-actions-cypress/",
    plugins: [react()],
    build:{
      outDir: "build",
    },
  })
```

  ```shell
  $ yarn deploy
  ```


