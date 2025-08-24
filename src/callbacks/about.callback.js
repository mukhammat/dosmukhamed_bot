/**
 *
 * @param {import("src/index.js").BotType} bot
 */
export const aboutCallback = (bot) => {
  bot.callbackQuery("about", async (ctx) => {
    ctx.i18n.useLocale("ar");
    await ctx.answerCallbackQuery();
    await ctx.reply(ctx.t('aboutme'))
  });
};
