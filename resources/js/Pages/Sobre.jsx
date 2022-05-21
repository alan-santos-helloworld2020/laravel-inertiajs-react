import { Head } from '@inertiajs/inertia-react';
import React from 'react'
import Navegador from '../components/Navegador';

const Sobre = (props)=>{
   return(
       <div className="row">
           <Head>
               <title>{props.title}</title>
           </Head>
           <Navegador></Navegador>
           <div className="col-12">
               <p className="text-center">{props.title}</p>
           </div>
       </div>
   )
}


export default Sobre;
