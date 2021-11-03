import Link from 'next/link';

export default function NewsList({data}){
  return(
    <>
      <h2>List of News Articels</h2>
      {data.map(item => (
        <div key={item.id}>
          <Link href={`/news/${item.category}`}>
            <h2>{item.id} {item.title} | {item.category}</h2>
            </Link>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(params) {
  const response = await fetch('http://localhost:3004/news');
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}