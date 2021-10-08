import Header from './component/Header';
import Youtuber from './component/Youtuber';
import CodeDetail from './component/CodeDetail';

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EmptyPage from './component/EmptyPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Youtuber />
            </Route>
            <Route path="/youtuber/:youtuber">
              <CodeDetail />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
