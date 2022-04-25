var namesOfPeople=[];
function submit() {
    var GuestName = document.getElementById("name").value;
   namesOfPeople.push(GuestName);
   console.log (GuestName);
   console.log (namesOfPeople);
   var lengthname=namesOfPeople.length;
   console.log (lengthname);
   document.getElementById ("displayName").innerHTML.toString();
}
function sorting(){
    namesOfPeople.sort();
    var i=namesOfPeople.join("<br>");
    console.log (namesOfPeople);
    document.getElementById ("sorted").innerHTML=i.toString();
}
function show () {
    var i=namesOfPeople.join("<br>");
    console.log (namesOfPeople);
    document.getElementById ("p1").innerHTML=i.toString();
    document.getElementById ("sortbutton").style.display="block";
}

function searching()
{
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for (j=0; j<namesOfPeople.length;j++)
    {
        if (s==namesOfPeople[j]){
            found=found+1;
        }
    }
    document.getElementById("p2").innerHTML="Nome Encontrado"+found+" vez(es)";
    console.log("Nome Encontrado "+found+" vez(es)");
}