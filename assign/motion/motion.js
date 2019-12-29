var box=document.getElementById('box');

box.style.width='100px';
box.style.height='100px';
box.style.background='green';

box.style.position= 'relative'; 
contener.style.position="absolute";
contener.style.width= '700px';
 contener.style.height= '600px'; 
 contener.style.border= "1px solid black";

var boxleft=0;
var boxup=0;
function  movingobject(e)
{
	if (e.keyCode==100 || e.keyCode == 68) // to move right
	{
       boxleft +=2;
       box.style.left=boxleft+'px';
       if (boxleft>=600) 
       {
       	boxleft -=2;
       }
	}
	if (e.keyCode==97 || e.keyCode == 65) // to move left
	{ 
       boxleft -=2;
       box.style.left =boxleft+'px';
       if (boxleft<=0) 
       {
       	boxleft +=2;
       }
	}
	if (e.keyCode==119|| e.keyCode == 87) // to move up b
	{
       boxup -=2;
       box.style.top=boxup+'px';
       if (boxup<=0) 
       {
       	boxup +=2;
       }
   }
   if (e.keyCode==115 || e.keyCode == 83) // to move down c
	{ 
       boxup +=2;
       box.style.top =boxup+'px';
       if (boxup>=550) 
       {
       	boxup -=2;
       }
	}

}

document.onkeydown = movingobject;
//document.body.appendChild(box);