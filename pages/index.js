import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const meetups = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Address 5, 1235 City",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://images.unsplash.com/photo-1627134028157-5e9d9d97b9e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    address: "Address 57, 1235 City",
    description: "This is second meetup",
  },
  {
    id: "m3",
    title: "Last Meetup",
    image:
      "https://images.unsplash.com/photo-1590337318473-f1e81866c60c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    address: "Address 85, 1235 City",
    description: "This is last meetup",
  },
];
function HomePage({ meetups }) {
  return <MeetupList meetups={meetups} />;
}

export function getStaticProps() {
  //fetch data
  return {
    props: {
      meetups: meetups,
    },
  };
}

export default HomePage;
