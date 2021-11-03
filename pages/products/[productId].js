import { useRouter } from "next/dist/client/router";

export default function ProductDetail({data}){
  const router = useRouter();

  if(router.isFallback){
    return <h2>Loading...</h2>
  }

  return(
    <>
      <h1>{data.id}.{data.title}</h1>    
      <h2>{data.price}</h2>
      <p>{data.description}</p>
    </>
  )
}

export async function getStaticPaths(){
  const response = await fetch('http://localhost:3004/products');
  const data = await response.json();

  const paths = data.slice(0,1).map(item => {
    return {
      params: {
        productId: `${item.id}`
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context){
  const {productId} = context.params;
  const response = await fetch(`http://localhost:3004/products/${productId}`);
  const data = await response.json();

  if(!data.id){
    return {
      notFound: true
    }
  }

  return{
    props: {
      data
    },
    revalidate: 3
  }
}