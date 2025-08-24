import { chooseLangMenu } from "../keyboards/menu.keyboard.js";

/**
 *
 * @param {import('src/index.js').ContextType} ctx
 */
export const startCommand = async (ctx) => {
  await chooseLangMenu(ctx);
};
