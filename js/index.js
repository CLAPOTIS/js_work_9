var arr=['100px','abc'-6,[],-98765,34,-2,0,'300', ,function(){alert(1);},null,
		document,[],true,'200px'-30,'23.45元',5,Number('abc'),function(){alert(3);}];

//找出arr里所有的数字
var str1="arr数组中的数字是："+"\n";
for(var i=0;i<arr.length;i++){
	if(typeof arr[i]==='number'){
		if(!isNaN(arr[i])){
			str1+="第"+(i+1)+"个："+arr[i]+",\n";
		}		
	}
}
alert(str1);

//找到可以转成数字的
var str2="arr数组中可转成数字的是："+"\n";
for(var i=0;i<arr.length;i++){
	var a=parseInt(arr[i]);
	if(typeof a==='number'&&!isNaN(a)){
		str2+="第"+(i+1)+"个："+arr[i]+",\n";
	}
}
alert(str2);

//把转成数字以后，最大值判断出来
var num=Array();
for(var i=0;i<arr.length;i++){
	var a=parseInt(arr[i]);
	if(typeof a==='number'&&!isNaN(a)){
		num[i]=a;
	}
}
num.sort(compare);
alert("arr数组中转成数字后的最大值是：\n"+num[0]);
function compare(value1,value2){
	if(value1<value2){
		return 1;
	}else if(value1>value2){
		return -1;
	}else{
		return 0;
	}
}

//把NaN所在的位置找出来
var str3="arr数组中NaN的位置是："+"\n";
for(var i=0;i<arr.length;i++){
	if(isNaN(arr[i])){
		str3+="第"+(i+1)+"个：下标为"+i+",\n";
	}
}
alert(str3);
