(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2178dd"],{c6e9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("va-card",{attrs:{title:"Returned"}},[r("div",{staticClass:"row align--center mb-1"},[r("div",{staticClass:"flex xs12 sm6"},[r("va-input",{staticClass:"ma-0",attrs:{value:t.term,placeholder:"Search by return ID",removable:""},on:{input:t.search}},[r("va-icon",{attrs:{slot:"prepend",name:"fa fa-search"},slot:"prepend"})],1)],1)]),r("va-data-table",{attrs:{fields:t.fields,data:t.filteredData,loading:t.loading,hoverable:"","no-pagination":""},scopedSlots:t._u([{key:"actions",fn:function(e){return[r("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray"},on:{click:function(r){return t.edit(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.edit"))+" ")]),r("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger"},on:{click:function(r){return t.remove(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.delete"))+" ")])]}}])})],1)},i=[],a=r("b047"),s=r.n(a),o=r("f58a"),d={data:function(){return{users:[],loading:!1,term:null,mode:0}},computed:{fields:function(){return[{name:"return_id",title:"Return ID",width:"10%",sortField:"return_id"},{name:"deployment_id",title:"Deployment ID",width:"10%",sortField:"deployment_id"},{name:"vehicle_id",title:"Vehicle ID",width:"10%",sortField:"vehicle_id"},{name:"operator_id",title:"Operator ID",width:"10%",sortField:"operator_id"},{name:"branch_id",title:"Branch ID",width:"10%",sortField:"branch_id"},{name:"return_date",title:"Return date",width:"10%",sortField:"return_date"},{name:"__slot:actions",dataClass:"text-right"}]},filteredData:function(){var t=this;return!this.term||this.term.length<1?this.users:this.users.filter((function(e){return e.return_id.toLowerCase().startsWith(t.term.toLowerCase())}))}},methods:{getStatusColor:function(t){return"paid"===t?"success":"processing"===t?"info":"danger"},resolveUser:function(t){var e=this;this.loading=!0,setTimeout((function(){var r=e.users.findIndex((function(e){return e.id===t.id}));e.users.splice(r,1),e.loading=!1,e.showToast(e.$t("dashboard.table.resolved"),{icon:"fa-check",position:"bottom-right",duration:1500})}),500)},search:s()((function(t){this.term=t}),400),edit:function(t){alert("Edit User: "+JSON.stringify(t))},remove:function(t){var e=this.users.findIndex((function(e){return e.id===t.id}));this.users.splice(e,1)}},created:function(){var t=this;o["a"].collection("returned").get().then((function(e){e.forEach((function(e){t.users.push(e.data())}))}))}},l=d,c=r("2877"),u=Object(c["a"])(l,n,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d2178dd.d7a888f5.js.map