

function start(){
 t=new logo(300,100,0,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="blue";
sq(t);t.rt(45);sq(t);
t.set1(200,200,45);
t.c.strokeStyle="red";
t.fd(200);
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
