

/**
 *
 * @param {import("../index.js").BotType} bot
 */
export const aboutCallback = (bot) => {
  bot.callbackQuery("about", async (ctx) => {
    await ctx.answerCallbackQuery();
    await ctx.reply(ctx.t('aboutme'))
  });
};
