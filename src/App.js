import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/homepage/home.component';
import LeftSidebar from './component/left-sidebar/left-sidebar.component';
import PageHeader from './component/header/page-header.component';
import HelpButton from './component/help/help-button/help-button.component';
import SendMessagePage from './pages/send-message-page/send-message-page.component';
import CreateTemplatePage from './pages/create-template-page/create-template-page.component';
import CreateContactPage from './pages/create-contact-page/create-contact-page.component';
import ViewContactPage from './pages/view-contact-page/view-contact-page.component';
import TemplateLog from './pages/template-log/template-log.component';

const App = () => {
  return(
    <main>
      <PageHeader/>
      <LeftSidebar/>
      <Routes>
        <Route exact path={'/'} Component= {Home}/>
        <Route exact path={'/dashboard/create-contact'} Component= {CreateContactPage}/>
        <Route exact path={'/dashboard/view-contact'} Component= {ViewContactPage}/>
        <Route path={'/dashboard/send-message'} Component= {SendMessagePage}/>
        <Route path={'/dashboard/create-template'} Component= {CreateTemplatePage}/>
        <Route path={'/dashboard/template-log'} Component= {TemplateLog}/>
      </Routes>
      <HelpButton/>
    </main>
  )
}

export default App;