import './App.scss';
import i18n from './i18n/i18n';
import { Switch, Route } from "react-router-dom";
import { useEffect } from 'react';
import { Routes } from './constants/routes';
import MainPage from './pages/MainPage';
import { setCurrentUSer } from './redux/reducers/auth_reducer';
import { auth } from './firebase/firebase';
import { useAppDispatch } from './redux/hooks';

function App() {
  const language = localStorage.getItem('language');
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'vi');
    }
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(setCurrentUSer(user));
    })
    return unsubscribe
  }, [dispatch])
  useEffect(() => {
    i18n.changeLanguage(language || 'vi');
  }, [language])

  return (
    <div className="app">
      <Switch>
        <Route path={Routes.MAIN_PAGE} exact>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
