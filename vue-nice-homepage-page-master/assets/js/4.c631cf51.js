(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8],{181:function(t,n,e){},194:function(t,n,e){"use strict";e.r(n);var i=e(183),s=e.n(i),a=e(192),r=e.n(a),c={props:{content:{default:"",type:String},inline:{default:!1,type:Boolean}},mounted:function(){var t,n=(new s.a).use(r.a);t=this.inline?n.renderInline(this.content):n.render(this.content),this.$el.innerHTML=t}},o=e(0),l=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);n.default=l.exports},258:function(t,n,e){"use strict";var i=e(181);e.n(i).a},266:function(t,n,e){"use strict";e.r(n);var i={components:{MContent:e(194).default},computed:{data:function(){return this.$page.frontmatter}}},s=(e(258),e(0)),a=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"projects"},[e("div",{staticClass:"wrapper"},[e("Content"),t._v(" "),t._l(t.data.projects,(function(n){return e("div",{staticClass:"project"},[n.image?e("div",{staticClass:"project-image"},[e("img",{attrs:{src:t.$withBase(n.image),alt:""}})]):t._e(),t._v(" "),e("div",{staticClass:"project-content"},t._l(n.rows,(function(t){return e("div",[e("m-content",{attrs:{content:t.content}})],1)})),0)])}))],2)])}),[],!1,null,null,null);n.default=a.exports}}]);