// JavaScript Document

/**
 * @name     :collectWeb
 * @author   :Nice
 * @dependent:收藏本站
 */
function addFavorite() {

    if (window.sidebar && window.sidebar.addPanel) { 
    // Mozilla Firefox Bookmark
        window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && ('AddFavorite' in window.external)) { 
    // IE Favorite
        window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) { 
    // Opera Hotlist
        this.title = document.title;
        return true;
    } else { 
    // webkit - safari/chrome
        alert('请使用' + (navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL') + ' + D 收藏！');
    }

}
/* @end **/




/**
* @name     :initMap
* @author   :Nice
* @time     :4.23
* @explain  :百度地图
*/
//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMarker();//向地图中添加marker
}

//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(113.314518,23.014364);//定义一个中心点坐标
    map.centerAndZoom(point,16);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl(){
                    }

//标注点数组
var markerArr = [{title:"广州市宸路营销策划有限公司",content:"广州市番禺区大石街石南路1号潮联创业中心920室",point:"113.313889|23.015062",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
     ];
//创建marker
function addMarker(){
    for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0,p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
                    borderColor:"#808080",
                    color:"#333",
                    cursor:"pointer"
        });
        
        (function(){
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click",function(){
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open",function(){
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close",function(){
                _marker.getLabel().show();
            })
            label.addEventListener("click",function(){
                _marker.openInfoWindow(_iw);
            })
            if(!!json.isOpen){
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
//创建InfoWindow
function createInfoWindow(i){
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
    return iw;
}
//创建一个Icon
function createIcon(json){
    var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
    return icon;
}
/* @end **/



/**
* @name     :
* @author   :Nice
* @version  :
* @type     :基类
* @explain  :
* @relating :
* @dependent:
*/
function bannerTab(ID){
    var e=$('#'+ID);
    var itme=e.find('.itme');
    var itmeL=itme.length;
    var i=0;


    setInterval(function(){
        i=i+1;
        if (i>=itmeL) {
            i=0;
        };
        itme.removeClass('hover');
        $(itme[i]).addClass('hover');
    },6000)

}
/* @end **/


/**
* @name     :clearText
* @author   :Nice
* @version  :
* @explain  :清除文本
*/


function clearText(id,txt){
    var e=$("#"+id);
    var hint=e.next(".hint");

    // function ct() {
    //     var val=e.val();
    //     var text=hint.text();

    //     console.log(val);
    //     console.log(text);
    //     //获取焦点
    //     if(val=='' || text==txt){
    //         // e.focus();
    //         hint.hide();
    //         // hint.hide('slow');
    //         // e.val('');
    //         // console.log(s);
    //     }

       

       
    // }

    // function ctBlur(){
    //     var val=e.val();
    //     var text=hint.text();
    //     //失去焦点
    //     if(val=='' || text==txt){
    //         hint.show();
    //     }
    // }


    // e.focus(ct);
    // e.blur(ctBlur);

    var val=e.val();
    var text=hint.text();

    e.focus(function(event) {
        if (e.val()=='') {
            hint.hide();
        };
    });


    e.blur(function(event) {
        if (e.val()=='') {
           hint.show();
        };
    });

    hint.click(function(event) {
        if (e.val()=='') {
            hint.hide();
        };
        e.focus();
    });











    // e.focus(ct);

    // s.click(ct);



    
}
/* @end **/

// <div class="x" ></div>
// <div id="z" ></div>


function test(test){
    
    console.log();
}

// test('z');
// test('x');


/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/