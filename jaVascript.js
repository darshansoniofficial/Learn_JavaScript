function loop1(){
	for (let number = 0; number <= 12; number = number + 2) {
	 console.log(number); 
	} 
	};

	function loop2(){
		let result = 1;
		for (counter = 0; counter< 10; counter++) {
			result=result * 2;
		}
        console.log(result);


        for (let current = 20; ; current = current + 1)
         { 
        	if (current % 7 == 0)
        	 {
        	    console.log(current);
        	    break;
        	  }
         }
	}
    function all(){

    	let abc = "abc";
        console.log(abc.length); 
    }

    function caseeses(){

    	switch (prompt("What is the weather like?")) { 
    		case "rainy": 
    		console.log("Remember to bring an umbrella.");
    		  break;
    	    case "sunny": 
    		  console.log("Dress lightly."); 
    		  break;
    		case "cloudy": console.log("Go outside."); 
    		  break; 
    		default: 
    		  console.log("Unknown weather type!");
    		   break; 
    		}

    }


    function method1(){
    	for (var i = 0; i<5; i++) {
    		console.log(i);
    	 	};
    }


    function method2() {
    	document.getElementIdBy("demo").innerHTML="hello";
    }