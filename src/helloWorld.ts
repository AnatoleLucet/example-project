import { IRouter, Router } from "express";

const router: IRouter = Router();

router.get("/*", (_, res) => res.send("Hello World!"));

export default router;
