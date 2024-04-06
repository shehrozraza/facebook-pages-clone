function Data() {

    event.preventDefault()
    let emailOrPhone = document.getElementById('emailOrPhone').value
    let password = document.getElementById('password').value
    console.log(emailOrPhone,password);



   
let correctEmail="zainbrohi000@gmail.com"
let CorrectAPassword="12345"
    
    if(emailOrPhone===correctEmail && password===CorrectAPassword){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        
    
    }else{
        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Credentials are wrong!",
            
          });
        
    }

 


}