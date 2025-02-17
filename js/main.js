
window.onload= function(){
	
		var open_Nav = document.querySelector('.navMenu');
			open_Nav.addEventListener('click',(e) =>{
			document.querySelector('.mobileNav').style.height="500px";
		});

		var close_Nav = document.querySelector('.close_btn');
			close_Nav.addEventListener('click',(e) =>{
			document.querySelector('.mobileNav').style.height="0";
		});


};


function closeNav2(){
	document.querySelector('.mobileNav').style.height='0';
}

function openContact() {
	document.getElementById("contact_overlay").style.display='block';
}

function closeContact() {
	document.getElementById("contact_overlay").style.display='none';
}


	mybutton= document.getElementById("scrolltop");

		function scrolltop() {
			document.body.scrollTop=0;
		}

		function scrolltop() {
			document.documentElement.scrollTop=0;
		}
