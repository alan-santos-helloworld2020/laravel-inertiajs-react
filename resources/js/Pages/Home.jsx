import { Head } from "@inertiajs/inertia-react";
import Navegador from "../components/Navegador";

const Home=(props)=>{
    return(
        <div className="row">
            <Head>
                <title>{props.title}</title>
            </Head>
            <Navegador></Navegador>
            <div className="col-12">
                <p className="text-center">Home</p>
            </div>
        </div>
    )
}

export default Home;

