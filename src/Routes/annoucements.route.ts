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
  retriveAnnoucementController,
} from "../Controllers/annoucement.controller";
import patchAnnoucementShape from "../Serials/createAnnoucements.serial copy";

const annoucementsRouter = Router();

annoucementsRouter.get(`/api/anoucements`, listAnnoucementController);
annoucementsRouter.get(`/api/anoucements/:id`, retriveAnnoucementController);
annoucementsRouter.post(
  `/api/anoucements`,
  validateSchemaMiddleware(createAnnoucementShape),
  createAnnoucementController
);
annoucementsRouter.patch(
  `/api/anoucements/:id`,
  validateSchemaMiddleware(patchAnnoucementShape),
  updateAnnoucementController
);
annoucementsRouter.delete(`/api/anoucements/:id`, deleteAnnoucementController);

export default annoucementsRouter;
