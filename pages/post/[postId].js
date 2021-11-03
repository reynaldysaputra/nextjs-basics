import { useRouter } from "next/dist/client/router";

export default function DetailPost({posts}){
  const router = useRouter();

  if(router.isFallback) {
    return <h2>Loading...</h2>
  }

  return(
    <>
      <h2>{posts.id}. {posts.title}</h2>
      <p>{posts.body}</p>
    </>
  )
}

export async function getStaticPaths(){
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  
  const paths = data.slice(0,5).map((post) => {
    return {
      params: {
        postId: post.id.toString()
      }
    }
  })

  return { 
    paths, 
    fallback: true 
  }
}

export async function getStaticProps(context){
  const {postId} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await res.json();
  
  if(!data.id) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: data
    }
  }
}