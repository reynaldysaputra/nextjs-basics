import Link from 'next/link';

export default function Products({productList}){
  return <>
    {productList.map(item => (
      <div key={item.id}>
        <Link href={`/products/${item.id}`}>
          <h2>{item.id} {item.title} - {item.price}</h2>
        </Link><hr/>
      </div>
    ))}
  </>
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3004/products');
  const data = await response.json();

  return {
    props: {
      productList: data
    },
    revalidate: 3
  }
}