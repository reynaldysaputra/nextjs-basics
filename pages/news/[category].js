export default function ArticleListByCategory({articles, category}){
  return(
    <>
      <h2>Showing news for category {category}</h2>
      {articles.map(item => (
        <div key={item.id}>
          <h3>{item.id} {item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context){
  const {category} = context.params;
  const response = await fetch(`http://localhost:3004/news?category=${category}`);
  const data = await response.json();

  return {
    props : {
      articles: data,
      category
    }
  }
}