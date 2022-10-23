import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ContactForm from "./PagesComponents/ContactForm";
import HelperMsg from "./PagesComponents/HelperMsg";
import AllFormSubmissions from "./PagesComponents/Services/AllFormSubmissions";
import "./PagesStyles/ContactUs.scss";

const ContactUS = () => {
  const [formState, setFormState] = useState(true);
  const [showTickets, setShowTickets] = useState(false);

  const contactFormVisability = () => {
    setFormState(!formState);
  };

  const fetchTickets = () => {
    setShowTickets(!showTickets);
  };
  return (
    <>
      {!showTickets && formState && (
        <ContactForm showContactForm={contactFormVisability} />
      )}

      {!formState && showTickets && (
        <>
          <div className="header">
            <Button
              variant="primary"
              onClick={() => {
                contactFormVisability();
                fetchTickets();
              }}
            >
              Submit another ticket
            </Button>
          </div>
          <div className="grid-card-container">
            <AllFormSubmissions />
          </div>
        </>
      )}

      {!showTickets && !formState && (
        <div className="after-submit-msg">
          <HelperMsg
            withSpinner={false}
            className="HelperMsg"
            variant="success"
          >
            We recieved your message and we will get back to you by email.
          </HelperMsg>
          <br />
          <Button
            className="ticket-buttons"
            variant="primary"
            onClick={contactFormVisability}
          >
            Submit another ticket
          </Button>
          <Button
            className="ticket-buttons"
            variant="info"
            onClick={fetchTickets}
          >
            See other tickets
          </Button>
        </div>
      )}
    </>
  );
};

export default ContactUS;
