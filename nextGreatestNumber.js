
let arr = new Array (16, 17, 4, 3, 5, 2); 
let size = arr.length; 
		
	max_from_right = arr[size-1]; 
	arr[size-1] = -1; 
	for(let i = size-2; i >= 0; i--) 
	{ 
		temp = arr[i]; 
		arr[i] = max_from_right; 
		if(max_from_right < temp) 
		max_from_right = temp; 
	} 
	var i; 
	for ( let i = 0; i < size; i++) {
     console.log(arr[i] + ' ');
	}




	
	

