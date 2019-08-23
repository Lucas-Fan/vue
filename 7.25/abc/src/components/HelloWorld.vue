<template>
  <div class="hello">
    <div style="width: 100%;height: 50px">
      <input type="text" v-model="text" style="width: 80%;height: 50px">
      <span class="icon-add_circle" style="width: 20%;height: 50px;font-size: 50px;color: aqua"></span>
    </div>
    <div v-for="(item,index) in list" :key="index">
      <el-divider></el-divider>
      <div  class="pad-36">
        <el-row class="">
          <el-col :span="2">
            <el-avatar :size="56" shape="circle" :src="item.avatar"></el-avatar>
          </el-col>
          <el-col :span="1" style="height: 56px"></el-col>
          <el-col :span="14" style="height: 56px">
            <el-row>
              <el-col :span="24" class="userName">{{ item.username }}</el-col>
            </el-row>
            <el-row>
              <span style="float: left;margin-top: 8px;margin-right: 12px">
                <el-rate
                  v-model="item.score"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
<!--                <div v-for="i in score" :key="i" class="star">-->
<!--                  <img src="../../resource/img/star36_on@2x.png" style="width: 24px;height: 24px">-->
<!--                </div>-->
<!--                <div class="star" v-if="isHalf">-->
<!--                  <img v-if="isHalf" src="../../resource/img/star36_half@2x.png" style="width: 24px;height: 24px">-->
<!--                </div>-->
<!--                <div v-for="i in score_2" :key="i" class="star">-->
<!--                  <img src="../../resource/img/star36_off@2x.png" style="width: 24px;height: 24px">-->
<!--                </div>-->
              </span>
              <span class="deliveryTime">
                {{ item.deliveryTime }}分钟送达
              </span>
            </el-row>
          </el-col>
          <el-col :span="7" class="rateTime">{{ item.rateTime }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="21" :offset="3" class="text">{{ item.text }}</el-col>
        </el-row>
        <el-row>
          <el-col :span="1" :offset="3" class="mar-t-16 mar-b-36">
            <span v-if="item.rateType" class="icon-thumb_up zan" style="color: #00a0dc"></span>
            <span v-if="!item.rateType" class="icon-thumb_down zan" style="color: #b7bbbf"></span>
          </el-col>
          <el-col :span="20">
            <el-col :span="5" class="mar-t-16 mar-b-36 cai txt" v-for="(it,index) in item.recommend" :key="index">{{ it }}</el-col>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      // score: 5,
      // score_2: 0,
      // isHalf: false,
      name: '',
      deliveryTime: '',
      text: '',
      time: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getData () {
      var api = 'https://www.easy-mock.com/mock/5d381969dbfb24609ce19668/elem/ratings'
      Axios.get(api).then((res) => {
        this.list = res.data.data
        // console.log(this.list.score)
        // this.score = Math.floor(this.list.score)
        // if (parseInt(this.list.score) === this.list.score) {
        //   this.isHalf = false
        // } else {
        //   this.isHalf = true
        // }
      }).catch((errno) => {
        console.log(errno)
      })
    },
    comment () {

    }
  },
  created () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.userName{
  font-size: 20px;
  line-height: 24px;
  color: rgb(7,17,27);
  height: 24px;
  text-align: left
}
.deliveryTime{
  margin-top: 8px;
  float: left;
  font-size: 20px;
  font-weight: 200;
  line-height: 24px;
  color: rgb(147,153,159);
  height: 24px;
  text-align: left
}
.text{
  font-size: 24px;
  line-height: 36px;
  color: rgb(7,17,27);
  text-align: left
}
.zan{
  font-size: 24px;
  line-height: 32px;
}
.star{
  float:left;
  width: 24px;
  height: 24px;
  margin-top: 8px;
  margin-right: 5px
}
.rateTime{
  height: 56px;
  font-size: 20px;
  font-weight: 200;
  color: rgb(147,153,159);
  line-height: 24px;
}
.cai{
  padding-left: 12px;
  padding-right: 12px;
  border:solid;
  border-width: 1px;
  border-color: rgba(7,17,27,0.1);
  border-radius: 2px;
  background-color: rgb(255,255,255);
  font-size: 18px;
  color: rgb(147,153,159);
  line-height: 32px;
  margin-left: 16px;
}

.txt{
  width: 110px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
