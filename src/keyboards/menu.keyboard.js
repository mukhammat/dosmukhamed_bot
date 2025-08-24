import { Context, InlineKeyboard } from "grammy";

/**
 *
 * @param {Context} ctx
 */
export const chooseLangMenu = async (ctx) => {
  const keyboard = new InlineKeyboard()
    .text("🇷🇺 Русский", "ru")
    .row()
    .text("🇬🇧 English", "en")
    .row()
    .text('🇸🇦 العربية', 'ar');

  try {
    await ctx.editMessageText("السلام عليكم ورحمة الله وبركاته", {
      reply_markup: keyboard,
    });
  } catch (err) {
    await ctx.reply("السلام عليكم ورحمة الله وبركاته", {
      reply_markup: keyboard,
    });
  }
};

/**
 *
 * @param {import('src/index.js').ContextType} ctx
 */
export const mainMenu = async (ctx) => {
  const keyboard = new InlineKeyboard()
    .text(ctx.t("about"), "about")
    .text(ctx.t("services"), "btn2")
    .row()
    .text(ctx.t("projects"), "btn2")
    .text(ctx.t("contacts"), "btn2")
    .row()
    .text(ctx.t("back"), "chooseLangMenu");

  try {
    await ctx.editMessageText(ctx.t("menu"), {
      reply_markup: keyboard,
    });
  } catch (err) {
    await ctx.reply(ctx.t("menu"), {
      reply_markup: keyboard,
    });
  }
};
