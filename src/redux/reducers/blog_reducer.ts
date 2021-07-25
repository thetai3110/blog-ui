import { Blog } from "../../types/Blog"

export enum GetLstBlogs {
    REQUEST = 'GET_LST_BLOG_REQUEST',
    SUCCESS = 'GET_LST_BLOG_SUCCESS',
    FAILURE = 'GET_LST_BLOG_FAILURE',
}

export enum AddNewBlog {
    REQUEST = 'ADD_NEW_BLOG_REQUEST',
    SUCCESS = 'ADD_NEW_BLOG_SUCCESS',
    FAILURE = 'ADD_NEW_BLOG_FAILURE',
}

export const requestGetLstBlogs = () => ({
    type: GetLstBlogs.REQUEST,
})

export const getLstBlogsSuccess = (blog: Blog) => ({
    type: GetLstBlogs.SUCCESS,
    payload: blog
})

export const getLstBlogsFalure = (error: any) => ({
    type: GetLstBlogs.FAILURE,
    payload: error
})

export const requestAddNewBlog = (blog: Blog) => ({
    type: AddNewBlog.REQUEST,
    payload: blog
})

export const addNewBlogSuccess = (success: number) => ({
    type: AddNewBlog.SUCCESS,
    payload: success
})

export const addNewBlogFalure = (error: any) => ({
    type: AddNewBlog.FAILURE,
    payload: error
})

const getBlogsReducer = (state = { loading: false, lstBlogs: {}, error: "" }, action: any) => {
    const { type } = action;
    switch (type) {
        case GetLstBlogs.REQUEST: {
            return { ...state, loading: true }
        }
        case GetLstBlogs.SUCCESS: {
            return { ...state, lstBlogs: action.payload, error: '', loading: false }
        }
        case GetLstBlogs.FAILURE: {
            return { ...state, error: action.payload, loading: false }
        }
        default:
            return state;
    }
}

const addBlogReducer = (state = { loading: false, success: 0, error: "" }, action: any) => {
    const { type } = action;
    switch (type) {
        case AddNewBlog.REQUEST: {
            return { ...state, loading: true }
        }
        case AddNewBlog.SUCCESS: {
            return { ...state, success: action.payload, error: '', loading: false }
        }
        case AddNewBlog.FAILURE: {
            return { ...state, success: 0, error: action.payload, loading: false }
        }
        default:
            return state;
    }
}

const blogReducer = {
    getBlogsReducer,
    addBlogReducer
}
export default blogReducer;