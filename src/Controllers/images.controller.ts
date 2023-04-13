import {
  createAnnoucementService,
  listAnnoucementService,
  updateAnnoucementService,
  deleteAnnoucementService,
  retrieveAnnoucementService,
} from "../Services/annoucements.services";
import { Request, Response } from "express";
import { deleteImagesService } from "../Services/images.services";

export const deleteImagesController = async (
  request: Request,
  response: Response
) => {
  const status = await deleteImagesService(request);
  return response.status(Number(status)).send();
};
