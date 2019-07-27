<template>
  <div id="dingdian" style="width:100%;text-align: center" name = 'topn'>

    <el-row type="flex" justify="center">
      <el-col :span="3"><div class="longdiwei"><img src="../../common/images/logo.png" class="width:100%"/></div></el-col>
      <el-col :span="12">
        <div class="heitiedingwei">
        <div class="navitem">
        <ul ref="vul" class="nav_ul">
          <li><router-link to="/home" class="lia" @mouseenter.native="tagshow($event)" @mouseleave.native="closehr($event)">{{navitem.myhome}}</router-link>
            <transition><hr v-show="vif[0].cut" class="navhr"/></transition>
          </li>
          <li><router-link to="/coop" class="lia" @mouseenter.native="tagshow($event)" @mouseleave.native="closehr($event)">{{navitem.hezuo}}</router-link>
            <transition><hr v-show="vif[1].cut" class="navhr"/></transition>
          </li>
          <li><router-link to="/news" class="lia" @mouseenter.native="tagshow($event)" @mouseleave.native="closehr($event)">{{navitem.zixun}}</router-link>
            <transition> <hr v-show="vif[2].cut" class="navhr"/></transition>
          </li>
          <li><router-link to="/recruit" class="lia"  @mouseenter.native="tagshow($event)" @mouseleave.native="closehr($event)">{{navitem.zhaopin}}</router-link>
            <transition><hr v-show="vif[3].cut" class="navhr"/></transition>
          </li>
          <li><router-link to="/about" class="lia" @mouseenter.native="tagshow($event)" @mouseleave.native="closehr($event)">{{navitem.aboutus}}</router-link>
            <transition><hr v-show="vif[4].cut" class="navhr"/></transition>
          </li>

        </ul>
        </div>
          <el-row class="tac">

            <el-col :span="7">
              <el-menu router
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#ffffff"
                text-color="#04cb94"
                active-text-color="#02694d" style="border-radius: 10px">
                <el-submenu index="1" >
                  <template slot="title" style="border-radius: 10px">
                    <span>导航</span>
                  </template>
                  <el-menu-item-group style="border-radius: 10px">
                    <el-menu-item index="/home" style="height: 2rem;line-height: 2rem;border-radius: 10px">首页</el-menu-item>
                    <el-menu-item index="/coop" style="height: 2rem;line-height: 2rem;border-radius: 10px">平台合作</el-menu-item>
                    <el-menu-item index="/news" style="height: 2rem;line-height: 2rem;border-radius: 10px">新闻资讯</el-menu-item>
                    <el-menu-item index="/recruit" style="height: 2rem;line-height: 2rem;border-radius: 10px">招贤纳士</el-menu-item>
                    <el-menu-item index="/about" style="height: 2rem;line-height:2rem;border-radius: 10px">关于我们</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>

        </div>
      </el-col>
    </el-row>





   </div>






<!--  </div>-->
</template>

<script>

   export default {
        name: "Banner",
     props:["message"],
     data(){
          return{
            navitem:{
              myhome:'首页',
              hezuo:'平台合作',
              zixun:'新闻资讯',
              zhaopin:'招贤纳士',
              aboutus:'关于我们'
            },
            jiluid:'',
            paramsid:'',
            vif:[
              {
                cut:false
               },
              {
                cut:false
              },
              {
                cut:false
              },
              {
                cut:false
              },
              {
                cut:false
              },
            ],
            liarr:[],
          }
     },
     methods:{
       changevif(g){
            this.vif[g].cut = !this.vif[g].cut
          },
       tagshow(e){
         for (let i = 0; i < this.liarr.children.length; i++){
              // console.log(this.liarr.children[i])
              if (this.liarr.children[i].children[0].innerText == e.currentTarget.innerText){
                    this.jiluid = i
                      this.changevif(i)
              }

         }
       },
       closehr(){
         this.changevif(this.jiluid)
       },
       getLiarr(){
         this.liarr = this.$refs.vul;
       },
       handleOpen(key, keyPath) {
         console.log(key, keyPath);
       },
       handleClose(key, keyPath) {
         console.log(key, keyPath);
       },
     },
     mounted(){
       this.getLiarr()
       switch (this.message){
         case '0':
           this.vif[0].cut = true
           this.vif[1].cut = false
           this.vif[2].cut = false
           this.vif[3].cut = false
           this.vif[4].cut = false
               break
         case '1':
           this.vif[1].cut = true
           this.vif[0].cut = false
           this.vif[2].cut = false
           this.vif[3].cut = false
           this.vif[4].cut = false
           break
         case '2':
           this.vif[2].cut = true
           this.vif[1].cut = false
           this.vif[0].cut = false
           this.vif[3].cut = false
           this.vif[4].cut = false
           break
         case '3':
           this.vif[3].cut = true
           this.vif[1].cut = false
           this.vif[2].cut = false
           this.vif[0].cut = false
           this.vif[4].cut = false
           break
         case '4':
           this.vif[4].cut = true
           this.vif[1].cut = false
           this.vif[2].cut = false
           this.vif[3].cut = false
           this.vif[0].cut = false
           break
       }

     },


    }
</script>

<style>
  .el-menu-vertical-demo{
    width: 13rem;
    border: 0rem;
  }

  .navdingwei{
    width: 100%;
    position: absolute;
    top: 0rem;
    left:0rem;
    text-align: center;
  }
.navCanton{
  /*width: 75rem;*/
  /*height: 3rem;*/
}
.navton {
    margin: 0 auto;
}
.nav_imgtain {
  float:left;
  padding-top: 0.7rem;
}
  .navitem {
  float: right;
  }
  .navitem .nav_ul{
    list-style: none;
    margin-top: 1.43rem;
  }
  .navitem .nav_ul li{
    float: left;
    margin-left: 2.06rem;
    color: white;
    font-family: zxfont;
  }
  @font-face {
    font-family: alhp;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Light.otf");
  }
  @font-face {
    font-family: zfont;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Medium.otf");
  }
  @font-face {
    font-family: dfont;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Heavy.otf");
  }
  @font-face {
    font-family: zxfont;
    src:url("../../../src/common/font/Alibaba-PuHuiTi-Regular.otf");
  }
  .navhr {
    height:1px;
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    border-top:0.2rem solid #ffffff;
  }
  .lia {
    color: white;
    font-size: 1rem;
  }
  .lia:link, .lia:hover, .lia:visited, .lia:active {
    color: white;
    font-size: 1rem;
    text-decoration:none;
  }
  .v-enter,.v-leave-to {
    width: 0;
  }
  .v-leave,.v-enter-to {
    width: 100%;
  }
  .v-enter-active,.v-leave-active {
      transition: all 1s ease;
    /*transition: color 1s ease;*/
  }
@media screen and (max-width: 1002px){
  .navitem{
    display: none;
  }
  .tac{
    display: block;
  }
  .heitiedingwei{
    float: right;
  }
}
@media screen and (min-width: 1003px) {
  .navitem{
    display: block;
  }
  .tac{
    display: none;
  }
}
.tac{

}
  .longdiwei{
    margin-top: 1rem;
    text-align: left;
  }
  .el-submenu__title{
    border-radius: 10px;
  }
  .el-menu-vertical-demo ul{
    border-radius: 10px;
  }
  .el-submenu__title{
    height: 45px;
    line-height: 45px;
  }
</style>
