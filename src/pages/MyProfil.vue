<template>
  <WebHeader/>
  <div class="main-box">
    <div class="profile-box">
        <div class="title-name">
            <h1>유혜진</h1>
        </div>
        <div class="title-nickname">
            <h2>부산컴퓨터과학고등학교</h2>
        </div>
        <div class="profile-picture">
            <img src="../assets/증사.jpg" style="width:200px;">
        </div>
    </div>
    <div class="content">
        <p>이름 : 유혜진</p>
        <p>직업 : 학생</p>
        <p>나이 : 19</p>
        <p>MBTI : ISFJ</p>
        <br>
        <br>
        <p style="font-weight: 900;">자기소개</p>
        <p>- 부산컴퓨터과학고등학교 제 52대 차석부회장</p>
        <p>- 부산컴퓨터과학고등하교 제 53대 학생회장</p>
        <p>- 너울 8기 언론홍보위원회</p>
        <p>- 대한학생회 20기 사회복지위원회</p>
    </div>
  </div>
</template>

<script>
import WebHeader from '../components/WebHeader.vue'

export default {
  components: {
    WebHeader,
  },
}
</script>

<style>
.main-box {
    height: 1500px;
    background-color:lightblue;
    padding: 40px;

    text-align: center;
}
.profile-picture {
    text-align: center;
}
.title-name,.title-nickname {
    text-align: center;
    font-family: "Noto Sans Kr"
}
.content {
  margin-top: 40px;
    line-height: 1.5;
}
.content>p{
    margin-top: 5px;
    font-family: "Noto Sans Kr";
    font-size: 18px;
}
.profile-box {
    width: auto;
    height: 420px;
    background: white;
    border-radius: 20px;
}
</style>