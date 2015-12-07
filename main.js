



	var numberOfFaces = 5;
	
	function generateFaces(){

		

		var theLeftSide = document.getElementById("leftSide");
		
		for(i=0; i < numberOfFaces; i++){
			var createpic = document.createElement("img");
			createpic.src="larry.png";
			var random = Math.floor((Math.random() * 400) + 1);
			var randomAgain = Math.floor((Math.random() * 400) + 1);
			createpic.style.top = random + "px";
			createpic.style.left = randomAgain + "px";
			theLeftSide.appendChild(createpic);
		};

		var theRightSide = document.getElementById("rightSide");
		var leftSideImages = theLeftSide.cloneNode(true);
		leftSideImages.removeChild(leftSideImages.lastChild);
		theRightSide.appendChild(leftSideImages);

		var theBody =document.getElementsByTagName("body")[0];

		theLeftSide.lastChild.onclick=function nextLevel(event){
        event.stopPropagation();
        while(theLeftSide.firstChild){
        theLeftSide.removeChild(theLeftSide.firstChild);
   		 };
    	while(theRightSide.firstChild){
        theRightSide.removeChild(theRightSide.firstChild);
    	};
    	numberOfFaces += 5;
        generateFaces();
        
        
		};

		theBody.onclick = function gameOver() {
			alert("Game Over!");
			theBody.onclick = null;
			theLeftSide.lastChild.onclick = null;
			location.reload();
		}; 


    }