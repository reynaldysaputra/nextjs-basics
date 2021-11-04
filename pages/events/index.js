import { useState } from 'react'
import { useRouter } from 'next/router'

function Events({eventList}){
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchEvents = async (params) => {
    const response = await fetch(`http://localhost:3004/events?category=${params}`);
    const data = await response.json();
    setEvents(data);
    router.push(`/events?category=${params}`, undefined, { shallow: true });
  }

  return(
    <>
      <h2>List Of Events</h2>
      <button onClick={() => fetchEvents('sports')}>Sports Events</button>
      <button onClick={() => fetchEvents('technology')} >Technology Events</button>
      <button onClick={() => fetchEvents('food')}>Food Events</button>
      <button onClick={() => fetchEvents('art')}>Art Events</button>
      {events.map(event => {
        return (
          <div key={event.id}>
            <h3>
              {event.id} {event.title} {event.date} | {event.category}
            </h3>
            <p>{event.description}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default Events;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? `category=${category}` : '';
  const response = await fetch(`http://localhost:3004/events?${queryString}`)
  const data = await response.json()

  return {
    props: {
      eventList: data
    }
  }
}
