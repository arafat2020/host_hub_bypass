import axios, { Axios } from "axios";
import dotenv from "dotenv";
import { type Request, type Response, Router } from "express";

const router = Router();

dotenv.config();
router.get("/list_calender_event", async (_req: Request, res: Response) => {
	try {
		const response = await axios.get(
			"https://app.hosthub.com/api/2019-03-01/rentals/p3dba2p6u1/calendar-events",
			{
				headers: {
					Authorization: process.env.HOSTHUB_API_KEY || "",
					"Content-Type": "application/json",
				},
			},
		);

		res.json(response.data);
	} catch (error) {
		console.error("Error fetching calendar events:", error);
		res.status(500).json({ error: "Failed to fetch calendar events" });
	}
});

export default router;
