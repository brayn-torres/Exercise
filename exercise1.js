window.test_2 = function(input) {
		let word = input.replace(/\s/g, "");
    let j = 0;
    let sum = 0;
    
    for (let i = (str.length - 1); i >= 0; i--) {
    
    		let letter = str.replace(/(\w)+/i, str[i]);
        let reg = new RegExp(letter, 'i');
        let replacement = str[j++].replace(reg, ".");
        
        if (replacing == ".")
        		sum++;
        
    }
    if (sum == str.length)
    		input = true;
    else 
    		input =false;
		return input;
}
