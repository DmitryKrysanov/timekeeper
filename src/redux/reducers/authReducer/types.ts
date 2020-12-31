export interface IAuth {
  uid: string | null;
  token: string | null;
  error: string | null;
  isLoad: boolean;
}
