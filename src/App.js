import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/books">
            <BookList />
          </Route>
          <Route exact path="/books/:id">
            <BookDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
