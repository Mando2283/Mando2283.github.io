
let in_arr = [0, 0, 0, -1, 0, -9, 0]; 
let n = in_arr.length; 
for (let i = 0; i < n; i++) {
    if (in_arr[i] < in_arr[i + 1] && in_arr[i] < in_arr[i - 1]) { 
       console.log(in_arr.indexOf(in_arr[i]))  
       break
    }
}
