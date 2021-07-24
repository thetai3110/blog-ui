import { Blog } from "../../types/Blog";

export enum BlogTypes {
    SET_LST_BLOGS = 'SET_LST_BLOGS',
}

export const setLstBlogs = (blogs: Array<Blog>) => ({
    type: BlogTypes.SET_LST_BLOGS,
    payload: blogs
})

export const blogReducer = (state = {lstBlogs: [], error: "" }, action: any) => {
    const { type } = action;
    switch (type) {
        case BlogTypes.SET_LST_BLOGS: {
            return { ...state, lstBlogs: action.payload }
        }
        default:
            return state;
    }
}