import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  // const [userType, setUserType] = useState("");
  // const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (!name || !email || !password || !cpassword) {
      return alert("Please fill out all the fields");

    } else {
      e.preventDefault();

      console.log(name, email, password, cpassword);
      
        fetch(`https://sessionlogin.onrender.com/register`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
            window.location.href = "./";
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
        
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

                 <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
            <input
              type="cpassword"
              className="form-control"
              placeholder="Enter confirm password"
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="./">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}











// import React, { useState } from 'react'
// import { Link as RouterLink } from 'react-router-dom'
// import validator from 'validator'
// import { regexPassword } from './utils'
// import {
//   Paper,
//   Container,
//   Link,
//   Stack,
//   Button,
//   Box,
//   Divider,
//   Avatar,
//   Typography,
//   TextField,
//   FilledInput,
//   InputAdornment,
//   IconButton,
//   InputLabel,
//   FormControl,
//   FormHelperText,
// } from '@mui/material'
// import {
//   Face as FaceIcon,
//   Visibility,
//   VisibilityOff,
// } from '@mui/icons-material'
// import theme from './theme'

// function Signup() {
//   const [values, setValues] = useState({
//     email: '',
//     password: '',
//     repeatPassword: '',
//     showPassword: false,
//     showRepeatPassword: false,
//   })
//   const [errors, setErrors] = useState({
//     email: false,
//     password: false,
//     repeatPassword: false,
//     fetchError: false,
//     fetchErrorMsg: '',
//   })

//   const handleChange = (fieldName) => (event) => {
//     const currValue = event.target.value
//     switch (fieldName) {
//       case 'email':
//         validator.isEmail(currValue)
//           ? setErrors({ ...errors, email: false })
//           : setErrors({ ...errors, email: true })
//         break

//       case 'password':
//         regexPassword.test(currValue)
//           ? setErrors({ ...errors, password: false })
//           : setErrors({ ...errors, password: true })
//         break

//       case 'repeatPassword':
//         currValue === values.password
//           ? setErrors({ ...errors, repeatPassword: false })
//           : setErrors({ ...errors, repeatPassword: true })
//         break
//     }
//     setValues({ ...values, [fieldName]: event.target.value })
//   }

//   const handleShowPassword = (showPasswordField) => {
//     setValues({
//       ...values,
//       [showPasswordField]: !values[showPasswordField],
//     })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()

//     try {
//       const res = await fetch(`http://localhost:5000/api/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: values.email,
//           password: values.password,
//         }),
//       })

//       if (!res.ok) {
//         const error = await res.json()
//         return setErrors({
//           ...errors,
//           fetchError: true,
//           fetchErrorMsg: error.msg,
//         })
//       }

//       const data = await res.json()
//       // this is just a visual feedback for user for this demo
//       // this will not be an error, rather we will show a different UI or redirect user to dashboard
//       // ideally we also want a way to confirm their email or identity
//       setErrors({
//         ...errors,
//         fetchError: true,
//         fetchErrorMsg: data.msg,
//       })
//       setValues({
//         email: '',
//         password: '',
//         repeatPassword: '',
//         showPassword: false,
//         showRepeatPassword: false,
//       })
//       return
//     } catch (error) {
//       setErrors({
//         ...errors,
//         fetchError: true,
//         fetchErrorMsg:
//           'There was a problem with our server, please try again later',
//       })
//     }
//   }

//   return (
//     <>
//       <Container sx={{ marginTop: 'calc(100vh - 45%)' }} maxWidth='sm'>
//         <Paper elevation={6}>
//           <Container
//             maxWidth='sm'
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center',
//               paddingTop: '20px',
//             }}>
//             <Avatar
//               sx={{
//                 width: 80,
//                 height: 80,
//                 bgcolor: theme.palette.primary.main,
//                 boxShadow: '0px 0px 8px rgba(131,153,167,0.99)',
//               }}>
//               <FaceIcon sx={{ fontSize: 70 }} />
//             </Avatar>
//             <h2>Register a new account</h2>
//           </Container>
//           <Stack
//             component='form'
//             onSubmit={handleSubmit}
//             noValidate
//             spacing={6}
//             sx={{ bgcolor: '#f5f5f6', padding: '40px' }}>
//             <TextField
//               variant='filled'
//               type='email'
//               label='Email'
//               value={values.email}
//               onChange={handleChange('email')}
//               error={errors.email}
//               helperText={errors.email && 'Please insert a valid email address'}
//             />

//             <FormControl variant='filled'>
//               <InputLabel htmlFor='password-field'>Password</InputLabel>
//               <FilledInput
//                 id='password-field'
//                 type={values.showPassword ? 'text' : 'password'}
//                 value={values.password}
//                 onChange={handleChange('password')}
//                 error={errors.password}
//                 endAdornment={
//                   <InputAdornment position='end'>
//                     <IconButton
//                       aria-label='toggle password visibility'
//                       onClick={() => handleShowPassword('showPassword')}
//                       edge='end'>
//                       {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//               />

//               <FormHelperText error={errors.password}>
//                 Password must be at least 8 characters, have one symbol, 1
//                 uppercase letter, 1 lowercase and 1 digit
//               </FormHelperText>
//             </FormControl>

//             <FormControl variant='filled'>
//               <InputLabel htmlFor='password-repeat-field'>
//                 Repeat password
//               </InputLabel>
//               <FilledInput
//                 id='password-repeat-field'
//                 type={values.showRepeatPassword ? 'text' : 'password'}
//                 value={values.repeatPassword}
//                 onChange={handleChange('repeatPassword')}
//                 endAdornment={
//                   <InputAdornment position='end'>
//                     <IconButton
//                       aria-label='toggle password visibility'
//                       onClick={() => handleShowPassword('showRepeatPassword')}
//                       edge='end'>
//                       {values.showRepeatPassword ? (
//                         <VisibilityOff />
//                       ) : (
//                         <Visibility />
//                       )}
//                     </IconButton>
//                   </InputAdornment>
//                 }
//               />
//               {errors.repeatPassword && (
//                 <FormHelperText error={errors.repeatPassword}>
//                   Password must be the same as above
//                 </FormHelperText>
//               )}
//             </FormControl>
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'center',
//               }}>
//               <Button
//                 variant='contained'
//                 size='large'
//                 type='submit'
//                 sx={{
//                   minWidth: '70%',
//                 }}>
//                 Sign me up!
//               </Button>
//             </Box>
//             {errors.fetchError && (
//               <FormHelperText error>{errors.fetchErrorMsg}</FormHelperText>
//             )}
//             <Divider />
//             <Typography paragraph align='center'>
//               Already have an account?{' '}
//               <Link component={RouterLink} to='/'>
//                 Login here
//               </Link>
//             </Typography>
//           </Stack>
//         </Paper>
//       </Container>
//     </>
//   )
// }

// export default Signup
