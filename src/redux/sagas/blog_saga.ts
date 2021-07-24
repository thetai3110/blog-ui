
import {GetLstBlogs} from '../reducers/blog_reducer';
import { takeLatest } from 'redux-saga/effects';
import app, { storage } from '../../firebase/firebase';

function* fetchLstBlogs() {
    try {
        const db = storage;
        // db.on('value', (snap) => {
        //     if (snap.val() !== null) {
        //         console.log(snap.val())
        //     }
        // });
        console.log(db)
    } catch (error) {
        console.log(error);
    }
}

export default  function* blogSaga() {
    yield takeLatest(GetLstBlogs.REQUEST, fetchLstBlogs);
}