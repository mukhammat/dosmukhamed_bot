import { mainMenu, chooseLangMenu } from "../keyboards/menu.keyboard.js";

/**
 *
 * @param {import("src/index.js").BotType} bot
 */
export const menuCallback = (bot) => {
  bot.callbackQuery("ru", async (ctx) => {
    await ctx.answerCallbackQuery();
    ctx.i18n.useLocale("ru");
    await mainMenu(ctx);
  });

  bot.callbackQuery("en", async (ctx) => {
    await ctx.answerCallbackQuery();
    ctx.i18n.useLocale("en");
    await mainMenu(ctx);
  });

  bot.callbackQuery("ar", async (ctx) => {
    await ctx.answerCallbackQuery();
    ctx.i18n.useLocale("ar");
    await mainMenu(ctx);
  });

  bot.callbackQuery("chooseLangMenu", async (ctx) => {
    console.log("Назад");
    await ctx.answerCallbackQuery();
    await chooseLangMenu(ctx);
  });
};
