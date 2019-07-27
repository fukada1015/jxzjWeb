<template>
  <div class="coopbanbg">
    <div class="container">
              <div class="wow coopbanwz coopanimation" data-wow-delay=".5s"><img src="../../common/images/cooptilte.png" /></div>
              <div class="wow btndw coopanimation" data-wow-delay=".7s"><img src="../../common/images/cooptitle2.png"/></div>
    </div>
<!--    <div v-if="isshow" id="onlinebox" class="onlinebox" style="position: fixed; top: 250px; bottom: auto; left: 43%;" m-type="online" m-id="online">-->
<!--      <div class="onlineboxtop">-->
<!--        <div style="position: absolute; right: 5px;top: 0px;" @click="isshow = false"><img src="../../common/images/closeimg.png" height="15" width="14"/></div>-->
<!--        <p>在线交流</p>-->
<!--      </div>-->
<!--      <div class="onlineicon">-->
<!--        <a href="http://wpa.qq.com/msgrd?v=3&uin=1460628475&site=qq&menu=yes" class="onlinebox-close" title=""> <div style="float:left"><img src="static/iconxl_03.gif" height="40" width="39"/></div></a>-->
<!--        <a href="http://www.taobao.com/webww/ww.php?ver=3&touid=%E5%90%8A%E8%BD%A6%E4%B9%8B%E5%AE%B6%E5%95%86%E5%9F%8E&siteid=cntaobao&status=2&charset=utf-8" class="onlinebox-close" title=""><div style="float:left"><img src="static/iconxl_05.gif" height="40" width="39"/></div></a>-->
<!--      </div>-->
<!--      <div>-->
<!--        <p style="text-align: center; height: 17px;font-weight: bold;margin-top: 10px">服务/投诉专线:</p>-->
<!--        <p style="text-align: center; height: 17px;font-weight: bold; font-size: 18px;margin-top: -10px">0731-85581121</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
    export default {
        name: "coop_banner",
      data(){
          return{
            isshow:false,
          }
      },
      methods:{
        showfun(){

        },
        showfuncoop(){
          this.isshow = true
        },
      }
    }
</script>

<style>

  .coopbanbg{
    width: 100%;
    background: url("../../common/images/coop_banbg_01.jpg") no-repeat center;
    padding-top: 14%;
    padding-bottom: 16%;
  }
  .coopbtn{
    color: #2ac4e9;
    background-color: white;
    border: none;
    border-radius: 0.3rem;
    font-size: 1.4rem;
    font-weight: bold;
    font-family: '黑体';
    padding:0.7rem 2rem;
    letter-spacing: 0.1rem;
  }
  .btndw{
    text-align: center;
    margin-top: 1rem;
  }
  .coopanimation{
    -webkit-animation-name: -webkit-coopanimation;
    animation-name: coopanimation;
  }
  @keyframes -webkit-coopanimation{
    0% {
      opacity: 0;
      -webkit-transform: translateY(-32px);
      transform: translateY(-32px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);

    }
  }
  @keyframes coopanimation{
    0% {
      opacity: 0;
      -webkit-transform: translateY(-32px);
      -ms-transform: translateY(-32px);
      transform: translateY(-32px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .coopbanwz{
    text-align: center;
    color: white;
    position: relative;

  }

  .t1{
    font-family: '黑体';
    font-size: 2rem;
    font-weight: bold;
  }
  .t2 {
    font-family: '黑体';
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
  }
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
    background-color: #2c2e2b;
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
