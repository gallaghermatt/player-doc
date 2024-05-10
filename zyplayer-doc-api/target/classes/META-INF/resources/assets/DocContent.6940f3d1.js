import{l as _}from"./logUtil.6309fa68.js";import"./index.086d0536.js";import{_ as T}from"./main.5fd30069.js";import{r as w,O as j,o as m,c as R,w as y,a as I,k as r,t as b,Q as q,e as O,b as g,F as k,s as S}from"./vendor.6399378c.js";let L=["file","string","integer","long","double","object","number","boolean","ref"];var Y={getRequestParamList(e,n){if(!e)return[];let i=1,a=[];for(let o=0;o<e.length;o++){let t=e[o],c=t.description||"",s=t.type,h=t.format,u=t["x-example"],f,d,l;s==="array"?this.isSchemaRef(t.items)?(f=this.getSchemaRef(t.items),d=this.getParamDefinitions(f,n,i,{},0)):t.schema?this.isSchemaRef(t.schema.items)?(f=this.getSchemaRef(t.schema.items),d=this.getParamDefinitions(f,n,i,{},0)):t.schema.type&&(f=t.schema.type):t.items&&t.items.type?f=t.items.type:_.logMessage("001",s,t):s?L.indexOf(s)>=0||_.logMessage("003",s,t):t.schema?this.isSchemaRef(t.schema)?(s=this.getSchemaRef(t.schema),d=this.getParamDefinitions(s,n,i,{},0)):t.schema.type?(s=t.schema.type,t.schema.additionalProperties?(l={},d=this.getAdditionalProperties(t.schema.additionalProperties,l,n,i,{},0),h=l.type):t.schema.items?this.isSchemaRef(t.schema.items)?(f=this.getSchemaRef(t.schema.items),d=this.getParamDefinitions(f,n,i,{},0)):t.schema.items.type?f=t.schema.items.type:_.log("0014",s,t):_.log("0011",s,t)):_.logMessage("0013",s,t):t.items&&t.items.type?(s=t.items.type,t.items.additionalProperties?(l={},d=this.getAdditionalProperties(t.items.additionalProperties,l,n,i,{},0),h=l.type):_.logMessage("0012",s,t)):_.logMessage("002",s,t),u&&(c=c?c+"\uFF0C":"",c+="\u4F8B\uFF1A"+u),t.enum&&t.enum.length>0&&(c=c||"\u679A\u4E3E\u7C7B\u578B",c+="\uFF0C\u53EF\u9009\u503C\uFF1A"+t.enum.join("\u3001")),a.push({type:s,key:i,in:t.in,name:t.name,subType:f,required:t.required?"\u662F":"\u5426",format:h,enum:t.enum,example:u,collectionFormat:t.collectionFormat,description:c,additional:l,children:d}),i++}return a},getResponseParamList(e,n){let i=[],a=1;return Object.keys(e).forEach(o=>{let t=e[o],c=t.content,s=[],h=1;Object.keys(c).forEach(u=>{let f=c[u],d=a+"_"+h,l=this.analysisParamObj(f,n,d);s.push({mediaType:u,key:d,schemas:l.children}),h++}),i.push({code:o,key:a,desc:t.description,childrens:s}),a++}),console.log(i),i},isSchemaRef(e){return!!(e&&e.$ref)},getSchemaRef(e){return e.$ref&&e.$ref.indexOf("#/components/schemas/")===0?e.$ref.replace("#/components/schemas/",""):(_.logMessage("9467","",e),"")},getParamDefinitions(e,n,i,a,o){let c=(n.schemas||{})[e];if(o>=10||!c||(a[e]=(a[e]||0)+1,a[e]>2))return;let s=[],h=c.properties;if(h){let u={};Object.keys(h).forEach(f=>{let d=h[f],l=d.type;Object.keys(u).forEach(x=>{a[x]=void 0});let p=this.analysisParamObj(d);p.name=f,s.push(p),u[l]=1})}return s.length>0?s:void 0},getAdditionalProperties(e,n,i,a,o,t){if(this.isSchemaRef(e))return n.type=this.getSchemaRef(e),n.children=this.getParamDefinitions(n.type,i,a,o,t+1),n.additional;if(e.additionalProperties)return n.type=e.type,n.additional={},this.getAdditionalProperties(e.additionalProperties,n.additional,i,a,o,t+1);if(e.type==="array")if(n.type=e.type,this.isSchemaRef(e.items)){let c=this.getSchemaRef(e.items),s=this.getParamDefinitions(c,i,a,o,t+1);return n.additional={type:c,children:s},s}else _.logMessage("007","",e);else n.type=e.type,L.indexOf(n.type)>=0||_.logMessage("008","",e)},analysisParamObj(e,n,i){let a=e.description||"",o=e.type,t=e.format,c=e["x-example"],s,h,u;if(o==="array")if(this.isSchemaRef(e.items))s=this.getSchemaRef(e.items),h=this.getParamDefinitions(s,n,i,{},0);else if(e.schema)this.isSchemaRef(e.schema.items)?(s=this.getSchemaRef(e.schema.items),h=this.getParamDefinitions(s,n,i,{},0)):e.schema.type&&(s=e.schema.type);else if(e.items&&e.items.type)s=e.items.type;else if(e.items&&e.items.properties){h=[];let f=1,d=e.items.properties;Object.keys(d).forEach(l=>{let p=d[l],x=i+"_"+f,P=this.analysisParamObj(p,n,x);P.name=l,h.push(P),f++})}else _.logMessage("001",o,e);else if(o)L.indexOf(o)>=0||_.logMessage("003",o,e);else if(e.schema)this.isSchemaRef(e.schema)?(o=this.getSchemaRef(e.schema),h=this.getParamDefinitions(o,n,i,{},0)):e.schema.type?(o=e.schema.type,e.schema.additionalProperties?(u={},h=this.getAdditionalProperties(e.schema.additionalProperties,u,n,i,{},0),t=u.type):e.schema.items?this.isSchemaRef(e.schema.items)?(s=this.getSchemaRef(e.schema.items),h=this.getParamDefinitions(s,n,i,{},0)):e.schema.items.type?s=e.schema.items.type:_.log("0014",o,e):_.log("0011",o,e)):_.logMessage("0013",o,e);else if(e.items&&e.items.type)o=e.items.type,e.items.additionalProperties?(u={},h=this.getAdditionalProperties(e.items.additionalProperties,u,n,i,{},0),t=u.type):_.logMessage("0012",o,e);else if(e.properties){h=[];let f=1,d=e.properties;Object.keys(d).forEach(l=>{let p=d[l],x=i+"_"+f,P=this.analysisParamObj(p,n,x);P.name=l,h.push(P),f++})}else _.logMessage("002",o,e);return c&&(a=a?a+"\uFF0C":"",a+="\u4F8B\uFF1A"+c),e.items&&e.items.enum&&e.items.enum.length>0&&(e.items.enum,a=a||"\u679A\u4E3E\u7C7B\u578B",a+="\uFF0C\u53EF\u9009\u503C\uFF1A"+e.items.enum.join("\u3001")),console.log("xxx",e),{type:o,key:i,in:e.in,name:e.name,subType:s,required:e.required?"\u662F":"\u5426",format:t,enum:e.enum,example:c,collectionFormat:e.collectionFormat,description:a,additional:u,children:h}}};const M={props:{docInfoShow:{type:Object,required:!0},requestParamList:{type:Array,required:!0},responseParamList:{type:Array,required:!0}},setup(){return{requestParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:200},{title:"\u7C7B\u578B",dataIndex:"type",width:150},{title:"\u53C2\u6570\u4F4D\u7F6E",dataIndex:"in",width:100},{title:"\u5FC5\u586B",dataIndex:"required",width:60},{title:"\u8BF4\u660E",dataIndex:"description"}],responseCodeListColumns:[{title:"\u72B6\u6001\u7801",dataIndex:"code",width:100},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"desc"}],responseMediaTypeColumns:[{title:"\u5A92\u4F53\u7C7B\u578B",dataIndex:"mediaType"}],responseParamListColumns:[{title:"\u53C2\u6570\u540D",dataIndex:"name",width:250},{title:"\u7C7B\u578B",dataIndex:"type",width:250},{title:"\u8BF4\u660E",dataIndex:"description"}]}}},v=["innerHTML"],D=r("header"),C=r("body"),E=r("query"),F=r("formData"),H=r("-"),N={key:0,style:{color:"#f00"}},V=r("\u5426"),z=r("-"),B=["innerHTML"],A={key:1,style:{"text-align":"center",padding:"10px 0"}},U={key:1,style:{"text-align":"center",padding:"10px 0"}};function Q(e,n,i,a,o,t){const c=w("a-form-item"),s=w("a-tag"),h=w("a-table"),u=w("a-form"),f=j("highlight");return m(),R(u,{"label-col":{span:4},"wrapper-col":{span:20}},{default:y(()=>[I(c,{label:"\u63A5\u53E3\u5730\u5740"},{default:y(()=>[r(b(i.docInfoShow.url),1)]),_:1}),I(c,{label:"\u8BF4\u660E"},{default:y(()=>[q(O("div",{class:"markdown-body",innerHTML:i.docInfoShow.description},null,8,v),[[f]])]),_:1}),I(c,{label:"\u8BF7\u6C42\u65B9\u5F0F"},{default:y(()=>[r(b(i.docInfoShow.method),1)]),_:1}),I(c,{label:"\u8BF7\u6C42\u6570\u636E\u7C7B\u578B"},{default:y(()=>[r(b(i.docInfoShow.consumes),1)]),_:1}),I(c,{label:"\u54CD\u5E94\u6570\u636E\u7C7B\u578B"},{default:y(()=>[r(b(i.docInfoShow.produces),1)]),_:1}),I(c,{label:"\u8BF7\u6C42\u53C2\u6570"},{default:y(()=>[I(h,{dataSource:i.requestParamList,columns:a.requestParamListColumns,size:"small",pagination:!1,defaultExpandAllRows:""},{bodyCell:y(({column:d,text:l,record:p})=>[d.dataIndex==="type"?(m(),g(k,{key:0},[r(b(l)+" ",1),p.subType?(m(),g(k,{key:0},[r("["+b(p.subType)+"]",1)],64)):S("",!0),p.format?(m(),g(k,{key:1},[r("("+b(p.format)+")",1)],64)):S("",!0)],64)):S("",!0),d.dataIndex==="in"?(m(),g(k,{key:1},[l==="header"?(m(),R(s,{key:0,color:"pink"},{default:y(()=>[D]),_:1})):l==="body"?(m(),R(s,{key:1,color:"red"},{default:y(()=>[C]),_:1})):l==="query"?(m(),R(s,{key:2,color:"orange"},{default:y(()=>[E]),_:1})):l==="formData"?(m(),R(s,{key:3,color:"green"},{default:y(()=>[F]),_:1})):l?(m(),R(s,{key:5,color:"purple"},{default:y(()=>[r(b(l),1)]),_:2},1024)):(m(),g(k,{key:4},[H],64))],64)):S("",!0),d.dataIndex==="required"?(m(),g(k,{key:2},[l==="\u662F"?(m(),g("span",N,"\u662F")):l==="\u5426"?(m(),g(k,{key:1},[V],64)):(m(),g(k,{key:2},[z],64))],64)):S("",!0),d.dataIndex==="description"?(m(),g(k,{key:3},[r(b(l),1)],64)):S("",!0)]),_:1},8,["dataSource","columns"])]),_:1}),I(c,{label:"\u8FD4\u56DE\u7ED3\u679C"},{default:y(()=>[I(h,{dataSource:i.responseParamList,columns:a.responseCodeListColumns,size:"small",pagination:!1},{bodyCell:y(({column:d,text:l,record:p})=>[d.dataIndex==="desc"?(m(),g("div",{key:0,innerHTML:l},null,8,B)):S("",!0)]),expandedRowRender:y(({record:d})=>[d.childrens?(m(),R(h,{key:0,dataSource:d.childrens,columns:a.responseMediaTypeColumns,size:"small",pagination:!1},{bodyCell:y(({column:l,text:p,record:x})=>[l.dataIndex==="type"?(m(),g(k,{key:0},[r(b(p)+" ",1),x.subType?(m(),g(k,{key:0},[r("["+b(x.subType)+"]",1)],64)):S("",!0),x.format?(m(),g(k,{key:1},[r("("+b(x.format)+")",1)],64)):S("",!0)],64)):S("",!0)]),expandedRowRender:y(({record:l})=>[l.schemas?(m(),R(h,{key:0,dataSource:l.schemas,columns:a.responseParamListColumns,size:"small",pagination:!1},{bodyCell:y(({column:p,text:x,record:P})=>[p.dataIndex==="type"?(m(),g(k,{key:0},[r(b(x)+" ",1),P.subType?(m(),g(k,{key:0},[r("["+b(P.subType)+"]",1)],64)):S("",!0),P.format?(m(),g(k,{key:1},[r("("+b(P.format)+")",1)],64)):S("",!0)],64)):S("",!0)]),_:2},1032,["dataSource","columns"])):(m(),g("div",A,"\u65E0\u7ED3\u679C\u8BF4\u660E"))]),_:2},1032,["dataSource","columns"])):(m(),g("div",U,"\u65E0\u7ED3\u679C\u8BF4\u660E"))]),_:1},8,["dataSource","columns"])]),_:1})]),_:1})}var Z=T(M,[["render",Q]]);export{Z as D,Y as o};