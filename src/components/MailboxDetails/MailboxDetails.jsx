import { useParams } from "react-router"

const MailboxDetails = (props) => {
const { mailboxId } =useParams() 


const selectedBox = props.mailboxes.find((mailbox) => (
    mailbox._id === Number(mailboxId)
 ));
 return (
    <>
      <h2>{selectedBox.boxSize}</h2>
      <dl>
        <dt>boxsize:</dt>
        <dd>{selectedBox.boxSize}</dd>
        <dt>boxowner:</dt>
        <dd>{selectedBox.boxOwner}</dd>
      </dl>
    </>
  );

};




export default MailboxDetails 