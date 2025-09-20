
import * as yup from 'yup';

const ResetSchema = yup.object({
    newPassword: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(250, 'Password cannot exceed 250 characters')
        .matches(/[0-9]/, 'Password requires at least one number')
        .matches(/[a-z]/, 'Password requires at least one lowercase letter')
        .matches(/[A-Z]/, 'Password requires at least one uppercase letter')
        .matches(/[^a-zA-Z0-9]/, 'Password requires at least one symbol (e.g., !, @, #, $)'),
        email: yup.string().email("Invalid Email Format (example@example.com)").required("Email is required"),
        code: yup.string().length(4, 'Length Should Be 4 Characters')
})

export default ResetSchema;