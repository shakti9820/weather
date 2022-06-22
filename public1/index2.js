
setInterval(funct,1000);
  
function funct(){
   let d=new Date();
   let hr=d.getHours();
   let mn=d.getMinutes();
   let sc=d.getSeconds();
   let hro=30*hr+mn/2;
   let mro=6*mn;
   let sro=6*sc;
//    if(hro<=180){
//        $("h1").innerHTML="Good Morning Shakti";
//    }
//    else{
//     $("h1").innerHTML="Good Night Shakti";
//    }
console.log(hro);
   h.style.transform=`rotate(${hro}deg)`;
   m.style.transform=`rotate(${mro}deg)`;
   document.getElementById('s').style.transform= `rotate(${sro}deg)`;
   if(hro<=180){
      if(hr===0){
         hr=12;
      }
      if(mn<10){
         mn="0"+mn;
      }
      if(hr<10){
         hr="0"+hr;
      }
      if(sc<10){
         sc="0"+sc;
      }
    document.getElementById("h1").innerHTML="Current Time is" +" "+ hr +":"+ mn +":"+ sc;
    document.getElementById("h1").style.left="11%";
    document.getElementById("h1").style.color="blue";
}
}