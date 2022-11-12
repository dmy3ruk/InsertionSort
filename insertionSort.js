const arr=[8, 7, 0, 5, 34, 1];
let l=arr.length;
for (let i=1; i<l; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]>currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}console.log(arr)

