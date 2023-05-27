import React from 'react'
import { FieldProps, getIn } from 'formik'
import TextField  from '@mui/material/TextField'
import { TextFieldProps } from '@mui/material/TextField'

/**
 * Material TextField Component with Formik Support including Errors.
 * Intended to be specified via the `component` prop in a Formik <Field> or <FastField> component.
 * Material-UI specific props are passed through.
 */
 const FormTextField: React.FC<FieldProps & TextFieldProps> = props => {
  const isTouched = getIn(props.form.touched, props.field.name)
  const errorMessage = getIn(props.form.errors, props.field.name)

  const { error, helperText, field, form, ...rest } = props

  return (
    <TextField
      variant="outlined"
      
      
      fullWidth label="fullWidth"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={helperText ?? (( errorMessage) ? errorMessage : undefined)}
      {...rest}
      {...field}
    />
  )
}
export default FormTextField