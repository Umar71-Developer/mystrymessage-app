import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2 , "Username must be atleast 2 Characters")
.min(2 , "Username must no more than 20 Characters")
.regex(/^[a-zA-Z0-9_-]{2,20}$/ , "username must not contain special characters")



export const singUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message: 'Invalid Email Address'}),
    password : z.string().min(8 , {message:"Password must be at least 8 Characters"})

})