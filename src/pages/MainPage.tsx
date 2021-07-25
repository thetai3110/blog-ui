
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { requestGetLstBlogs } from "../redux/reducers/blog_reducer";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state: RootState) => state.blogReducer.lstBlogs)
  useEffect(() => {
    dispatch(requestGetLstBlogs());
  }, [dispatch])
  return (
    <div className="main-board">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <nav className="navigation">
        Main
      </nav>
      {console.log(blogs)}
    </div>
  );
};

export default MainPage;
