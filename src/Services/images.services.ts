import AppDataSource from "../data-source";
import { Annoucement } from "../Entities/annoucement.entity";
import { Image } from "../Entities/image.entity";
import { AppError } from "../Errors/error";
import {
  IAnnoucementRequest,
  IAnnoucementResponse,
} from "../interfaces/annoucements";
import { Request } from "express";

export const deleteImagesService = async (
  request: Request
): Promise<number> => {
  const imagesRepository = AppDataSource.getRepository(Image);

  console.log(request);
  const image = await imagesRepository.findOneBy({
    id: request.params.id,
  });

  if (!image) {
    throw new AppError("Not Found", 404);
  }

  await imagesRepository.remove(image);

  return 204;
};
