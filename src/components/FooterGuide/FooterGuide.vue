<template>
    <div class="mapconnte">

      <div style="position:relative;">
        <div style="width:100%;height:550px;border:#ccc solid 1px;font-size:12px" id="map"></div>
        <img src="../../common/images/mapdiv.png" style="height:100%;position: absolute;top: 0;bottom: 0;right: 0;"/>

<!--          <div class="wow mapimg" data-wow-delay="1s"><img src="../../common/images/mapdiv.png"/></div>-->
      </div>

    </div>
</template>

<script>
  var map
    export default {
        name: "FooterGuide",
      mounted(){
        this.initMap()
      },
      methods:{
        initMap(){
          this.createMap();//创建地图
          this.setMapEvent();//设置地图事件
          this.addMapControl();//向地图添加控件
          this.addMapOverlay();//向地图添加覆盖物
    },
    createMap(){
      map = new BMap.Map("map");
      map.centerAndZoom(new BMap.Point(112.888617,28.235851),15);
    },
    setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    },
    addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    },
    addMapOverlay(){
      var markers = [
        {content:"",title:"湖南机械之家科技有限公司",imageOffset: {width:-23,height:-21},position:{lat:28.234578,lng:112.887827}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/creatmap/images/us_mk_icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
          })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        this.addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
    },
    //向地图添加控件
    addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
      }
    }
</script>

<style>
.mapconnte{
    width: 100%;
    height: auto;
    background: url("../../common/images/map_45.jpg") no-repeat center;
}
.mapimg{
    text-align: right;
    position: relative;
    opacity: 0;
    animation:mapimg 2s;
    animation-fill-mode: forwards;
    animation-delay:.6s;
  }
@keyframes mapimg
{
  from {right:-3rem;opacity: 0}
  to {right:0rem;opacity: 1}
}
@-webkit-keyframes mapimg /*Safari and Chrome*/
{
  from {right:-3rem;opacity: 0}
  to {right:0rem;opacity: 1}
}
.mapimg img{
  max-height: 43rem;
}
</style>
