import { Credentials } from "~/models/Credentials";

export interface RegistrationInfo extends Credentials {
  name: string;
  email: string;
}
