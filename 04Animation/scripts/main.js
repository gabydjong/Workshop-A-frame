

// changing individual properties with code and using setInterval
 var rotationSpeed = 0.05;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeed;
 	myOtherBox.object3D.rotation.y += rotationSpeed;
 	myBox.object3D.scale.set(1, 2, 3);
 	console.log(myOtherBox.object3D.rotation.x);
 	//console.log(myBox.object3D.scale.set);
 }

 setInterval(spin, 16); //equivalent to 60 fps