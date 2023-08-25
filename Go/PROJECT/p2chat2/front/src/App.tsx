//解释：TypeScript中 app.tsx是入口文件（类似app.js），用于初始化

import React from 'react';
import './App.css';
import Login from './login';
import Chat from './chat';


// 告诉TypeScipt编译器忽略 类型检查的错误
// @ts-ignore
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

//-------------------------------------------路由的设置--------------------------------------------------
const App =()=>{
    return (
        <Router>
            <Switch>
                {/*添加页面的路由*/}
                {/*<Route path="/login" Component={Login}/>*/}
                <Route path="/chat" Component={Chat}/>
            </Switch>
        </Router>
    );
};

//---------------------------------------关于login页面的使用------------------------------------------------
function AppLogin() {
    const handleLogin = (username: any) => {
        console.log('Logged in with username:', username);
        // 在这里可以执行登录逻辑，比如发送登录请求等
    };

    return (
        <div className="App">
            <header className="App-header">
                <Login onLogin={handleLogin}/> {/* 传递 handleLogin 函数给 Login 组件 */}
            </header>
        </div>
    );
}
//---------------------------------------关于chat页面的使用------------------------------------------------
//普通函数定义：const functions1=()=>{定义组件的实现} -----（Hooks风格）
//以下为使React的FC类型的函数式组件定义 Function Conmponent 泛型类型  props 道具；支撑
//const App2: React.FC<PropsType> = (props) => {  特别之处：可以检查；接受props参数；使得props和children类型更明显（不太懂）
const AppChat: React.FC = () => {
    return (
        <div className="app">
            <h1>Chat App</h1>
            <Chat />
        </div>
    );
};
export default App;



























//-------------------------------------------下面是练习代码-----------------------------------------------------

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//---------------------------------------------------------------------------------
//--------------------test1------------------------
function MyButton(){
  return <button>
    hi!
  </button>
}
export function MyApp(){
  return (
      <div>
        <h1> Welcome to my app!!</h1>
        <MyButton></MyButton>
      </div>
  );
}
//---------------------------------------------------
//makeup 标记
//--------------------test2-------------------------
const user= {
    name : 'baicao',
    imageURL:'/static/p1.jpg',
    imageSize:90,
}
export function profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="p1"
                src={user.imageURL}
                alt={'Photo of ' + user.name}
                //（在JSX）想将 样式属性 传递给一个元素，通常会使用双花括号 {{}} 来表示外层的一对大括号
                // 第一对大括号：正在嵌入 JavaScript 表达式，第二对大括号：创建一个 包含样式属性的JavaScript 对象。
                style={{
                   width:user.imageSize,
                   height:user.imageSize
               }}


            />
        </>
    )
}
//---------------------------------------------------


