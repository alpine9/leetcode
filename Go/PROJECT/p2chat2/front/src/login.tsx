//导入react的Hook组件( to manage status of components)
import React,{useState} from 'react';


//-------------------------------一以下是一个登录页面代码-----------------------------

//定义一个登录的函数组件，传入一个onLogin的回调函数(用用于登录时通知父组件)
//⚠️难点：onLogin是<Login> 的 属性 ，onLogin函数 接受一个字符串参数（即用户名），无返回（void） （onLogin 有点像 onClick）
//⚠️ onLogin的原理：（用户名非空时 onLogin(username)；）就会调用传入的 onLogin函数，并将 用户输入 作为参数传递给 username
//⚠️难点在于：临时定义函数+传入函数参数
//这种设计模式（login和onLogin分离 登录操作的逻辑从 Login 组件内部分离出来，使得Login可复用 ）


// @ts-ignore
function Login({ onLogin }: { onLogin: (username: string) => void }){
    //通过（useState）Hook组件 创建 username状态变量 和 setUsername函数 初始值为空字符串
    const[username,setUsername]= useState('')

    //创建一个处理登录的函数：点击login的会检查用户名是否为空（不为空就尝试登录）
    const handleLogin=()=>{
        if (username.trim()!=''){
            onLogin(username);
        }
    }
    //渲染组件的UI

    return (
        <div>
            <h2>Login Page</h2>
            <input
                type="text"
                placeholder={"Enter your username"}
                value={username}
                onChange={  (e)=> setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;
