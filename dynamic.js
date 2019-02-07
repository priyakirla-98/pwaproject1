function getfile (file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function(){
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);
		}

	}
	htp.send(null);
}
getfile("dynamic.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	edu(data.education);
	language(data.languages);
	
})
var left=document.querySelector(".left");
function profile(p){
	var pimg=document.createElement("img");
	pimg.src=p.img;
	left.appendChild(pimg);
    var ph3=document.createElement("h3");
    ph3.textContent=p.name;
    left.appendChild(ph3);
    var proll=document.createElement("p");
    proll.textContent=p.roll;
    left.appendChild(proll);
    var i=document.createElement("p");
    i.textContent=p.institute;
    left.appendChild(i);
    var pl=document.createElement("p");
    pl.textContent=p.place;
    left.appendChild(pl);
    
}
 var right=document.querySelector(".right");
 function career(car){
 	var  c=document.createElement("h1");
 	c.innerHTML="Resume";
 	right.appendChild(c);
 	
 var chr=document.createElement("hr");
 right.appendChild(chr);
    var  co=document.createElement("h1");
 	co.innerHTML="career objective";
 	right.appendChild(co);
 	 var cc=document.createElement("h2");
 	 cc.textContent=car.info;
 	 right.appendChild(cc);

 var chr=document.createElement("hr");
 right.appendChild(chr);


 }

 function edu(e){
 	var ed=document.createElement("h2");
 	ed.innerHTML="Eductional Details";
 	right.appendChild(ed);
 	var ehr=document.createElement("hr");
 	right.appendChild(ehr);
 	var etable=document.createElement("table");
 	etable.border="1";
 	var tr1="<tr><td>s.no</td><td>degree</td><td>institute</td><td>yop</td>";
 	var tr2="";
 	for(i=0;i<e.length;i++){
 		tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yop+"</td><tr>";

 	}
 	etable.innerHTML=tr1+tr2;
 	right.appendChild(etable);


 }
  function language(lan){
  	var l=document.createElement("h2");
  	l.innerHTML="Languages known";
  	right.appendChild(l);
  	var lhr=document.createElement("hr");
 	right.appendChild(lhr);
    var ol=document.createElement("ol");
    lr="";
    for(i=0;i<lan.length;i++){
       lr=lr+"<li>"+lan[i].lang+"</li>";
    }
    ol.innerHTML=lr;
    right.appendChild(ol);
    }

  