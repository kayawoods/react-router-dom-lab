import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import { Route, Routes } from 'react-router';



const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  
  return (
      <>
         <NavBar />
         <h1>Mailboxes!</h1>
        <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}
          />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
        </Routes>
      </>
    );

  
};

export default App;
