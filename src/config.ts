import { IDiscordSettings } from './lib/types';

export const botToken = 'MTA3NTg4Mjg5MzIwMjcwNjUxMg.G7vwVw.hMktQ-LMX3C22SqcTODwDyMNXYb48KDkAf5tmQ';
export const production = false;
export const patreonConfig: null | {
	campaignID: number;
	token: string;
	webhookSecret: string;
} = null;
export const SENTRY_DSN: string | null = null;
export const HTTP_PORT = 1234;
export const CLIENT_SECRET = '';
export const CLIENT_ID = '1075882893202706512';
export const DEV_SERVER_ID = '1074062310697607258';
export const GITHUB_TOKEN = '';
export const DISCORD_SETTINGS: Partial<IDiscordSettings> = {
	// Your bot unique ID goes here
	BotID: '729244028989603850'
};
// Add or replace these with your Discord ID:
export const OWNER_IDS = ['1062848592517275649'];
export const ADMIN_IDS = ['1062848592517275649'];
export const MAXING_MESSAGE = 'Congratulations on maxing!';
// Discord server where admin commands will be allowed:
export const SupportServer = '1074062310697607258';
