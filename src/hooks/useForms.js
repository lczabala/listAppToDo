import {useState} from 'react'
//Esta función recibe un objeto en el initialState

export const useForms = (initialState = {}) => {

    //Con esos valores recibidos se inicializa el estado
    const [values, setValues] = useState(initialState);

    const reset = () =>{        
        setValues(initialState);
    }    

    const handleOnChange = ({target})=>{
        //Target.value nos permite capturar el valor del input en un momento dado
        //con el setValues actualizamos los valores del estado
        setValues({
            ...values,
            [target.name]: target.value
        });
    } 
    
    //Se retorna el valor de values y la función handleOnChange
    return[values, handleOnChange, reset];
}
