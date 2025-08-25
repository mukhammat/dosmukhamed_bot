import "dotenv/config";
import { Bot, session } from "grammy";
import { errorHandler } from "./middlewares/error-handler.js";
import { callbacks } from "./callbacks/callbacks.js";
import { startCommand } from "./commands/start.command.js";
import { I18n } from "@grammyjs/i18n";

/**
 * @import { I18nType, BotType } from "./index.js"
 */

if (!process.env.BOT_TOKEN) {
  throw new Error("Ошибка");
}

/**
 * @type {BotType}
 */
const bot = new Bot(process.env.BOT_TOKEN);

/**
 * @type {I18nType}
 */
const i18n = new I18n({
  directory: "locales",
  useSession: true,
  defaultLocale: 'en'
});


bot.use(
  session({
    initial: () => {
      return {};
    },
  }),
);
bot.use(i18n);

// Commands
bot.command("start", startCommand);

callbacks(bot);

bot.catch(errorHandler);
bot.start({
  onStart: (botInfo) => {
    console.log(`Bot ${botInfo.username} is up and running!`);
  },
});
