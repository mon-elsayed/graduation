
let CreateAccount= document.getElementById('CreateAcc');

document.getElementById('statusSelect').addEventListener('change', function () {
    var status = this.value;
    if (status === 'doctor') { 
        document.getElementById('idCardImage').style.display = 'block';
        CreateAccount.style.paddingTop="30px";
        alert("Please note that your contact information (email and phone number) will be visible to other users.");
        
        document.getElementById('container').style.minHeight='700px';
        // document.getElementById('uploadInstructions').style.display = 'block';
    } else {
        document.getElementById('idCardImage').style.display = 'none';
        // document.getElementById('uploadInstructions').style.display = 'none';
    }
});

document.getElementById('idCardUpload').addEventListener('change', function () {
    var file = this.files[0];
    // var img = document.getElementById('idCardPreview');
    // img.src = URL.createObjectURL(file);
    // img.style.display = 'block';
});


const container = document.getElementById('container');
let register=document.getElementById("sig")
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let userinfo= document.getElementById('userInfo');
let login=document.getElementById('L')
let signup= document.getElementById('Signupbtn');
//////////////////////////////////////////////////////////
let username= document.getElementById('username');
let email= document.getElementById('email');
let password= document.getElementById('password');
let phone= document.getElementById('phoneNum');
////////////////////////////////////////////////////////////
let em= document.getElementById('em');
let pass= document.getElementById('pass');
let signINBtn=document.getElementById('signINBtn')
let LoginDiv=document.getElementById('sign')

////////////////////////////////////////////////////////////////


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
signup.addEventListener('click', () => {
    container.classList.add("active");


    // const name = document.getElementById('username').value;
    // const email = document.getElementById('email').value;
    // const password = document.getElementById('password').value;
    // const phone = document.getElementById('phoneNum').value;
    // const age = document.getElementById('Age').value;
    // const gender = document.getElementById('genderSelect').value;
    // const status = document.getElementById('statusSelect').value;

    // const userData = {
    //     name: name,
    //     email: email,
    //     password: password,
    //     phone: phone,
    //     age: age,
    //     gender: gender,
    //     status: status
    // };

    // fetch('your_server_endpoint', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userData)
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log('Data sent successfully:', data);
    //     // Optionally, you can redirect the user to another page or show a success message
    // })
    // .catch(error => {
    //     console.error('Error sending data to server:', error);
    //     // Handle errors, show error message to user, etc.
    // });
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
signINBtn.addEventListener('click', function(e) {
    e.preventDefault()
    window.location.href = "index.html";
                
            
            // userinfo.style.display = 'block';
 

});









// register.addEventListener('click', () => {
//     setTimeout(()=>{
//                window.location="regisraion.html"
                 
//              },500)
//     container.classList.remove("active");
// });













// signup.addEventListener('click', function(e) {
//     e.preventDefault()
// if( username.value!==""&&email.value!==""&& password.value!==""&&phone.value!==""){
//     localStorage.setItem("username",username.value)
//     localStorage.setItem("email",email.value)
//     localStorage.setItem("password",password.value)
//     localStorage.setItem("phoneNumb",phone.value)

//     setTimeout(()=>{
//         window.location="index.html"
         
//     },500)
// }
// });
// if(localStorage.getItem("username")){
//     login.remove()
//     userinfo.style.display="block";
//     userinfo.innerHTML="eman"
// }

//  document.getElementById('userInfo').style.display = 'block';
//      window.location.href = 'index.html';
//      document.getElementById('username').textContent = username;
















    // document.getElementById('userInfo').style.display = 'block';
    // window.location.href = 'home';
    // document.getElementById('username').textContent = username;
   

// let GetEmail=localStorage.getItem("email")
// let Getpassword=localStorage.getItem("password")
// let GetUserName=localStorage.getItem("username")
//////////////////////////////////////////////////////
// signINBtn.addEventListener('click', function(e) {
//     e.preventDefault()
// if( em.value!==""&& pass.value!==""){
    
// if( GetEmail&&GetEmail.trim()===em.value&&Getpassword&&Getpassword.trim()===pass.value){

//     setTimeout(()=>{
//         window.location="index.html"
         
//     },500)
// }
// else
// alert("email or password wrong")

// }

// );
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
