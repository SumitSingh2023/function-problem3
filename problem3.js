/*Write a function isOdd which returns a boolean value based on the number is odd or not

Use this function to print the odd numbers from 0 to a given limit(included)*/

function isOdd(num){
    let result=false
    if(num%2==1){
        result=true
    }

    if(result==true){
        console.log(num)
    }

}

for(let i=0;i<=100;i++){
    isOdd(i)
}

