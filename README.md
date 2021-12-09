# SMK - State Management Kit

STACK: [Mobx-state-tree](https://mobx-state-tree.js.org/intro/welcome) | [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) | [Jest](https://jestjs.io/docs/getting-started)

It's an example how to abstract the state management of a React Project. This way you can reuse the same store in Web and Mobile (React Native) at the same time and saving time on the maintenence because you will change in one place.

## Automations

You can check the `.github/worflows` to check how it works. After doing all the automatic stuff you need to release the new version manually on github.

- Bump Version: when push to master
- Auto Publish: when bump version finishes
- Manual Publish: need to fire manually in the actions tab at Github
- Validate PR Descriptio: auto check when create new PR

## Usage

To intall the @myrepo/smk in your project you just need to run a simple command.

```shell
yarn add @myrepo/smk
```

After that just call the available stores:

- Language: `LanguageStore`, `Language` interface and `AvailableLanguages` enum

| ⚠️ **WARNING**: Always certify that you have the latest version released. |
| ------------------------------------------------------------------------ |

## Instalation  

1. Clone the repository.

    ```shell
    git clone git@github.com:myrepo/smk.git smk
    ```

2. Install the node module.

    ```shell
    yarn install
    ```

3. Run the packge and start working

    ```shell
    yarn start
    ```

| ⚠️ **WARNING**: Don't manually change the index. It's automatically generated by barrelsby. |
| ------------------------------------------------------------------------------------------ |
