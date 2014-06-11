function loadUser() {
	var template = $('#template').html();
	Mustache.parse(template);   // optional, speeds up future uses
	var rendered = Mustache.render(template, {name: "Mustache"});
	$('#target').html(rendered);
}

function load0() {
	var template = $('#template0').html();
	Mustache.parse(template);
	var rendered = Mustache.render(template, {title:"engineer", age:12, name:{first:"kobe",last:"bryant"}, italic:"<i>italic stuff</i>"});
	$('#target0').html(rendered);
}

function load1() {
	var template = $('#template1').html();
	Mustache.parse(template);
	var rendered = Mustache.render(template, 
		{
			people:[{name:"Kobe"}, {name:"James"}, {name:"Duncan"}], 
			people1:["Wade","Parker","Ginobili"],
		}
	); 
	$('#target1').html(rendered);
}

function load2() { 
	var template = $('#template2').html();
	Mustache.parse(template);
	var rendered = Mustache.render(template, 
		{
			name : "Mustache",
			italic : function() {
				return function(text, render) {
					return "<i>" + render(text) + "</i>";
				}
			}
		}
	);
	$('#target2').html(rendered);
}

function load3() { 
	var template = $('#template3').html();
	Mustache.parse(template);
	var rendered = Mustache.render(template, 
		{
			inverted : []
		}
	);
	$('#target3').html(rendered);
}





