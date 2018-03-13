$(document).ready(function(){

	
   /* $(window).load(function() {				//loading page//
    	$(".loader").fadeOut("slow");
	});*/

    let infoPage = $(".info_page");
	let contactPage = $(".contact_page");
	let projectPage = $(".project_page");

	infoPage.hide("fast");
	contactPage.hide("fast");                     /*hiding navigation pages*/
	projectPage.hide("fast");                     


	let myBrand = $("#name");
	myBrand.hide("fast").delay(1200).slideDown(6200);    

	let jobTitle = $("#job_title");             /*name and brand animation*/
	jobTitle.hide("fast").delay(1200).fadeIn(10000);
	
	let navPage = $(".nav_page");
	navPage.hide();

	let menuButton = $("#menu_btn");
		menuButton.on("click", function(e){     /*scrolling menu on button click*/
		e.preventDefault();
		navPage.slideToggle("slow");
	})

	

	let landingPage = $(".landing_page");
	let navButtonMain = $(".navigation_btn");
	let aboutLink = $("#abouts");
 	let myselfLink = $("#myself");
 	let projectLink = $("#project");
 	

	aboutLink.on("click", function(e){        /*menu page links*/
		e.preventDefault();
		landingPage.hide("slow");
		menuButton.hide();
		navButtonMain.hide();
		navPage.hide();
		contactPage.hide();
		infoPage.fadeIn(3000);
	})

	myselfLink.on("click", function(e){
		e.preventDefault();
		landingPage.hide("slow");
		menuButton.hide();
		navButtonMain.hide();
		navPage.hide();
		contactPage.fadeIn(3000);

	})

	projectLink.on("click", function(e){
		e.preventDefault();
		landingPage.hide("slow");
		menuButton.hide();
		navButtonMain.hide();
		navPage.hide();
		projectPage.fadeIn(3000);
	})

	navButtonMain.on("click", function(e){
		e.preventDefault();
		landingPage.hide("slow");
		menuButton.hide();
		navButtonMain.hide();
		navPage.hide();
		infoPage.fadeIn(3000);
	})										  /********************/



	

	let homeButton = $(".home_btn");
	let navButtons = $(".navigation_btns");
	let navButtonUp = $("#navigation_btn_up");
	let navButtonDown = $("#navigation_btn_down");

	navButtons.on("click", function(e){        /*Navigation page buttons*/
		e.preventDefault();
		infoPage.hide();
		contactPage.fadeIn(3000);
	})

	homeButton.on("click", function(e){
		e.preventDefault();
		infoPage.hide();
		contactPage.hide();
		landingPage.fadeIn(3000);
		menuButton.fadeIn(3000);
		navButtonMain.fadeIn(3000);
		

	})

    let homeButtonLast = $("#btn_home_last");

    homeButtonLast.on("click", function(e){
    	e.preventDefault();
    	landingPage.fadeIn(3000);
    	menuButton.fadeIn(3000);
    	navButtonMain.fadeIn(3000);
    	projectPage.hide();                       /*try using multiple selectors*/
    })											/*or this() to dry code?*/	

    navButtonUp.on("click", function(e){		
    	e.preventDefault();
    	contactPage.hide();
    	infoPage.fadeIn(3000);

    })

    navButtonDown.on("click", function(e){
    	e.preventDefault();
    	contactPage.hide();
    	projectPage.fadeIn(3000);
    })

    let navButtonUpLast = $("#nav_btn_up_last");

    navButtonUpLast.on("click", function(e){
    	e.preventDefault();
    	projectPage.hide();
    	contactPage.fadeIn(3000);
    })

    let codePenPage = $(".full_project");
    codePenPage.hide();

    let animalCard = $("#animal_card");
    let pam = $("#pam");
    let animalBtn = $("#animal_btn");
    let pamBtn = $("#btn_pam");
    let closeBtn = $("#close_btn");
    let fullProject = $(".full_project");

    animalCard.hide();
    pam.hide();
    closeBtn.hide();

    animalBtn.on("click", function(e){
    	e.preventDefault();
    	projectPage.hide();
    	animalCard.fadeIn(3000);
		closeBtn.show("slow");	
    })

    pamBtn.on("click", function(e){
    	e.preventDefault();
    	projectPage.hide();
    	pam.fadeIn(3000);
    	closeBtn.show("slow");			
    })

    closeBtn.on("click", function(e){
    	e.preventDefault();
    	animalCard.hide();
    	pam.hide();
    	closeBtn.hide();
    	projectPage.fadeIn(3000);

    })

})