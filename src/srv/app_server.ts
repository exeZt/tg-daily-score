import express, {Express} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "node:path";

export default class AppServer {
	protected readonly application: Express = express();

	constructor(options: {
		env: typeof process.env,
	}, preload?: Function) {
		this.application.use(express.json());
		this.application.use(bodyParser.urlencoded({ extended: false }));
		this.application.use(bodyParser.json());
		this.application.use(express.urlencoded({ extended: false }));
		this.application.use(cors({origin: "*"}));
		this.application.use(express.static(path.join(process.cwd(), "public")));

		this.application.get('/', (req,res): void => {
			res.status(200)
				.sendFile(path.resolve(process.cwd(), `public/index.html`));
		});

		this.application.listen(options.env.APP_PORT, () => {
			console.log(`Listening on ${options.env.APP_PORT}`);
		});
	}
}