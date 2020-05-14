

// changing individual properties with code and using setInterval
 var rotationSpeed = 0.05;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeed;
 	myOtherBox.object3D.rotation.y += rotationSpeed;
 	console.log(myBox.object3D.scale.set);
 }

 setInterval(spin, 16); //equivalent to 60 fps