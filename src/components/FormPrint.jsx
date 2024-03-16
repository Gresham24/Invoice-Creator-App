import { useContext } from 'react'
import {FormDataContext} from './Form';

export default function FormPrint() {
    const { formValues } = useContext(FormDataContext);
    console.log(formValues);
    return (
        <>
            <p>Details: {JSON.stringify(formValues.details)}</p>
            <p>Items: {JSON.stringify(formValues.items)}</p>
        </>
    );
}


