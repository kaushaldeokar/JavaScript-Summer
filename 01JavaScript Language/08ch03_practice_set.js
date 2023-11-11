// Traverse object using for loop by converts it key to array
const age={
    kaushal:"22",
    dhruv:"21",
    sarthak:"20",
    om:"21"
}
//m1
const age_array=Object.keys(age);
console.log(age_array);
//m2
//entries return type array of array//
const age_array2=Object.entries(age);
console.log(age_array2);
//


for(let i=0;i<age_array2.length;i++){
    console.log("Age of ",age_array2[i][0]," is ",age_array2[i][1])
}
console.log("");

for(let i=0;i<age_array.length;i++){
    console.log("Age of ",age_array[i]," is ",age[age_array[i]])
}

