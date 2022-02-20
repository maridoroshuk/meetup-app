import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}


export async function getStaticProps() {
  const client = MongoClient.connect(
    "mongodb+srv://marynadarashuk:Asdfghjkl1234@cluster0.ksdtr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = (await client).db()

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find().toArray();
  (await client).close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()

      })),
    },
    revalidate: 10
  };
}


export default HomePage;
