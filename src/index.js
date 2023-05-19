
var xmlhttp,xmlhttp2;

// function loading(){
//   document.querySelector('.mouth1').style.animationPlayState = '';
//   document.querySelector('.mouth2').style.animationPlayState = '';
//   document.querySelector('.beanOne').style.animationPlayState = '';
//   document.querySelector('.beanTwo').style.animationPlayState = '';

//   setTimeout(function(){
//     document.querySelector('.mouth1').style.animationPlayState = 'paused';
//     document.querySelector('.mouth2').style.animationPlayState = 'paused';
//     document.querySelector('.beanOne').style.animationPlayState = 'paused';
//     document.querySelector('.beanTwo').style.animationPlayState = 'paused';
    
//   },1000);
// }
function load(){
  if (window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
    xmlhttp2=new XMLHttpRequest();
  }
  else
  {
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("p-page").innerHTML=xmlhttp.responseText;
      hljs.initHighlightingOnLoad();

    }
  }
  xmlhttp2.onreadystatechange=function()
  {
    if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
    {
      document.getElementById("p-list").innerHTML=xmlhttp2.responseText;
      hljs.initHighlightingOnLoad();

    }
  }
}
/*载入对应*/
function loadHome()
{
  load();
  xmlhttp.open("GET","html/home.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/home_list.html",true);
  xmlhttp2.send();
}
function loadNote()
{
  load();
  xmlhttp.open("GET","html/note.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/note_list.html",true);
  xmlhttp2.send();
}
function loadConnect()
{
  load();
  xmlhttp.open("GET","html/connect.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/connect_list.html",true);
  xmlhttp2.send();
}
function loadReward()
{
  load();
  xmlhttp.open("GET","html/reward.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/reward_list.html",true);
  xmlhttp2.send();
}

function loadWeek1()
{
  load();
  xmlhttp.open("GET","html/week1.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week1_list.html",true);
  xmlhttp2.send();
}
function loadWeek2()
{
  load();
  xmlhttp.open("GET","html/week2.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week2_list.html",true);
  xmlhttp2.send();
}  
function loadWeek3()
{
  load();
  xmlhttp.open("GET","html/week3.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week3_list.html",true);
  xmlhttp2.send();
}
function loadWeek4()
{
  load();
  xmlhttp.open("GET","html/week4.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/week3_list.html",true);
  xmlhttp2.send();
}
function loadCF1826()
{
  load();
  xmlhttp.open("GET","html/cf1826.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/cf1826_list.html",true);
  xmlhttp2.send();
}

function loadCF1818()
{
  load();
  xmlhttp.open("GET","html/cf1818.html",false);
  xmlhttp.send();
  xmlhttp2.open("GET","html/cf1818_list.html",false);
  xmlhttp2.send();
}


function loadCF1820()
{
  load();
  xmlhttp.open("GET","html/cf1820.html",true);
  xmlhttp.send();
  xmlhttp2.open("GET","html/cf1820_list.html",true);
  xmlhttp2.send();
}


function loadHZNUOJ()
{
  window.open("https://acm.hznu.edu.cn/OJ/userinfo.php?user=2021212205006");
} 
function loadCF()
{
  window.open("https://codeforces.com/");
}
function loadVJ()
{
  window.open("https://vjudge.net/group/hznuacm21");
}
function loadLuogu()
{
  window.open("https://www.luogu.com.cn/");
}     
function loadAT()
{
  window.open("https://atcoder.jp/");
}     
function loadGE()
{
  window.open("https://csacademy.com/app/graph_editor/");
}     
function loadQuanta()
{
  window.open("https://mooc.hznu.edu.cn/#/");
}

function loadGithub()
{
  window.open("https://github.com/xyzyx0314");
}


function load404()
{
  load();
  xmlhttp.open("GET","html/404.html",true);
  xmlhttp.send();
}













