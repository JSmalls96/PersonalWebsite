var total, diceArr,type, numDice;


document.querySelector('.rollDiceBtn').addEventListener('click',roll);

function roll(){
	init();
	switch(type){
		case '4':
			d4(numDice);
			break;
		case '6':
			console.log(numDice);
			d6(numDice);
			break;
		case '8':
			d8(numDice);
			break;
		case '10':
			d10(numDice);
			break;
		case '12':
			d12(numDice);
			break;
		case '20':
			d20(numDice);
			break;
		default:
			break;
	}
}

function init(){
	total=0;
	// document.querySelector('.dice').style.display='none';
	type=document.getElementById("typeSelected").options[document.getElementById("typeSelected").selectedIndex].value;
	numDice=document.getElementById("numSelected").options[document.getElementById("numSelected").selectedIndex].value;
	if(type===" "|| numDice===""){
		alert("Please make sure selections are made for both options and roll again");
	}
	trimExtra(numDice);
}


function d20(num){
	num=parseFloat(num);
	for (var i = 1;i<(num+1);i++) {
		if(num<=10){
			var rand=Math.floor(Math.random()*20)+1;
			total+=rand;
			var diceDOM=document.querySelector("#dice-"+i);
			diceDOM.style.display='block';
			diceDOM.src='images/'+'dice-20-'+rand+'.png';
			diceDOM.style.boxShadow='none';
			document.querySelector('.totalRoll').innerHTML=total;
		}
	}
}
function d12(num){
	num=parseFloat(num);
	for (var i = 1;i<(num+1);i++) {
		if(num<=10){
			var rand=Math.floor(Math.random()*12)+1;
			total+=rand;
			var diceDOM=document.querySelector("#dice-"+i);
			diceDOM.style.display='block';
			diceDOM.src='images/'+'dice-12-'+rand+'.png';
			diceDOM.style.boxShadow='none';
			document.querySelector('.totalRoll').innerHTML=total;
		}
	}
}
function d10(num){
	num=parseFloat(num);
	for (var i = 1;i<(num+1);i++) {
		var rand=Math.floor(Math.random()*10)+1;
		total+=rand;
		var diceDOM=document.querySelector("#dice-"+i);		
		diceDOM.style.display='block';
		diceDOM.src='images/'+'dice-10-'+rand+'.png';
		diceDOM.style.boxShadow='none';
		document.querySelector('.totalRoll').innerHTML=total;
		
	}
}
function d8(num){
	num=parseFloat(num);
	for (var i = 1;i<(num+1);i++) {
		if(num<=10){
			var rand=Math.floor(Math.random()*8)+1;
			total+=rand;
			var diceDOM=document.querySelector("#dice-"+i);
			diceDOM.style.display='block';
			diceDOM.src='images/'+'dice-8-'+rand+'.png';
			diceDOM.style.boxShadow='none';
			document.querySelector('.totalRoll').innerHTML=total;
		}
	}
}
function d6(num){
	num=parseFloat(num);
	for (var i = 1;i<(num+1);i++) {
		var rand=Math.floor(Math.random()*6)+1;
		total+=rand;
		var diceDOM=document.querySelector("#dice-"+i);
		diceDOM.style.display='block';
		diceDOM.src='images/'+'dice-6-'+rand+'.png';
		document.querySelector('.totalRoll').innerHTML=total;
	}
}

function d4(num){
	num=parseFloat(num);
	for (var i = 1;i<(num+1);i++) {
		if(num<=10){
			var rand=Math.floor(Math.random()*4)+1;
			total+=rand;
			var diceDOM=document.querySelector("#dice-"+i);
			diceDOM.style.display='block';
			diceDOM.src='images/'+'dice-4-'+rand+'.png';
			diceDOM.style.boxShadow='none';
			document.querySelector('.totalRoll').innerHTML=total;
		}
	}
}

function trimExtra(num){
	for (var i = num; i <= 10; i++) {
		var diceDOM=document.querySelector("#dice-"+i);
		diceDOM.style.display='none';	
	}

}