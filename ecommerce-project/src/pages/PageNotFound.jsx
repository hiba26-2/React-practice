import {Header} from '../components/Header.jsx'
import './PageNotFound.css'

export function PageNotFound({cart}){
    return(
<>
<Header cart={cart} />

<h1 >404</h1>
<h2 >PAGE NOT FOUND!!</h2>


</>

    )
}