(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21ead0"],{d729:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("va-card",{attrs:{title:"Reserved"}},[a("div",{staticClass:"row align--center mb-1"},[a("div",{staticClass:"flex xs12 sm6"},[a("va-input",{staticClass:"ma-0",attrs:{value:t.term,placeholder:"Search by reservation ID",removable:""},on:{input:t.search}},[a("va-icon",{attrs:{slot:"prepend",name:"fa fa-search"},slot:"prepend"})],1)],1)]),a("va-data-table",{attrs:{fields:t.fields,data:t.filteredData,loading:t.loading,hoverable:"","no-pagination":""},scopedSlots:t._u([{key:"actions",fn:function(e){return[a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"gray"},on:{click:function(a){return t.edit(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.edit"))+" ")]),a("va-button",{staticClass:"ma-0",attrs:{flat:"",small:"",color:"danger"},on:{click:function(a){return t.remove(e.rowData)}}},[t._v(" "+t._s(t.$t("tables.delete"))+" ")])]}}])})],1)},i=[],n=a("b047"),s=a.n(n),o=a("f58a"),d={data:function(){return{users:[],loading:!1,term:null,mode:0}},computed:{fields:function(){return[{name:"reservation_id",title:"Reservation ID",width:"10%",sortField:"reservation_id"},{name:"vehicle_id",title:"Vehicle ID",width:"10%",sortField:"vehicle_id"},{name:"operator_id",title:"Operator ID",width:"10%",sortField:"operator_id"},{name:"operator_name",title:"Operator name",width:"15%",sortField:"operator_name"},{name:"pickup_date",title:"Pickup date",width:"15%",sortField:"pickup_date"},{name:"branch_id",title:"Branch ID",width:"10%",sortField:"branch_id"},{name:"return_date",title:"Return date",width:"15%",sortField:"return_date"},{name:"__slot:actions",dataClass:"text-right"}]},filteredData:function(){var t=this;return!this.term||this.term.length<1?this.users:this.users.filter((function(e){return e.reservation_id.toLowerCase().startsWith(t.term.toLowerCase())}))}},methods:{getStatusColor:function(t){return"paid"===t?"success":"processing"===t?"info":"danger"},resolveUser:function(t){var e=this;this.loading=!0,setTimeout((function(){var a=e.users.findIndex((function(e){return e.id===t.id}));e.users.splice(a,1),e.loading=!1,e.showToast(e.$t("dashboard.table.resolved"),{icon:"fa-check",position:"bottom-right",duration:1500})}),500)},search:s()((function(t){this.term=t}),400),edit:function(t){alert("Edit User: "+JSON.stringify(t))},remove:function(t){var e=this.users.findIndex((function(e){return e.id===t.id}));this.users.splice(e,1)}},created:function(){var t=this;o["a"].collection("reserved").get().then((function(e){e.forEach((function(e){t.users.push(e.data())}))}))}},l=d,c=a("2877"),u=Object(c["a"])(l,r,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21ead0.147ab8e2.js.map