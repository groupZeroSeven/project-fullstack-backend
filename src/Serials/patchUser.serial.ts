import * as yup from "yup";
import { Schema } from "yup";
import { IUserUpdate } from "../interfaces/users";
import addressSchema from "./createAddress.serial";

const patchUserShape: Schema<IUserUpdate> = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  cpf: yup.string().notRequired(),
  birth_date: yup.date().notRequired(),
  password: yup.string().notRequired(),
  address: addressSchema,
});

export default patchUserShape;
