var li_items = document.querySelectorAll(".sidebar ul li");
var hamburger = document.querySelector(".hamburger");
var wrapper = document.querySelector(".wrapper");
var div_submenu = document.getElementById("subMenu")
div_submenu.style.visibility="visible";
li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseenter", ()=>{
		if(wrapper.classList.contains("click_collapse")){
			return;
		}
		else{
			li_item.closest(".wrapper").classList.remove("hover_collapse");
		}
	})
})

li_items.forEach((li_item)=>{
	li_item.addEventListener("mouseleave", ()=>{
		if(wrapper.classList.contains("click_collapse")){
			return;
		}
		else{
			li_item.closest(".wrapper").classList.add("hover_collapse");
		}
	})
})



hamburger.addEventListener("click", () => {
	hamburger.closest(".wrapper").classList.toggle("click_collapse");
	hamburger.closest(".wrapper").classList.toggle("hover_collapse");
})



let subMenu= document.getElementById("subMenu");

function toogleMenu(){
	console.log("liste ouverte");
	subMenu.classList.toggle("open-menu");
	div_submenu.style.visibility="visible";
	let body_click = document.getElementById("body");
	body_click.addEventListener("click", () => {
		console.log("body cliqué");
		div_submenu.style.visibility="hidden";
	})
}


