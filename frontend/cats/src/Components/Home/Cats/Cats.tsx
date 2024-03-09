import { FC, useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './cats.css'
import { Gato } from '../../../Models/Gato';

export const Cats:FC<any> = (props):JSX.Element => {
    
    const {imagenesGatos, flagGatos} = props;
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [actualImagenesGatos, setActualImagenesGatos] = useState<Gato[]>([]);

    const rellenaDivGatos = (listaGatos:Gato[]) => {
        return listaGatos.map((imagen: Gato, index: number) => {
            return (
                <img key={index} src={imagen.url} className='imgGato'/>
            );
        });
    }

    const muestraGatos = (caso:number) => {
        switch(caso){
            case 0:
                setActualImagenesGatos(imagenesGatos.filter((imagen:Gato) => (imagen.gatoId % 2) === 0))
                break;
            case 1:
                setActualImagenesGatos(imagenesGatos.filter((imagen:Gato) => (imagen.gatoId % 2) === 1))
                break;
            default:
                setActualImagenesGatos(imagenesGatos)
        }
    }

    useEffect(()=>{
        if(imagenesGatos.length < 10) {
            setButtonDisabled(true)
        } else {
            console.log("llego")
            setButtonDisabled(false);
        }

        setActualImagenesGatos(imagenesGatos)
        rellenaDivGatos(actualImagenesGatos)

    }, [flagGatos])

    return (
        <div> 
            <div className='divConts'>
                <button className = 'btn btn-success m-1' disabled={buttonDisabled} onClick={() => muestraGatos(0)}> Pares </button>
                <button className = 'btn btn-success m-1' disabled={buttonDisabled} onClick={() => muestraGatos(2)}> Todos </button>
                <button className = 'btn btn-success m-1' disabled={buttonDisabled} onClick={() => muestraGatos(1)}> Impares </button>
            </div>

            <div className='divGatos'>
                {(imagenesGatos.length < 10) ? rellenaDivGatos(imagenesGatos) : rellenaDivGatos(actualImagenesGatos)}
            </div>
        </div>
    );

}


