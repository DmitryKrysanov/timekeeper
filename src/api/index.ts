import axios from 'axios';
import Cookies from 'js-cookie';
import {IProject} from '../components/Projects/types';
import {ISignInForm} from '../components/SignIn/types';
import {IUser} from '../components/SignUp/types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const authApi = {
  signIn(userData: ISignInForm) {
    return instance
      .post('/auth/signin', userData)
      .then((response) => response.data);
  },

  signUp(userData: IUser) {
    return instance
      .post('/auth/signup', userData)
      .then((response) => response.data);
  },

  forgotPassword(email: string) {
    return instance
      .post('/auth/forgot-password', email)
      .then((response) => response.data);
  },
};

export const projectApi = {
  getProjects() {
    const uid = Cookies.get('uid');
    return instance
      .get(`/projects/?uid=${uid}`)
      .then((response) => response.data);
  },
  getProjectById(id: string) {
    return instance.get(`/projects/${id}`).then((response) => response.data);
  },
  createProject(payload: IProject) {
    const uid = Cookies.get('uid');
    const newProject = {
      ...payload,
      uid,
    };
    return instance.post('/projects/', newProject);
  },
  editProject(project: IProject) {
    return instance.put(`/projects/${project._id}`, project);
  },
  deleteProject(projectId: string) {
    return instance.delete(`/projects/${projectId}`);
  },
};

export const userApi = {
  getUser() {
    const uid = Cookies.get('uid');
    return instance.get(`/users/?uid=${uid}`).then((response) => response.data);
  },
  updateUser(user: IUser) {
    return instance.put(`/users/?uid=${user._id}`, user);
  },
  // deleteEvent(eventId: string) {
  //   return instance.delete(`/events/${eventId}`);
  // },
};
