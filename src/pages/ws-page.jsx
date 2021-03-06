import React, { useState, useCallback, useEffect, useMemo } from 'react'
import useWebSocket, { ReadyState }  from 'react-use-websocket'
import Spacer from '../components/ui/spacer'

const SOCKET_URL_ONE = 'ws://localhost:8000/ws'
const SOCKET_URL_TWO = 'wss://localhost:8000/wss'

export const WebSocketPage = () => {
  const STATIC_OPTIONS = useMemo(() => ({
    share: true,
    onOpen: ()=> console.log ('opened'),
    shouldReconnect: (closeEvent) => true,
    reconnectAttempts: 10,
    reconnectInterval: 3000,
  }), []);
  
  const [currentSocketUrl, setCurrentSocketUrl] = useState(SOCKET_URL_ONE)
  const [messageHistory, setMessageHistory] = useState([]);
  const {sendMessage, lastMessage, readyState, getWebSocket} = useWebSocket(currentSocketUrl, STATIC_OPTIONS);

 
  const handleClickChangeSocketUrl = useCallback(() => {
    currentSocketUrl === SOCKET_URL_ONE ? setCurrentSocketUrl(SOCKET_URL_TWO) : setCurrentSocketUrl (SOCKET_URL_ONE)
  }, [currentSocketUrl])

  const handleClickSendMessage = useCallback(() => sendMessage(JSON.stringify({action: 'Hello', args: 'again'})), [sendMessage])
 
  useEffect(() => {
    if (lastMessage !== null) {
      
      //getWebSocket returns the WebSocket wrapped in a Proxy. This is to restrict actions like mutating a shared websocket, overwriting handlers, etc
      const currentWebsocketUrl = getWebSocket().url;
      console.log('received a message from ', currentWebsocketUrl);
      
      setMessageHistory(prev => prev.concat(lastMessage));
    }
  }, [lastMessage, getWebSocket]);
 
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
 
  return (
    <div className="page">
      <button onClick={handleClickChangeSocketUrl}>{currentSocketUrl}</button>
      <Spacer lines={2} />
      <button onClick={handleClickSendMessage} disabled={readyState !== ReadyState.OPEN}>Click Me to send 'Hello'</button>
      <Spacer lines={2} />
      <span>Websocket Status: {connectionStatus}</span>
      <Spacer lines={2} />
      {lastMessage && <span>Last message: {lastMessage.data}</span>}
      <Spacer lines={2} />
      <ul>
        {messageHistory.map((message, idx) => <li key={idx}>{message.data}</li>)}
      </ul>
    </div>
  );
};
 
export default WebSocketPage;