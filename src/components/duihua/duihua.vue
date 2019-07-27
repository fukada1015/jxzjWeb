<template>
    <div class="talkbg">
      <div class="container talkkuang">
        <div class="row">
          <div class="col-md-5">
            <div class="col-sm-12" style="margin-bottom: 1.5rem">
              <div class="duihualt"><span style="font-family: zxfont">机械之家-工程机械零配件S2B供应链平台</span></div>
              <div class="duihualt2"><span style="font-family: zxfont">湖南机械之家信息科技有限公司成立于2015年1月，是一家以工程机械后市场服务为核心的产业互联网公司，致力于机械后市场服务的标准化、智能化。</span></div>
              <div class="duihualt3"><span style="font-family: zxfont">看看他们怎么说？</span></div>
              <div class="duihualt4"><span @click="movegys" style="cursor: pointer;font-family: zxfont" @mouseenter="stopset" @mouseleave="playset">供应商</span>&nbsp;&nbsp;<span style="font-family: zxfont">|</span>&nbsp;&nbsp;<span @click="movegkh" style="cursor: pointer;font-family: zxfont" @mouseenter="stopset" @mouseleave="playset">客户</span>&nbsp;&nbsp;<span style="font-family: zxfont">|</span>&nbsp;&nbsp;<span @click="movegtzr" style="cursor: pointer;font-family: zxfont" @mouseenter="stopset" @mouseleave="playset">投资人</span></div>
              <div class="dibuhengxian">
                <div :class="[wzclass1,wzclass2]"></div>
              </div>
            </div>
          </div>
          <div ref="beijingban" :class="[classnone,classdong]" style="background-color:white; border-radius: 10px;margin-left: 2rem;position: relative;"@mouseenter="stopset" @mouseleave="playset">

            <div class="duihuaneirong" >
              <p style="color: #01b053; font-family: zfont">{{yonghu}}</p>
              <p class="neirongclass">{{neirong}}</p>
            </div>
            <div class="xiaoyuandian">
            </div>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "duihua",
      data(){
          return{
            showimgs:[0,0,0],
            classnone:'col-md-6',
            classdong:'beijingbandonghua',
            dabaihua:[
              '和机械之家做生意靠谱，从未拖欠账款，我给他们两个月的账期，到结算日之前一定会打款给我，这样的客户我很信任。他们自己有配件确型系统，采购员也很专业，每次找我采购配件都能精准确型，这样我不用担心发错货。他们前不久推出的机配宝，能随时查看我和机械之家的生意往来数据，新订单来了也有提醒，采购什么配件在上面说的明明白白，我见单发货就行，很方便，有新商品还能直接在上面添加，他们就能找我采购，听说以后还能直接提现，看自己的库存，我希望早点上线。和机械之家合作很靠谱，支持！',
              '我还关注了泵车之家、吊车之家、挖机之家的公众号，经常阅读上面的文章，上面的内容很贴合我们行业，不仅有相关的专业知识，还有最新行业资讯。',
              '钟鼎创投合伙人汤涛表示：“工程机械后市场存在着巨大的存量市场改造机会，市场规模大，流通环节复杂。机械之家通过数年沉淀，一直在围绕工程机械零配件后市场的数据库系统，交易自动化和智能化，交付闭环等核心方向做长期的战略投入，极大地提高了交易效率。”金沙江联合资本合伙人暨董事总经理尹德纲表示：“我们一直在关注工程机械供应链服务、后市场的投资机会，机械之家的创始人、核心团队深度了解行业的痛点和升级需求，公司已快速成为了行业领头羊，这轮投资将协助公司深铸其核心竞争力及商业与技术壁垒”。',
            ],
            neirong:'和机械之家做生意靠谱，很少拖欠账款，我给他们两个月的账期，到结算日之前一定会打款给我，这样的客户我很信任。他们自己有配件确型系统，采购员也很专业，每次找我采购配件都能精准确型，这样我不用担心发错货。他们前不久推出的机配宝，能随时查看我和机械之家的生意往来数据，新订单来了也有提醒，采购什么配件在上面说的明明白白，我见单发货就行，很方便，有新商品还能直接在上面添加，他们就能找我采购，听说以后还能直接提现，看自己的库存，我希望早点上线。和机械之家合作很靠谱，支持！',
            wzclass1:'dibuxiaoxian',
            wzclass2:'dibuxiaoxian_dingwei1',
            yonghu:'供应商',
            mytimer:null,
            mycounts:1,
          }

      },
      methods:{
          movegys(){
            this.showimg();
            this.mycounts = 1;
          },
          movegkh(){
            this.showimg();
            this.mycounts = 2;
          },
          movegtzr(){
            this.showimg();
            this.mycounts = 3;
          },
          mycall(){
            // console.log('aaaaa')
            this.classdong = 'beijingbandonghua1'
            switch(this.mycounts){
              case 1:
                this.yonghu = '供应商'
                this.neirong = '和机械之家做生意靠谱，从未拖欠账款，我给他们两个月的账期，到结算日之前一定会打款给我，这样的客户我很信任。他们自己有配件确型系统，采购员也很专业，每次找我采购配件都能精准确型，这样我不用担心发错货。他们前不久推出的机配宝，能随时查看我和机械之家的生意往来数据，新订单来了也有提醒，采购什么配件在上面说的明明白白，我见单发货就行，很方便，有新商品还能直接在上面添加，他们就能找我采购，听说以后还能直接提现，看自己的库存，我希望早点上线。和机械之家合作很靠谱，支持！'
                this.wzclass2='dibuxiaoxian_dingwei1'
                break
              case 2:
                this.yonghu = '客户'
                this.neirong = '机械之家服务平台上的配件很齐全，确型简单不怕买错，还能提供专业的技术支持，节省了我的采购成本，确实很省心。有一次从机械之家买了一批泵管，运输过程中物流人员把耐磨套碰掉了，机械之家的客服了解后，第一时间免费帮我补发了过来，这是一个很守信用的平台，在这里买配件我很放心。\n' +
                  '我还关注了 泵车之家  吊车之家 挖机之家，经常阅读上面的文章，上面的内容很贴合我们行业，不仅有相关的专业知识，还有最新行业资讯。'
                this.wzclass2='dibuxiaoxian_dingwei2'
                break
              case 3:
                this.yonghu = '投资人'
                this.neirong = '钟鼎创投合伙人汤涛表示：“工程机械后市场存在着巨大的存量市场改造机会，市场规模大，流通环节复杂。机械之家通过数年沉淀，一直在围绕工程机械零配件后市场的数据库系统，交易自动化和智能化，交付闭环等核心方向做长期的战略投入，极大地提高了交易效率。”金沙江联合资本合伙人暨董事总经理尹德纲表示：“我们一直在关注工程机械供应链服务、后市场的投资机会，机械之家的创始人、核心团队深度了解行业的痛点和升级需求，公司已快速成为了行业领头羊，这轮投资将协助公司深铸其核心竞争力及商业与技术壁垒”。'
                this.wzclass2='dibuxiaoxian_dingwei3'
                break
            }
          },
          showimg(){
            this.classdong = 'beijingbandonghua2'
            if(this.mycounts > 2){
              this.mycounts = 1
              this.neirong = ''
              this.yonghu = ''
            }else{
              this.mycounts ++
              this.neirong = ''
              this.yonghu = ''
            }

          },
          stopset(){
            clearInterval(this.mytimer)
          },
           playset(){
            this.mytimer = setInterval(()=>{
              this.showimg()
          },4000)
        },
      },
      mounted() {
        // this.myinit()
        this.$refs.beijingban.addEventListener("animationend",this.mycall)
        this.mytimer = setInterval(()=>{
          this.showimg()
        },4000)
      }
    }
</script>

<style>
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
  .dibuxiaoxian{
    height: 2px;
    background-color: white;
    width: 30px;
    border-radius: 2px;
    position: absolute;
  }
  .dibuxiaoxian_dingwei1{

    animation:nodfisrt1 0.4s ease;
    animation-fill-mode: forwards;
  }
  .dibuxiaoxian_dingwei2{

    animation:nodfisrt2 0.4s ease;
    animation-fill-mode: forwards;
  }
  .dibuxiaoxian_dingwei3{

    animation:nodfisrt3 0.4s ease;
    animation-fill-mode: forwards;
  }
  .dibuhengxian{
    padding-top: 8px;
    height: 1rem;
    width: 170px;
    position: relative;
  }
  .duihuaneirong{
      margin-top: 1rem;
  }
  .xiaoyuandian{
    background-color: #05cb94;
    width: 12px;
    height: 12px;
    position: absolute;
    border-radius: 50%;
    bottom: 1rem;
    left: 93%;
  }
  .yuanxingdingwei{
    -moz-box-shadow: 0px 3px 10px #a19e9e; /* 老的 Firefox */
    box-shadow: 0px 3px 10px #a19e9e;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .talkbg{
    width: 100%;
    background-color: #04cb94;
  }
  .talkkuang{
    width: 75rem;
    margin: 0 auto;
    padding: 4rem 0;
  }
  .duihualt span{
     color: white;
     font-size: 1.4rem;
   }
  .duihualt2 span{
    color: white;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }
  .duihualt2 {
    margin-top: 3rem;
  }
  .duihualt3 {
    margin-top: 3rem;
  }
  .duihualt3 span {

    font-size: 1.5rem;
    color: white;
  }
  .duihualt4 {
    margin-top: 0.5rem;
  }
  .duihualt4 span {

    font-size: 1rem;
    color: white;
  }
  .imgtalk img {
    width: 100%;
    height: auto;
    display: block;
  }
  @keyframes myfirst {
    0%{
      height: 0px;
    }
    100%{
      height: 280px;
    }
  }
  @-webkit-keyframes myfirst {
    0%{
      height: 0px;
    }
    100%{
      height: 280px;
    }
  }

  @keyframes myfirstd {
    0%{
      height: 0px;
    }
    100%{
      height: 340px;
    }
  }
  @-webkit-keyframes myfirstd {
    0%{
      height: 0px;
    }
    100%{
      height: 340px;
    }
  }

  @keyframes myfirst2d {
    0%{
      height: 340px;
    }
    100%{
      height: 0px;
    }
  }
  @-webkit-keyframes myfirst2d {
    0%{
      height: 340px;
    }
    100%{
      height: 0px;
    }
  }

  @keyframes myfirst2 {
    0%{
      height: 280px;
    }
    100%{
      height: 0px;
    }
  }
  @-webkit-keyframes myfirst2 {
    0%{
      height: 280px;
    }
    100%{
      height: 0px;
    }
  }
  .beijingbandonghua1{
    animation:myfirst 0.4s ease;
    animation-fill-mode: forwards;
  }



  .beijingbandonghua2{
    animation:myfirst2 0.4s ease;
    animation-fill-mode: forwards;
  }

  @keyframes nodfisrt1 {
    0%{
      left: 129px;
    }
    100%{
      left: 10px;
    }
  }
  @-webkit-keyframes nodfisrt1 {
    0%{
      left: 129px;
    }
    100%{
      left: 10px;
    }
  }
  @keyframes nodfisrt2{
    0%{
      left: 10px;
    }
    100%{
      left: 69px;
    }
  }
  @-webkit-keyframes nodfisrt2{
    0%{
      left: 10px;
    }
    100%{
      left: 69px;
    }
  }
  @keyframes nodfisrt3 {
    0%{
      left: 69px;
    }
    100%{
      left: 129px;
    }
  }
  @-webkit-keyframes nodfisrt3 {
    0%{
      left: 69px;
    }
    100%{
      left: 129px;
    }
  }
.neirongclass{
  line-height: 26px;
  font-size: 14px;
  font-family:zxfont;
  color: #333;
}
  @media screen and (min-width: 768px) {
    .beijingbandonghua1{
      animation:myfirstd 0.4s ease;
      animation-fill-mode: forwards;
    }
    .beijingbandonghua2{
      animation:myfirst2d 0.4s ease;
      animation-fill-mode: forwards;
    }
  }
  @media screen and (min-width: 991px) {
    .beijingbandonghua1{
      animation:myfirst 0.4s ease;
      animation-fill-mode: forwards;
    }
    .beijingbandonghua2{
      animation:myfirst2 0.4s ease;
      animation-fill-mode: forwards;
    }
  }

</style>
