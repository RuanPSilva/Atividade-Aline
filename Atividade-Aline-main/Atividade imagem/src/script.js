function substituir(){
	let pegarimg= document.getElementById("imagem");
	let aleatorio =Math.trunc(Math.random()*10);
	pegarimg.src="src/img/" + aleatorio + ".jpg";
}