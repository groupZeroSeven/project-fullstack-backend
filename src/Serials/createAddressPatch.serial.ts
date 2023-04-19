import * as yup from "yup";
import { Schema } from "yup";
import { IAddressRequest, IUserRequest } from "../Interfaces/users";

const addressPatchSchema: Schema = yup.object().shape({
  cep: yup.string(),
  state: yup.string(),
  city: yup.string(),
  number: yup.string(),
  road: yup.string(),
  complement: yup.string(),
});

export default addressPatchSchema;
