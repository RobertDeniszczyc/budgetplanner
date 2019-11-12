# BudgetPlanner

This project is built with Electron, Create React App (CRA), and Electron Builder.
Foundations built from [this tutorial](https://www.codementor.io/randyfindley/how-to-build-an-electron-app-using-create-react-app-and-electron-builder-ss1k0sfer) with some
modifications in places where the tutorial was out of date or not suitable.

## Make it so
### Dev mode
Runs in dev mode. First launches CRA then Electron.
```
yarn electron-dev
```

### Build an artifact
Builds the React application then packages the Electron application into an executable artifact.

Currently only supports Windows builds due to only developing on Windows environment.
```
yarn electron-pack
```

## Supported platforms
- Windows 10
