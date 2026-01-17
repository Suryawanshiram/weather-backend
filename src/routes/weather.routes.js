import express from "express";
import {
  getCurrentWeather,
  getForecast,
} from "../controllers/weather.service.js";

const router = express.Router();

router.get("/weather", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  res.json(await getCurrentWeather(city));
});

router.get("/forecast", async (req, res) => {
  const { city } = req.query;
  if (!city) return res.status(400).json({ error: "City is required" });

  res.json(await getForecast(city));
});

export default router;
