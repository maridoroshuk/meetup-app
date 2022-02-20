import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
function MeetupDetails({ meetupData }) {
  return (
    <>
    <Head>
      <title>{meetupData.title}</title>
      <meta name="description" content={meetupData.description}/>
    </Head>
    <MeetupDetail
      image={meetupData.image}
      title={meetupData.title}
      address={meetupData.address}
      description={meetupData.description}
    />
    </>
  );
}

export async function getStaticPaths() {
  const client = MongoClient.connect(
    "mongodb+srv://marynadarashuk:Asdfghjkl1234@cluster0.ksdtr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = (await client).db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  (await client).close();
  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = MongoClient.connect(
    "mongodb+srv://marynadarashuk:Asdfghjkl1234@cluster0.ksdtr.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = (await client).db();

  const meetupsCollections = db.collection("meetups");

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });
  (await client).close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
