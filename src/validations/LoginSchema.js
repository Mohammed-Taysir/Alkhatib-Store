import * as yup from 'yup'

const LoginSchema = yup.object({
    email: yup.string().email("Invalid Email Format (example@example.com)").required("Email is required"),
     password: yup
    .string()
    .required('Password is required')
    
});
export default LoginSchema;