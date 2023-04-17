import { Address } from "../../Entities/addresses.entity";

export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  number: string;
  road: string;
  complement?: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  is_seller: boolean;
  birth_date: Date;
  address: IAddressRequest;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponse {
  id: string;
  name: string;
  birth_date: Date;
  email: string;
  is_seller: boolean;
  phone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
  address: Address;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  birth_date: Date;
  is_seller: boolean;
  phone: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
  address: IAddressRequest;
}

export interface IUserUpdate {
  name?: string | null;
  phone?: string | null;
  birth_date?: Date | null;
  cpf?: string | null;
  email?: string | null;
  password?: string | null;
  address?: IAddressRequest | null;
}
