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

  const message = "🏳️";
  try {
    await ctx.editMessageText(message, {
      reply_markup: keyboard,
    });
  } catch (err) {
    await ctx.reply(message, {
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
    .text(ctx.t("services"), "services")
    .row()
    .text(ctx.t("projects"), "projects")
    .text(ctx.t("contacts"), "contacts")
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
