var fruits=[ {id:1,
			  name:'Banana',
			  color:'yellow'
			},
			  {
			  	id:2,
			  	name:'Apple',
			  	color:'red'
			  }

]

function searchByName(a,b) {
  for (var i = 0; i <a.length ; i++) {
	if(a[i].name==b) {
	  	console.log(a[i]);
	  }
}
  
}
searchByName(fruits,'Apple');



















