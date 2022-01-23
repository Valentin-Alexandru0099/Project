const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});



const closebutton = document.querySelector('.closespan')
if ( closebutton ){
	setTimeout(function(){ 
			const div =  document.getElementById("msg")
			div.style.opacity = "0";
			setTimeout(function(){ div.parentNode.removeChild(div) }, 600);
		}, 10000);
		
		closebutton.addEventListener('click', () =>{
			const div =  document.getElementById("msg")
			div.style.opacity = "0";
			setTimeout(function(){ div.parentNode.removeChild(div) }, 600);
		})
}
