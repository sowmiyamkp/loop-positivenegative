let number=[99,-20,-13,-15];
function positiveNum(number)
{
	let result=[];
	for(i=0;i<number.length;i++)
	{
		if(number[i]<0)
		{
			result.push(Math.abs(number[i]));
		}
	}
	return result;
}

console.log(positiveNum(number));