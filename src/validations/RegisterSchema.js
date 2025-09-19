import * as yup from 'yup'

const RegisterSchema = yup.object({
    fullName: yup.string().required("Full Name is required").min(3, "Min Length 3 Characters"),
     userName: yup.string().required("User Name Is Required").min(3, "Min Length Is 3"),
     email: yup.string().email("Invalid Email Format (example@example.com)").required("Email is required"),
     password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(250, 'Password cannot exceed 250 characters')
    .matches(/[0-9]/, 'Password requires at least one number')
    .matches(/[a-z]/, 'Password requires at least one lowercase letter')
    .matches(/[A-Z]/, 'Password requires at least one uppercase letter')
    .matches(/[^a-zA-Z0-9]/, 'Password requires at least one symbol (e.g., !, @, #, $)'),
    phoneNumber: yup.string().required('Phone Number is required').min(10, "Minimum length of phone number is 10 characters").max(14, "Maximum length of phone number is 14 characters")
});
export default RegisterSchema;