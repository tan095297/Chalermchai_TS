//1.1 tuple

let employees : [string,string,number,number,number,string][] 
employees = [
    ["1001","Chalermchai Sarapee",0,19000,0,""],
    ["1002","Jakrit Pooprasert",2,19000,0,""],
    ["1003","Phatcharee porn",4,19000,0,""],
    ["1004","Patira Rompeach",6,19000,0,""],
    ["1005","Chatboonta Pootong",7,19000,0,""]
]

employees.forEach(a => {
    if(a[2]<1){
        a[4] = 0
    }
    else if(a[2] >= 2&&a[2]<=3){
        a[4] = a[3]*1
    }
    else if(a[2] <=5 ){
        a[4] = a[3]*2
    }
    else if(a[2] >5 ){
        a[4] = a[3]*3
    }
    
});

employees.forEach(bo => {
    if(bo[2]<=3){
        bo[5] = "Rice Cooker"
    }
    else if(bo[2]>3){
        bo[5] = "Microwave Oven"
    }
});

console.log(employees)

