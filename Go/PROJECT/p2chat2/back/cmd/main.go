//// 创建HTTP服务器，监听Websocket连接
//package main
//
//import (
//	"fmt"
//	"github.com/gorilla/websocket"
//	"net/http"
//)
//
//// websocket.Upgrader 是 Gorilla Websocket库中 用于升级Http连接——>WebSocket连接 的结构体
//var upgrader = websocket.Upgrader{
//	ReadBufferSize:  1024, //设置 （升级后的）Websocket连接的读取/写入缓存区的大小
//	WriteBufferSize: 1024,
//}
//
//// 这是一个处理http连接（Websocket）的函数
//func handleConnections(w http.ResponseWriter, r *http.Request) {
//	//TODO：1）容易出错的地方：升级为websocket连接(结构体),调用函数 生成的*websocket.Conn 类型的变量，表示 WebSocket 连接
//	//TODO：2）注意关键字 defer、Upgrader{ } Upgrade()
//
//	//升级 HTTP 连接为 WebSocket 连接
//	conn, err := upgrader.Upgrade(w, r, nil)
//	if err != nil {
//		return
//	}
//
//	fmt.Fprint(w, html)
//
//	defer conn.Close()
//}
//
//func main() {
//
//	http.HandleFunc("/ws", handleConnections)
//	http.ListenAndServe(":8080", nil)
//
//}

package main

import (
	"fmt"
	"github.com/gorilla/websocket"
	"io/ioutil"
	"net/http"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		return
	}

	defer conn.Close()

	// 读取 index.html 文件内容
	htmlContent, err := ioutil.ReadFile("/ewb/templates/index.html")
	if err != nil {
		return
	}

	// 将 index.html 内容作为响应发送给 WebSocket 连接
	err = conn.WriteMessage(websocket.TextMessage, htmlContent)
	if err != nil {
		return
	}
}

func main() {
	http.HandleFunc("/ws", handleConnections)
	fmt.Println("Start Server at port 8080...")
	http.ListenAndServe(":8080", nil)
}
