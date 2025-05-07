"use strict";

import dotenv from 'dotenv';
import path from "node:path";
import TelegramHandler from "./handlers/telegram";
import AppServer from "./srv/app_server";
import router from "./api/common";

dotenv.config();

if (!process.env.TELEGRAM_TOKEN)
	throw new Error("Telegram token doesn't exist");

const tg = new TelegramHandler();
const app = new AppServer({
	env: process.env
}).application;
const app_port = process.env.APP_PORT ?? 3000;

tg.run();

app.use('/api/', router);

app.get('/', (req,res): void => {
	res.status(200)
		.sendFile(path.resolve(process.cwd(), `public/index.html`));
});

app.listen(app_port, () => {
	console.log(`Listening on ${app_port}`);
});