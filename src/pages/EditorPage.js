import React, { useEffect, useRef, useState } from 'react'
import ACTIONS from '../Action';
import Client from '../components/Client'
import Editor from '../components/Editor'
import { initSocket } from '../socket';
import { useLocation, useParams } from 'react-router-dom';

const EditorPage = () => {

  const socketRef = useRef(null);
  const location = useLocation();
  const {roomId} = useParams;
  useEffect(() => {
      const init = async () => {
          socketRef.current = await initSocket();
          socketRef.current.emit(ACTIONS.JOIN,{
            roomId,
            username: location.state?.username,
          })
      }

      init();
  },[])

  const [clients, setClients] = useState([
    {socketId: 1, username: 'Kaushik D'},
    {socketId: 2, username: 'John Doe'}
  ])

  return (
    <div className='mainWrap'>

      {/*For the Left Side Section*/} 
      <div className='aside'>
        <div className='asideInner'>
            <div className='logo'>
                <img className='logoImage' src="/code-sync.png" alt="logo"  />
            </div>

            <h3>Connected</h3>

            <div className='clientsList'>
              {
                clients.map((client) =>
                  <Client key={client.socketId} username={client.username}/> 
              )}
            </div>
        </div>

        <button className='btn copyBtn'>Copy ROOM ID</button>
        <button className='btn leaveBtn'>Leave</button>
      </div>
        
      {/*For the Right Side Section*/} 
      <div className='editorWrap'>
        <Editor /> 
      </div>
    </div>
  )
}

export default EditorPage
