<template>
	<div class="footer">	
		<router-link v-for="(list,index) in f_list" :key="index" :to="list.route">	
			<div class="list" :class="{color: list.colorr == indexr}">
				<div class="f_icon" :class="[list.bg,{'active':list.colorr == indexr}]"></div>{{list.text}}
			</div>
			
			<!-- <div class="list" :class="{color: list.colorr == indexr}">
				<div class="f_icon" :class="[list.bg, 'active']"></div>{{list.text}}
			</div>
			<div class="list" v-else>
				<div class="f_icon" :class="list.bg"></div>{{list.text}}
			</div> -->
			
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				index_r: 0,
				f_list:[
					{text:'首页',colorr:'0', bg:'homepage',bgColor:'homepage_r',route:'/'},
					{text:'商城',colorr:'1', bg:'stock_right',bgColor:'stock_right_r',route:'/shop'},
					{text:'购物车',colorr:'2', bg:'shopping_cart',bgColor:'shopping_cart_r',route:'/shopping_cart'},
					{text:'我的',colorr:'3', bg:'my',bgColor:'my_r',route:'/my'}
				]
			}
		},
		props:['indexr']
	}
</script>

<style>
	.footer {
		position: fixed;
		left: 0;
		bottom: 0rem;
		width: 100%;
		height: 4rem;
		display: flex;
		justify-content: space-around;
		background-color: #fff;
		z-index: 9;
	}
	.footer .list {
		height: 4rem;
		width: 100%;
		text-align: center;
		color: #333;
		border-radius: 4px;
		font-size: 1rem;
	}
	.footer .color{
		color: #f00;
	}
	.footer .list .f_icon{
		width: 1.7rem;
		height: 1.7rem;
		margin: .2rem auto;
	}
	.list.on {
		background: sandybrown;
		color: #fff;
	}
	
	
	.homepage{
		background: url(../../static/images/tab_01.png) no-repeat center;
		background-size: 100% 100%;
	}
	.stock_right{
		background: url(../../static/images/tab_02.png) no-repeat center;
		background-size: 100% 100%;
	}
	.shopping_cart{
		background: url(../../static/images/tab_03.png) no-repeat center;
		background-size: 100% 100%;
	}
	.my{
		background: url(../../static/images/tab_04.png) no-repeat center;
		background-size: 100% 100%;
	}
	
	/* .homepage_r{
		background: url(../../static/images/tab_01_r.png) no-repeat center;
		background-size: 100% 100%;
	}
	.stock_right_r{
		background: url(../../static/images/tab_02_r.png) no-repeat center;
		background-size: 100% 100%;
	}
	.shopping_cart_r{
		background: url(../../static/images/tab_03_r.png) no-repeat center;
		background-size: 100% 100%;
	}
	.my_r{
		background: url(../../static/images/tab_04_r.png) no-repeat center;
		background-size: 100% 100%;
	} */
	
	
	.homepage.active{
		background: url(../../static/images/tab_01_r.png) no-repeat center;
		background-size: 100% 100%;
	}
	.stock_right.active{
		background: url(../../static/images/tab_02_r.png) no-repeat center;
		background-size: 100% 100%;
	}
	.shopping_cart.active{
		background: url(../../static/images/tab_03_r.png) no-repeat center;
		background-size: 100% 100%;
	}
	.my.active{
		background: url(../../static/images/tab_04_r.png) no-repeat center;
		background-size: 100% 100%;
	}
	
	a{width: 100%;display: inline-block;text-align: center;text-decoration: none;}
</style>
