import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Board from '../components/Board'
import Web from '../components/Web'
import QnA from '../components/QnA'
import Mypage from '../components/Mypage'
import NotFound from '../components/NotFound'

Vue.use(Router);

const router = new Router({
	mode : 'history',
	routes: [
		{path : '/', name : 'Home', component : Home},
		{path : '/portfolio', name : 'Portfolio', component : Portfolio},
		{path : '/web', name : 'Web', component : Web,
			beforeEnter : (to, from, next) => {
				alert('준비중입니다.');

				next('/');
			}
		},
		{path : '/board', name : 'Board', component : Board},
		{path : '/Mypage/:name', name : 'Mypage', component : Mypage},
		{path : '/qna', name : 'QnA', component : QnA,
			beforeEnter : (to, from, next) => {
				alert('준비중입니다.');

				next('/');
			}
		},
		{path : '*', name : 'NotFound', component : NotFound},
	]
});

export default router;