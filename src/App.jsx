import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import { Route, Routes } from 'react-router';



const App = () => {
  const [mailboxes, setMailboxes] = useState([

    {
      _id: 1,
      boxSize: 'Small',
      boxOwner: 'Moo',
    }, 
    {
      _id: 2,
      boxSize: 'Medium',
      boxOwner: 'Boo',
    }, 
    {
      _id: 3,
      boxSize: 'Large',
      boxOwner: 'Loo',
    }, 
    

  
    


  ])

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailboxData])
  }
  return (
      <>
         <NavBar />
         <h1>Mailboxes!</h1>
        <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} /> 
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
        </Routes>
      </>
    );

  
};

export default App;
