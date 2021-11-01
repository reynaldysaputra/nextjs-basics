export default function Users({users}){
  return(
    <>
      <h1>Hello users</h1>    
      {users.map(item => (
        <div key={item.id}>
          <h5>{item.name}</h5>
          <p>{item.email}</p>
        </div>
      ))}
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return{
    props: {
      users: data
    }
  }
}