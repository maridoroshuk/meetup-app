import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const onAddMeetupHandler = (enteredData) => {
      console.log(enteredData)
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;
