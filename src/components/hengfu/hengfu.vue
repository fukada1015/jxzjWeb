<template>

  <div>
    <el-row class="hengfu shadow" type="flex" justify="center">
     <el-col :span="11" class="wow ding wzanimation" data-wow-delay=".4s"><router-link :to="'/newsinfo/'+ showcont[0].id" class="bianselheng"><h5 style="color: #656464;font-family: zxfont; text-align: center">{{gongsi}}</h5><p class="wenzi" style="margin: 0 auto">{{`${showcont[0].title.substring(0,20)}...`}}</p></router-link></el-col>
        <el-col :span="1" ><div class="shuxiangeli"></div></el-col>
      <el-col :span="11" class="wow ding wzanimation" data-wow-delay=".7s"><router-link :to="'/newsinfo/'+ showcont[1].id" class="bianselheng"><h5 style="color: #656464;font-family: zxfont;text-align: center">{{meitibaodao}}</h5><p class="wenzi" style="margin: 0 auto">{{`${showcont[1].title.substring(0,20)}...`}}</p></router-link></el-col>
    </el-row>
  </div>

</template>

<script>
  import axios from 'axios'
  import vueaxios from 'vue-axios'
    export default {
        name: "hengfu",
      data(){
          return{
            gongsi:'公司动态',
            wenzi:'“机械之家”获数千万元 A 轮融资，钟鼎创投领\n' +
              '投，将着力底层系统、供应链及线下仓库建设',
            meitibaodao:'媒体报道',
            mtbdwz:'千人峰会 谱写序曲 2019长沙国际\n' +
              '工程机械展22项主体活动全面展开',
            canshu:{
              mytype:'1',
              cont:'1',
            },
            datacent:{},
            showcont:[],


          }
      },
      methods:{
        async getinfo(obj){
          this.showcont = []
          let result = await this.$axios.get('http://39.96.43.242/getinfo',{params:obj})
          console.log(result);

          for(let i = 0; i < 2; i++){
            this.showcont.push(result.data.data[i])
          }
          console.log(this.showcont)
        },
      },
      mounted() {
        this.getinfo(this.canshu)

      }
    }
</script>

<style>
  .shuxiangeli{
    background-color: #f1f1f1;
    width: 2px;
    height: 100%;
    margin: -10px auto;
  }
  .shadow{
    -moz-box-shadow: 0px 3px 10px #a19e9e; /* 老的 Firefox */
    box-shadow: 0px 3px 10px #a19e9e;
  }
.hengfu{
  margin: 0 auto;
  max-width: 75rem;
  /*min-height: 10.6rem;*/
  background: #fefdfd;
  padding-bottom: 1rem;
  padding-top: 2rem;
}

.wzanimation{
  -webkit-animation-name: -webkit-wzanimation;
  animation-name: wzanimation;
}
  @keyframes -webkit-wzanimation{
    0% {
      opacity: 0;
      -webkit-transform: translateY(32px);
      transform: translateY(32px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(30);
      transform: translateY(30);

    }
  }
  @keyframes wzanimation{
    0% {
      opacity: 0;
      -webkit-transform: translateY(32px);
      -ms-transform: translateY(32px);
      transform: translateY(32px);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(30);
      -ms-transform: translateY(30);
      transform: translateY(30);
    }
  }
  .wenzi {
    font-size: 0.9rem;
    width: 322px;
    color: #50595a;
    line-height: 2rem;
    text-align: center;
    font-family: zfont;
  }

  .wenzi2 {
    font-size: 0.9rem;
    width: 229px;
    color: #50595a;
    line-height: 2rem;
    font-weight: bold;
  }

  .ding2 {
    opacity:0;
    padding: 0 6rem;
    position: relative;
    animation:mymovewz2 2s;
    animation-fill-mode: forwards;
    animation-delay:.9s;
  }
  .bianselheng:hover p{
    color: #46a976;
  }
  .bianselheng:link, .bianselheng:hover, .bianselheng:visited, .bianselheng:active {
    text-decoration:none;
  }
</style>
