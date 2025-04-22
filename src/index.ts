"use strict";

import dotenv from 'dotenv';
import TelegramBot from "node-telegram-bot-api";
import type {Message} from "node-telegram-bot-api";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "node:path";
import TelegramHandler from "./handlers/telegram";

dotenv.config();

if (!process.env.TELEGRAM_TOKEN)
	throw new Error("Telegram token doesn't exist");

const app = express();
const tg = new TelegramHandler();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({origin: "*"}));
app.use(express.static(path.join(__dirname, "public")));

tg.run();

app.get('/', (req,res): void => {
	res.status(200)
		.sendFile(path.resolve(process.cwd(), `/public/index.html`));
});

app.listen(process.env.APP_PORT, (error: Error | undefined): void => {
	console.log(`Listening on ${process.env.APP_PORT}`);
	if (error)
		console.error(error);
});