
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
        page_content +='<li class="page-item"><a class="page-link" href="#">' + (i+1)+'</a></li>' ;
    }
    
    // console.log(page_content);
    page_layout_first='<li class="page-item"><a class="page-link" href="#" data-num="0" >＜ prev</a></li>';  
    page_layout_end='<li class="page-item"><a class="page-link" href="#" data-num="1">next ＞</a></li>';
    
    page.innerHTML = page_layout_first+page_content +page_layout_end;
    
    
}
var page_now = 0;

function list_initial(){
    page_now = 1;
    var el = document.querySelectorAll('.list-li');
    ;
    
    // console.log(el.length);
    if (el.length>6){
    for (var i=6;i<el.length;i++){
        el[i].setAttribute('style','display: none')
    }}
}

function pagelist(e){
    var el = document.querySelectorAll('.list-li');
    ;
    if(e.target.textContent==1){
        page_1(el);
    }
    else if(e.target.textContent==2){
        page_2(el);
    }
    else if(e.target.textContent==3){
        page_3(el);
    }
    else if(e.target.textContent==4){
        page_4(el);
    }
    else if(e.target.textContent==5){
        page_5(el);
    }

    if(e.target.dataset.num=="0"){
        console.log(page_now-1);
        switch(page_now -1){
            case 1:
                page_1(el);
                page_now=1;
                break;
            case 2:
                page_2(el);
                page_now=2;
                break;
            case 3:
                page_3(el);
                page_now=3;
                break;
            case 4:
                page_4(el);
                page_now=4;
                break;
            case 5:
                page_5(el);
                page_now=5;
                break;
        }

     }
     else if(e.target.dataset.num=="1"){
        page_max = (Math.ceil(el.length/6));
        if (page_now+1 > page_max){
            return;
        }
        switch(page_now +1){
            case 1:
                page_1(el);
                page_now=1;
                break;
            case 2:
                page_2(el);
                page_now=2;
                break;
            case 3:
                page_3(el);
                page_now=3;
                break;
            case 4:
                page_4(el);
                page_now=4;
                break;
            case 5:
                page_5(el);
                page_now=5;
                break;
        }

     }
}

function page_1(el_1){
    console.log(1);
    page_now = 1;
    for (var i=6;i<el_1.length;i++){
        el_1[i].setAttribute('style','display: none')
    }
    for (var i=0;i<6;i++){
        el_1[i].setAttribute('style','display: block')
    }
}

function page_2(el_2){
    page_now =2 ;
    if(el_2.length <13){
        for (var i=0;i<6;i++){
            el_2[i].setAttribute('style','display: none')
        }
        for (var i=6;i<el_2.length ;i++){
            el_2[i].setAttribute('style','display: block')
        }
    }else{
        for (var i=0;i<el_2.length;i++){
            el_2[i].setAttribute('style','display: none')
        }
        for (var i=6;i<12 ;i++){
            el_2[i].setAttribute('style','display: block')
        }
    }
}

function page_3(el_3){

    console.log(3);
    page_now = 3;
    if(el_3.length <19){
        for (var i=0;i<12;i++){
            el_3[i].setAttribute('style','display: none')
        }
        for (var i=12;i<el_3.length ;i++){
            el_3[i].setAttribute('style','display: block')
        }
    }else{
        for (var i=0;i<el_3.length;i++){
            el_3[i].setAttribute('style','display: none')
        }
        for (var i=12;i<18 ;i++){
            el_3[i].setAttribute('style','display: block')
        }
    }
}
function page_4(el_4){
    console.log(4);
    page_now = 4;
    if(el_4.length <25){
        for (var i=0;i<18;i++){
            el_4[i].setAttribute('style','display: none')
        }
        for (var i=18;i<el_4.length ;i++){
            el_4[i].setAttribute('style','display: block')
        }
    }else{
        for (var i=0;i<el_4.length;i++){
            el_4[i].setAttribute('style','display: none')
        }
        for (var i=18;i<24 ;i++){
            el_4[i].setAttribute('style','display: block')
        }
    }
}

function page_5(el_5){

    console.log(5);
    page_now = 5;
    if(el_5.length <31){
        for (var i=0;i<24;i++){
            el_5[i].setAttribute('style','display: none')
        }
        for (var i=24;i<el_5.length ;i++){
            el_5[i].setAttribute('style','display: block')
        }
    }else{
        for (var i=0;i<el_5.length;i++){
            el_5[i].setAttribute('style','display: none')
        }
        for (var i=24;i<30 ;i++){
            el_5[i].setAttribute('style','display: block')
        }
    }
}