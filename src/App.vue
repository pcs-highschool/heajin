<template>
<header>
    <p class="headerTitle">찜한매장</p>
  </header>
  <div class="KimBox">
    <span class="StoreNum">찜한 매장 24개</span>
    <div class="arrayBox">
      <select>
        <option v-for="data in modalOption" v-bind:key="data">{{data}}</option>
      </select>

    </div>
  </div>
  <input type="range" v-model="distance" step="100" min="100" max="1000" /> {{ distance }}m
  <template v-for="(store,index) in itemList">
    <HelloWorld :key="index" v-if="store.distance <= distance" :StoreName="store.storeName" :Catagory="store.category" :Distance="store.distance"/>
  </template>

  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return{
      distance:9999,
      modalOption:['최신순', '인기순', '거리순',],
      itemList : [
        {
          storeName : "롯데시네마",
          category : "영화관",
          distance : 200,
        },
        {
          storeName : "아뮤즈",
          category : "회사",
          distance : 100,
        },
        {
          storeName : "세모병원",
          category : "병원",
          distance : 600,
        },
        {
          storeName : "컴과고",
          category : "학교",
          distance : 700,
        },
        {
          storeName : "롯데리아",
          category : "패스트푸드",
          distance : 800,
        },
        {
          storeName : "스타벅스",
          category : "카페",
          distance : 900,
        },
      ]
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
header {
    display: inline-block;

    width: 414px;
    height: 110px;

    box-sizing: border-box;
    padding: 0px 20px;
    
    border-bottom: 12px solid #E6E6E6;
}
.headerTitle {
    display: inline-block;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    letter-spacing: -0.3px;

    margin-top: 46px;
    margin-left: 10px;
}

.KimBox {
    width: 374px;
    height: 59px;

    line-height: 59px;

    display: flex;
    justify-content: space-between;
}

.StoreNum {
    font-family: "";
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    
    letter-spacing: -0.3px;
    
    color: #7E7E7E;
}
.arrayBox {
    display: inline-block;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    
    letter-spacing: -0.3px;
    
    color: #6F7198;
    cursor: pointer;

}
</style>
