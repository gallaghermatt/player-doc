var de=Object.defineProperty,ie=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var J=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var G=(c,a,m)=>a in c?de(c,a,{enumerable:!0,configurable:!0,writable:!0,value:m}):c[a]=m,W=(c,a)=>{for(var m in a||(a={}))se.call(a,m)&&G(c,m,a[m]);if(J)for(var m of J(a))re.call(a,m)&&G(c,m,a[m]);return c},K=(c,a)=>ie(c,le(a));import{z as C,g as H}from"./custom.471d0de0.js";import{a2 as ce,I as ue,u as R,y as f,N as Q,W as j,r as i,o as r,c as p,B as A,D as Z,a3 as X,H as Y,O as _e,w as t,a as o,Q as $,b as L,e as D,t as ee,s as k,k as d,a4 as te,P as oe,F as N,T as me,V as he,a5 as pe,a6 as fe}from"./vendor.6399378c.js";import{a as F}from"./index.ff4a24c0.js";import{m as ge}from"./index.086d0536.js";import{_ as M}from"./main.5fd30069.js";import{E as ve}from"./EditGlobalParam.ede9d5a9.js";const ye={components:{aceEditor:F,BranchesOutlined:ce,mavonEditor:ge.exports.mavonEditor,InfoCircleOutlined:ue},props:{doc:{type:Object,required:!0}},setup(c,{emit:a}){R();let m=f({}),e=f("");Q(()=>c.doc,()=>{v()});const g=()=>e.value?{id:m.value.id,shareInstruction:e.value}:(A.error("\u8BF7\u8F93\u5165\u5F00\u653E\u6587\u6863\u7684\u8BF4\u660E"),!1),v=async()=>{m.value=c.doc,e.value=c.doc.shareInstruction},s=(u,_)=>{},l=(u,_)=>(A.error("\u6682\u4E0D\u652F\u6301\u56FE\u7247\u4E0A\u4F20"),!1);return j(()=>{v()}),{docEdit:m,shareInstruction:e,getDoc:g,editDoc:v,imageFilter:l,addMarkdownImage:s,toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!1,code:!0,table:!0,fullscreen:!0,readmodel:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!1,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0}}}};function be(c,a,m,e,g,v){const s=i("mavon-editor");return r(),p(s,{ref:"mavonEditor",modelValue:e.shareInstruction,"onUpdate:modelValue":a[0]||(a[0]=l=>e.shareInstruction=l),toolbars:e.toolbars,externalLink:!1,onImgAdd:e.addMarkdownImage,imageFilter:e.imageFilter,style:{height:"calc(100vh - 80px)"},placeholder:"\u8BF7\u5F55\u5165\u5F00\u653E\u6587\u6863\u8BF4\u660E"},null,8,["modelValue","toolbars","onImgAdd","imageFilter"])}var ae=M(ye,[["render",be]]);const we={emits:["edit"],components:{aceEditor:F,EditShareInstruction:ae,DownOutlined:Z,LinkOutlined:X,EditOutlined:Y},props:{doc:{type:Object,required:!0}},setup(c,{emit:a}){const m=R();let e=f({}),g=f();Q(()=>c.doc,()=>{s()});const v=async()=>{g.value.validate().then(()=>{C.apiDocAdd(e.value).then(_=>{m.commit("addDocChangedNum")})}).catch(_=>{console.log("error",_)})},s=()=>{e.value=c.doc},l=async()=>(await g.value.validate(),e.value),u=_=>{_.shareUuid?_.openVisit!==1?A.warning("\u8BE5\u6587\u6863\u5C1A\u672A\u5F00\u542F\u5F00\u653E\u8BBF\u95EE\u529F\u80FD\uFF0C\u8BF7\u5728\u7F16\u8F91\u9875\u9009\u62E9\u5F00\u653E\u540E\u518D\u8BD5"):window.open(H()+"/doc-api#/share/home?uuid="+_.shareUuid):A.warning("\u8BF7\u5148\u4FDD\u5B58\u6587\u6863\u540E\u518D\u8BD5")};return j(()=>{s()}),{docEdit:e,newDocFormRef:g,handleNewDocOk:v,editDoc:s,getDoc:l,openShareViewWindow:u,newDocRules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0",trigger:"change"}],docUrl:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u6863\u5730\u5740",trigger:"change"}],jsonContent:[{required:!0,message:"\u8BF7\u8F93\u5165JSON\u683C\u5F0F\u7684swagger\u6587\u6863\u5185\u5BB9",trigger:"change"}],docType:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u6587\u6863\u7C7B\u578B",trigger:"change"}],openVisit:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u5F00\u653E\u8BBF\u95EE",trigger:"change"}],docStatus:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u6587\u6863\u72B6\u6001",trigger:"change"}]},aceEditorConfig:{wrap:!0,autoScrollEditorIntoView:!0,enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,minLines:10,maxLines:15},swaggerDocDemo:`{
    "swagger": "2.0",
    "info": {},
    "host": "doc.zyplayer.com",
    "basePath":"/",
    "tags": [],
    "paths": {},
    "definitions": {}
}`,openApiDocDemo:`{
    "openapi": "3.0.3",
    "components": {}
    "servers": [],
    "paths": {},
    "info": {},
}`}}},De=d("Swagger URL"),ke=d("Swagger JSON"),Ee=d("OpenApi URL"),Ie=d("OpenApi JSON"),Se=d("\u81EA\u5EFAAPI"),xe=d(" \u67E5\u770B\u6587\u6863\u5730\u5740 "),Ce=D("p",null,"\u683C\u5F0F\u4E00\uFF1Ahttp://zyplayer.com/v2/api-docs",-1),Le=D("p",null,"\u683C\u5F0F\u4E8C\uFF1Ahttp://zyplayer.com/swagger-resources",-1),Ue=D("p",null,"\u683C\u5F0F\u4E09\uFF1Ahttp://zyplayer.com/swagger-ui.html",-1),Te=D("a",null,"\u793A\u4F8B",-1),Oe=d(" \u67E5\u770B\u6587\u6863\u5185\u5BB9 "),Ae=D("div",null,'\u652F\u6301\u4EE5\u4E0B\u683C\u5F0F\u7684Swagger\u6587\u6863\u5185\u5BB9\u8F93\u5165\uFF0C\u5176\u4E2D {"swagger": "2.0"} \u4E3A\u5FC5\u8981\u5C5E\u6027',-1),Ve={class:"lang-json"},ze=D("a",null,"\u8BF4\u660E",-1),Ne=d(" \u67E5\u770B\u6587\u6863\u5730\u5740 "),qe=D("p",null,"\u683C\u5F0F\u4E00\uFF1Ahttp://zyplayer.com/v3/api-docs",-1),Me=D("a",null,"\u793A\u4F8B",-1),Re=d(" \u67E5\u770B\u6587\u6863\u5185\u5BB9 "),je=D("div",null,'\u652F\u6301\u4EE5\u4E0B\u683C\u5F0F\u7684OpenApi\u6587\u6863\u5185\u5BB9\u8F93\u5165\uFF0C\u5176\u4E2D {"openapi": "3.x.x"} \u4E3A\u5FC5\u8981\u5C5E\u6027',-1),Be={class:"lang-json"},Pe=D("a",null,"\u8BF4\u660E",-1),Fe=d(" \u76EE\u6807\u57DF\u540D "),Je=D("p",null,"\u5728\u6587\u6863\u7684\u5728\u7EBF\u8C03\u8BD5\u754C\u9762\uFF0C\u8BBF\u95EE\u7684\u57DF\u540D\u53EF\u4EE5\u521D\u59CB\u4E3A\u6B64\u5904\u5F55\u5165\u7684\u57DF\u540D\uFF0C\u800C\u975E\u6587\u6863\u672C\u8EAB\u7684\u57DF\u540D\u5730\u5740",-1),Ge=D("p",null,"\u53EF\u4FBF\u4E8E\u4E0D\u540C\u73AF\u5883\u95F4\u7684\u63A5\u53E3\u6D4B\u8BD5\uFF0C\u4F8B\uFF1Ahttp://zyplayer.com",-1),We=D("a",null,"\u8BF4\u660E",-1),Ke=d("\u5426"),He=d("\u5F00\u653E\u8BBF\u95EE"),Qe=d(" \u5F00\u653E\u8BBF\u95EE\u540E\u65E0\u9700\u767B\u5F55\u5373\u53EF\u901A\u8FC7"),Ze=d("\u8BBF\u95EE\u8BE5\u6587\u6863\u4FE1\u606F "),Xe=d("\u542F\u7528"),Ye=d("\u7981\u7528");function $e(c,a,m,e,g,v){const s=i("a-input"),l=i("a-form-item"),u=i("a-radio"),_=i("a-radio-group"),y=i("a-popover"),b=i("ace-editor"),E=i("a-form"),S=_e("highlight");return r(),p(E,{layout:"horizontal",ref:"newDocFormRef",rules:e.newDocRules,model:e.docEdit,"label-col":{span:4},"wrapper-col":{span:18}},{default:t(()=>[o(l,{label:"\u6587\u6863\u540D\u79F0",required:"",name:"name"},{default:t(()=>[o(s,{placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0",value:e.docEdit.name,"onUpdate:value":a[0]||(a[0]=h=>e.docEdit.name=h)},null,8,["value"])]),_:1}),o(l,{label:"\u6587\u6863\u7C7B\u578B",required:"",name:"docType"},{default:t(()=>[o(_,{value:e.docEdit.docType,"onUpdate:value":a[1]||(a[1]=h=>e.docEdit.docType=h)},{default:t(()=>[o(u,{value:1},{default:t(()=>[De]),_:1}),o(u,{value:2},{default:t(()=>[ke]),_:1}),o(u,{value:3},{default:t(()=>[Ee]),_:1}),o(u,{value:4},{default:t(()=>[Ie]),_:1}),o(u,{value:5},{default:t(()=>[Se]),_:1})]),_:1},8,["value"])]),_:1}),e.docEdit.docType===1?(r(),p(l,{key:0,label:"\u6587\u6863\u5730\u5740",required:"",name:"docUrl"},{extra:t(()=>[xe,o(y,{title:"\u6587\u6863\u5730\u5740\u652F\u6301\u4EE5\u4E0B\u4EFB\u4E00\u683C\u5F0F"},{content:t(()=>[Ce,Le,Ue]),default:t(()=>[Te]),_:1})]),default:t(()=>[o(s,{placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u5730\u5740URL",value:e.docEdit.docUrl,"onUpdate:value":a[2]||(a[2]=h=>e.docEdit.docUrl=h)},null,8,["value"])]),_:1})):e.docEdit.docType===2?(r(),p(l,{key:1,label:"\u6587\u6863\u5185\u5BB9",required:"",name:"jsonContent"},{extra:t(()=>[Oe,o(y,{title:"\u6587\u6863\u5185\u5BB9\u8BF4\u660E"},{content:t(()=>[Ae,$((r(),L("div",null,[D("pre",null,[D("code",Ve,ee(e.swaggerDocDemo),1)])])),[[S]])]),default:t(()=>[ze]),_:1})]),default:t(()=>[o(b,{value:e.docEdit.jsonContent,"onUpdate:value":a[3]||(a[3]=h=>e.docEdit.jsonContent=h),lang:"json",theme:"monokai",width:"100%",height:"100",options:e.aceEditorConfig},null,8,["value","options"])]),_:1})):k("",!0),e.docEdit.docType===3?(r(),p(l,{key:2,label:"\u6587\u6863\u5730\u5740",required:"",name:"docUrl"},{extra:t(()=>[Ne,o(y,{title:"\u6587\u6863\u5730\u5740\u652F\u6301\u4EE5\u4E0B\u4EFB\u4E00\u683C\u5F0F"},{content:t(()=>[qe]),default:t(()=>[Me]),_:1})]),default:t(()=>[o(s,{placeholder:"\u8BF7\u8F93\u5165\u6587\u6863\u5730\u5740URL",value:e.docEdit.docUrl,"onUpdate:value":a[4]||(a[4]=h=>e.docEdit.docUrl=h)},null,8,["value"])]),_:1})):e.docEdit.docType===4?(r(),p(l,{key:3,label:"\u6587\u6863\u5185\u5BB9",required:"",name:"jsonContent"},{extra:t(()=>[Re,o(y,{title:"\u6587\u6863\u5185\u5BB9\u8BF4\u660E"},{content:t(()=>[je,$((r(),L("div",null,[D("pre",null,[D("code",Be,ee(e.openApiDocDemo),1)])])),[[S]])]),default:t(()=>[Pe]),_:1})]),default:t(()=>[o(b,{value:e.docEdit.jsonContent,"onUpdate:value":a[5]||(a[5]=h=>e.docEdit.jsonContent=h),lang:"json",theme:"monokai",width:"100%",height:"100",options:e.aceEditorConfig},null,8,["value","options"])]),_:1})):k("",!0),o(l,{label:"\u76EE\u6807\u57DF\u540D",name:"rewriteDomain"},{extra:t(()=>[Fe,o(y,{title:"\u76EE\u6807\u57DF\u540D\u8BF4\u660E"},{content:t(()=>[Je,Ge]),default:t(()=>[We]),_:1})]),default:t(()=>[o(s,{placeholder:"\u8BF7\u8F93\u5165\u76EE\u6807\u57DF\u540D",value:e.docEdit.rewriteDomain,"onUpdate:value":a[6]||(a[6]=h=>e.docEdit.rewriteDomain=h)},null,8,["value"])]),_:1}),o(l,{label:"\u5F00\u653E\u8BBF\u95EE",required:"",name:"openVisit"},{extra:t(()=>[Qe,D("a",{onClick:a[8]||(a[8]=h=>e.openShareViewWindow(e.docEdit))},"\u5F00\u653E\u6587\u6863URL"),Ze]),default:t(()=>[o(_,{value:e.docEdit.openVisit,"onUpdate:value":a[7]||(a[7]=h=>e.docEdit.openVisit=h)},{default:t(()=>[o(u,{value:0},{default:t(()=>[Ke]),_:1}),o(u,{value:1},{default:t(()=>[He]),_:1})]),_:1},8,["value"])]),_:1}),o(l,{label:"\u72B6\u6001",required:"",name:"docStatus"},{default:t(()=>[o(_,{value:e.docEdit.docStatus,"onUpdate:value":a[9]||(a[9]=h=>e.docEdit.docStatus=h)},{default:t(()=>[o(u,{value:1},{default:t(()=>[Xe]),_:1}),o(u,{value:2},{default:t(()=>[Ye]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["rules","model"])}var ne=M(we,[["render",$e]]);const et={emits:["edit"],components:{aceEditor:F,DownOutlined:Z,LinkOutlined:X,EditOutlined:Y,SearchOutlined:te,PlusOutlined:oe,EditDocBaseInfo:ne},setup(c,{emit:a}){const m=R();let e=f([]),g=f(!1),v=f({docType:"",openVisit:"",docStatus:"",pageNum:1,pageSize:20}),s=f({pageSize:20,pageNum:1,total:0,showSizeChanger:!0,pageSizeOptions:["20","50","100"],showTotal:n=>`\u5171${n}\u6761`});const l=(n,w,z)=>{s.value.pageNum=n.current,s.value.pageSize=n.pageSize,v.value.pageNum=n.current,v.value.pageSize=n.pageSize,u()},u=async()=>{g.value=!0,C.apiDocList(v.value).then(n=>{setTimeout(()=>g.value=!1,500),e.value=n.data||[],s.value.total=n.total||0})};let _=f({}),y=f(),b=f(!1);const E=async()=>{let n=await y.value.getDoc();C.apiDocAdd(n).then(w=>{b.value=!1,m.commit("addDocChangedNum"),u()})},S=async()=>{b.value=!0,_.value={docType:1,openVisit:0,docStatus:1,isNew:1}},h=n=>{a("edit","edit",n)},U=(n,w,z)=>{C.apiDocUpdate({id:n,docStatus:w,yn:z}).then(x=>{m.commit("addDocChangedNum"),u()})},T=n=>{me.confirm({title:"\u518D\u6B21\u786E\u8BA4",icon:o(he),content:"\u4F60\u771F\u7684\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6587\u6863\u5417\uFF1F",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onOk(){U(n.id,null,0)}})},V=n=>{n.shareUuid?n.openVisit!==1?A.warning("\u8BE5\u6587\u6863\u5C1A\u672A\u5F00\u542F\u5F00\u653E\u8BBF\u95EE\u529F\u80FD\uFF0C\u8BF7\u5728\u7F16\u8F91\u9875\u9009\u62E9\u5F00\u653E\u540E\u518D\u8BD5"):window.open(H()+"/doc-api#/share/home?uuid="+n.shareUuid):A.warning("\u8BF7\u5148\u4FDD\u5B58\u6587\u6863\u540E\u518D\u8BD5")},q=(n,w)=>{n.key==="shareView"&&V(w)};return j(()=>{u()}),{searchParam:v,docList:e,docListLoading:g,newDocVisible:b,docEdit:_,docBaseInfoRef:y,searchDocList:u,openNewDoc:S,handleNewDocOk:E,deleteDoc:T,editDoc:h,handleTableChange:l,openShareViewWindow:V,handleActionMenuClick:q,pagination:s,newDocRules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u6863\u540D\u79F0",trigger:"change"}],docUrl:[{required:!0,message:"\u8BF7\u8F93\u5165\u6587\u6863\u5730\u5740",trigger:"change"}],jsonContent:[{required:!0,message:"\u8BF7\u8F93\u5165JSON\u683C\u5F0F\u7684swagger\u6587\u6863\u5185\u5BB9",trigger:"change"}],docType:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u6587\u6863\u7C7B\u578B",trigger:"change"}],openVisit:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u662F\u5426\u5F00\u653E\u8BBF\u95EE",trigger:"change"}],docStatus:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u6587\u6863\u72B6\u6001",trigger:"change"}]},docListColumns:[{title:"ID",dataIndex:"id",width:70},{title:"\u6587\u6863\u540D\u79F0",dataIndex:"name",width:250},{title:"\u6587\u6863\u7C7B\u578B",dataIndex:"docType",width:120},{title:"\u5F00\u653E\u8BBF\u95EE",dataIndex:"openVisit",width:90},{title:"\u72B6\u6001",dataIndex:"docStatus",width:90},{title:"\u6587\u6863\u5730\u5740",dataIndex:"docUrl"},{title:"\u76EE\u6807\u57DF\u540D",dataIndex:"rewriteDomain",width:250},{title:"\u64CD\u4F5C",dataIndex:"operation",fixed:"right",width:200}]}}},tt=d("\u5168\u90E8"),ot=d("URL\u6DFB\u52A0"),at=d("JSON\u5185\u5BB9"),nt=d("\u5168\u90E8"),dt=d("\u5426"),it=d("\u662F"),lt=d("\u5168\u90E8"),st=d("\u542F\u7528"),rt=d("\u7981\u7528"),ct=d(" \u67E5\u8BE2"),ut=d(" \u65B0\u5EFA"),_t=d("\u7F16\u8F91"),mt=d("\u5220\u9664"),ht=d(" \u67E5\u770B\u5F00\u653E\u6587\u6863"),pt=d("\u66F4\u591A"),ft=d("Swagger URL"),gt=d("Swagger JSON"),vt=d("Swagger URL"),yt=d("OpenApi JSON"),bt=d("\u81EA\u5EFAAPI"),wt=d("\u672A\u5F00\u653E"),Dt=d("\u5DF2\u5F00\u653E"),kt=d("\u542F\u7528"),Et=d("\u7981\u7528");function It(c,a,m,e,g,v){const s=i("a-select-option"),l=i("a-select"),u=i("a-form-item"),_=i("SearchOutlined"),y=i("a-button"),b=i("PlusOutlined"),E=i("a-form"),S=i("a-popconfirm"),h=i("link-outlined"),U=i("a-menu-item"),T=i("a-menu"),V=i("DownOutlined"),q=i("a-dropdown"),n=i("a-tag"),w=i("a-table"),z=i("EditDocBaseInfo"),x=i("a-modal");return r(),L(N,null,[o(E,{layout:"inline",style:{"margin-bottom":"20px"}},{default:t(()=>[o(u,{label:"\u6587\u6863\u7C7B\u578B"},{default:t(()=>[o(l,{placeholder:"\u8BF7\u9009\u62E9\u6587\u6863\u7C7B\u578B",value:e.searchParam.docType,"onUpdate:value":a[0]||(a[0]=I=>e.searchParam.docType=I),style:{width:"150px"}},{default:t(()=>[o(s,{value:""},{default:t(()=>[tt]),_:1}),o(s,{value:1},{default:t(()=>[ot]),_:1}),o(s,{value:2},{default:t(()=>[at]),_:1})]),_:1},8,["value"])]),_:1}),o(u,{label:"\u5F00\u653E\u8BBF\u95EE"},{default:t(()=>[o(l,{placeholder:"\u8BF7\u9009\u62E9\u5F00\u653E\u8BBF\u95EE",value:e.searchParam.openVisit,"onUpdate:value":a[1]||(a[1]=I=>e.searchParam.openVisit=I),style:{width:"150px"}},{default:t(()=>[o(s,{value:""},{default:t(()=>[nt]),_:1}),o(s,{value:0},{default:t(()=>[dt]),_:1}),o(s,{value:1},{default:t(()=>[it]),_:1})]),_:1},8,["value"])]),_:1}),o(u,{label:"\u72B6\u6001"},{default:t(()=>[o(l,{placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",value:e.searchParam.docStatus,"onUpdate:value":a[2]||(a[2]=I=>e.searchParam.docStatus=I),style:{width:"150px"}},{default:t(()=>[o(s,{value:""},{default:t(()=>[lt]),_:1}),o(s,{value:1},{default:t(()=>[st]),_:1}),o(s,{value:2},{default:t(()=>[rt]),_:1})]),_:1},8,["value"])]),_:1}),o(u,null,{default:t(()=>[o(y,{onClick:e.searchDocList,type:"primary"},{icon:t(()=>[o(_)]),default:t(()=>[ct]),_:1},8,["onClick"]),o(y,{onClick:e.openNewDoc,style:{marginLeft:"8px"}},{icon:t(()=>[o(b)]),default:t(()=>[ut]),_:1},8,["onClick"])]),_:1})]),_:1}),o(w,{dataSource:e.docList,columns:e.docListColumns,size:"middle",loading:e.docListLoading,pagination:e.pagination,onChange:e.handleTableChange,scroll:{x:1400,y:"calc(100vh - 300px)"}},{bodyCell:t(({column:I,text:O,record:B})=>[I.dataIndex==="operation"?(r(),L(N,{key:0},[o(y,{size:"small",type:"link",onClick:P=>e.editDoc(B)},{default:t(()=>[_t]),_:2},1032,["onClick"]),B.authType===1?(r(),p(S,{key:0,title:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:P=>e.deleteDoc(B)},{default:t(()=>[o(y,{size:"small",type:"link",danger:""},{default:t(()=>[mt]),_:1})]),_:2},1032,["onConfirm"])):k("",!0),o(q,{trigger:["click"]},{overlay:t(()=>[o(T,{onClick:P=>e.handleActionMenuClick(P,B)},{default:t(()=>[o(U,{key:"shareView"},{default:t(()=>[o(h),ht]),_:1})]),_:2},1032,["onClick"])]),default:t(()=>[o(y,{type:"link",size:"small"},{default:t(()=>[pt,o(V)]),_:1})]),_:2},1024)],64)):k("",!0),I.dataIndex==="docType"?(r(),L(N,{key:1},[O===1?(r(),p(n,{key:0,color:"red"},{default:t(()=>[ft]),_:1})):O===2?(r(),p(n,{key:1,color:"blue"},{default:t(()=>[gt]),_:1})):O===3?(r(),p(n,{key:2,color:"blue"},{default:t(()=>[vt]),_:1})):O===4?(r(),p(n,{key:3,color:"green"},{default:t(()=>[yt]),_:1})):O===5?(r(),p(n,{key:4,color:"green"},{default:t(()=>[bt]),_:1})):k("",!0)],64)):k("",!0),I.dataIndex==="openVisit"?(r(),L(N,{key:2},[O===0?(r(),p(n,{key:0,color:"pink"},{default:t(()=>[wt]),_:1})):O===1?(r(),p(n,{key:1,color:"green"},{default:t(()=>[Dt]),_:1})):k("",!0)],64)):k("",!0),I.dataIndex==="docStatus"?(r(),L(N,{key:3},[O===1?(r(),p(n,{key:0,color:"green"},{default:t(()=>[kt]),_:1})):O===2?(r(),p(n,{key:1,color:"pink"},{default:t(()=>[Et]),_:1})):k("",!0)],64)):k("",!0)]),_:1},8,["dataSource","columns","loading","pagination","onChange","scroll"]),o(x,{visible:e.newDocVisible,"onUpdate:visible":a[3]||(a[3]=I=>e.newDocVisible=I),title:e.docEdit.isNew?"\u65B0\u589E\u6587\u6863":"\u7F16\u8F91\u6587\u6863",onOk:e.handleNewDocOk,width:850},{default:t(()=>[o(z,{ref:"docBaseInfoRef",doc:e.docEdit},null,8,["doc"])]),_:1},8,["visible","title","onOk"])],64)}var St=M(et,[["render",It]]);const xt={emits:["showDocList"],components:{PlusOutlined:oe,SearchOutlined:te},props:{doc:{type:Object,required:!0}},setup(c,{emit:a}){R();let m=f([]),e=f(!1),g=f({docId:"",pageNum:1,pageSize:20}),v=f({pageSize:20,pageNum:1,total:0,showSizeChanger:!0,pageSizeOptions:["20","50","100"],showTotal:n=>`\u5171${n}\u6761`});const s=(n,w,z)=>{v.value.pageNum=n.current,v.value.pageSize=n.pageSize,g.value.pageNum=n.current,g.value.pageSize=n.pageSize,l()},l=async()=>{!c.doc.id||(e.value=!0,g.value.docId=c.doc.id,C.docAuthList(g.value).then(n=>{setTimeout(()=>e.value=!1,500),m.value=n.data||[],v.value.total=n.total||0}).catch(()=>{e.value=!1}))};let u=f({}),_=f({data:[],search:"",fetching:!1}),y=f([]),b=f(),E=f(!1);const S=n=>{_.value.search=n,!_.value.fetching&&(_.value.fetching=!0,y.value=[],setTimeout(()=>{C.searchUserList({search:_.value.search}).then(w=>{(w.data||[]).forEach(x=>y.value.push({label:x.userName,value:x.id})),_.value.fetching=!1}).catch(()=>{_.value.fetching=!1})},500))},h=async()=>{b.value.validate().then(()=>{C.docAuthAssign(u.value).then(n=>{l(),E.value=!1})}).catch(n=>{console.log("error",n)})},U=async n=>{let w=K(W({},n),{docId:c.doc.id});C.docAuthAssign(w).then(z=>{A.success("\u4FEE\u6539\u6210\u529F")})},T=async()=>{E.value=!0,u.value={docId:c.doc.id,userId:void 0,authType:1}},V=async n=>{C.docAuthDelete({docId:c.doc.id,userId:n.userId}).then(w=>{l()})},q=()=>{a("showDocList")};return j(()=>{l()}),{showDocList:q,searchParam:g,docMemberList:m,docMemberListLoading:e,addUserVisible:E,userAdd:u,userSearchList:y,addUserFormRef:b,userSearchState:_,handleUserSearch:S,searchDocMemberList:l,openAddDocMember:T,handleAddUserOk:h,userAuthTypeChange:U,deleteDocMember:V,handleTableChange:s,pagination:v,docListColumns:[{title:"ID",dataIndex:"userId",width:70},{title:"\u7528\u6237\u540D",dataIndex:"userName"},{title:"\u5E10\u53F7",dataIndex:"userNo"},{title:"\u90AE\u7BB1",dataIndex:"email"},{title:"\u624B\u673A\u53F7",dataIndex:"phone"},{title:"\u6027\u522B",dataIndex:"sex",width:90},{title:"\u89D2\u8272",dataIndex:"authType",width:200},{title:"\u64CD\u4F5C",dataIndex:"operation",fixed:"right",width:100}],addUserRules:{userId:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u7528\u6237",trigger:"change"}],authType:[{type:"number",required:!0,message:"\u8BF7\u9009\u62E9\u7528\u6237\u89D2\u8272",trigger:"change"}]}}}},Ct={style:{"text-align":"right",margin:"0 10px 10px 0"}},Lt=d(" \u67E5\u8BE2 "),Ut=d(" \u6DFB\u52A0\u7528\u6237 "),Tt=d("\u5220\u9664"),Ot=d("\u7537"),At=d("\u5973"),Vt=d("-"),zt=d("\u7BA1\u7406\u5458"),Nt=d("\u5F00\u53D1\u4EBA\u5458"),qt=d("\u7BA1\u7406\u5458"),Mt=d("\u5F00\u53D1\u4EBA\u5458");function Rt(c,a,m,e,g,v){const s=i("search-outlined"),l=i("a-button"),u=i("plus-outlined"),_=i("a-popconfirm"),y=i("a-tag"),b=i("a-select-option"),E=i("a-select"),S=i("a-table"),h=i("a-spin"),U=i("a-form-item"),T=i("a-radio"),V=i("a-radio-group"),q=i("a-form"),n=i("a-modal");return r(),L(N,null,[D("div",Ct,[o(l,{onClick:e.searchDocMemberList,type:"primary"},{icon:t(()=>[o(s)]),default:t(()=>[Lt]),_:1},8,["onClick"]),o(l,{onClick:e.openAddDocMember,style:{marginLeft:"8px"}},{icon:t(()=>[o(u)]),default:t(()=>[Ut]),_:1},8,["onClick"])]),o(S,{dataSource:e.docMemberList,columns:e.docListColumns,size:"middle",loading:e.docMemberListLoading,pagination:!1,onChange:e.handleTableChange,scroll:{x:1e3,y:"calc(100vh - 300px)"}},{bodyCell:t(({column:w,text:z,record:x})=>[w.dataIndex==="operation"?(r(),p(_,{key:0,title:"\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",onConfirm:I=>e.deleteDocMember(x)},{default:t(()=>[o(l,{size:"small",type:"link",danger:""},{default:t(()=>[Tt]),_:1})]),_:2},1032,["onConfirm"])):k("",!0),w.dataIndex==="sex"?(r(),L(N,{key:1},[x.sex===1?(r(),p(y,{key:0,color:"pink"},{default:t(()=>[Ot]),_:1})):x.sex===0?(r(),p(y,{key:1,color:"red"},{default:t(()=>[At]),_:1})):(r(),p(y,{key:2,color:"orange"},{default:t(()=>[Vt]),_:1}))],64)):k("",!0),w.dataIndex==="authType"?(r(),p(E,{key:2,placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",value:x.authType,"onUpdate:value":I=>x.authType=I,onChange:I=>e.userAuthTypeChange(x),style:{width:"150px"}},{default:t(()=>[o(b,{value:1},{default:t(()=>[zt]),_:1}),o(b,{value:2},{default:t(()=>[Nt]),_:1})]),_:2},1032,["value","onUpdate:value","onChange"])):k("",!0)]),_:1},8,["dataSource","columns","loading","onChange","scroll"]),o(n,{visible:e.addUserVisible,"onUpdate:visible":a[2]||(a[2]=w=>e.addUserVisible=w),title:"\u6DFB\u52A0\u7528\u6237",onOk:e.handleAddUserOk,width:600},{default:t(()=>[o(q,{layout:"horizontal",ref:"addUserFormRef",model:e.userAdd,rules:e.addUserRules,"label-col":{span:4},"wrapper-col":{span:20}},{default:t(()=>[o(U,{label:"\u9009\u62E9\u7528\u6237",required:"",name:"userId"},{default:t(()=>[o(E,{value:e.userAdd.userId,"onUpdate:value":a[0]||(a[0]=w=>e.userAdd.userId=w),"show-search":"",placeholder:"\u8F93\u5165\u7528\u6237\u540D\u3001\u90AE\u7BB1\u3001\u624B\u673A\u53F7\u641C\u7D22","default-active-first-option":!1,"show-arrow":!0,"filter-option":!1,"not-found-content":void 0,options:e.userSearchList,onSearch:e.handleUserSearch},pe({_:2},[e.userSearchState.fetching?{name:"notFoundContent",fn:t(()=>[o(h,{size:"small"})])}:void 0]),1032,["value","options","onSearch"])]),_:1}),o(U,{label:"\u7528\u6237\u89D2\u8272",required:"",name:"authType"},{default:t(()=>[o(V,{value:e.userAdd.authType,"onUpdate:value":a[1]||(a[1]=w=>e.userAdd.authType=w)},{default:t(()=>[o(T,{value:1},{default:t(()=>[qt]),_:1}),o(T,{value:2},{default:t(()=>[Mt]),_:1})]),_:1},8,["value"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","onOk"])],64)}var jt=M(xt,[["render",Rt]]);const Bt={emits:["showDocList"],components:{SaveOutlined:fe,EditShareInstruction:ae,EditDocBaseInfo:ne,DocManageMembers:jt,EditGlobalParam:ve},props:{doc:{type:Object,required:!0}},setup(c,{emit:a}){const m=R(),e=()=>{a("showDocList")};let g=f(),v=f(),s=f({}),l=f(!1);const u=async()=>{let b=await g.value.getDoc();l.value=!0,C.apiDocAdd(b).then(E=>{A.success("\u4FDD\u5B58\u6210\u529F\uFF01"),l.value=!1,m.commit("addDocChangedNum"),E.data.id!==b.id&&e()}).catch(()=>{l.value=!1})},_=()=>{let b=v.value.getDoc();!b||(l.value=!0,C.apiDocUpdate(b).then(E=>{A.success("\u4FDD\u5B58\u6210\u529F\uFF01"),l.value=!1}).catch(()=>{l.value=!1}))};let y=f("base");return j(()=>{s.value=c.doc,l.value=!0,C.apiDocDetail({id:c.doc.id}).then(b=>{l.value=!1,s.value=b.data}).catch(()=>{l.value=!1})}),{activeEditTab:y,showDocList:e,saveBaseInfo:u,saveShareInstruction:_,docBaseInfoRef:g,shareInstructionRef:v,docEdit:s,docEditLoading:l}}},Pt=d(" \u4FDD\u5B58\u57FA\u672C\u4FE1\u606F "),Ft=d(" \u4FDD\u5B58\u5F00\u653E\u6587\u6863\u8BF4\u660E ");function Jt(c,a,m,e,g,v){const s=i("a-page-header"),l=i("EditDocBaseInfo"),u=i("a-spin"),_=i("a-tab-pane"),y=i("DocManageMembers"),b=i("EditGlobalParam"),E=i("EditShareInstruction"),S=i("save-outlined"),h=i("a-button"),U=i("a-tabs");return r(),L(N,null,[o(s,{title:"\u7F16\u8F91","sub-title":e.docEdit.name||"",onBack:e.showDocList},{extra:t(()=>[]),_:1},8,["sub-title","onBack"]),o(U,{activeKey:e.activeEditTab,"onUpdate:activeKey":a[0]||(a[0]=T=>e.activeEditTab=T),style:{padding:"5px 10px 0"}},{rightExtra:t(()=>[e.activeEditTab==="base"&&e.docEdit.authType===1?(r(),p(h,{key:0,onClick:e.saveBaseInfo,loading:e.docEditLoading,type:"primary"},{icon:t(()=>[o(S)]),default:t(()=>[Pt]),_:1},8,["onClick","loading"])):k("",!0),e.activeEditTab==="instruction"?(r(),p(h,{key:1,onClick:e.saveShareInstruction,loading:e.docEditLoading,type:"primary"},{icon:t(()=>[o(S)]),default:t(()=>[Ft]),_:1},8,["onClick","loading"])):k("",!0)]),default:t(()=>[o(_,{tab:"\u57FA\u672C\u4FE1\u606F",key:"base",forceRender:""},{default:t(()=>[o(u,{tip:"\u6570\u636E\u52A0\u8F7D\u4E2D...",spinning:e.docEditLoading},{default:t(()=>[o(l,{ref:"docBaseInfoRef",doc:e.docEdit},null,8,["doc"])]),_:1},8,["spinning"])]),_:1}),e.docEdit.id>0&&e.docEdit.authType===1?(r(),p(_,{tab:"\u6210\u5458\u7BA1\u7406",key:"members"},{default:t(()=>[o(y,{doc:e.docEdit},null,8,["doc"])]),_:1})):k("",!0),e.docEdit.id>0?(r(),p(_,{tab:"\u6587\u6863\u5168\u5C40\u53C2\u6570",key:"globalParam"},{default:t(()=>[o(b,{"dynamic-param":{docId:e.docEdit.id}},null,8,["dynamic-param"])]),_:1})):k("",!0),e.docEdit.openVisit===1?(r(),p(_,{tab:"\u5F00\u653E\u6587\u6863\u8BF4\u660E",key:"instruction"},{default:t(()=>[o(E,{ref:"shareInstructionRef",doc:e.docEdit},null,8,["doc"])]),_:1})):k("",!0)]),_:1},8,["activeKey"])],64)}var Gt=M(Bt,[["render",Jt]]);const Wt={components:{DocManageList:St,DocManageEdit:Gt},setup(){let c=f("list"),a=f({});return{showView:c,docInfo:a,editDoc:(g,v)=>{a.value=v,c.value=g},showDocList:()=>{c.value="list"}}}},Kt={key:1};function Ht(c,a,m,e,g,v){const s=i("DocManageList"),l=i("DocManageEdit");return e.showView==="list"?(r(),p(s,{key:0,onEdit:e.editDoc},null,8,["onEdit"])):(r(),L("div",Kt,[e.showView==="edit"?(r(),p(l,{key:0,onShowDocList:e.showDocList,doc:e.docInfo},null,8,["onShowDocList","doc"])):k("",!0)]))}var oo=M(Wt,[["render",Ht]]);export{oo as default};