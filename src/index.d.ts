import { Context, Bot } from "grammy";
import { I18n, I18nFlavor } from "@grammyjs/i18n";

// For TypeScript and auto-completion support,
// extend the context with I18n's flavor:
export type ContextType = Context & I18nFlavor;

export type BotType = Bot<ContextType>;

export type I18nType = I18n<ContextType>;
