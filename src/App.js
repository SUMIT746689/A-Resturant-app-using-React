
import style from './App.module.css';
import Header from './components/header/Header';
import Contents from './components/content/Contents';

function App() {
  return (
    <div className={style.body}>
      <header>
        <Header/>
      </header>
      <div>
        <Contents/>
      </div>
      
      <footer>

      </footer>
    </div>
  );
}

export default App;
