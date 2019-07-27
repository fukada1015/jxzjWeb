<template>
    <div>
      <div v-if="isshow" id="onlinebox" class="onlinebox" style="position: fixed; top: 100px; bottom: auto; right: 5px; left: auto;" m-type="online" m-id="online">
        <div class="onlineboxtop">
          <div style="position: absolute; right: 12px;top: 3px;" @click="isshow = false"><img src="../../common/images/closeimg.png" height="15" width="14"/></div>
          <p>在线交流</p>
        </div>
        <div class="onlineicon">
          <a href="http://wpa.qq.com/msgrd?v=3&uin=1460628475&site=qq&menu=yes" class="onlinebox-close" title=""> <div style="float:left"><img src="static/iconxl_03.gif" height="40" width="39"/></div></a>
          <a href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E5%90%8A%E8%BD%A6%E4%B9%8B%E5%AE%B6%E5%95%86%E5%9F%8E&siteid=cntaobao&status=2&charset=utf-8" class="onlinebox-close" title=""><div style="float:left"><img src="static/qqsen_img.png" height="40" width="39"/></div></a>
        </div>
        <div>
          <p style="text-align: center; height: 17px;font-weight: bold;margin-top: 10px">服务/投诉专线:</p>
          <p style="text-align: center; height: 17px;font-weight: bold; font-size: 18px;margin-top: -10px">0731-85581121</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "youshangtupian",
      data(){
          return{
            isshow:true,
          }
      }
    }
</script>

<style>
  .onlinebox{
    background-color:#fff;
    -webkit-box-shadow:0 5px 9px rgba(4,0,0,.17);
    box-shadow:0 5px 9px rgba(4,0,0,.17);
    z-index:1699;
    border-radius: 15px;
    width: 170px;
    height: 210px;
  }
  .onlineboxtop{
    /*background-color: #2c2e2b;*/
    background: url("../../common/images/jianbianline_03.png") repeat-y center;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 79px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .onlineboxtop p {
    color: white;
    text-align: center;
    margin-top: 25px;
    font-size: 20px;
  }
  .onlineicon{
    width: 100%;
    height: 59px;
    border-bottom: 1px solid #ececec;
    margin-top: 86px;
    padding-left: 20px;
  }
  .onlineicon div {
    margin-left: 20px;
    margin-top: 5px;
  }
  .onlinebox *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box}
</style>
