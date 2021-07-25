import app from "../firebase/firebase";
import { getLstBlogsFalure, getLstBlogsSuccess } from "../redux/reducers/blog_reducer";

const fetchLstBlogs = (dispatch: any): void => {
    try {
        const db = app.database().ref('Blogs');
        db.on('value', (snap) => {
            if (snap.val() !== null) {
                dispatch(getLstBlogsSuccess({ code: 500, msg: 'Fetch successfully!', data: snap.val() }))
            };
        })
    } catch {
        dispatch(getLstBlogsFalure({ code: 500, msg: 'Fetch eror!', data: null }));
    }
}
const BlogApi = {
    fetchLstBlogs
}
export default BlogApi;