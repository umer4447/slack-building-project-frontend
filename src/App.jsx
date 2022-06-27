import React from 'react';
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
// import 'stream-chat-react/dist/css/index.css';
import {ChannelListContainer, ChannelContainer, Auth} from './components';

import './App.css';


const apiKey = 't932vn3q6u7m';

const client =StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {
  if (!authToken) return <Auth/>
  return (
    <div className="app__wrapper">
        <Chat client={client} theme="team light" >
            <ChannelListContainer />
            <ChannelContainer />
        </Chat>
        
    </div>
  )
}

export default App;
