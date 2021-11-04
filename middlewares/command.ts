import { Context, deunionize } from "telegraf";

const retrieveText = (ctx: Context): string | undefined => {
  if (ctx.message !== undefined) {
    return deunionize(ctx.message).text;
  }
};

export const commandArgs = (ctx: Context, next: Function) => {
  if (ctx.updateType === "message") {
    const text = retrieveText(ctx);
    if (text && text.startsWith("/")) {
      const match = text.match(/^\/([^\s]+)\s?(.+)?/);
      let args:string[] = [];
      let command:string = "";

      if (match !== null) {
        if (match[1]) {
          command = match[1];
        }
        if (match[2]) {
          args = match[2].split(" ");
        }
      }

      ctx.state.command = {
        raw: text,
        command,
        args,
      };
    }
  }
  next();
};
