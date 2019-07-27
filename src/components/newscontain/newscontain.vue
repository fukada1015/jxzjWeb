<template>
    <div>
      <el-row>
        <el-col :span="15" class="zhengdi">

        </el-col>
        <el-col :span="9"></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="18">
          <el-container>
            <el-container>
              <el-header >

                <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect" active-text-color="#01b053" text-color="#838383">
                  <el-menu-item style="width: 20%;text-align: center;font-family: zxfont;" index="1">全部文章</el-menu-item>
                  <el-menu-item style="width: 20%;text-align: center;font-family: zxfont;" index="2">内部新闻</el-menu-item>
                  <el-menu-item style="width: 20%;text-align: center;font-family: zxfont;" index="3">行业动态</el-menu-item>
                  <el-menu-item style="width: 20%;text-align: center;font-family: zxfont;" index="4">融资动态</el-menu-item>
                </el-menu>

              </el-header>
              <el-main class="contain-layour" >
                <div class="main-layor">
                <el-container class="fenxianp" v-for="(item,index) in showcont" :key="index">
                  <el-aside class="imgdingw"><img :src="item.imgurl" style="width: 300px;height: 188px"/>
                  </el-aside>
                  <el-main>
                    <router-link :to="'/newsinfo/'+ item.id" class="biansel"> <p class="dp1" ref="newstitle">{{item.title}}</p></router-link>
                    <p class="dp2">{{item.survey}}</p>
                    <p class="dp3">{{item.datetime.substring(0,10)}}</p>
                  </el-main>
                </el-container>
                </div>
              </el-main>
              <div class="footer">
                <el-footer>
<!--                  <el-pagination layout="prev, pager, next" :page-size="6" :total="100"></el-pagination>-->
                  <el-pagination
                    @current-change="funtiaozhuan"
                    @size-change="handleSizeChange"
                    :current-page ="currentPage"
                    background
                    layout="prev, pager, next"
                    :page-size="6"
                    :total="mycounts">
                  </el-pagination>
                </el-footer>
              </div>
            </el-container>
            <el-aside>
              <div ref="search-divposition" class="searchdiv2 ">
                <el-autocomplete
                  popper-class="my-autocomplete"
                  v-model="sousuocanshu.state3"
                  :fetch-suggestions="querySearch"
                  placeholder="搜索文章"
                  @select="handleSelectsearch" @keydown.native.enter="handleIconClick(sousuocanshu)">
                  <i
                    class="el-icon-search el-input__icon"
                    slot="suffix"
                    @click="handleIconClick(sousuocanshu)" style="line-height: 2rem">
                  </i>

                </el-autocomplete>
                <div class="rmwzdiv">
                  <p class="rmwztext"><span class="rmwz">|</span>热门词汇</p>
                </div>
                <div class="gjzding">
                  <span><a href="javascript:;" @click="handleIconClick(hotwords.no1)">{{hotwords.no1.state3}}</a></span>
                  <span><a href="javascript:;" @click="handleIconClick(hotwords.no2)">{{hotwords.no2.state3}}</a></span>
                  <span><a href="javascript:;" @click="handleIconClick(hotwords.no3)">{{hotwords.no3.state3}}</a></span>
                  <span><a href="javascript:;" @click="handleIconClick(hotwords.no4)">{{hotwords.no4.state3}}</a></span>
                </div>

              </div>
              <div class="rmwzlistt ">
                <div class="rmwzdiv">
                   <p class="rmwztext"><span class="rmwz">|</span>热门文章</p>
                </div>
                <div class="seldingwei">
                    <div class="rmwzjttitle" v-for="(item,index) in hotnews" :key="index">
                        <router-link :to="'/newsinfo/'+ item.id" class="biansel"><p class="xyjstyle">{{item.title}}</p></router-link>
                        <p class="riqiyanse">{{item.datetime.substring(0,10)}}</p>
                    </div>
                </div>
              </div>
            </el-aside>
          </el-container>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import axios from 'axios'
  import vueaxios from 'vue-axios'
  // t:new Date().getTime().toString(),
    export default {
      data() {
        return {
          issearch:false,
          activeIndex:'1',
          datacent:{},
          showcont:[],
          hotnews:[],
          restaurants: [],
          // state3: '',
          canshu:{
            mytype:'1',
            cont:'1',
          },
          sousuocanshu:{
            mytype:'1',
            cont:'1',
            state3:'',
          },
          mycounts:0,
          currentPage:1,
          hotwords:{
            no1:{
              mytype:'1',
              cont:'1',
              state3:'',
            },
            no2:{
              mytype:'1',
              cont:'1',
              state3:'',
            },
            no3:{
              mytype:'1',
              cont:'1',
              state3:'',
            },
            no4:{
              mytype:'1',
              cont:'1',
              state3:'',
            }
          },
        }
      },

      methods: {
        handleSelect(key, keyPath) {

          this.issearch = false
          this.canshu.mytype = key

          this.canshu.cont = '1'
          this.getinfo(this.canshu)
        },
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          // 调用 callback 返回建议列表的数据
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            // { "value": "「机械之家」再获3000千万A+轮投资，58产业基金领投", "address": "机械之家" },
            // { "value": "机械之家四周年庆暨2019", "address": "机械之家" },
            // { "value": "「机械之家」获数千万元 A 轮融资，钟鼎创投领投", "address": "机械之家" },
            // { "value": "机械之家", "address": "湖南省副省长陈飞、副秘书长易佳良莅临机械之家调研考察" },
            // { "value": "机械之家", "address": "2019长沙国际工程机械展22项主体活动全面展开" },
            // { "value": "喜讯！2018麓创大赛机械之家斩获大奖！", "address": "新经济、新动能、高质量" },
            // { "value": "「机械之家」再获3000千万A+轮投资，58产业基金领投", "address": "公司再获3000万A+轮融资" },
            // { "value": "机械之家四周年庆暨2019", "address": "机械之家" },
          ];
        },
        handleSelectsearch(item) {
          // console.log(item);
        },
        async handleIconClick(obj) {
          this.issearch = true
          this.showcont = []
          this.mycounts = 0
          let  result = await this.$axios.get('http://39.96.43.242/search',{params:obj})

          this.mycounts = result.data.tiaoshu
          for(let i = 0; i < result.data.data.length; i++){

            this.showcont.push(result.data.data[i])

            this.currentPage = parseInt(obj.cont)
          }
        },
        async getinfo(obj){
          this.showcont = []
          this.mycounts = 0
          let result = await this.$axios.get('http://39.96.43.242/getinfo',{params:obj})

          this.mycounts = result.data.tiaoshu

          for(let np = 0; np < result.data.data.length; np++){
            this.showcont.push(result.data.data[np])
          }

          for(let pp = 0; pp < this.showcont.length; pp++){

            if(this.showcont[pp].survey.length > 100){
              this.showcont[pp].survey = this.showcont[pp].survey.substring(0,100) + '…'
            }
          }

          this.currentPage = parseInt(obj.cont)

        },
        async gethotnews(obj){
          this.hotnews = []
          // this.mycounts = 0
          let result = await this.$axios.get('http://39.96.43.242/gethotnews',{params:obj})

          for(let i = 0; i < result.data.data.length; i++){

            this.hotnews.push(result.data.data[i])
          }
        },
        shownews(n){
          // console.log(n)

        },

        funtiaozhuan(val){
          if(this.issearch == false){
            this.canshu.cont = val.toString()
            this.hanshu(this.canshu)
          }else{
            this.sousuocanshu.cont = val.toString()
            this.handleIconClick(this.sousuocanshu)
          }
        },
        hanshu(obj){
          this.getinfo(obj)
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        async getwords(){
          let  result = await this.$axios.get('http://39.96.43.242/gethotword')
          // this.hotword = result.data   //得到关键词数组
          this.hotwords.no1.state3 = result.data[0].sword
          this.hotwords.no2.state3 = result.data[1].sword
          this.hotwords.no3.state3 = result.data[2].sword
          this.hotwords.no4.state3 = result.data[3].sword

        },
      },

      mounted() {
        // this.restaurants = this.loadAll()
        this.getinfo(this.canshu)
        this.gethotnews()
        this.getwords()


      },
      updated() {
        let width = document.body.offsetWidth;
        let nowFont=width/375*5;
        // let htmlFont=document.getElementsByTagName('html')[0];
        let htmlFont=this.$refs.newstitle;

        for(let n = 0; n < htmlFont.length; n++){
          htmlFont[n].style.fontSize =`${nowFont}px`;
        }
      },
    }
</script>

<style>
  .zhengdi{
    margin-top: 4rem;
  }
  .imgdingw{
    width: 40%;
    margin-top: 1.9rem;
  }
.imgdingw img{
  width: 100%;
}
  .dp1 {
    /*font-size: 1.8rem;*/
    color: #2e4446;
    font-family: zxfont;
  }
  .dp1:active {
    color: #2e4446;
  }
  .xyjstyle{
    color: #617375;
    font-family: zxfont;
  }
  .dp2{
    max-width: 950px;
    font-size: 0.8rem;
    color: #6c7c7d;
    letter-spacing: 0.1rem;
    word-wrap: break-word;
    word-break: normal;
    font-family: zxfont;
  }
  .dp3{
    font-size: 0.8rem;
    color: #6c7c7d;
    letter-spacing: 0.1rem;
    font-family: zxfont;
  }
  .fenxianp{
    border-bottom: 1px solid #ecf0f5;
    padding-bottom: 1rem;
    margin-top: -1rem;
    font-family: zxfont;
  }
  .biansel:hover p{
    color: #04cb94;
  }
  .biansel:link, .biansel:hover, .biansel:visited, .biansel:active {
    text-decoration:none;
    color:#617375;
  }
  .el-pagination{
    text-align: center;
  }
  .el-pagination li.active {
    background: #01b053 !important;
  }
  .searchdiv2 {
    margin-top: 1rem;
    margin-left: 0.5rem;
    padding-top: 2rem;
    padding-left: 0.5rem;
    width: 17rem;

    -moz-box-shadow:0px 0px 0.8em #e2e3e5;
    -webkit-box-shadow:0px 0px 0.8em #e2e3e5;
    box-shadow:0px 0px 0.8em #e2e3e5;
    padding-bottom: 9%;

  }
  .searchdiv2 input {
    height: 2rem;
    width: 15.5rem;
  }

  .my-autocomplete li{
    line-height: normal;
    padding: 7px;
  }
  .my-autocomplete li .name{
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .my-autocomplete li .addr{
    font-size: 12px;
    color: #b4b4b4;
  }
  .my-autocomplete li .highlighted .addr{
    color: #ddd;
  }
.rmwz{
  color: #01b053;
  font-weight: bold;
  margin-right: 1rem;
}
  .rmwztext{
    color: #0d0f0f;
    font-family: zxfont;
  }
  .rmwzdiv{
    border-bottom: 1px solid #ecf0f5;
    margin-top: 1rem;
    width: 90%;
  }
  .gjzding{
    margin-top: 0.7rem;
    font-family: zxfont;
  }
  .gjzding span{
    color: #99a6a6;
    font-size: 0.7rem;
    margin-right: 1rem;
  }
  .rmwzlistt{
    margin-top: 3rem;
    -moz-box-shadow:0px 0px 0.8em #e2e3e5;
    -webkit-box-shadow:0px 0px 0.8em #e2e3e5;
    box-shadow:0px 0px 0.8em #e2e3e5;
    width: 17rem;
    margin-left: 0.5rem;
    padding-top: 1rem;
    padding-left: 0.5rem;
    padding-bottom: 1rem;
  }
  .rmwzjttitle p{
    font-size: 0.8rem;
    width: 90%;
    color:#617375;
    font-family: zxfont;
  }

  .seldingwei{
    margin-top: 1rem;
    margin-left: 0.7rem;
  }
  .footer .el-pagination li.active {
    background: #01b077 !important;
    color: white !important;
    font-family: zxfont;
  }
  .el-pagination li {
    border-radius: 8px;
  }
  .headercss{
    border-bottom: 2px solid #ecf0f5;

  }
  .headercss ul li{
    list-style: none;
    color:#838383 ;
    float: left;
    width: 25%;
    display: block;
    height: 1.5rem;
  }
  .headercss ul{
    width: 90%;
    text-align: center;
    display: block;
    padding-bottom: 1rem;
  }
  .clearfix:before, clearfix:after {
    content: "";
    display: table;
    clear: both;
  }
  .riqiyanse{
    color: #2e4446;
  }
  .gjzding a:link,.gjzding a:visited,.gjzding a:active{
    color: #617375;
  }
  .gjzding a:hover{
    color:#04cb94;
  }
  .contain-layour{
    /*margin-top:-1rem;*/
  }
  .el-input__inner:focus{
    border-color: #04cb94;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #04cb94;
  }
  .main-layor{
    margin-top: -2rem;
    max-width: 1000px;
    height: auto;
  }
  .fixed-contrl{
    position: fixed;
  }
  .el-menu.el-menu--horizontal{
    width: 1000px;
  }
</style>
