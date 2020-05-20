// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup,
  email: yup,
  // role: yup,
  // civil: yup,
})

export default formSchema
