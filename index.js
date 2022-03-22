let x = 1
let y = 0
let wat = true
function GetAprimeNumber(){
	y++
	if(wat){
		x = (x*2)+1
	}
	else{
		x = (x*2)-1
	}
	if(y==2){
		y=0
		wat=false
	}
	else if(y==0){
		wat=true
	}
	if(x%5==0){
		let deez = x-2
		console.log(deez)
	}
	else{
		console.log(x)
	}
}
for(let idk=0;idk<69;idk++){
	GetAprimeNumber()
}