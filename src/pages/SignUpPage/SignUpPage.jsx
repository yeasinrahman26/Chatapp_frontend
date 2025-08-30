import { useState } from "react";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata,setFormData]=useState({
    fullName: '',
    email:'',
    password: "",
  })

  return (
    <div>
      <h1>signUpPage</h1>
    </div>
  );
};

export default SignUpPage;
