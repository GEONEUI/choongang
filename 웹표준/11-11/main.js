
var rolling = 24;
var date = new Date();
var today = String(date.getFullYear()) + String(date.getMonth()) + String(date.getDate());
var dateArr = [];

dateArr = today.split("");

dateArr.forEach((idx, val)=>{
    
    var number = Number(idx);

    for(var i = 0; i >= rolling ; i++){
		
		var num = number + i;
		
		console.log(num)
	}
    
});

