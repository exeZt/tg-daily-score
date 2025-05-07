import express, {Router} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import DefaultDataHandler from "../data/default";

const router = Router();

router.use(bodyParser.json());
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.urlencoded({ extended: false }));
router.use(cors({origin: "*"}));

router.get('/get-all-tables', (req,res) => {
	res.status(200).send(new DefaultDataHandler().getAllTables());
})

router.get('/get-summary', (req, res) => {
	let table: string = req.query.tablename as string;
	console.log(table)

	new DefaultDataHandler().getCurrentData(table, (data) => {
		if (data.length === 0){
			res.status(204).send(null);
		} else {
			res.status(200).send(data);
		}
	})
})

export default router;