


document.addEventListener("DOMContentLoaded",()=>{
	const loginForm=document.querySelector("#Login");
   const createAccountForm=document.querySelector("#createAccount");
   
   document.querySelector("#linkCreateAccount").addEventListener("click",e=>{
   	e.preventDefault();
   	loginForm.classList.add("form--hidden");
   	createAccountForm.classList.remove("form--hidden");
   });
    document.querySelector("#linkLogin").addEventListener("click",e=>{
    		e.preventDefault();
        loginForm.classList.remove("form--hidden");
   	createAccountForm.classList.add("form--hidden");
   });
  
    
});
