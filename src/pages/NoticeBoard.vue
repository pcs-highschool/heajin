<template>
  <WebHeader/>
  <section class="main">
    <h1 class="d-none">게시판</h1>
    <div class="board">
      <table class="table">
        <thead class="thead">
          <tr>
              <td>번호</td>
              <td>제목</td>
              <td>글쓴이</td>
              <td>작성일</td>
              <td>조회수</td>
          </tr>
        </thead>
        <template v-for="(store,idx) in this.$storeList" :key="idx">
          <tbody class="tbody">
            <tr>
                <td>{{idx}}</td>
                <td><router-link :to="{name:'boardDetail', 
                params:{
                  pageId : idx,
                }}">{{store.title}}</router-link></td>
                <td>{{store.category}}</td>
                <td>2020-02-02</td>
                <td>1</td>
            </tr>
          </tbody>
        </template>
        
      </table>
      <div class="page-wrap">
        <ul class="page-nation">
            <li><a href="/board/list?p=1">1</a></li>
            <li><a href="/board/list?p=2">2</a></li>
            <li><a href="/board/list?p=3">3</a></li>
            <li><a href="/board/list?p=4">4</a></li>
            <li><a href="/board/list?p=5">5</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import WebHeader from "../components/WebHeader.vue";

export default {
  components: {
    WebHeader,
  },
};
</script>

<style>
.main {
  height: 100%;

  width: 100%;
}

.d-none {
  display: none;
}

.board {
  width: 1200px;

  height: 100%;

  margin: auto;
}

.table {
  font-size: 20px;

  border-collapse: collapse;

  width: 1200px;

  margin-top: 200px;

  border: 1px solid gray;

  text-align: center;
}

.thead td {
  background: #b2b2b2;
}

td {
  height: 40px;

  border-bottom: 1px solid black;
}

tr td:nth-child(2) {
  width: 750px;
}

/* ********페이징******** */

.page-nation li {
  list-style: none;
}

.page-wrap {
  text-align: center;

  font-size: 0;
}

.page-nation {
  display: flex;

  justify-content: center;

  align-items: center;

  margin-top: 20px;
}

.page-nation a {
  display: block;

  margin: 0 3px;

  float: left;

  border: 1px solid #e6e6e6;

  width: 28px;

  height: 28px;

  line-height: 28px;

  text-align: center;

  background-color: #fff;

  font-size: 13px;

  color: black;

  text-decoration: none;

  font-weight: bold;
}

.page-nation a:hover {
  background-color: gray;

  color: white;
}
</style>