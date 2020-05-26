var students = [['Martin', 76], ['Thomas', 85], ['Klaus', 65], ['Maria', 93], ['David', 81]];



//Solution for Grade of each student (console displayed)

for (var i=0; i< students.length; i++){

  if(students[i][1] < 60){
    console.log(students[i][0] + " has Grade: F")
  }
  else if(students[i][1] < 70){
    console.log(students[i][0] + " has Grade: D")
  }
  else if(students[i][1] < 80){
    console.log(students[i][0] + " has Grade: C")
  }
  else if(students[i][1] < 90){
    console.log(students[i][0] + " has Grade: B")
  }
  else if(students[i][1] < 100){
    console.log(students[i][0] + " has Grade: A")

}

}

//Solution for Grade of each student (browser displayed - document.write)

for (var i=0; i< students.length; i++){

  if(students[i][1] < 60){
    document.write(students[i][0] + " has Grade: F")
  }
  else if(students[i][1] < 70){
    document.write(students[i][0] + " has Grade: D")
  }
  else if(students[i][1] < 80){
    document.write(students[i][0] + " has Grade: C")
  }
  else if(students[i][1] < 90){
    document.write(students[i][0] + " has Grade: B")
  }
  else if(students[i][1] < 100){
    document.write(students[i][0] + " has Grade: A")

}

}






// Beginning of solution for Average Grade for all students

var Avgmarks = 0;

for (var i=0; i < students.length; i++){
    Avgmarks += students[i][1];
    var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}



// End of sulution for Average Grade for all students 








