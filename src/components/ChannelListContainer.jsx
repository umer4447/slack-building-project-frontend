import React from 'react';
import {ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelSearch, TeamChannelSearch, TeamChannelPreview } from './';
import SlackIcon from '../assets/slack.png';
import LogoutIcon from '../assets/logout.png';


const SideBar= () => {
    <div style={{ backgroundColor: "pink"}} className="channel-list__sidebar">
        <div className="channel-list__sidebar_icon1">
            <div className="icon1__inner">
                <img src= { SlackIcon } alt="Slack" width="30"/>
            </div>
        </div>

        <div className="channel-list__sidebar_icon1">
            <div className="icon1__inner">
                <img src= { LogoutIcon } alt="Logout" width="30"/>
            </div>
        </div>
        <img src= { LogoutIcon } alt="Slack" width="30"/>

    </div>
}

const ChannelListContainer = () => {
  return (
    <>
        <SideBar/>
    </>
  )
}

export default ChannelListContainer
