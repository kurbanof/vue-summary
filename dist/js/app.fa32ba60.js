(function(t){function e(e){for(var o,r,a=e[0],i=e[1],u=e[2],b=0,d=[];b<a.length;b++)r=a[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},c={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-summary/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0284":function(t,e,n){},"063b":function(t,e,n){"use strict";n("9875")},"186e":function(t,e,n){},"1cb6":function(t,e,n){"use strict";n("45bb")},"283e":function(t,e,n){},3585:function(t,e,n){"use strict";n("e562")},"3daf":function(t,e,n){"use strict";n("e005")},"3e96":function(t,e,n){},"45bb":function(t,e,n){},4933:function(t,e,n){"use strict";n("4d04")},"4c04":function(t,e,n){"use strict";n("a5c5")},"4d04":function(t,e,n){},"531a":function(t,e,n){"use strict";n("0284")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("b0c0");var o=n("7a23"),c={class:"app"};function s(t,e,n,s,r,a){var i=Object(o["A"])("my-navbar"),u=Object(o["A"])("router-view");return Object(o["s"])(),Object(o["g"])(o["a"],null,[Object(o["j"])(i),Object(o["h"])("div",c,[Object(o["j"])(u)])],64)}var r={},a=(n("531a"),n("d959")),i=n.n(a);const u=i()(r,[["render",s]]);var l=u,b={class:"btn"};function d(t,e,n,c,s,r){return Object(o["s"])(),Object(o["g"])("button",b,[Object(o["z"])(t.$slots,"default",{},void 0,!0)])}var p={name:"my-button"};n("9a06");const f=i()(p,[["render",d],["__scopeId","data-v-f306d45a"]]);var j=f;function O(t,e,n,c,s,r){return Object(o["s"])(),Object(o["g"])("input",{onInput:e[0]||(e[0]=function(){return r.updateValue&&r.updateValue.apply(r,arguments)}),type:"text",class:"input"},null,32)}n("a9e3");var h={name:"my-input",props:{modelValue:[String,Number]},methods:{updateValue:function(t){this.$emit("update:modelValue",t.target.value)}}};n("ccba");const m=i()(h,[["render",O],["__scopeId","data-v-258a7f7f"]]);var v=m;function g(t,e,n,c,s,r){return t.show?(Object(o["s"])(),Object(o["g"])("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=function(){return t.hideDialog&&t.hideDialog.apply(t,arguments)})},[Object(o["h"])("div",{class:"dialog__content",onClick:e[0]||(e[0]=Object(o["J"])((function(){}),["stop"]))},[Object(o["z"])(t.$slots,"default")])])):Object(o["f"])("",!0)}var y={props:{show:{type:Boolean,default:!1}},methods:{hideDialog:function(t){this.$emit("update:show",!1)}}},_={name:"my-dialog",mixins:[y]};n("063b");const P=i()(_,[["render",g]]);var w=P,k=function(t){return Object(o["v"])("data-v-9c46c4de"),t=t(),Object(o["t"])(),t},V=k((function(){return Object(o["h"])("option",{disabled:"",value:""},"Выберите из списка",-1)})),x=["value"];function S(t,e,n,c,s,r){return Object(o["I"])((Object(o["s"])(),Object(o["g"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return n.modelValue=t}),onChange:e[1]||(e[1]=function(){return r.changeOption&&r.changeOption.apply(r,arguments)})},[V,(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.options,(function(t){return Object(o["s"])(),Object(o["g"])("option",{key:t.value,value:t.value},Object(o["D"])(t.name),9,x)})),128))],544)),[[o["F"],n.modelValue]])}var A={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:function(){return[]}}},methods:{changeOption:function(t){this.$emit("update:modelValue",t.target.value)}}};n("1cb6");const C=i()(A,[["render",S],["__scopeId","data-v-9c46c4de"]]);var L=C,I={class:"navbar"},H=Object(o["i"])("Главная"),M={class:"btns"},R=Object(o["i"])("Посты"),D=Object(o["i"])("О сайте"),$=Object(o["i"])("PostX");function Q(t,e,n,c,s,r){var a=Object(o["A"])("my-button");return Object(o["s"])(),Object(o["g"])("div",I,[Object(o["j"])(a,{class:"btn",onClick:e[0]||(e[0]=function(e){return t.$router.push("/")})},{default:Object(o["H"])((function(){return[H]})),_:1}),Object(o["h"])("div",M,[Object(o["j"])(a,{class:"btn",onClick:e[1]||(e[1]=function(e){return t.$router.push("/posts")})},{default:Object(o["H"])((function(){return[R]})),_:1}),Object(o["j"])(a,{class:"btn",onClick:e[2]||(e[2]=function(e){return t.$router.push("/about")})},{default:Object(o["H"])((function(){return[D]})),_:1}),Object(o["j"])(a,{class:"btn",onClick:e[3]||(e[3]=function(e){return t.$router.push("/postsX")})},{default:Object(o["H"])((function(){return[$]})),_:1})])])}var U={components:{MyButton:j},name:"my-navbar"};n("6afe");const B=i()(U,[["render",Q],["__scopeId","data-v-c5a194c4"]]);var T=B,E=[j,v,w,L,T],J=n("79a0"),F=n.n(J),N=n("ccdc"),X=n.n(N),q=n("f94c"),z=n.n(q),G=n("ca95"),K=n.n(G),W=function(t){return Object(o["v"])("data-v-be70f434"),t=t(),Object(o["t"])(),t},Y=W((function(){return Object(o["h"])("h1",{style:{"margin-bottom":"100px"}}," Добро пожаловать на тестовую страницу на Vue 3 ",-1)})),Z={class:"wrapper"},tt={class:"info"},et=W((function(){return Object(o["h"])("img",{src:F.a,class:"gif"},null,-1)})),nt={class:"btn__container"},ot=W((function(){return Object(o["h"])("a",{class:"info__btn",href:"https://kurbanof.github.io/TetrisJS/"},"TetrisJS",-1)})),ct={class:"info"},st=W((function(){return Object(o["h"])("img",{src:X.a,class:"gif"},null,-1)})),rt={class:"btn__container"},at=W((function(){return Object(o["h"])("a",{class:"info__btn",href:"https://kurbanof.github.io/ehya/"},"ehya",-1)})),it={class:"info"},ut=W((function(){return Object(o["h"])("img",{src:z.a,class:"gif"},null,-1)})),lt={class:"btn__container"},bt=W((function(){return Object(o["h"])("a",{class:"info__btn",href:"https://kurbanof.github.io/tour-plan/"},"TourPlan",-1)})),dt={class:"info"},pt=W((function(){return Object(o["h"])("img",{src:K.a,class:"gif"},null,-1)})),ft={class:"btn__container"},jt=W((function(){return Object(o["h"])("a",{class:"info__btn",href:"https://kurbanof.github.io/hips/"},"hips",-1)}));function Ot(t,e,n,c,s,r){var a=Object(o["A"])("my-button");return Object(o["s"])(),Object(o["g"])("div",null,[Y,Object(o["h"])("div",Z,[Object(o["h"])("div",tt,[et,Object(o["h"])("div",nt,[Object(o["j"])(a,{class:"btn__link tetris"},{default:Object(o["H"])((function(){return[ot]})),_:1})])]),Object(o["h"])("div",ct,[st,Object(o["h"])("div",rt,[Object(o["j"])(a,{class:"btn__link tetris"},{default:Object(o["H"])((function(){return[at]})),_:1})])]),Object(o["h"])("div",it,[ut,Object(o["h"])("div",lt,[Object(o["j"])(a,{class:"btn__link tetris"},{default:Object(o["H"])((function(){return[bt]})),_:1})])]),Object(o["h"])("div",dt,[pt,Object(o["h"])("div",ft,[Object(o["j"])(a,{class:"btn__link tetris"},{default:Object(o["H"])((function(){return[jt]})),_:1})])])])])}var ht={};n("9e0e");const mt=i()(ht,[["render",Ot],["__scopeId","data-v-be70f434"]]);var vt=mt,gt={class:"app__btns"},yt=Object(o["i"])(" Создать пост "),_t={key:1},Pt={class:"observer"};function wt(t,e,n,c,s,r){var a=Object(o["A"])("my-input"),i=Object(o["A"])("my-button"),u=Object(o["A"])("my-select"),l=Object(o["A"])("post-form"),b=Object(o["A"])("my-dialog"),d=Object(o["A"])("post-list"),p=Object(o["B"])("focus"),f=Object(o["B"])("intersection");return Object(o["s"])(),Object(o["g"])("div",null,[Object(o["I"])(Object(o["j"])(a,{modelValue:s.searhQuery,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.searhQuery=t}),placeholder:"Поиск..."},null,8,["modelValue"]),[[p]]),Object(o["h"])("div",gt,[Object(o["j"])(i,{onClick:r.showDialog},{default:Object(o["H"])((function(){return[yt]})),_:1},8,["onClick"]),Object(o["j"])(u,{modelValue:s.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.selectedSort=t}),options:s.sortOptions},null,8,["modelValue","options"])]),Object(o["j"])(b,{show:s.dialogVisible,"onUpdate:show":e[2]||(e[2]=function(t){return s.dialogVisible=t})},{default:Object(o["H"])((function(){return[Object(o["j"])(l,{onCreate:r.createPost},null,8,["onCreate"])]})),_:1},8,["show"]),s.isPostsLoading?(Object(o["s"])(),Object(o["g"])("div",_t,"Идeт загрузка...")):(Object(o["s"])(),Object(o["e"])(d,{key:0,posts:r.sortedAndSearchedPosts,onRemove:r.removePost},null,8,["posts","onRemove"])),Object(o["I"])(Object(o["h"])("div",Pt,null,512),[[f,r.loadMorePosts]])])}var kt=n("2909"),Vt=n("1da1"),xt=(n("96cf"),n("4de4"),n("99af"),n("4e82"),n("caad"),n("2532"),function(t){return Object(o["v"])("data-v-2f27640c"),t=t(),Object(o["t"])(),t}),St={class:"newPost"},At=xt((function(){return Object(o["h"])("h4",{style:{color:"#fff"}},"Создать новый пост",-1)})),Ct=Object(o["i"])("Создать");function Lt(t,e,n,c,s,r){var a=Object(o["A"])("my-input"),i=Object(o["A"])("my-button"),u=Object(o["B"])("focus");return Object(o["s"])(),Object(o["g"])("form",St,[At,Object(o["I"])(Object(o["j"])(a,{type:"text",placeholder:"Название",modelValue:s.post.title,"onUpdate:modelValue":e[0]||(e[0]=function(t){return s.post.title=t})},null,8,["modelValue"]),[[u]]),Object(o["j"])(a,{type:"text",placeholder:"Описание",modelValue:s.post.body,"onUpdate:modelValue":e[1]||(e[1]=function(t){return s.post.body=t})},null,8,["modelValue"]),Object(o["j"])(i,{class:"btn",onClick:Object(o["J"])(r.createPost1,["prevent"])},{default:Object(o["H"])((function(){return[Ct]})),_:1},8,["onClick"])])}var It={data:function(){return{post:{title:"",body:""}}},methods:{createPost1:function(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};n("4c04");const Ht=i()(It,[["render",Lt],["__scopeId","data-v-2f27640c"]]);var Mt=Ht,Rt=function(t){return Object(o["v"])("data-v-568f20a4"),t=t(),Object(o["t"])(),t},Dt={key:0,class:"postList"},$t=Rt((function(){return Object(o["h"])("h4",null,"Список постов",-1)})),Qt={key:1,style:{color:"red","margin-left":"20px"}};function Ut(t,e,n,c,s,r){var a=Object(o["A"])("post-item");return n.posts.length>0?(Object(o["s"])(),Object(o["g"])("div",Dt,[$t,Object(o["j"])(o["b"],{name:"post-list"},{default:Object(o["H"])((function(){return[(Object(o["s"])(!0),Object(o["g"])(o["a"],null,Object(o["y"])(n.posts,(function(e){return Object(o["s"])(),Object(o["e"])(a,{key:e.id,onRemove:function(n){return t.$emit("remove",e)},post:e,class:"item"},null,8,["onRemove","post"])})),128))]})),_:1})])):(Object(o["s"])(),Object(o["g"])("h3",Qt,"Cписок постов пуст!"))}var Bt=function(t){return Object(o["v"])("data-v-6c367dbe"),t=t(),Object(o["t"])(),t},Tt={class:"post"},Et=Bt((function(){return Object(o["h"])("strong",null,"Название: ",-1)})),Jt=Bt((function(){return Object(o["h"])("strong",null,"Описание: ",-1)})),Ft=Bt((function(){return Object(o["h"])("strong",null,"Пост",-1)})),Nt={class:"btns",style:{"margin-left":"10px"}},Xt=Object(o["i"])("Открыть"),qt=Object(o["i"])("Удалить");function zt(t,e,n,c,s,r){var a=Object(o["A"])("my-button");return Object(o["s"])(),Object(o["g"])("div",Tt,[Object(o["h"])("div",null,[Object(o["h"])("div",null,[Et,Object(o["i"])(Object(o["D"])(n.post.title),1)]),Object(o["h"])("div",null,[Jt,Object(o["i"])(" "+Object(o["D"])(n.post.body),1)]),Object(o["h"])("div",null,[Ft,Object(o["i"])(" №"+Object(o["D"])(n.post.id),1)])]),Object(o["h"])("div",Nt,[Object(o["j"])(a,{onClick:e[0]||(e[0]=function(e){return t.$router.push("/posts/".concat(n.post.id))})},{default:Object(o["H"])((function(){return[Xt]})),_:1}),Object(o["j"])(a,{onClick:e[1]||(e[1]=function(e){return t.$emit("remove",n.post)}),style:{"margin-left":"-1px"}},{default:Object(o["H"])((function(){return[qt]})),_:1})])])}var Gt={props:{post:{type:Object,required:!0}}};n("4933");const Kt=i()(Gt,[["render",zt],["__scopeId","data-v-6c367dbe"]]);var Wt=Kt,Yt={components:{PostItem:Wt},props:{posts:{type:Array,required:!0}}};n("3daf");const Zt=i()(Yt,[["render",Ut],["__scopeId","data-v-568f20a4"]]);var te=Zt,ee=n("bc3a"),ne=n.n(ee),oe={components:{PostForm:Mt,PostList:te},data:function(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searhQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По описанию"}]}},methods:{createPost:function(t){this.posts.push(t),this.dialogVisible=!1},removePost:function(t){this.posts=this.posts.filter((function(e){return e.id!==t.id}))},showDialog:function(){this.dialogVisible=!0},fetchPosts:function(){var t=this;return Object(Vt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isPostsLoading=!0,e.next=4,ne.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:n=e.sent,t.posts=n.data,t.totalPages=Math.ceil(n.headers["x-total-count"]/t.limit),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Ошибка в загрузке данных");case 12:return e.prev=12,t.isPostsLoading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))()},loadMorePosts:function(){var t=this;return Object(Vt["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.page+=1,e.next=4,ne.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});case 4:n=e.sent,t.totalPages=Math.ceil(n.headers["x-total-count"]/t.limit),t.posts=[].concat(Object(kt["a"])(t.posts),Object(kt["a"])(n.data)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),alert("Ошибка в загрузке данных");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},watch:{},mounted:function(){this.fetchPosts()},computed:{sortedPosts:function(){var t=this;return Object(kt["a"])(this.posts).sort((function(e,n){var o;return null===(o=e[t.selectedSort])||void 0===o?void 0:o.localeCompare(n[t.selectedSort])}))},sortedAndSearchedPosts:function(){var t=this;return this.sortedPosts.filter((function(e){return e.title.toLowerCase().includes(t.searhQuery.toLowerCase())}))}}};n("3585");const ce=i()(oe,[["render",wt]]);var se=ce,re=Object(o["h"])("h1",null,"Здесь должна содержаться информация о данном сайте",-1),ae=[re];function ie(t,e,n,c,s,r){return Object(o["s"])(),Object(o["g"])("div",null,ae)}var ue={};const le=i()(ue,[["render",ie]]);var be=le;function de(t,e,n,c,s,r){return Object(o["s"])(),Object(o["g"])("div",null,[Object(o["h"])("h1",null,"Это пост с ID = "+Object(o["D"])(t.$route.params.id),1)])}var pe={};const fe=i()(pe,[["render",de]]);var je=fe,Oe={class:"app__btns"},he=Object(o["i"])(" Создать пост "),me={key:1},ve={class:"observer"};function ge(t,e,n,c,s,r){var a=Object(o["A"])("my-input"),i=Object(o["A"])("my-button"),u=Object(o["A"])("my-select"),l=Object(o["A"])("post-form"),b=Object(o["A"])("my-dialog"),d=Object(o["A"])("post-list"),p=Object(o["B"])("focus"),f=Object(o["B"])("intersection");return Object(o["s"])(),Object(o["g"])("div",null,[Object(o["I"])(Object(o["j"])(a,{modelValue:t.searhQuery,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.searhQuery=e}),placeholder:"Поиск..."},null,8,["modelValue"]),[[p]]),Object(o["h"])("div",Oe,[Object(o["j"])(i,{onClick:r.showDialog},{default:Object(o["H"])((function(){return[he]})),_:1},8,["onClick"]),Object(o["j"])(u,{modelValue:t.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.selectedSort=e}),options:t.sortOptions},null,8,["modelValue","options"])]),Object(o["j"])(b,{show:s.dialogVisible,"onUpdate:show":e[2]||(e[2]=function(t){return s.dialogVisible=t})},{default:Object(o["H"])((function(){return[Object(o["j"])(l,{onCreate:r.createPost},null,8,["onCreate"])]})),_:1},8,["show"]),t.isPostsLoading?(Object(o["s"])(),Object(o["g"])("div",me,"Идeт загрузка...")):(Object(o["s"])(),Object(o["e"])(d,{key:0,posts:t.sortedAndSearchedPosts,onRemove:r.removePost},null,8,["posts","onRemove"])),Object(o["I"])(Object(o["h"])("div",ve,null,512),[[f,t.loadMorePosts]])])}var ye=n("5530"),_e=n("5502"),Pe={components:{PostForm:Mt,PostList:te},data:function(){return{dialogVisible:!1}},methods:Object(ye["a"])(Object(ye["a"])(Object(ye["a"])({},Object(_e["d"])({setPage:"post/setPage"})),Object(_e["b"])({fetchPosts:"post/fetchPosts",loadMorePosts:"post/loadMorePosts"})),{},{createPost:function(t){this.posts.push(t),this.dialogVisible=!1},removePost:function(t){this.posts=this.posts.filter((function(e){return e.id!==t.id}))},showDialog:function(){this.dialogVisible=!0}}),watch:{},mounted:function(){this.fetchPosts()},computed:Object(ye["a"])(Object(ye["a"])({},Object(_e["e"])({posts:function(t){return t.post.posts},isPostsLoading:function(t){return t.post.isPostsLoading},selectedSort:function(t){return t.post.selectedSort},searhQuery:function(t){return t.post.searhQuery},page:function(t){return t.post.page},limit:function(t){return t.post.limit},totalPages:function(t){return t.post.totalPages},sortOptions:function(t){return t.post.sortOptions}})),Object(_e["c"])({sortedAndSearchedPosts:"post/sortedAndSearchedPosts",sortedPosts:"post/sortedPosts"}))};n("8dfe");const we=i()(Pe,[["render",ge]]);var ke=we,Ve=n("6c02"),xe=[{path:"/",component:vt},{path:"/posts",component:se},{path:"/about",component:be},{path:"/posts/:id",component:je},{path:"/postsX",component:ke}],Se=Object(Ve["a"])({routes:xe,history:Object(Ve["b"])(Object({NODE_ENV:"production",BASE_URL:"/vue-summary/"}).BASE_UR)}),Ae=Se,Ce={state:function(){return{posts:[],isPostsLoading:!1,selectedSort:"",searhQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По описанию"}]}},getters:{sortedPosts:function(t){return Object(kt["a"])(t.posts).sort((function(e,n){var o;return null===(o=e[t.selectedSort])||void 0===o?void 0:o.localeCompare(n[t.selectedSort])}))},sortedAndSearchedPosts:function(t,e){return e.sortedPosts.filter((function(e){return e.title.toLowerCase().includes(t.searhQuery.toLowerCase())}))}},mutations:{setPosts:function(t,e){t.posts=e},setLoading:function(t,e){t.isPostsLoading=e},setSelectedSort:function(t,e){t.selectedSort=e},setPage:function(t,e){t.page=e},setTotalPages:function(t,e){t.totalPages=e},setSearhQuery:function(t,e){t.searhQuery=e}},actions:{fetchPosts:function(t){return Object(Vt["a"])(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,o=t.commit,e.prev=1,o("setLoading",!0),e.next=5,ne.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:n.page,_limit:n.limit}});case 5:c=e.sent,o("setPosts",c.data),o("setTotalPages",Math.ceil(c.headers["x-total-count"]/n.limit)),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),alert("Ошибка в загрузке данных");case 13:return e.prev=13,o("setLoading",!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},loadMorePosts:function(t){return Object(Vt["a"])(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,o=t.commit,e.prev=1,o("setPage",n.page+1),e.next=5,ne.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:n.page,_limit:n.limit}});case 5:c=e.sent,o("setTotalPages",Math.ceil(c.headers["x-total-count"]/n.limit)),o("setPosts",[].concat(Object(kt["a"])(n.posts),Object(kt["a"])(c.data))),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](1),console.log(e.t0),alert("Ошибка в загрузке данных");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}},namespaced:!0},Le=Object(_e["a"])({modules:{post:Ce}}),Ie={mounted:function(t){t.focus()},name:"focus"},He={mounted:function(t,e){var n={rootMargin:"0px",threshold:1},o=function(t,n){t[0].isIntersecting&&e.value()},c=new IntersectionObserver(o,n);c.observe(t)},name:"intersection"},Me=[Ie,He],Re=Object(o["d"])(l);E.forEach((function(t){Re.component(t.name,t)})),Me.forEach((function(t){Re.directive(t.name,t)})),Re.use(Ae).use(Le).mount("#app")},"6afe":function(t,e,n){"use strict";n("283e")},"6dc0":function(t,e,n){},"79a0":function(t,e,n){t.exports=n.p+"img/tetris.85b9cccf.gif"},"8dfe":function(t,e,n){"use strict";n("186e")},9875:function(t,e,n){},"9a06":function(t,e,n){"use strict";n("6dc0")},"9e0e":function(t,e,n){"use strict";n("3e96")},a5c5:function(t,e,n){},ca95:function(t,e,n){t.exports=n.p+"img/hips.7cb1288f.gif"},ccba:function(t,e,n){"use strict";n("e5f7")},ccdc:function(t,e,n){t.exports=n.p+"img/ehya.cf88be58.gif"},e005:function(t,e,n){},e562:function(t,e,n){},e5f7:function(t,e,n){},f94c:function(t,e,n){t.exports=n.p+"img/tourplan.005c36a9.gif"}});
//# sourceMappingURL=app.fa32ba60.js.map