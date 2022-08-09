<template>
  <WebHeader/>
  <h1>게시판세부내용페이지입미다</h1>
  <h3>page id is {{pageId}}</h3>
  <HelloWorld :StoreName="this.$storeList[pageId].title" :Catagory="this.$storeList[pageId].category" :Distance=this.$storeList[pageId].distance />
  <hr/>
  {{routeParams}}
  <hr/>
  <template v-if="pageId">
  </template>
  <template v-else>
    게시글을 찾을 수 없습니다.
  </template>

  <div class="mainStoreImg">
            <img :src="this.$storeList[pageId].imageLink" alt="매장사진">
        </div>
        <div class="storeNameDetail">
            <p>{{this.$storeList[pageId].title}}</p>
            <div class="storeStarDetail">
                <span class="mainStarDetail"><span style="width: 89%;"></span></span>
                <span class="star-1">4.5</span>
                <span class="star-2">|</span>
                <span class="distance">{{this.$storeList[pageId].distance}}m</span>
            </div>
        </div>
        <div class="storeBar">
            <a href="#" class="B-call">
                <i>전화</i>
            </a>
            <a href="#" class="B-heart">
                <i>106</i>
            </a>
            <a href="#" class="B-share">
                <i>공유</i>
            </a>
            <a href="#" class="B-emptyseat">
                <i>12/35</i>
            </a>
        </div>
        <article>
            <p class="storeInformation">영업정보</p>
            <div class="storeInformationBox">
                <span class="InformationTitle">영업시간</span>
                <span class="InformationContent">9:00~10:00</span>
                <span class="InformationTitle">휴무일</span>
                <span class="InformationContent">-</span>
            </div>
            <p class="storeInformationL">위치</p>
            <div class="storeInformationBox">
                <span class="InformationTitle">{{this.$storeList[pageId].location}}</span>
                <span href="#" class="copy">복사</span>
            </div>
        </article>
        <article>
            <div class="box">
                <div></div>
            </div>
        </article>
</template>

<script>
import WebHeader from '../components/WebHeader.vue'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  components: {
    WebHeader,
    HelloWorld,
  },
  data(){
    return{
      routeParams: this.$route.params,
      pageId: this.$route.params.pageId,
    }
  }
}
</script>

<style>
a{text-decoration: none; color: black;}
li{list-style: none;}

.mainStoreImg img{
    width: 374px;
    height: 216px;
    border-radius: 17px;

    margin-top: 71px;
    margin-left: 20px;
    margin-right: 20px;
}

.storeNameDetail {
    width: 414px;
    height: 63px;

    margin-top: 28px;
    padding-left: 21px;
}

.storeNameDetail p {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
}

.storeStarDetail {
    margin-top: 12px;
}

.dn {
    display: none;
}

.star-1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
}

.star-2 {
    color: #DFDFDF;
}

.distance {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.3px;

    color: #FF0000;
}

.storeBar {
    margin-top: 29px;

    width: 414px;
    height: 80px;
    background-color: #ffff;

    text-align: center;
    line-height: 120px;

    border-bottom: 12px solid #EBEBEB;
}

.storeBar a.B-call {
    background-image: url(../assets/B-call.png);
    background-size: 37px 38px;
    border-right: 0.1px solid #f5f5f5;
}

.storeBar a.B-heart {
    background-image: url(../assets/B-heart.png);
    background-size: 29px 26px;
    border-right: 0.1px solid #f5f5f5;
}

.storeBar a.B-share {
    background-image: url(../assets/B-share.png);
    background-size: 35px 35px;
    border-right: 0.1px solid #f5f5f5;
}

.storeBar a.B-emptyseat {
    background-image: url(../assets/B-emptyseat.png);
    background-size: 32px 33px;
}

.storeBar a {
    display: block;
    float: left;
    height: 74px;
    width: 102px;
    background: 50% 50% no-repeat;
    overflow: hidden;
}

.storeBar i {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
}

.storeInformation:before {
    content:"";
    background-image: url("../assets/clock.png") ;
    background-size:24px 24px;
    width: 24px;
    height:24px;
    display:inline-block;
    transform: translateY(20%);
    margin-right: 4px;
    margin-left: 16px;
    margin-top: 20px;
}

.storeInformation {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
}

.storeInformationBox {
    margin-top: 8px;
    width: 394px;
    padding-left: 20px;
}

.InformationTitle {
    margin-right: 22px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #7E7E7E;
}

.InformationContent {
    margin-right: 45px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
}

.storeInformationL:before {
    content:"";
    background-image: url("../assets/location.png") ;
    background-size:24px 24px;
    width: 24px;
    height:24px;
    display:inline-block;
    transform: translateY(25%);
    margin-right: 4px;
    margin-left: 16px;
    margin-top: 35px;
}

.storeInformationL {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
}

.copy:before {
    content:"";
    background-image: url("../assets/copy.png") ;
    background-size:13px 13px;
    width: 13px;
    height: 13px;
    display:inline-block;
    transform: translateY(25%);
}

.copy {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: #0075FF;
}

.box {
    position: relative;

    margin-top: 26px;

    width: 414px;
    height: 182px;
    background-color: #EBEBEB;

}

.box div {
    width: 374px;
    height: 149px;
    background-color: white;

    border-radius: 12px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>