import { Telegraf } from "telegraf";
import { processHttpCommand } from "./HttpCodes";
import { commandArgs } from "../middlewares/command";

const token: string | undefined = process.env.BOT_TOKEN;

if (!token) {
  throw Error("Missing BOT_TOKEN on process.env");
}

const bot = new Telegraf(token);
bot.command("/http", commandArgs, processHttpCommand);

export const launchBot = (): void => {
  bot.launch().then(() => console.log("BOT IS STARTED !!!"));
};
