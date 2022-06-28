# Design Tokens

This Tokens are originated in Figma and exported as code into this repository using the 'FigmaTokens' plugin. 

## Using Tokens in other JS projects (React, Storybook, etc.)

Install dependency
```
npm i @skillzet/tokens
```
Use inside a component:
```
import { colors } from "@skillzet/tokens";
```
```
style={{backgroundColor:`${colors.red100}`}}
```

<br/>
<hr/>
<br/>

## Updating Tokens Step by Step

### 1. Figma Tokens
Make changes in Figma using the Figma Tokens Plugin, be sure this repo is connected in settings section.

```
Name: Skillzet Tokens
Personal Access Token: <personal token>
Repository: skillzet/tokens
Default Branch: main
FilePath: figma/figmaTokens.json


Note: get your unique access token from https://github.com/settings/tokens
```

### 2. Push changes to repo
Inside FigmaTokens window, click on 'Push changes' , write a commit message and assign it to a branch with a customized name (it can be any name). Create a Pull Request, get that PR merged into main. 

Then pull your changes into your local environment
```
git pull
```

### 3. Prepare for NPM

The tokens sent by Figma need to be compiled in a format that can be used by NPM, run the followign script:
```
npm run build

```

### 4. Update NPM


1. Bump Version
```
//Be sure that all files are comitted in git
npm version <versionNumber>
```

2. Publish to NPM
```
npm publish --access public
```

<br/><br/>
<hr/>

<br/><br/>
## Contributing


Clone code from repo:
```
git clone git@github.com:skillzet/tokens.git
```


<br/><br/>

