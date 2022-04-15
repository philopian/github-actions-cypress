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
- deploy via your own computer
  ```shell
  $ yarn deploy
  ```

- Configure Github Actions
  - A personal access token is required to authenticate to GitHub 
  - Go to [Create token here](https://github.com/settings/tokens ) > `Generate new token` > Confim password
  - note: <repo_name> for github actions
  - Check the repo section
  - **DON'T FORGET TO COPY THE TOKEN**
  - Create a `.env` file in your repo root
    ```bash
    GH_REPO_TOKEN="<YOUR_ACCESS_TOKEN>"
    ```
  - Go to your repo > Settings > Secrets > Actions > new secret
    - name: GH_REPO_TOKEN
    - value: <YOUR_ACCESS_TOKEN>
