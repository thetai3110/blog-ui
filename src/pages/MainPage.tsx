
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { requestAddNewBlog, requestGetLstBlogs } from "../redux/reducers/blog_reducer";
import { Blog } from "../types/Blog";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state: RootState) => state.getBlogsReducer.lstBlogs);

  useEffect(() => {
    dispatch(requestGetLstBlogs());
  }, [dispatch]);

  const createBlog = (): void => {
    const newBlog = {
      author: 'Tai 112',
      title: 'Title',
      content: 'Content'
    }
    if(Object.keys(blogs).length === 0) return;
    const elements = blogs.elements;
    elements.push(newBlog);
    const dataAdded = {...blogs, elements, totalElements: elements.length} as Blog;
    dispatch(requestAddNewBlog(dataAdded));
    dispatch(requestGetLstBlogs());
  }
  return (
    <div className="main-board">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <nav className="navigation">
        Main
      </nav>
      <button onClick={createBlog}>Create</button>
      {console.log(blogs)}
    </div>
  );
};

export default MainPage;
