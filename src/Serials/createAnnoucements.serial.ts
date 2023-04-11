import * as yup from "yup";
import { Schema } from "yup";
import { IUserRequest } from "../interfaces/users";
import { IAnnoucementRequest } from "../interfaces/annoucements";

const createAnnoucementShape: Schema<IAnnoucementRequest> = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  banner: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  mileage: yup.number().required(),
  color: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  is_bargain: yup.boolean().required(),
  is_published: yup.boolean().required(),
});

export default createAnnoucementShape;
