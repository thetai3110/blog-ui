import { all } from 'redux-saga/effects';
import blogSaga from './blog_saga';

export default function* rootSaga() {
    yield all([
        ...blogSaga
    ])
}