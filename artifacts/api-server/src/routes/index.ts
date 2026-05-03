import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import demoRequestsRouter from "./demo-requests";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/auth", authRouter);
router.use("/demo-requests", demoRequestsRouter);
router.use("/contact", contactRouter);

export default router;
