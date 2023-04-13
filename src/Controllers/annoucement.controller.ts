import {
  createAnnoucementService,
  listAnnoucementService,
  updateAnnoucementService,
  deleteAnnoucementService,
  retrieveAnnoucementService,
} from "../Services/annoucements.services";
import { Request, Response } from "express";

export const createAnnoucementController = async (
  request: Request,
  response: Response
) => {
  const newAnnoucement = await createAnnoucementService(request.body);
  return response.status(201).json(newAnnoucement);
};

export const listAnnoucementController = async (
  request: Request,
  response: Response
) => {
  const annoucements = await listAnnoucementService(request);
  return response.status(200).json(annoucements);
};

export const retriveAnnoucementController = async (
  request: Request,
  response: Response
) => {
  const annoucement = await retrieveAnnoucementService(request);
  return response.status(200).json(annoucement);
};

export const updateAnnoucementController = async (
  request: Request,
  response: Response
) => {
  const updatedAnnoucement = await updateAnnoucementService(request);
  return response.status(200).json(updatedAnnoucement);
};

export const deleteAnnoucementController = async (
  request: Request,
  response: Response
) => {
  const status = await deleteAnnoucementService(request);
  return response.status(Number(status)).send();
};
