import React from "react";
import './home.styles.scss'
import HomeHeader from '../../component/home-component/home-header/home-header.component'
import SendMessage from "../../component/home-component/send-message/send-message.component";
import MessageHub from "../../component/home-component/message-hub/message-hub.component";
import RecentMessage from "../../component/home-component/recent-message/recent-message.component";
import MessageRepository from "../../component/home-component/message-repository/message-repository.component";
import ContentContainer from "../../component/content-container/content-container.component";

const Home = () => (
    <ContentContainer>
        <HomeHeader/>
        <SendMessage/>
        <MessageHub/>
        <RecentMessage/>
        <MessageRepository/>
    </ContentContainer>
)

export default Home;