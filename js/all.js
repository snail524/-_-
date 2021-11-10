
simple_data = data.data.XML_Head.Infos.Info;
// console.log(simple_data.length);

var area = document.getElementById('areaId');
var list = document.querySelector('.list');
var h2 = document.querySelector('.content h2');
var box = document.querySelector('.box');
var page = document.querySelector('.page nav ul');
// page.innerHTML= 123;
area.addEventListener('change',selectArea);
box.addEventListener('click',checklist);
page.addEventListener('click',pagelist);
len = simple_data.length;
var areadate = [];
function selectArea(e){

    areadate = [];
    var select = e.target.value;
    h2.innerHTML = select;
    // console.log(select);
    for(i=0;i<len;i++){
        if (select ==  (simple_data[i].Add.slice(6,9 ))){
            areadate.push(simple_data[i]);
        };
        
    };
    pages_indicate(areadate);

    updatelist(areadate);
};

function checklist(e){
    areadate = [];
    if(e.target.nodeName != "LI"){
        return;
    }
    h2.innerHTML = e.target.textContent;
    for(i=0;i<len;i++){
        if (e.target.textContent ==  (simple_data[i].Add.slice(6,9 ))){
            areadate.push(simple_data[i]);
        };
    };
    pages_indicate(areadate);
    updatelist(areadate);

}

function updatelist(item){
    var str = ' ';
    list.innerHTML = str;
    var len = item.length;
    for(var i=0 ; i<len ;i++){
        // console.log(item[i].Name);
        // console.log(item[i].Add.slice(6,9));
        // console.log(item[i].Picture1);
        str_img='<div class="img"><img src="'+ item[i].Picture1 +'"alt="">' +'<h5>'+item[i].Name+'</h5>'+'<p>'+item[i].Add.slice(6,9)+'</p></div>';
        str_content='<ul class="detail list-unstyled"><li> <span class="icon icon-clock ">tt</span> <p>'+item[i].Opentime+'</p></li>  <li><span class="icon icon-place"></span><p>'+item[i].Add+'</p>  </li><li class="ticket" ><span class="icon icon-phone"></span> <p>'+ item[i].Tel+'  </p> <span class="icon icon-ticket"></span>  </li> </ul>';
        


        str +='<li data-num="'+i+'" class="list-li">'+str_img+ str_content+ '</li>';
    };
    list.innerHTML = str;
    list_initial();
}


function pages_indicate(item){
    var page_content="";
    // console.log(item.length);
    
    page_num =Math.ceil(item.length / 6) ;
    // console.log(page_num)
    for(var i=0 ; i<page_num ; i++){
        page_content +='<li class="page-item"><a class="page-link" href="#" data-num='+(i+1)+'>' + (i+1)+'</a></li>' ;
    }
    
    // console.log(page_content);
    page_layout_first='<li class="page-item"><a class="page-link" href="#" data-num="-" >＜ prev</a></li>';  
    page_layout_end='<li class="page-item"><a class="page-link" href="#" data-num="+">next ＞</a></li>';
    
    page.innerHTML = page_layout_first+page_content +page_layout_end;
    
    
}
// 頁面
var page_now = 0;

// 預設第一頁
function list_initial(){
    page_now = 1;
    var el = document.querySelectorAll('.list-li');
    ;
    
    if (el.length>6){
    for (var i=6;i<el.length;i++){
        el[i].setAttribute('style','display: none')
    }}
}
// 判斷按下哪一頁
function pagelist(e){
    var el = document.querySelectorAll('.list-li');
    if(e.target.dataset.num=="-"){
        if(page_now-1 ==0){
            console.log('在最前面了');
            return
        }
        console.log(page_now,'過去')
        pageTest(page_now-1);
        console.log(page_now,'現在')
    }else if(e.target.dataset.num=="+"){
        if(page_now+1 > Math.ceil(el.length/6)){
            console.log('在最後面了');
            return
        }
        console.log(page_now,'過去')
        pageTest(page_now+1);
        console.log(page_now,'現在')

    }else{
        pageTest(e.target.dataset.num);
    }
    
}
// 頁面顯示
function pageTest(n){
    page_now =  parseInt(n);
    console.log("nowpage",page_now);

    var el = document.querySelectorAll('.list-li');
    for (var i=0;i<el.length;i++){
        el[i].setAttribute('style','display: none')
    }
    if(el.length/6 >= n){
        for (var i=(6*n-6); i<6*n ;i++){
            el[i].setAttribute('style','display: block')
        }
    }else{
        // console.log(Math.floor (el.length/6));
        let pageEnd = Math.floor (el.length/6);
        for (var i=(pageEnd * 6 ); i<el.length ;i++){
            el[i].setAttribute('style','display: block')
        }
    }
}

