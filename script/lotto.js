
//moduł lotto
var lottoModule = (function () {
    var flagStop = false;
    
    //Twoje numery
    var yourNum = function (){
		alert("Wpisz kolejno 6 liczb od 1 do 49.")
        var yourNumbers = [];
        	while (yourNumbers.length<6){
//			for (i=0;i<6;i++){
    	    var i = yourNumbers.length;
    	    var flag = true;
			var nameOfNum = ["pierwszą", "drugą", "trzecią", "czwartą", "piątą", "szóstą"];
    	    
    	    yourNumber = (prompt("Podaj " + nameOfNum[i] + " liczbę od 1 do 49"));
    	    
    	    if (yourNumber === null){
    	        flag = false;
    	        flagStop=true;
    	        yourNumbers=[0,0,0,0,0,0];

    	    }
            if (flag && !(yourNumber >=1 && yourNumber <=49)){
                alert("Twoja liczba jest nieprawidłowa");
    	        flag = false;
            }
    	    
    	    for (k=0; k < yourNumbers.length; k++){
    	            if (yourNumber === yourNumbers[k]){
    	                alert("Podałeś już tą liczbę. Podaj inną od 1 do 49");
    	                flag = false;
    	            }
    	    }
    		
    		if (flag && yourNumber != Math.floor(yourNumber) ){
    			alert("Twoja liczba jest nieprawidłowa");
    			flag = false;
    		}
    
    	    if (yourNumber >=1 && yourNumber <=49 && flag) {
    	        yourNumbers.push(yourNumber);
    	    }
    	    flag = true;
    	}
    	
    	for (j = 0; j < yourNumbers.length; j++){
    		console.log("Wybrana liczba " + (j+1) + ": " + yourNumbers[j]);
    	}
    	return yourNumbers;
    };
    
    //Losowanie numerów
    var draw = function (){
    var drawNumbers = [];
        var drawFlag = true;
        for (i=0;drawNumbers.length<6;i++){
            drawNumber = Math.round(Math.random()*49);
            
            for (m=0; m < drawNumbers.length; m++) {
                if (drawNumber === drawNumbers[m]){
                    drawFlag = false;
                } 
                
            }
            
            if (drawNumber >= 1 && drawNumber <= 49 && drawFlag){
                    drawNumbers.push(drawNumber);
                    
            } else {
                console.log("Liczba nie przeszła walidacji: " + drawNumber);
            }
            drawFlag=true;
        }
        
        for (j=0; j < drawNumbers.length; j++){
            console.log("Wylosowana liczba " + (j+1) + " to: " + drawNumbers[j]);
        }
        return drawNumbers;
    };
    
    //Porównanie numerów
    var checkNumbers = function (a,b){
        var numHits = 0;
        var numbers = [];
        
        for (i=0; i< a.length; i++){
            for (j=0; j<a.length; j++){
                if (a[i] == b[j]){
                    numHits++;
                    numbers.push(a[i]);
                }
            }
        }
        console.log("Liczba trafień: " + numHits);
        
        for (k=0; k<numbers.length;k++){
            console.log ("Trafione liczby to: " + numbers[k]);
        }
        if (!flagStop){
            alert(
            "Twoje liczby to: " + b+
            "\n" + "Wylosowane liczby to: " + a +
            "\n" + "Liczba trafień: " + numHits + 
            "\n" + "Trafione liczby to: " + numbers
        );
        }
    };
    
    // start game
    var startGame = function  (){
    	checkNumbers(draw(),yourNum());
    };
    
    // przycisk
    var start = document.querySelector("#startButton");
    start.addEventListener('click',startGame);

})();