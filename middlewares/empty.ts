import { Context } from "telegraf";

export const messageExists =  (ctx: Context, next: Function) => {
  if (ctx.message !== undefined) {
    next();
  } 
};
