function stringChop(str, size) {
  // your code here
	if(str==null){
		return [];
	}
	let ans=[];
	let n=str.length;
	let count=0;
	let chunk="";
	for(let i=0; i<n;i++){
		chunk=chunk+str[i];
		count++;
		if(count==size){
			ans.push(chunk);
			chunk="";
			count=0
		}
	}
	if(chunk.length>0){
		ans.push(chunk);
	}
	return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
