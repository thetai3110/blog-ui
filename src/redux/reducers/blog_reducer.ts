import { Blog } from "../../types/Blog";

export enum GetLstBlogs {
    REQUEST = 'GET_LST_BLOG_REQUEST',
    SUCCESS = 'GET_LST_BLOG_SUCCESS',
    FAILURE = 'GET_LST_BLOG_FAILURE',
}

export const requestGetLstBlogs = () => ({
    type: GetLstBlogs.REQUEST,
})

export const getLstBlogsSuccess = (blogs: any) => ({
    type: GetLstBlogs.SUCCESS,
    payload: blogs
})

export const getLstBlogsFalure = (error: any) => ({
    type: GetLstBlogs.FAILURE,
    payload: error
})

export const blogReducer = (state = { loading: false, lstBlogs: [], error: {} }, action: any) => {
    const { type } = action;
    switch (type) {
        case GetLstBlogs.REQUEST: {
            return { ...state, loading: true }
        }
        case GetLstBlogs.SUCCESS: {
            return { ...state, lstBlogs: action.payload, loading: false }
        }
        case GetLstBlogs.FAILURE: {
            return { ...state, error: action.payload, loading: false }
        }
        default:
            return state;
    }
}