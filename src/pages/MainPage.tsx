
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { requestGetLstBlogs } from "../redux/reducers/blog_reducer";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(requestGetLstBlogs());
  }, [])
  return (
    <div className="main-board">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pika pika! - Main board</title>
      </Helmet>
      <nav className="navigation">
        Main
      </nav>
    </div>
  );
};

export default MainPage;
