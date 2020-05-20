// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup.string()
    .trim()
    .min(3, 'The username must be at least three characters long')
    .required('The username is a required field'),
  email: yup,
  // role: yup,
  // civil: yup,
})

export default formSchema
