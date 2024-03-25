function threeSum(arr, target) {
// write your code here
  arr.sort((a,b) => a - b);

	let closestSum = Infinity;
	let minDifference = Infinity;

	for(let i=0; i < arr.length - 2; i++)
		{
			let left = i+1;
			let right = arr.length - 1;
			while(left < right)
				{
					let currentSum = arr[i] + arr[left] + arr[right];

					let difference = Math.abs(currentSum - target);

					if(difference < minDifference)
					{
						closestSum = currentSum;
						minDifference = difference;
					}

					if(currentSum < target)
					{
						left++;
					}
					else
					{
						right--;
					}
				}
		}
	return closestSum;
}

module.exports = threeSum;
