import {useRouter} from 'next/router';
import Link from 'next/link';

function Docs(){
  const router = useRouter();
  const {params = []} = router.query;

  if(params.length > 1) {
    return (
      <>
        <h2>{params[1]}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam vel omnis voluptatibus, aperiam aliquam modi possimus fuga eum cumque quis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, accusamus!</p>
      </>
    )
  }else if(params.length > 0) {
    return(
      <>
        <h2>Welcome to {params[0]}</h2>
        <p>Silahkan pilih konsep anda</p>
        <li><Link href={`/docs/${params[0]}/concept1`}>Concept 1</Link></li>
        <li><Link href={`/docs/${params[0]}/concept2`}>Concept 2</Link></li>
        <li><Link href={`/docs/${params[0]}/concept3`}>Concept 3</Link></li>
        <li><Link href={`/docs/${params[0]}/concept4`}>Concept 4</Link></li>
        <li><Link href={`/docs/${params[0]}/concept5`}>Concept 5</Link></li>
      </>
    )
  }

  return(
    <>
      <h1>Welcome to the new document</h1>
      <ul>
        <li><Link href='/docs/features1'>Features 1</Link></li>
        <li><Link href='/docs/features2'>Features 2</Link></li>
        <li><Link href='/docs/features3'>Features 3</Link></li>
        <li><Link href='/docs/features4'>Features 4</Link></li>
        <li><Link href='/docs/features5'>Features 5</Link></li>
        <li><Link href='/docs/features6'>Features 6</Link></li>
        <li><Link href='/docs/features7'>Features 7</Link></li>
      </ul>
    </>
  )
}

export default Docs;