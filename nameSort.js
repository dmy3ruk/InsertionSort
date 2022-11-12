const arr=["Emily", "Aelin", "Feyre", "Bryce", "Lysandra"];
for (let i=0; i<arr.length; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]>currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}console.log(arr)
