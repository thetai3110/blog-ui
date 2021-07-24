
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const MainPage = () => {
  const { t } = useTranslation();

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
