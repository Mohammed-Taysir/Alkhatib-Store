

import * as yup from 'yup';

const ForgetSchema = yup.object({
    email: yup.string().email("Invalid Email Format (example@example.com)").required("Email is required")
});
export default ForgetSchema;