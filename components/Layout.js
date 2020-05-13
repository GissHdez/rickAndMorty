import React from 'react';
import Navigation from './Navigation';

const Layout = ({children})=>{
    return(
        <>
            <div id="cabezal">
                <Navigation />                
            </div>
            <div id="contenido">
                {children}
            </div>
            <style jsx>{`
            #cabezal{
                background: #BF2642;
                width: 100%;
                height: 6.5em;
            }
            #contenido{
                background: #2F3540;
            }
        `}</style>
        </>
    )
}
export default Layout;