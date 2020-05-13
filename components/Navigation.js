import React from 'react';
import Link from 'next/link';


const Navigation = () => {
    return(
        <>
            <ul> 
                <li>
                    <Link href='/'><a>Home</a></Link>
                </li>
                <li>
                    <Link href='/character'><a>Personajes</a></Link>
                </li>
            </ul>
                       
            <style jsx>{`
                ul{
                    height: 3em;
                    display: flex;
                    align-items:center;
                }
                li{
                    display: inline-block;
                    margin-left: 3em;
                }
                a{
                    color: #F29422;
                    text-decoration: none;
                    font-size: 18px;
                }
                a:hover{
                    color: #F2B33D;
                }
            
            `}</style>
        </>
    )
}
export default Navigation;