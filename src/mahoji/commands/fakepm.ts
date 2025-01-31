import { Canvas, loadImage } from '@napi-rs/canvas';
import fs from 'fs';
import { ApplicationCommandOptionType, CommandRunOptions } from 'mahoji';

import { OSBMahojiCommand } from '../lib/util';

const bg = loadImage(fs.readFileSync('./src/lib/resources/images/pm-bg.png'));

export const fakepmCommand: OSBMahojiCommand = {
	name: 'fakepm',
	description: 'Generate fake images of PMs.',
	options: [
		{
			type: ApplicationCommandOptionType.String,
			name: 'username',
			description: 'The username to put on the image.',
			required: true
		},
		{
			type: ApplicationCommandOptionType.String,
			name: 'message',
			description: 'The message.',
			required: true
		}
	],
	run: async ({ options }: CommandRunOptions<{ message: string; username: string }>) => {
		const canvas = new Canvas(376, 174);
		const ctx = canvas.getContext('2d');
		ctx.font = '16px OSRSFont';
		const img = await bg;
		ctx.drawImage(img, 0, 0, img.width, img.height);

		ctx.fillStyle = '#000000';
		ctx.fillText(`From ${options.username}: ${options.message}`, 6, 98);
		ctx.fillStyle = '#00ffff';
		ctx.fillText(`From ${options.username}: ${options.message}`, 5, 97);

		return {
			files: [{ attachment: await canvas.encode('png'), name: `${Math.round(Math.random() * 10_000)}.jpg` }]
		};
	}
};
