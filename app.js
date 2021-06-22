'use strict'

let studentArray = []
  function StudentInfo(stdname , stdgrade , course){
      this.stdname=stdname
      this.stdgrade=getRandomGrade
      this.course=course
      StudentInfo.studentArray.push(this)
      

  }
let min =0;
let max =100;
  function getRandomGrade(min, max) {
    returnMath.floor(Math.random() * 100); 
    //return Math.random() * (max - min) + min;
    //100-0 =100 + 0 =100
  }
  
  
  let form = document.getElementById('form');
  //let table = document.getElementById('table');
  form.addEventListener('submit' , handleTheClick)
   function handleTheClick(event){
       event.preventDefault()
       let stdname =event.target(stdname).value
       let stdgrade =event.target(stdgrade).value

       let StudentInfo =new StudentInfo('stdname','stdgrade','course');
       getRandomGrade(100 ,0);
       gitItemFromLoc();
       showTheTable();


   }
    
  // let table = document.getElementById('table');
      function showTheTable(){
    let table = document.getElementById('table');
        let firstElement =document.createElement('tr')
        table.appendChild(firstElement);
        
    let stdname =document.createElement('td');
    firstElement.appendChild('stdname');
    stdname.textContent(this.stdname);

    let stdgrade = document.createElement('td');
    firstElement.appendChild('stdgrade');
    stdgrade.textContent( this.stdgrade);

    let course = document.createElement('td');
    firstElement.appendChild('course');
    course.textContent(this.course)


      }

      function saveToLOCalStorage(){
       localStorage.setItem( StudentInfo,JSON.stringify(studentArray));
      }


      saveToLOCalStorage();
        

     // function gitItemFromLoc()
     //  let   StudentInfo = localStorage.getItem('StudentInfo');
     //  let StudentInfo = JSON.parse(StudentInfo);







