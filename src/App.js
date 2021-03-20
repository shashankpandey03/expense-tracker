import './App.css'
import Categories from './components/categories/Categories';
import AddCategory from './components/category/AddCategory'
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <main>
        <Header label="Expense Tracker" />
        <div className='appTemplate'>
          <Sidebar />
          <div className='appBody'>
            <Switch>
              <Route path="/" exact component={Categories} />
              <Route path="/addNewCategory" component={AddCategory} />
            </Switch>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
