import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

function About (props) {
console.warn("data", props)
return <Layout>
            <Head>
                <title>Rick and Morty - Personajes</title>
            </Head>
            <img id="logo" src="/img/rickMorty.png" alt="img rick aand morty"></img>
            <h1>
                Pesonajes importados desde Next y React
            </h1>

{
props.data.results.map(data=>(
    <div id="contenedor">
        <div id="item">
            <h3 id="nombre">{data.name}</h3>
            <img id="imgPer"src={data.image} alt='Personajes de serie img'></img>
            <div id="infoPer">
                <p>Lugar de origen: {data.origin.name}</p>
                <p>Especie: {data.species}</p>
                <p>Género: {data.gender}</p>
            </div>            
        </div>                  
    </div>
    ))
}

<style jsx>{`
    #logo{
        display: block;
        width: 50%;
        margin: auto;
        padding: 2em;
    }
    h1{
        font-size: 18px;
        text-align: center;
        color: #F2F2F2;
    }
    #contenedor{
        display: initial;
        flex-wrap: wrap;
    }
    #item{
        display: inline-block;
        width: 30%;
        height: auto;
        background-color: #BF2642;
        border-radius: 2em;
        border: 15px solid #2F3540;
    }
    h3{
        font-size: 24px;
        text-align:center;
        color: #F2F2F2;
    }
    #imgPer{
        display: block;
        width: 90%;
        margin: auto;
    }
    #infoPer{
        font-size: 21px;
        text-align:center;
        color: #F2F2F2;
    }
       
    @media screen and (max-width: 1024px) {     
        #contenedor{
            display: flex;
        }
        #item{
            margin-left: auto;
            margin-right: auto;            
            display: flex;
            width: 80%;
        }
        h3{
            order: 2;
            width: 25%;
        }
        #imgPer{
            order: 1;
            width: 45%;
        }
        #infoPer{
            order: 3;
            width: 25%;
        }         
    }
    @media screen and (max-width: 768px) {     
        #contenedor{
            display: flex;
        }
        #item{
            margin-left: auto;
            margin-right: auto;            
            display: flex;
            width: 90%;
        }
        h3{
            width: 20%;
        }
        #imgPer{
            order: 1;
            width: 30%;
            margin-left: 0;
        }
        #infoPer{
            order: 3;
            width: 50%;
        }         
    }
    @media screen and (max-width: 600px) {
        #contenedor{
            display: flex;
        }
        #item{
            display: inline-block;
            width: 90%;
            border: 10px solid #2F3540;
        }
        h3{
            width: 100%;
        }
        #imgPer{
            display: block;
            width: 90%;
            margin: auto;
        }
        #infoPer{            
            width: 100%;
        }
    }
            
            `}</style>
</Layout>
}

About.getInitialProps = async function(){
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()
    return {
        data
    }
}

export default About;

