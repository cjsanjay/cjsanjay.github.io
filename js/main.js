$(document).ready(function(){
	$("#proj_view").hide();
	$("#exp_view").hide();

	$("#projView").click(function(){
		$("#exp_view").hide();
		$("#intro_view").hide();	
		$("#proj_view").show("slow");	
	})

	$("#introView").click(function(){
		$("#proj_view").hide();
		$("#exp_view").hide();
		$("#intro_view").show("slow");		
	})

	$("#expView").click(function(){
		$("#proj_view").hide();
		$("#intro_view").hide();
		$("#exp_view").show("slow");		
	})
});