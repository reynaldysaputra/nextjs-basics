export default function DetailPost({posts}){
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
  
  const paths = data.map((post) => {
    return {
      params: {
        postId: post.id.toString()
      }
    }
  })

  return { 
    paths, 
    fallback: false 
  }
}

export async function getStaticProps(context){
  const {postId} = context.params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const res = await data.json();

  return {
    props: {
      posts: res
    }
  }
}