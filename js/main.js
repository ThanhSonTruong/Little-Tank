//New
var wid = screen.width;
var hei = screen.height;
var player;
//Page 2 onclick

/* //declare canvas
var canvas = document.getElementById("canvas"); */

//declare:

      var top, left, x, y, x2, y2, w2, q2, o, o2, cx, cy,
          sz2, h, h2, xa, ya, j, g, g2, r, v, v2,
          j2, scroll, t, t2, s, s2, fiction, m,
          scrolls, m2, b, b2, f, f2, Sun, dx, dy,
          angle, speed, vb, vb2, k, u, pv,
      yab, h2b, sb, s2b, frictionb, q2b, w2b, cxb, cyb,
      pv, pvb, ph, pq2, pw2, request, num, pcx, pcy, np,
      pxa, up, pup , upy, spup, grav, grav2, jump, pupy, pv2, pvb2;
      
      
      //s2 = speed 2??
      //x, y are positions
      //top and left have no uses in program
      //x2, and y2 are positions of player 2
      //w2 and q2 are canon tip locations
      //o and o2 are angles
      //cx, cy are also canon tip location
      //sz and sz2 are the size of the tank.
      //xa and ya are the location of the tank.
      //j is the count of the ammo
      //g is the acceleration due to gravity.
      //r is how high you're jumping.

	          
h = 0;
h2=0;
xa=50/320*hei;
j = 0;
g = 230 / 320 * hei;
g2 = 90 / 320 * hei;
scroll = 0;
t = 0;
b = 0;
s = 0;
s2 = 0;
scrolls = 0;
m = 0;
m2 = 1;
friction = 0.05 / 320 * hei;
f = 0;
f2 = 0;
dy = 0;
dx = 0;
angle = 0;
v = 0;
v2 = 0;
vb = 0;
vb2 = 0;
//u = 0;
pv = 0;


//player2
sz = 35 / 320 * hei;

yab = g - sz - 2 / 320 * hei;
h2b = 0;
sb = 0;
s2b = 0;
frictionb = 0.01 / 320 * hei;
q2b = 0;
w2b = 0;
pcx = 0;
pcy = 0;

pv = 0;
pvb = 0;
ph = 0;
pq2 = 0;
pw2 = 0;
num = 0;

np = 0;
pxa = 0;

up = 0;
pup = 0;
upy = 0;
spup = 0;
r = 0;
jump = 0;

pupy = 0;

pho = 0;

pv2 = 0;
pvb2 = 0;

fx = 0;
fy = 0;
pfx = 0;
pfy = 0;

h2s = 0;

supy = 0;
spupy = 0;


//More declare
var mouse = {x: 0, y: 0};
var ammo = new Array();
var ammox = new Array();
var ammoy = new Array();
var tree = new Array();
var tree2 = new Array();
var treeSize = new Array();
var treeLocation = new Array();
var treeSize2 = new Array();
var treeLocation2 = new Array();

var cloud = new Array();
var cloudSize = new Array();
var cloudY = new Array();
var cloudLocation = new Array();
var cloud2 = new Array();
var cloudSize2 = new Array();
var cloudY2 = new Array();
var cloudLocation2 = new Array();

var tree3 = new Array();
var treeSize3 = new Array();
var treeLocation3 = new Array();

var angle = new Array();
var speed = new Array();

var gravity = new Array();
var fall = new Array();

var dx = new Array();
var dy = new Array();

var p = new Array();
var l = new Array();

var ammoSize = new Array();
var ammoSize2 = new Array();

var p2 = new Array();
var l2 = new Array();
var pammoSize = new Array();
var pammoSize2 = new Array();
var angle2 = new Array();
var gravity2 = new Array();
var speed2 = new Array();
var ammox2 = new Array();
var ammoy2 = new Array();
var ammo2 = new Array();

//Load Images
ammo[j] = document.createElement("img");
ammo[j].src = "images/ammo.png";
tree1 = document.createElement("img");
tree1.src = "images/LT-Tree1.png";
Sun = document.createElement("img");
Sun.src = "images/Sun and Sky.png";
Star = document.createElement("img");
Star.src = "images/Star.png";

function startGame(){
    
    sz=35/320*hei;
    
    ya=(320-80)/320*hei-sz-2/320*hei;
    
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    c.width = wid;
    c.height = hei;
   
    cx = xa+sz/2+sz;//q2
    cy = ya+sz/2+0; //w2
    ctx.lineWidth = 9/320*hei;
    ctx.moveTo(xa+sz/2,ya+sz/2);
    ctx.lineTo(cx,cy);
    ctx.stroke();
    
        
    //reset lineWidth
    ctx.lineWidth = 2/320*hei;
    
    //player
    ctx.strokeRect(xa,ya,sz,sz);
    ctx.stroke();
    
    
    //draw grass
    ctx.moveTo(0,(320-80)/320*hei);
    ctx.lineTo(wid,(320-80)/320*hei);
    ctx.stroke();
    ctx.fillStyle = "limegreen";
    ctx.fillRect(0,(320-80)/320*hei,wid,80);
    
    //player
    ctx.fillStyle = "red";
    ctx.fillRect(xa,ya,sz,sz);
       
    ctx.font = "30px Arial";
    Initiate2();
}

function Initiate2(){
 //var ammo = document.createElement("IMG");
    
 listen();
 var timer = setInterval(function () { timedEvents(); }, 20);
    //var timer2 = setTimeout(function () { m = 1; }, 500);
 for (i = 0; i < 20; i++) {
     createLandscape();
 }
 for (i = 0; i < 10; i++) {
     createClouds();
 }
 for (i = 0; i < 20; i++) {
     createLandscape2();
 }

     xa = 60 / 320 * hei;

 var timer2 = setInterval(function () {
     xasend = xa + scroll;
    //socket.emit('send position', player + xasend);
    np = 1;
}, 2000);

 var timer3 = setInterval(function () {
     calVector();
 }, 20);
}

function listen() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  //el.addEventListener("touchcancel", handleCancel, false);
  //el.addEventListener("touchleave", handleEnd, false);
  el.addEventListener("touchmove", handleMove, false);
  el.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY;
      calVector();
  }, false);
  window.onkeydown = keydown;
  window.onkeyup = keyup;
    //document.addEventListener('click', mouseClicked, false);
/*   window.onmousedown = mouseDown;
  window.onmouseup = mouseUp; */
  
	window.ontouchstart = mouseDown;
    window.ontouchend = mouseUp;
    window.ontouchmove = handleMove;

    window.onmousedown = mouseDown;
    window.onmouseup = mouseUp;
    window.onmousemove = handleMove;
}

function handleStart(){
    //var timer2 = setInterval(function () { v++; }, 200);
calVector();

}

function handleEnd(){
    //window.clearInterval(timer2);
    fire();
    v = 0;
}

function handleMove(e){
//mouse.x = e.touches[0].pageX;
//mouse.y = e.touches[0].pageY;
    calVector();
}

function timedEvents(e){
    
    //mouse.x = e.clientX || e.pageX; 
    //mouse.y = e.clientY || e.pageY;
    
    draw();
}

function calVector(){

    deltax=mouse.x-xa-sz/2;
    deltay=mouse.y-ya-sz/2;
    o = Math.atan2(deltay,deltax);
    q2 = (Math.cos(o)) * (sz);
    w2 = (Math.sin(o)) * (sz);
	
}

function draw(){
//declare
    
    sz=35/320*hei;
    //player1, you


    scrolling();
    scroll = scroll + scrolls;



    jump1();

    
    /* if (np === 1) {
        xab = pxa + scroll;
        np = 0;
    } else {
        xab = xab + sb + scrolls + pfx;
    } */

	//player2//////////////////////
    s2b = sb;






    //getting ready
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    c.width = wid;
    c.height = hei;
    
    
    //sky
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0,0,wid,hei);
    
    
    //tree1
    //ctx.drawImage(tree1, scroll+100, g - 160 / 320 * hei, 80 / 320 * hei, 160 / 320 * hei);

    //Sun
    //ctx.drawImage(Sun, wid - 886 / 1366 * wid/2, 0, 886 / 1366 * wid/2, 308/1366*wid/2);

    //landscape * (2*wid / (2000 / 480 * wid + 2*wid))
    //Creating 3 copies of one layer
    //b2 = 1;
    for (i = 0; i < cloud.length; i++) {
        ctx.drawImage(cloud[i], scroll + cloudLocation[i], cloudY[i], cloudSize[i] * 4, cloudSize[i]);
        ctx.drawImage(cloud[i], 4*wid + scroll + cloudLocation[i], cloudY[i], cloudSize[i] * 4, cloudSize[i]);
        ctx.drawImage(cloud[i], 8*wid +scroll + cloudLocation[i], cloudY[i], cloudSize[i] * 4, cloudSize[i]);
        
        ctx.drawImage(cloud2[i], scroll+ cloudLocation2[i], cloudY2[i], cloudSize2[i] * 4, cloudSize2[i]);
        ctx.drawImage(cloud2[i], 4*wid + scroll+ cloudLocation2[i], cloudY2[i], cloudSize2[i] * 4, cloudSize2[i]);
        ctx.drawImage(cloud2[i], 8*wid +  scroll+ cloudLocation2[i], cloudY2[i], cloudSize2[i] * 4, cloudSize2[i]);
        //console.log(cloud[i]+", "+ scroll/wid +", "+ cloudLocation[i]/wid+", "+  cloudY[i]+", "+  cloudSize[i] * 4+", "+  cloudSize[i])
    }

    //t2 = 1;
    for (i = 0; i < tree.length; i++) {
        ctx.drawImage(tree[i], scroll + treeLocation[i], g - treeSize[i]*2, treeSize[i], treeSize[i]*2);
        ctx.drawImage(tree[i], 4*wid + scroll + treeLocation[i], g - treeSize[i]*2, treeSize[i], treeSize[i]*2);
        ctx.drawImage(tree[i], 8*wid +  scroll + treeLocation[i], g - treeSize[i]*2, treeSize[i], treeSize[i]*2);
        
        ctx.drawImage(tree2[i], scroll + treeLocation2[i], g - treeSize2[i]*2, treeSize2[i], treeSize2[i]*2);
        ctx.drawImage(tree2[i], 4*wid +scroll + treeLocation2[i], g - treeSize2[i]*2, treeSize2[i], treeSize2[i]*2);
        ctx.drawImage(tree2[i], 8*wid +scroll + treeLocation2[i], g - treeSize2[i]*2, treeSize2[i], treeSize2[i]*2);

        //t2++;
    }

    //f2 = 1;
    for (i = 0; i < tree3.length; i++) {
        ctx.drawImage(tree3[i], scroll + treeLocation3[i], g - treeSize3[i] * 2, treeSize3[i], treeSize3[i] * 2);
        ctx.drawImage(tree3[i], 4*wid + scroll + treeLocation3[i], g - treeSize3[i] * 2, treeSize3[i], treeSize3[i] * 2);
        ctx.drawImage(tree3[i], 8* wid + scroll + treeLocation3[i], g - treeSize3[i] * 2, treeSize3[i], treeSize3[i] * 2);
        ctx.drawImage(tree3[i], scroll + treeLocation3[i], g - treeSize3[i] * 2, treeSize3[i], treeSize3[i] * 2);

        //f2++;
    }

   


    //ammo movement

    j2 = 1;
    for (i = 0; i < j; i++) {
        ctx.save();
        
        ctx.translate(ammox[j2], ammoy[j2]);
        dx = p[j2] * speed[j2];
        dy = l[j2] * speed[j2] + fall[j2];
        angle = Math.atan(dy / dx) + 90 / 180 * Math.PI;
        
        if (dx <= 0) {
            angle += 180 / 180 * Math.PI;
        }

        ctx.rotate(angle);
        ctx.drawImage(ammo[j2], -ammoSize[j2] / 2, -ammoSize2[j2] / 3, ammoSize[j2], ammoSize2[j2]);
        ammox[j2] = ammox[j2] + p[j2] * speed[j2]+scrolls;
        ammoy[j2] = ammoy[j2] + l[j2] * speed[j2] + fall[j2];
        gravity[j2] = gravity[j2] + 0.005;
        fall[j2] += gravity[j2];
        j2++;

        ctx.restore();
    }

    




    //canon and player
	ctx.beginPath();
    cx = xa+sz/2+q2;
    cy = ya+sz/2+w2;
    ctx.lineWidth = 9/320*hei;
    ctx.moveTo(xa+sz/2,ya+sz/2);
    ctx.lineTo(cx,cy);
    ctx.stroke();
	//reset lineWidth
	ctx.beginPath();
    ctx.lineWidth = 3/320*hei;
	ctx.strokeRect(xa,ya,sz,sz);
    ctx.stroke();
	
	//player
    ctx.fillStyle = "red";
	ctx.fillRect(xa,ya,sz,sz);
	//ctx.drawImage(Star,xa+sz/4,ya+sz/4,sz/2,sz/2);
    
   
    
    //draw grass
    
    ctx.moveTo(0,g);
    ctx.lineTo(wid,g);
    ctx.stroke();
    ctx.fillStyle = "limegreen";
    ctx.fillRect(0, g, wid, g2);
    



    ctx.font = "30px Arial";
    //ctx.fillText(o*180/Math.PI,10,50);
    /* ctx.fillText(upy + ',' + supy + ',' + s + ',' + l2[pho] + ',' + angle2, 10, 500); */

    if (v == 1) {
        v2+=2;
        if (v2 > 20) {
            v2 = 20;
        }
    }
    
    if (vb == 1) {
        vb2+=0.5;
        if (vb2 > 20) {
            vb2 = 20;
        }
    }
   
    if (jump === 1) {
        //r -= 0.2 / 320 * hei;
        r = -4/320*hei;
        /* if (r < -5 / 320 * hei) {
            r = -5 / 320 * hei;
        } */
    }



    //moving left/right//////////////
    
    h2 = h2s;
    s = h2;
    frictionFunction1();
    xa = xa + s2;
    ////////////////////////////////

	//speed
    h2s = h2s + h;
    



}

    //declare
    
    sz=35/320*hei;
    //player1, you


    scrolling();
    scroll += scrolls;



    jump1();
	
function createLandscape() {
    
    tree[t] = document.createElement("img");
    tree[t].src = "images/LT-Tree1.png";
    treeSize[t] = Math.random() * 40 / 320 * hei + 60 / 320 * hei;
    treeLocation[t] = Math.random() * 4 * wid;
    // (2000 / 480 * wid) - 1000/480*wid+wid/2;

    tree2[t] = document.createElement("img");
    tree2[t].src = "images/LT-Tree1.png";
    treeSize2[t] = Math.random() * 20 / 320 * hei + 40 / 320 * hei;
    treeLocation2[t] = Math.random() * 4 * wid;
    //(2000 / 480 * wid) - 1000 / 480 * wid+wid/2;

    /* tree3[t] = document.createElement("img");
    tree3[t].src = "images/LT-Tree1.png";
    treeSize3[t] = Math.random() * 20 / 320 * hei + 40 / 320 * hei;
    treeLocation3[t] = Math.random() * (2000 / 480 * wid) - 1000 / 480 * wid+wid/2; */
    t++;
}

function createLandscape2() {
   
    tree3[f] = document.createElement("img");
    tree3[f].src = "images/LT-Tree1.png";
    treeSize3[f] = Math.random() * 60 / 320 * hei + 20 / 320 * hei;
    treeLocation3[f] = Math.random() * 4 * wid;
    f++;
}

function createClouds() {
    
    cloud[b] = document.createElement("img");
    cloud[b].src = "images/Sky2.png";
    cloudSize[b] = Math.random() * 50 / 320 * hei + 0.01 * hei;//the last term limits the smallest size of the clouds for good asthetics
    cloudY[b] = Math.random() * 80 / 320 * hei - 0.1 * hei;
    //cloudLocation[b] = Math.random() * 2000 / 480 * wid - 1000 / 480 * wid;
    cloudLocation[b] = Math.random() * 4*wid;

    cloud2[b] = document.createElement("img");
    cloud2[b].src = "images/Sky3.png";
    cloudSize2[b] = Math.random() * 40 / 320 * hei + 0.01 * hei;
    cloudY2[b] = Math.random() * 80 / 320 * hei - 0.1 * hei;
    //cloudLocation2[b] = Math.random() * 2000 / 480 * wid - 500 / 480 * wid;
    cloudLocation2[b] = Math.random() * 4*wid;
    b++;
}

function keyup(e){
    //e = e || window.event;
    

    if (e.keyCode == '65') {
        h = 0;
        /* socket.emit('send messageh', player + h); */
    }

    if (e.keyCode == '68') {
        h = 0;
        /* socket.emit('send messageh', player + h); */
    }

    if (e.keyCode=='32')
    {
        k = 32;
        //window.clearInterval(timer2);
        fire();
        ammo[j] = document.createElement("img");
        ammo[j].src = "images/ammo.png";
        ammoSize[j] = 16 / 320 * hei;
        ammoSize2[j] = 28 / 320 * hei;
        /* socket.emit('send messagev', player + v2); */
        

        v = 0;

       v2 = 0;
               
    }
    if (e.keyCode == '69') {
        //window.clearInterval(timer2);
        k = 69;
        fire();
        ammo[j] = document.createElement("img");
        ammo[j].src = "images/missile.png";
        ammoSize[j] = 16 / 320 * hei;
        ammoSize2[j] = 64 / 320 * hei;
        /* socket.emit('send messagevb', player + vb2); */
       

        vb = 0;
       vb2 = 0;
        
        
    }
    if (e.keyCode == '87') {
		if (ya === g - sz - 2 / 320 * hei) {
            up = r;
			supy = supy + up;
			jump = 0;
			r = 0;
		}
        /* socket.emit('send message up', player + up); */
                
    }  
}


function keydown(e){
    //e = e || window.event;
    //horizontal acceleration
    if (e.keyCode=='65')//A key
    {
            h = -0.7 / 480 * wid;
            /* socket.emit('send messageh', player + h); */
    }
    
    if (e.keyCode=='68')
    {
            h = 0.7 / 480 * wid;
        /* socket.emit('send messageh', player + h); */

    }

    if (e.keyCode=='32')
    {
        v = 1;
        //socket.emit('send messagev', player + v);
    }

    if (e.keyCode == '87') {
			jump = 1;
    }
}

function fire(){
    
    j++;
    
    //calibrate position
    //angle[j] = o + 90 / 180 * Math.PI;
    p[j] = Math.cos(o)*1;
    l[j] = Math.sin(o) *1;

    //multiple fire (to 1000)
    if (j == 100) 
    {
        j = 1;
    }
    
    
    ammox[j] = xa + p[j] + sz / 2 + q2;
    ammoy[j] = ya + l[j] + sz / 2 + w2;

    if (k=='32'){
        speed[j] = v2/1366*wid;
        k = 0;
}

if (k == '69'){
    speed[j] = 30/1366*wid;
    k = 0;
}
    
    gravity[j] = 0;
	fall[j] = 0;
    fx -= p[j] * speed[j]/5;
    fy -= l[j] * speed[j] / 5;
    h2s = h2s + fx;
    up += fy;
    fy = 0;
    fx = 0;
}

function frictionFunction1() {
    //friction
    if (h2s === 0) { }
    else
    {
        if (h2s > 0) {
            h2s = h2s - friction;
            if (h2s <= 0) {
                h2s = 0;
            }
        }
        if (h2s < 0) {
            h2s=h2s + friction;
            if (h2s >= 0) {
                h2s = 0;
            }
        }
    }
    //speed limit
    if (h2s >= 20) {
        h2s = 20;
    }
    if (h2s <= -20) {
        h2s = -20;
    }
    //////////////////////////////////////////////////////
}

function scrolling() {
    //scroll
    if (xa < 50 / 480 * wid) {

        if (s >= 0) {
            s2 = s;
            scrolls = 0;
        } else {

            scrolls = -s;
            s2 = 0;
        }
    }

    if (xa > wid - 50 / 480 * wid - sz) {
        if (s <= 0) {
            s2 = s;
            scrolls = 0;
        } else {
            s2 = 0;
            scrolls = -s;
        }
    }

    if (xa > 50 / 480 * wid && xa < wid - 50 / 480 * wid - sz) {
        s2 = s;
    }

    if (scroll <  -11*wid) {              //this is the size of the scroll, 3 wid(s)...
        scroll = -3*wid;                 //the scroll switches on the second first and second last unit of 3 wid(s)...
    }
    if (scroll > 0*wid) {
        scroll = -8*wid;
    }

    //////////////////////////////////////////////////////
}
function jump1() {
    //jump1/////////////////////////
    if (ya > g - sz - 2 / 320 * hei) {
        ya = g - sz - 2 / 320 * hei;
        up = 0;
    }
    if (ya <= g - sz - 2 / 320 * hei) {
        //upy -=  grav;
        ya = ya - upy + supy;
    }

    //in the air
    if (ya < g - sz - 2 / 320 * hei) {
        upy -= grav;
        grav = grav + 0.005 / 320 * hei;
        can = 0;
    } else {
        supy = 0;
        upy = 0;
        grav = 0;
        can = 1;
    }
    //////////////////////////////////
}

/* function explosion(x, y, col){

    ctx.beginPath();
    ctx.save();

    ctx.translate(rpx2, rpy2);

        radian3 += 1 * (Math.PI / 180);

    ctx.rotate(radian3);



    ctx.rect(-0.5 * rs2, - 0.5 * rs2, rs2, rs2);
    ctx.strokeStyle = Rcolor[rN];
    ctx.lineWidth = wid / 200;
    ctx.stroke();
    rs2 += 10 * wid / 1366;
    
    ctx.restore();
    ctx.closePath();
} */

function mouseDown(){
	v = 1;  
}

function mouseUp()
{
        k = 32;
        //window.clearInterval(timer2);
        fire();
        ammo[j] = document.createElement("img");
        ammo[j].src = "images/ammo.png";
        ammoSize[j] = 16 / 320 * hei;
        ammoSize2[j] = 28 / 320 * hei;
        /* socket.emit('send messagev', player + v2); */
        

        v = 0;

       v2 = 0;
}

function explosion() {
    //explosion

    explosionCol = col;
}