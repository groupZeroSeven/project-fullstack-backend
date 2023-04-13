import * as yup from "yup";
import { Schema } from "yup";
import { IUserRequest } from "../interfaces/users";
import {
  IAnnoucementPatchRequest,
  IAnnoucementRequest,
} from "../interfaces/annoucements";

const patchAnnoucementShape: Schema = yup.object().shape({
  brand: yup.string().notRequired(),
  model: yup.string().notRequired(),
  banner: yup.string().notRequired(),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  mileage: yup.number().notRequired(),
  color: yup.string().notRequired(),
  price: yup.number().notRequired(),
  images: yup.array().notRequired(),
  description: yup.string().notRequired(),
  is_bargain: yup.boolean().notRequired(),
  is_published: yup.boolean().notRequired(),
});

export default patchAnnoucementShape;
