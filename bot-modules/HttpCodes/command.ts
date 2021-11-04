import { Context } from "telegraf";
import { httpCodeExists } from "./codes";
import { hasThreeDigits } from "../../utils/stringValidators";

const getUrl = (value: string): string | null => {
  return !hasThreeDigits(value) || !httpCodeExists(value)
    ? null
    : "https://http.cat/" + value;
};

export const processHttpCommand = (ctx: Context) => {
  const { state } = ctx;
  const { args } = state?.command;

  if (args.length !== 1) {
    return;
  }

  const url = getUrl(args[0]);

  if (url) {
    ctx.replyWithPhoto(url);
  }
};
