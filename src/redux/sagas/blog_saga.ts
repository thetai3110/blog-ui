import { call, put, takeLatest } from "redux-saga/effects";
import { ResponseType } from "../../types/ResponseType";
import BlogApi from "../../apis/blog_api";
import { AddNewBlog, addNewBlogFalure, addNewBlogSuccess, GetLstBlogs, getLstBlogsFalure, getLstBlogsSuccess } from "../reducers/blog_reducer";
import { Blog } from "../../types/Blog";

function* handleFetchLstBlogs() {
    try {
        const res: ResponseType = yield call(BlogApi.fetchLstBlogs);
        const { code, msg, data } = res;
        if (code === 500) {
            yield put(getLstBlogsFalure(msg));
        }
        yield put(getLstBlogsSuccess(data));
    } catch (error) {
        yield put(getLstBlogsFalure(error));
    }
}

function* handleAddNewBlog(data: any) {
    const { payload } = data;
    try {
        const res: ResponseType = yield call(BlogApi.addNewBlog, payload as Blog);
        const { code, msg, data } = res;
        if (code === 500) {
            yield put(addNewBlogFalure(msg));
        }
        yield put(addNewBlogSuccess(data === null ? 0 : 1));
    } catch (error) {
        yield put(addNewBlogFalure(error));
    }
}

const BlogSaga = [
    takeLatest(GetLstBlogs.REQUEST, handleFetchLstBlogs),
    takeLatest(AddNewBlog.REQUEST, handleAddNewBlog)
]
export default BlogSaga;