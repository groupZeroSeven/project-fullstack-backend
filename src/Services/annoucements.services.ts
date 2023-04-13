import AppDataSource from "../data-source";
import { Annoucement } from "../Entities/annoucement.entity";
import { AppError } from "../Errors/error";
import {
  IAnnoucementRequest,
  IAnnoucementResponse,
} from "../interfaces/annoucements";
import { Request } from "express";

export const createAnnoucementService = async (
  data: IAnnoucementRequest
): Promise<IAnnoucementResponse> => {
  const annoucementRepository = AppDataSource.getRepository(Annoucement);

  const createdAnnoucement = annoucementRepository.create(data);

  await annoucementRepository.save(createdAnnoucement);

  return createdAnnoucement;
};

export const updateAnnoucementService = async (
  data: Request
): Promise<IAnnoucementResponse[]> => {
  const annoucementRepository = AppDataSource.getRepository(Annoucement);

  const findAnnoucement = await annoucementRepository.findOneBy({
    id: data.params.id,
  });

  if (!findAnnoucement) {
    throw new AppError("Annoucement not found", 404);
  }

  if (findAnnoucement) {
    const updatedAnnoucement = annoucementRepository.create({
      ...findAnnoucement,
      ...data.body,
    });

    await annoucementRepository.save(updatedAnnoucement);

    return updatedAnnoucement;
  }

  throw new AppError("Permission denied", 403);
};

export const listAnnoucementService = async (
  request: Request
): Promise<IAnnoucementResponse[]> => {
  const annoucementRepository = AppDataSource.getRepository(Annoucement);

  const annoucements = await annoucementRepository.find();

  return annoucements;
};

export const retrieveAnnoucementService = async (
  request: Request
): Promise<IAnnoucementResponse> => {
  const annoucementRepository = AppDataSource.getRepository(Annoucement);
  const findAnnoucement = await annoucementRepository.findOneBy({
    id: request.params.id,
  });

  if (!findAnnoucement) {
    throw new AppError("Not Found", 404);
  }

  return findAnnoucement;
};

export const deleteAnnoucementService = async (
  request: Request
): Promise<number> => {
  const annoucementRepository = AppDataSource.getRepository(Annoucement);

  const annoucement = await annoucementRepository.findOneBy({
    id: request.params.id,
  });

  if (!annoucement) {
    throw new AppError("Not Found", 404);
  }

  await annoucementRepository.remove(annoucement);

  return 204;
};
