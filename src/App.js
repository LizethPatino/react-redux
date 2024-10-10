import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';
import Auth from './components/Auth';

function App() {
  return (
    <Provider store={store}>
    <Counter />
    <Auth />
</Provider>
  );
}

export default App;
