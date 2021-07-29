import './App.css';
import Child from './components/chid';

function App() {

  let state = {
    name: '张娜',
    age: 200
  };

  console.log('我加载了');
  console.log('我修改了App，但是ReactDOM.render并没有执行');

  return (
    <div className="App">
      {state.name}
      <Child/>
    </div>
  );
}

export default App;
