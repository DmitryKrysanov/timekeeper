import Cookies from 'js-cookie';

const TOKEN = 'token';
const UID = 'uid';

interface ICreateUserInformation {
  uid: string;
  token: string;
}

export const createUserInformation = ({
  uid,
  token,
}: ICreateUserInformation): void => {
  Cookies.set(TOKEN, token, {expires: 1 / 24});
  Cookies.set(UID, uid);
};

export const deleteUserInformation = (): void => {
  Cookies.remove(TOKEN);
  Cookies.remove(UID);
};
