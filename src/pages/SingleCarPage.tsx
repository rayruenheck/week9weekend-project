import {useState, useEffect} from 'react'
import { CarCardable } from '../components/CarCard';
import { useParams } from "react-router-dom";
import CarCard from '../components/CarCard';
export default function SingleCarPage() {

    const base_api_url = import.meta.env.VITE_APP_BASE_API

    const {carID} = useParams()



    const [car, setCar] = useState<CarCardable>({id:0,name:'',year:0})
    
    useEffect(()=>{
        (async ()=>{
            const res = await fetch(`${base_api_url}/${carID}`)
            if(res.ok){
                const data = await res.json()
                setCar(data)
            }
        })()
    })
  
  
    return (
        <>
        
        <CarCard car={car} key={car.id}/>
        
        
        
        </>
    
  )
}
