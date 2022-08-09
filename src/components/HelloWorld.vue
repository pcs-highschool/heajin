<template>
  <div class="storeBox">
    <div class="photoBox">
      <div class="Photo"></div>
    </div>
    <div class="storeInfoBox">
      <div class="storeInfo">
        <div class="firstInfo">
          <span class="storeName">{{StoreName}}</span>
          <span class="storeDistance">{{Distance}}m</span>
        </div>
        <span class="storeStar">4.2</span>
        <span class="storeKategorie">{{Catagory}}</span>
      </div>
      <a href="#">바로가기</a>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    StoreName: String,
    Catagory: String,
    Distance: Number,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.storeBox {
    overflow: hidden;
    margin-bottom: 16px;
}

.photoBox {
    float: left;
    width: 136px;
    height: 110px;
    position: relative;
}

.Photo {
    position: relative;

    width: 136px;
    height: 110px;

    background-color: #C4C4C4;
    border-radius: 10px;

}

.heart {
    position: absolute;
    top: 13px;
    right: 10px;

    width: 25px;
    height: 25px;
}

.firstInfo{
  display: block;
}

.storeInfoBox {
    float: left;
    margin-left: 33px;
    margin-top: 15px;

}

.storeInfo {
    width: 145px;
    height: 44px;
    
    padding-bottom: 16px;
    border-bottom: 1px solid #E0E0F4;
}

.storeName {
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;

    margin-right: 3px;
}

.storeDistance {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    letter-spacing: -0.3px;
    margin-right: 10px;
    
    color: #FF0000;
}

.storeStar {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.3px;
    
    color: #FF47CC;

    margin-right: 13px;
}
.storeStar:before {
    content:"";
    background-image: url("../assets/별.png") ;
    background-size:17px 15px;
    width: 17px;
    height: 15px;
    display:inline-block;

    margin-top: 7px;
    margin-right: 8px;
}

.storeKategorie {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    
    letter-spacing: -0.3px;
    
    color: #6F7198;
}

.storeInfoBox a{
    display: inline-block;
    width: 78px;
    height: 24px;
    border-radius: 25px;
    border: 1px solid #b4b5d5;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    letter-spacing: -0.3px;
    
    text-align: center;
    line-height: 24px;
    
    color: #6F7198;
    
    margin-top: 11px;
}
</style>
