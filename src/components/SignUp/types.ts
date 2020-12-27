export interface ISignUpForm {
  firstName: string;
  lastName: string | null;
  email: string;
  password: string;
}

export interface IUser {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  password: string | null;
  _id: string | null;
  imageUrl: string | null;
}
