import { ICategoryRequest } from "../../Interfaces/contacts";
import { IPropertyRequest } from "../../Interfaces/properties";
import { IScheduleRequest } from "../../Interfaces/schedules";
import { IUserRequest } from "../../Interfaces/users";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: number | any;
        type: string;
      };
    }
  }
}

export {};
