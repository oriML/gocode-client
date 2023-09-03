import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

function ControllerTextInput({ name, rules}) {

    const { handleSubmit, watch, formState: { errors }, control } = useForm();


  return (
    <Controller
        name={name}
        control={control}
        rules={{...rules}}
        render={({
            field,
            fieldState: { error },
            formState, }) => <TextField variant="filled" {...field} />}
      />
  )
}

export default ControllerTextInput