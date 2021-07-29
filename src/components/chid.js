import React, {useState} from 'react';

const Child = function () {
  const [state, setState] = useState({name: '我是一个姓名'});
  console.log('我执行了吗');
  return (
    <div>我是一个子组件 {state.name}
      <button onClick={() => {
        setState({
          name: '我改变了这个name' + Math.random()
        });
      }}>点击
      </button>
    </div>

  );
}

export default Child;
