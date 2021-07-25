import { Collections } from "../constants/collections";
import { Documents } from "../constants/documents";
import { fireStorage } from "../firebase/firebase";
import { Blog } from "../types/Blog";
import { ResponseType } from "../types/ResponseType";

const fetchLstBlogs = async () => {
    try {
        const res = await fireStorage.collection(Collections.BLOG_UI).doc(Documents.BLOGS).get();
        return { code: 200, msg: 'Fetch successfully!', data: res.data() as Blog } as ResponseType;
    } catch (err) {
        console.log(err);
    }
    return { code: 500, msg: 'Fetch error!', data: null } as ResponseType;
}

const addNewBlog = async (data: Blog) => {
    try {
        await fireStorage.collection(Collections.BLOG_UI).doc(Documents.BLOGS).set(data);
        return { code: 200, msg: 'Add successfully!', data: data } as ResponseType;
    } catch (err) {
        console.log(err);
    }
    return { code: 500, msg: 'Add error!', data: null } as ResponseType;
}

const BlogApi = {
    fetchLstBlogs,
    addNewBlog
}
export default BlogApi;