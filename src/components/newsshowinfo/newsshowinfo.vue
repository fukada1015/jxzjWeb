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
            <el-header style="border-bottom: 1px solid #ecf0f5">

              <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect" active-text-color="#46a976" text-color="#838383"
                       style="width: 100%;">
                <el-menu-item style="width: 20%;text-align: center" index="1">全部文章</el-menu-item>
                <el-menu-item style="width: 20%;text-align: center" index="2">内部新闻</el-menu-item>
                <el-menu-item style="width: 20%;text-align: center" index="3">行业动态</el-menu-item>
                <el-menu-item style="width: 20%;text-align: center" index="4">融资动态</el-menu-item>
              </el-menu>
            </el-header>
            <el-main>
              <div><p class="bigclass"></p></div>
              <div><p class="bigclass"></p></div>
              <div><p class="bigclass">{{newsinfos.danxiaobj[0].title}}</p></div>
              <el-row class="huaxian">
                <el-col :span="24">
                  <div style="display:flex; justify-content: flex-start">
                      <div style="margin-right: 0.3rem"><img src="../../common/images/newcontimg_03.gif" height="30" width="30"/></div>
                      <div><p class="rmch" style="line-height: 30px;width: 70px;margin-right: 0.3rem">热门词汇:</p></div>
                      <div style="width: auto"><p class="rmch" style="line-height: 30px">{{newsinfos.danxiaobj[0].title}}<span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>{{newsinfos.danxiaobj[0].datetime.substring(0,10)}}</p></div>
                  </div>
                </el-col>


<!--                <el-col :span="20"><p class="rmch"><span>&nbsp;|&nbsp;</span></p></el-col>-->
              </el-row>
              <div class="ql-container ql-snow  containwidth">
                <div ref="neirongpp" class="neirongdingwei ql-editor" v-html="newsinfos.danxiaobj[0].contents"></div>
              </div>
            </el-main>
            <div class="footer">
              <el-footer>
                <el-button v-if="syp" class="mybuttom" @click="prepian">＜上一篇</el-button>
                <el-button v-if="xyp" class="mybuttom" @click="nextpian">下一篇＞</el-button>
              </el-footer>
            </div>
          </el-container>
          <el-aside>
            <div class="searchdiv">
              <div class="rmwzdiv">
                <p class="rmwztext"><span class="rmwz">|</span>热门词汇</p>
              </div>

              <div class="gjzding2">
                <span><a href="javascript:;" @click="RetrunList">{{hotwords.no1.state3}}</a></span>
                <span><a href="javascript:;" @click="RetrunList">{{hotwords.no2.state3}}</a></span>
                <span><a href="javascript:;" @click="RetrunList">{{hotwords.no3.state3}}</a></span>
                <span><a href="javascript:;" @click="RetrunList">{{hotwords.no4.state3}}</a></span>
              </div>
            </div>
            <div class="rmwzlistt">
              <div class="rmwzdiv">
                <p class="rmwztext"><span class="rmwz">|</span>热门文章</p>
              </div>
              <div class="seldingwei">
                <div class="rmwzjttitle" v-for="(item,index) in hotnews" :key="index">

                  <a href="javascript:;" class="ceshid" @click="dankan(item.id)"><p class="xyjstyle2">{{item.title}}</p></a>
                    <p class="riqiyanse2" >{{item.datetime.substring(0,10)}}</p>
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
  import router from 'vue-router'

  import 'quill/dist/quill.snow.css'


    export default {
        data(){
          return{
            syp:false,
            xyp:false,
            state3: '',
            activeIndex: '1',
            pathobj:{
              path:'/news'
            },
            newsinfos:{},
            hotnews:[],
            datacent:{},
            canshu:{
              cont:'1',
              mytype:'1',
              // t:new Date().getTime().toString(),
            },
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
            newid:{
              myid:1,
            },
            preid:{
              myid:0,
            },
            nextid:{
              myid:0,
            },
          }
        },
      methods:{
        // handleSelect(key, keyPath) {
        //   // this.canshu.mytype = key.toString()
        //   // this.canshu.cont = '1'
        //
        // },
        // querySearch(queryString, cb) {
        //   // var restaurants = this.restaurants;
        //   // var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        //   // // 调用 callback 返回建议列表的数据
        //   // // console.log('点击搜索了')
        //   // cb(results);
        // },
        // createFilter(queryString) {
        //   // return (restaurant) => {
        //   //   return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        //   // };
        // },
        // loadAll() {
        //   return [
        //     // { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
        //     // { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
        //     // { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        //     // { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        //     // { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        //     // { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        //     // { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
        //     // { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
        //     // { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
        //     // { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
        //     // { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
        //     // { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
        //     // { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
        //     // { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
        //     // { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
        //     // { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
        //
        //   ];
        // },
        // handleSelectsearch(item) {
        //   // console.log(item);
        // },
        handleIconClick(){
          // console.log(ev);
          // router.push({path: '/news'})
          console.log('dddd')
          // this.$router.push({ name: 'bar' });
        },

        newsinfo(obj){
          this.syp = false
          this.xyp = false
          this.$axios.get('http://39.96.43.242/getnews',{params:{...obj}}).then((response)=>{
            // console.log(response);

            this.newsinfos = response.data
            // console.log(typeof this.newsinfos.preobj[0].id);  //number
            this.newid.myid = this.newsinfos.danxiaobj[0].id

            if(this.newsinfos.preobj.length > 0){
              this.preid.myid = this.newsinfos.preobj[0].id
              this.syp = true
            }
            if(this.newsinfos.nextobj.length > 0){
              this.nextid.myid = this.newsinfos.nextobj[0].id
              this.xyp = true
            }

          }).catch((error)=>{
            console.log(error);
          })
        },

       prepian(){
         this.newsinfo(this.preid)

        },
       nextpian(){
          this.newsinfo(this.nextid)
        },
        dankan(n){
          this.newid.myid = n
          this.newsinfo(this.newid)
        },
        async gethotnews(obj){
          this.hotnews = []
          // this.mycounts = 0
          let result = await this.$axios.get('http://39.96.43.242/gethotnews',{params:obj})

          for(let i = 0; i < result.data.data.length; i++){

            this.hotnews.push(result.data.data[i])
          }
        },
        async getwords(){
          let  result = await this.$axios.get('http://39.96.43.242/gethotword')
          // this.hotword = result.data   //得到关键词数组
          this.hotwords.no1.state3 = result.data[0].sword
          this.hotwords.no2.state3 = result.data[1].sword
          this.hotwords.no3.state3 = result.data[2].sword
          this.hotwords.no4.state3 = result.data[3].sword

        },
        RetrunList(){
          this.$router.push({path:'/news',query:{}});
        },
      },
      mounted(){
          // console.log(this.$route.params.id)  // 1
        // this.restaurants = this.loadAll()
        this.newid.myid = this.$route.params.id
        this.newsinfo(this.newid)
        // this.querynews()
        this.gethotnews()
        this.getwords()

      },
      updated() {
        // debugger
        // console.log(this.$refs.neirongpp);
        // console.log(this.newsinfos[0].contents);

        // this.$refs.neirongpp.innerHTML = this.newsinfos.danxiaobj[0].contents//newsinfos.danxiaobj[0]
      }

    }
</script>

<style>
  .zhengdi{
    margin-top: 4rem;
  }
  .imgdingw{
    width: 40%;
  }
  .imgdingw img{
    width: 100%;
  }
  .dp1 {
    font-size: 1.8rem;
    /*color: #04cb94;*/
    color: #2e4446;

  }
  .dp2{
    font-size: 0.8rem;
    color: #6c7c7d;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .dp3{
    font-size: 0.8rem;
    color: #6c7c7d;
    letter-spacing: 1px;
  }
  .fenxian{
    border-bottom: 1px solid #ecf0f5;
    padding-bottom: 1rem;
    margin-top: 1rem;
  }
  .el-pagination{
    text-align: center;
  }
  .el-pagination li.active {
    background: #01b077 !important;
  }
  .searchdiv {
    margin-top: 1rem;
    margin-left: 0.5rem;
    padding-top: 1rem;
    padding-left: 0.5rem;
    width: 95%;

    -moz-box-shadow:0px 0px 0.8em #e2e3e5;
    -webkit-box-shadow:0px 0px 0.8em #e2e3e5;
    box-shadow:0px 0px 0.8em #e2e3e5;
    padding-bottom: 15%;

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
  a:hover p{
    color: #46a976;
  }
  a:link, a:hover, a:visited, a:active {
    text-decoration:none;
  }
  .rmwz{
    color: #46a976;
    font-weight: bold;
    margin-right: 1rem;
  }
  .rmwztext{
    color: #2e4446;

  }
  .rmwzdiv{
    border-bottom: 1px solid #ecf0f5;
    margin-top: 1rem;
    width: 90%;
  }
  .gjzding2{
    margin-top: 0.7rem;
  }
  .gjzding2 span{
    color: #617375;
    font-size: 0.7rem;
    margin-right: 1rem;
    font-family: zxfont;
  }
  .gjzding2 a:link,.gjzding2 a:visited,.gjzding2 a:active{
    color: #617375;
  }
  .gjzding2 a:hover{
    color:#46a976;
  }
  .rmwzlistt{
    margin-top: 3rem;
    -moz-box-shadow:0px 0px 0.8em #e2e3e5;
    -webkit-box-shadow:0px 0px 0.8em #e2e3e5;
    box-shadow:0px 0px 0.8em #e2e3e5;
    width: 95%;
    margin-left: 0.5rem;
    padding-top: 1rem;
    padding-left: 0.5rem;
    padding-bottom: 1rem;
  }
  .rmwzjttitle p{
    font-size: 0.8rem;
    width: 90%;
    font-family: zxfont;
  }
  .seldingwei{
    margin-top: 1rem;
    margin-left: 0.7rem;
  }
  .footer .el-pagination li.active {
    background: #01b077 !important;
    color: white !important;
  }
  .el-pagination li {
    border-radius: 8px;
  }
  .bigclass{
    color: #52645e;
    font-size: 2.5rem;
    font-weight: bold;
  }
  .rmch {
    color: #a5adb2;
    font-size: 1rem;
  }
.huaxian{
  border-bottom: 1px solid #ecf0f5;
}
  .mybuttom:hover {
    background-color: #39c195;
    color: white;
  }
  .bianse5:hover p{
    color: #46a976;
  }
  .bianse5:link, .biansel:hover, .biansel:visited, .biansel:active {
    text-decoration:none;
  }
  .xyjstyle2{
    color: #617375;
    font-family: zxfont;
  }
  .neirongdingwei{
    margin-top: 2rem;
    font-family: zxfont;
  }
  .riqiyanse2{
    color: #6c7c7d;
  }
  .el-input__inner:focus{
    border-color: #46a976;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #46a976;
  }
  .searchdiv input{
    width: 12rem;
    height: 2rem;
  }
  .el-input-group{
    width: 90%;
  }
  .ql-container.ql-snow {
    border: none;
  }
  .containwidth{
    max-width: 1000px;
    height: auto;
  }
</style>
