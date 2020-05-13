import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
    return(
        <>
            <Layout class="Inicio">
                <Head>
                    <title>Inicio</title>
                </Head>         
            </Layout>
            <div id="inicio">
                <h1>Uso de Next y React</h1> 
                <p>Vista de los personajes</p>
                <img src="/img/rickMorty.png" alt="img rick aand morty"></img>
            </div>
        <style jsx>{`
            #inicio{
                background: #2F3540;
                width: 100%;
                height: 85vh;
                display: column; 
                margin-top: -1.5em;   
            }
            h1{
                color: #F2F2F2;
                text-align: center;
                padding:1em;
            }
            p{
                color: #F2F2F2;
                font-size: 18px;
                text-align: center;
                padding: 0 0 3em;
            }
            img{
                display: block;
                width: 80%;
                margin: auto;
            }
        `}</style>
        </>
    )
}
export default Home;


