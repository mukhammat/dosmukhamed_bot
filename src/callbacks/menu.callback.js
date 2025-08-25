import { mainMenu, chooseLangMenu } from "../keyboards/menu.keyboard.js";

/**
 *
 * @param {import("src/index.js").BotType} bot
 */
export const menuCallback = (bot) => {
  bot.callbackQuery("ru", async (ctx) => {
    await ctx.answerCallbackQuery();
    ctx.session.__language_code = "ru";
    await ctx.i18n.renegotiateLocale();
    await mainMenu(ctx);
  });

  bot.callbackQuery("en", async (ctx) => {
    await ctx.answerCallbackQuery();
    ctx.session.__language_code = "en";
    await ctx.i18n.renegotiateLocale();
    await mainMenu(ctx);
  });

  bot.callbackQuery("ar", async (ctx) => {
    await ctx.answerCallbackQuery();
    ctx.session.__language_code = "ar";
    await ctx.i18n.renegotiateLocale();
    await mainMenu(ctx);
  });

  bot.callbackQuery("chooseLangMenu", async (ctx) => {
    await ctx.answerCallbackQuery();
    await chooseLangMenu(ctx);
  });
};
