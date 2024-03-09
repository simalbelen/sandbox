import { FC, useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './api.css'

export const Api:FC<any> = (props):JSX.Element => {

    const {contGatos} = props;
    const [textoApi, setTextoApi] = useState<string>("");

    useEffect(()=>{
        (contGatos<10) ? setTextoApi(`Generando gatitos... ${contGatos + 1}`) : setTextoApi("Todos los gatitos están cargados!")
    }, [contGatos])

    return (
        <div>
            <div className='center_div'>
                <span className='label m-5 h2'> {textoApi}</span>
            </div>
        </div>
    );
}


