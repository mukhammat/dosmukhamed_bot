import { Bot } from "grammy";

import { menuCallback } from "./menu.callback.js";
import { aboutCallback } from "./about.callback.js";

/**
 *
 * @param {import("src/index.js").BotType} bot
 */
export const callbacks = (bot) => {
  menuCallback(bot);
  aboutCallback(bot);
};
