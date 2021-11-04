import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { launchBot } from "./bot-modules/main";
launchBot()
// import { getCodeByValue } from "./bot-modules/HttpCodes/codes";

// console.log(getCodeByValue(""));
const app = express();

app.listen(3000, () => {
  console.log("up at 3000");
});

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(1, 2));
