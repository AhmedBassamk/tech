var txt = "Tech Futures is a leading international recruitment firm, formed with a promise to do things differently through a partnership of two experienced tech recruiters with over 20 years of combined industry expertise."
var count = 0;
function MyMachine(){
  if(count < txt.length){
    document.querySelector('.machine').innerHTML += txt.charAt(count)
    count++
    setTimeout(MyMachine, 100)
  }
}
MyMachine()
var tx ="Back End Developer With php Laravel";
  var i = 0 ;
function Typing(){
  if(i < tx.length){
    document.querySelector('.si').innerHTML += tx.charAt(i);
    i++
    setTimeout(Typing , 100);
  }
}
Typing();