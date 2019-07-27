<template>

    <div class="rongzibannerbg ccposistion">
      <div class="control-arrow">
        <div ref="opapre" class="pre-div" @click="leftmoveban">
          <div class="pre-arrow"></div>
        </div>
        <div ref="opanext" class="next-div" @click="rightmoveban">
          <div class="next-arrow"> </div>
        </div>
      </div>
      <div class="container "  @mouseenter="enter" @mouseleave="leave">

        <div class="carousel">
          <transition-group
            tag="ul"
            name="image"
            enter-active-class="animated lightSpeedIn"
            leave-active-class="animated lightSpeedOut"
          >
            <li v-for='(images,indexs) in img' :key='indexs' v-show="indexs === mark">
              <a href="javascript:;">
                <img :src="images" class="img-responsive">
              </a>
            </li>
          </transition-group>

        </div>
      </div>
     </div>

</template>

<script>

    export default {
        name: "rongziimgban",
      data(){
          return{
            mark:0,
            img:[
              './static/rongyuaboutusimg_04.png',
              './static/rongyuaboutusimg_08.png',
            ],
            time:null,

          }
      },
      methods:{
        change(i){
          this.mark = i;
          console.log(this.mark)
        },
        prev(){

          this.mark--;

          if(this.mark === -1){
            this.mark = 3;
            return
          }
        },
        next(){
          this.mark++;

          if(this.mark === 4){
            this.mark = 0;
            return
          }
        },
        autoPlay(){
          this.mark++;

          if(this.mark === 2){
            this.mark = 0;
            return
          }
        },
        play(){
          this.time = setInterval(this.autoPlay,3000);
        },
        enter(){

          clearInterval(this.time);
        },
        leave(){

          this.play();
        },
        leftmoveban(){

          this.mark = 0;
        },
        rightmoveban(){
          this.mark = 1;

        }
      },
      created(){
        this.play()
      },
      mounted() {
      }
    }
</script>

<style>
.rongzibannerbg{
  background-color: #f8fbfc;
  /*position: relative;*/
}
li{
  list-style: none;
}
.carousel{
  width: 100%;
  height: 100%;
  /*height: 65.5rem;*/
  /*height: 100%;*/
  padding-bottom: 90%;
  overflow: hidden;
  /*margin: 100px auto;*/
  /*position: relative;*/
}


.carousel ul{
  width: 100%;
}
.carousel ul li{
  position: absolute;
}
.carousel ul li a img{
  width: 100%;
  /*height: 300px;*/
}
.ccposistion{
  position: relative;
}
.ccposistion:hover .control-arrow{
  opacity: 1;
}
.control-arrow{
  opacity: 0;
  top: 45%;
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 100%;
  display: flex;
  position: absolute;
  z-index: 2;
  justify-content: space-between;
}
.pre-div{
  width: 60px;
  height: 60px;
  background-color: rgba(46,53,68,.2);
  border-radius: 50%;
  position: relative;
}
.pre-div:hover .pre-arrow{
  opacity: 1;
}
.next-div{
  width: 60px;
  height: 60px;
  background-color: rgba(46,53,68,.2);
  border-radius: 50%;
  position: relative;
}
.next-div:hover .next-arrow{
  opacity: 1;
}
.pre-arrow{
  opacity: 0.5;
  position: absolute;
  width: 30px;
  height: 30px;
  border-top:2px solid #fff;
  border-left: 2px solid #fff;
  top: 1rem;
  left: 1.4rem;
  transform: rotate(-45deg);
}
.next-arrow{
  opacity: 0.5;
  position: absolute;
  width: 30px;
  height: 30px;
  border-top:2px solid #fff;
  border-left: 2px solid #fff;
  top: 1rem;
  left: 0.5rem;
  transform: rotate(135deg);
}
.mainctrol:hover .control-arrow{
  opacity: 1;
  transition: opacity .2s;
}

</style>
