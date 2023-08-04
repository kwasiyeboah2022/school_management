import styled from "styled-components"
import main from '../assets/main.svg'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
    <nav>
        <h4>GloryVel</h4>
    </nav>
    <div className="container page">
        {/* info */}
        <div className="info">
            <h2>school <span>management </span>app</h2>
            <p>
               I am baby blue bottle lyft selvage kogi VHS same,
               PBR&B before they sold out kinfolk glossier. 
               Edison bulb adaptogen cornhole salvia asymmetrical ugh. 
               Post-ironic pabst meggings.
            </p>
            <Link to='/login' className='btn btn-hero btn-center'>Login</Link>
        </div>
        <img src={main} alt="school hunt" className="img main-img" />
    </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.main`
 nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
 }
 .page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -6rem;
 }
 h4{
     font-weight: 900;
     
        color: var(--primary-500);
     
 }
 h2{
     font-weight: 700;
     span{
        color: var(--primary-500);
     }
 }
 p{
    color: var(--grey-600)
 }
.main-img{
    display: none;

}

.btn-center{
  margin-left: 40%;
 
}

@media (min-width:992px) {
    .page{
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
        margin-top: -1rem;
    }
    .main-img {
                display: block;

    }
    h1{
        text-align: center;
        justify-content: center;
    }
    .btn-center{
    margin-left: 0;
}
}

`


export default Landing