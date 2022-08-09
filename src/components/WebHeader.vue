<template>
  <div class="page">
    <header id="WebHeader">
        <h2>혜진</h2>
        <nav>
            <ul>
                <li><router-link to="/">첫화면</router-link></li>
                <li><router-link to="/about">소개</router-link></li>
                <li><router-link to="/board">게시판</router-link></li>
                <li><router-link to="/contact">문의</router-link></li>
            </ul>
        </nav>
    </header>
  </div>
</template>

<script>

export default {
    name: 'WebHeader',
}
</script>

<style>
#WebHeader ul {
    list-style: none;
}

#WebHeader a {
    text-decoration: none;
    outline: none;
}

.page {
    width: 100%;
    margin: 0 auto;

    border-bottom: 2px solid #000;
}

#WebHeader {
    width: 100;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#WebHeader > h2 {
	margin-left:10px;
}

#WebHeader > nav {
	width:800px;
	height:100%;
}

#WebHeader ul {
	height: 100%;
	display: flex;
	justify-content: space-between;
    margin-right: 40px;
}

#WebHeader ul > li {
	font-size:20px;
	height: 100%;
	display: flex;
	align-items: center;
}
</style>