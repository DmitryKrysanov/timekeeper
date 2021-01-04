import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {GET_PROJECTS} from '../../constants/projectConstants';
import {IProject} from '../../../components/Projects/types';
import {
  getProjectsFail,
  getProjectsSuccess,
  projectsIsLoad,
  projectsIsUpdated,
} from '../../actions/projectActions';
import {projectApi} from '../../../api';

const mockProjects: IProject[] = [
  {
    name: 'Flace',
    description:
      'Whether you enjoy city breaks or extended holidays in the sun, you can always improve your travel experiences by staying in a small, charming hotel, where the atmosphere is welcoming ...',
    color: '#00BF88',
    tasks: null,
    _id: '1',
  },
  {
    name: 'Glypher',
    description: 'Make your text beautiful',
    color: '#000',
    tasks: null,
    _id: '2',
  },
  {
    name: 'Chat 2.0',
    description: 'Just chat',
    color: '#0366D6',
    tasks: null,
    _id: '3',
  },
  {
    name: 'Portfolio',
    color: '#FF4035',
    tasks: null,
    _id: '4',
  },
];

function* getProjectsWorker() {
  try {
    yield put(projectsIsLoad(true));
    const projects = yield call(projectApi.getProjects);
    console.log(projects);
    yield put(getProjectsSuccess(projects));
    yield put(projectsIsUpdated(true));
    yield put(projectsIsLoad(false));
  } catch (error) {
    yield put(projectsIsLoad(false));
    yield put(getProjectsFail(error.message));
    yield delay(3000);
    yield put(getProjectsFail(null));
  }
}

export function* watchGetProjects() {
  yield takeEvery(GET_PROJECTS, getProjectsWorker);
}
