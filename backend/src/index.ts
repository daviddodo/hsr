import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from backend with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
