import React from 'react'
import { useFormikContext } from 'formik'
import { Button } from '../shared'
 
export default function AppSubmitButton({title, ...rest}) {
    const {handleSubmit} = useFormikContext()

    return (
        <Button title={title} onPress={handleSubmit} {...rest}/>
    )
}
