// 处理Websocket连接和在线用户的逻辑
package handlers

import (
	"fmt"
	"github.com/gorilla/websocket"
)

// 定义Client自定义类型，表示客户端的连接
type Client struct {
	conn *websocket.Conn //websocket连接，这里表示一个客户端连接
}

var clients = make(map[*Client]bool)

func HandleConnections(conn *websocket.Conn) {

	client := &Client{conn: conn}
	clients[client] = true
	for {
		for client := range clients {
			//websocket.TextMessage 表示要发送的消息 是文本信息；[]byte("Hello, World!") 将string转换成 字节切片 并发送
			//TODO：（websocket.BinaryMessage, binaryData）表示二进制消息
			err := client.conn.WriteMessage(websocket.TextMessage, []byte("Hello, World!"))
			if err != nil {
				fmt.Println("ERR")
				break
			}
		}
	}

}
