function render(html_string, parametros){
    
	var nombre="";
	var variables= html_string.match(/[^\{\}]+(?=\})/g);

	for (var i = variables.length - 1; i >= 0; i--) {
		var value= eval(variables[i]);
		var variable = variables[i];
		html_string = html_string.replace("{"+variables[i]+"}",parametros[variables[i]]);	
	};

	return html_string;

}
    
module.exports.render= render;