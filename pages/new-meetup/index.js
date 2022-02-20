import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from 'next/head'
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


      router.push('/')
  };

  return (
  <>
  <Head>
    <title>Meetup</title>
  </Head>
  <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
  </>
  );
}

export default NewMeetupPage;
