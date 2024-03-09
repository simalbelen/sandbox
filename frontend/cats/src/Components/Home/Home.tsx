import { FC, useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import { Api } from './Api/Api';
import { Cats } from './Cats/Cats';
import { Gato } from '../../Models/Gato';
import { getGatitos } from '../../Services/ApiService';

export const Home:FC<any> = (props):JSX.Element => {

    const {num, setNum, history} = props
    const [flagComponent, setflagComponent] = useState<boolean>(true);
    
    const [contGatos, setContGatos] = useState<number>(0);
    const [imagenesGatos, setImagenesGatos] = useState<Gato[]>([]);
    const [flagGatos, setFlagGatos] = useState<boolean>(false);

    const fetchGato = () => {
        try {
            if (contGatos<10){
                setTimeout(async () => {
                    const res = await getGatitos()
                    const {data} = res
                    if (res.status === 200){
                        setImagenesGatos([...imagenesGatos, {...data[0], gatoId:contGatos+1, visible:true}])
                        setContGatos(contGatos + 1)
                        setFlagGatos(!flagGatos)
                    }
                }, 2500)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchGato()
    }, [flagGatos])

    return (
        <div> 
            <div className='divConts'>
                <button className = 'btn btn-danger' onClick={() => setNum(num - 1)}> - 1 </button>
                <h2><span className='label label-default m-5'>{num}</span></h2>
                <button className = 'btn btn-danger' onClick={() => setNum(num + 1)}> + 1 </button>
            </div>  

            <div className='divBotones bg-warning'>
                <button className = 'btn btn-primary' onClick={() => {setflagComponent(true)}}> API </button>
                <button className = 'btn btn-primary' onClick={() => {setflagComponent(false)}}> Cats </button>
            </div>   

            <div>
                {flagComponent? 
                <Api
                    contGatos ={contGatos}/>
                :
                <Cats
                    contGatos ={contGatos}
                    imagenesGatos = {imagenesGatos}
                    setImagenesGatos = {setImagenesGatos}/>}
            </div>
        </div>
    );
}

