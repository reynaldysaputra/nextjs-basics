import Link from 'next/link';

export default function PostPage({postList}){
  return(
    <>
      <h2>LIST POST</h2>

      {postList.map(item => (
        <div key={item.id}>
          <Link href={`post/${item.id}`}>
            <h2>{item.id} {item.title}</h2>
          </Link>
          <hr/>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      postList: data
    }
  }
}