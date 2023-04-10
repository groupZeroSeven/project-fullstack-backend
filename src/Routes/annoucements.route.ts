import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../Controllers/user.controller";
import ensureAuthMiddleware from "../Middlewares/ensureAuth.middleware";
import validateSchemaMiddleware from "../Middlewares/validadeschema.middleware";
import createAnnoucementShape from "../Serials/createAnnoucements.serial";
import {
  listAnnoucementController,
  createAnnoucementController,
  updateAnnoucementController,
  deleteAnnoucementController,
} from "../Controllers/annoucement.controller";

const annoucementsRouter = Router();

annoucementsRouter.get(`/api/anoucements`, listAnnoucementController);
// annoucementsRouter.get(`/api/profile`, ensureAuthMiddleware, retriveUserController);
annoucementsRouter.post(
  `/api/anoucements`,
  validateSchemaMiddleware(createAnnoucementShape),
  createAnnoucementController
);
annoucementsRouter.patch(
  `/api/anoucements/:id`,
  validateSchemaMiddleware(createAnnoucementShape),
  updateAnnoucementController
);
annoucementsRouter.delete(`/api/anoucements/:id`, deleteAnnoucementController);

export default annoucementsRouter;
