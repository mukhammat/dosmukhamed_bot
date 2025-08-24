import { Context } from "grammy";
import { chooseLangMenu, mainMenu } from "../keyboards/menu.keyboard.js";
import { t } from "../lang/index.js";

/**
 *
 * @param {Context} ctx
 * @param {import("grammy").NextFunction} next
 */
export const checkLang = (ctx, next) => {
  if (!ctx.lang) chooseLangMenu(ctx);
  else mainMenu(ctx);
  next();
};
