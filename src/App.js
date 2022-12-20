import { Fragment } from 'react';
import { publicRouter } from '~/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import TitleNavCurrent from './component/TitleNavCurrent/TitleNavCurrent';
import config from './configs';
import NotFound from './pages/publicPages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {route.navCurrent && (
                      <TitleNavCurrent currentRoute={route.path} background={route.backgroundImage}>
                        {route.navCurrent}
                      </TitleNavCurrent>
                    )}
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path={config.routes.notFound} element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
