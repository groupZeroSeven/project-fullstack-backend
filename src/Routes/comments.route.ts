import { Router } from "express";
import ensureAuthMiddleware from "../Middlewares/ensureAuth.middleware";
import {
  createCommentsController,
  deleteCommentsController,
  updateCommentsController,
} from "../Controllers/comments.controller";

export const commentsRouter = Router();

commentsRouter.post(
  "api/:annoucementId/comments/",
  ensureAuthMiddleware,
  createCommentsController
);
commentsRouter.delete(
  "api/:annoucementId/comments/:id",
  ensureAuthMiddleware,
  deleteCommentsController
);
commentsRouter.patch(
  "api/:annoucementId/comments/:id",
  ensureAuthMiddleware,
  updateCommentsController
);
