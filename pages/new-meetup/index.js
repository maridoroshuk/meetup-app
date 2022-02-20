import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  const router = useRouter();

  async function onAddMeetupHandler (enteredData) {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const data = await response.json()

      console.log(data);

      router.push('/')
  };

  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetupPage;
