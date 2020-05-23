const BigNumber = require('./bignumber.js');
const { performance } = require('perf_hooks');

var items = [];
var number, exponent;
// Prepare the random numbers
var t0 = performance.now()
for (let i = 0; i < 10000; i++) {

    number = new BigNumber(rand(100, 10000));
    exponent = new BigNumber(rand(100, 10000));

    items.push(number.pow(exponent));    
    if(i == 9999){
        // first call to merge sort
        var sortedArray = mergeSort(items);
        console.log(sortedArray.length);
        
        // if you need the actual array, comment the next line:
        // console.log(sortedArray)
        // If you need the exact values, uncomment these next two lines:

        // var res = sortedArray.map(x => x.toString())
        // console.log(res);
    }
}
var t1 = performance.now();
console.log("Call to sort array took " + (t1 - t0) / 1000 + " seconds.")


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mergeSort(data)
{
    if(data.length == 1 ) return data;
  
    var mid = data.length / 2;
    var left = data.slice(0, mid);
    var right = data.slice(mid);
  
    left = mergeSort(left);
    right = mergeSort(right);
      
    return merge(left, right);
}
  
function merge(left, right)
{
    var result=[];
    var leftIndex=0;
    var rightIndex=0;
  
    while(leftIndex<left.length && rightIndex<right.length)
    {
        if(left[leftIndex]>right[rightIndex])
        {
  
            result.push(right[rightIndex]);
            rightIndex++;
        }
        else
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }
    }
    while(leftIndex<left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while(rightIndex<right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}