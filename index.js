//Tokens
export { default as Colors } from "./tokens/Colors";
export { default as Typography } from "./tokens/Typography";
export { default as Shadows } from "./tokens/Shadows";

export { default as Figma } from "./tokens/Figma";
// Its not working because is missing the default declaration
// this index file is not reaching the exports
//OPTION1
// make a JSON object and then load it as a theme
// better but more ellaborated
//OPTION2
// unpack the JSON in Storybook and use it as inline style
//faster as a POC
//OPTION3
// find a way to use stuff inside those packages installed in Storybook.

//This needs to be updated manually everytime a new token is added
export { BaseRadius } from "./tokens/Figma";
export { Elevation8 } from "./tokens/Figma";