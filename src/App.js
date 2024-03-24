import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/homepage/home.component';
import LeftSidebar from './component/left-sidebar/left-sidebar.component';
import PageHeader from './component/header/page-header.component';
import HelpButton from './component/help/help-button/help-button.component';
import SendMessagePage from './pages/send-message-page/send-message-page.component';

const App = () => {
  return(
    <main>
      <PageHeader/>
      <LeftSidebar/>
      <Routes>
        <Route exact path={'/'} Component= {Home}/>SendMessage
        <Route path={'/dashboard/send-message'} Component= {SendMessagePage}/>
      </Routes>
      <HelpButton/>
    </main>
  )
}

export default App;