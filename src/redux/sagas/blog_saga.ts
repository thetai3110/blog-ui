import { call, put, takeLatest } from "redux-saga/effects";
import { ResponseType } from "../../types/ResponseType";
import BlogApi from "../../apis/blog_api";
import { GetLstBlogs, getLstBlogsFalure, getLstBlogsSuccess } from "../reducers/blog_reducer";

function* handleFetchLstBlogs() {
    try {
        const res: ResponseType = yield call(BlogApi.fetchLstBlogs);
        const {code, msg, data} = res;
        if(code === 500) {
            yield put(getLstBlogsFalure(msg));
        }
        yield put(getLstBlogsSuccess(data));
    } catch (error) {
        yield put(getLstBlogsFalure(error));
    }
}

const BlogSaga = [
    takeLatest(GetLstBlogs.REQUEST, handleFetchLstBlogs)
]
export default BlogSaga;