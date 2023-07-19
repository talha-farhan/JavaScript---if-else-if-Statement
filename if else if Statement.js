let percentage = 78;

if(percentage >= 90 && percentage <= 100){
    document.write("A+");
}else if(percentage >= 80 && percentage <= 89){
    document.write("A");
}else if(percentage >= 75 && percentage <= 79){
    document.write("B+");
}else if(percentage >= 70 && percentage <= 74){
    document.write("B");
}else if(percentage >= 65 && percentage <= 69){
    document.write("C+");
}else if(percentage >= 60 && percentage <= 64){
    document.write("C");
}else if(percentage >= 50 && percentage <= 59){
    document.write("D+");
}else if(percentage >= 40 && percentage <= 49){
    document.write("D");
}else if(percentage < 40){
    document.write("Fail");
}else{
    document.write("Please enter percentage in valid format!");
}
