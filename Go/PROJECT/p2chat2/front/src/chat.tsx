//导入 React库 和 useState '钩子'----useState '钩子'允许在函数组件中使用状态？？？
import React, { useState } from 'react';

//定义 Chat函数组件（组件类型： React.FC）
const Chat: React.FC = () => {
    //使用 useState 创建messages状态变量（初始值为空，用于存储聊天信息） 和 setMessages的更新函数   下同
    const [messages, setMessages] = useState<string[]>([]);
    //存储用户正在输入的内容
    const [currentMessage, setCurrentMessage] = useState<string>('');

    //定义函数：当用户点击 [发送] 被调用
    const handleSendMessage = () => {
        //逻辑：判断用户输入信息currentMessage是否为空，不为空则存储到 聊天信息messages
        if (currentMessage.trim() !== '') {
            setMessages([...messages, currentMessage]);
            setCurrentMessage('');//用户真正输入的内容刷新清零
        }
    };

    return (
        <div>
            {/*聊天容器*/}
            <div className="chat-window">
                {/*JSX 允许 类HTML描述 UI 层次结构，并将 JavaScript 表达式嵌入其中。*/}
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
