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
import patchAnnoucementShape from "../Serials/patchAnnoucements.serial";
import { deleteImagesController } from "../Controllers/images.controller";

const imagesRouter = Router();

// annoucementsRouter.get(`/api/anoucements`, listAnnoucementController);
// annoucementsRouter.get(`/api/anoucements/:id`, retriveAnnoucementController);
// annoucementsRouter.post(
//   `/api/anoucements`,
//   validateSchemaMiddleware(createAnnoucementShape),
//   createAnnoucementController
// );
// annoucementsRouter.patch(
//   `/api/anoucements/:id`,
//   validateSchemaMiddleware(patchAnnoucementShape),
//   updateAnnoucementController
// );
imagesRouter.delete(`/api/images/:id`, deleteImagesController);

export default imagesRouter;
