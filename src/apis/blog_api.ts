import { fireStorage } from "../firebase/firebase";
import { ResponseType } from "../types/ResponseType";

const fetchLstBlogs = async () => {
    try {
        const res = await fireStorage.collection("users").get();
        const data: Array<object> = [];
        res.forEach(doc => {
            data.push(doc.data())
        })
        return { code: 200, msg: 'Fetch successfully!', data: data } as ResponseType;
    } catch(err) {
        console.log(err);
    }
    return { code: 500, msg: 'Fetch error!', data: null } as ResponseType;
}
const BlogApi = {
    fetchLstBlogs
}
export default BlogApi;