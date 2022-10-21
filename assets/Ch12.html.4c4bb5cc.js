const l={key:"v-5f6af727",path:"/java/arch/springcloud/Ch12.html",title:"12 SpringCloud \u914D\u7F6E\u4E2D\u5FC3",lang:"zh-CN",frontmatter:{title:"12 SpringCloud \u914D\u7F6E\u4E2D\u5FC3",category:["arch"],tag:["springcloud"],summary:"\u4E24\u4E2A\u9879\u76EE\uFF1A\u4E00\u4E2A\u662FSpringCloud-Netflix + Apollo\uFF1B \u4E00\u4E2A\u662FSpringCloud-Alibaba + Nacos\uFF1B 1. apollo\u90E8\u7F72\u53CA\u4F7F\u7528\u8FC7\u7A0B 1.1. \u90E8\u7F72\u8FC7\u7A0B 1. \u4E0B\u8F7D\u4E09\u4E2Azip\u5305\uFF0C\u5E76\u89E3\u538B 2. \u5BFC\u5165\u6570\u636E\u5E93 3. 4. 5. \u4F9D\u6B21\u542F\u52A8 config \u3001 admin\u3001 portal \u670D\u52A1 6. \u68C0\u67E58080\u7AEF\u53E3\u5360\u7528\u60C5\u51B5\uFF0C\u5982\u679C",head:[["meta",{property:"og:url",content:"https://tianqingxiaozhu.com/java/arch/springcloud/Ch12.html"}],["meta",{property:"og:site_name",content:"\u5C0F\u9633\u804A\u7F16\u7A0B"}],["meta",{property:"og:title",content:"12 SpringCloud \u914D\u7F6E\u4E2D\u5FC3"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-10-19T13:57:15.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"springcloud"}],["meta",{property:"article:modified_time",content:"2022-10-19T13:57:15.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. apollo\u90E8\u7F72\u53CA\u4F7F\u7528\u8FC7\u7A0B",slug:"_1-apollo\u90E8\u7F72\u53CA\u4F7F\u7528\u8FC7\u7A0B",children:[{level:3,title:"1.1. \u90E8\u7F72\u8FC7\u7A0B",slug:"_1-1-\u90E8\u7F72\u8FC7\u7A0B",children:[]},{level:3,title:"1.2. \u4F7F\u7528",slug:"_1-2-\u4F7F\u7528",children:[]},{level:3,title:"1.3. \u6CE8\u610F\u4E8B\u9879",slug:"_1-3-\u6CE8\u610F\u4E8B\u9879",children:[]},{level:3,title:"1.4. \u53C2\u8003",slug:"_1-4-\u53C2\u8003",children:[]}]},{level:2,title:"2. \u628Aapplication.yml\u6587\u4EF6\u6574\u4F53\u653E\u5165apollo",slug:"_2-\u628Aapplication-yml\u6587\u4EF6\u6574\u4F53\u653E\u5165apollo",children:[{level:3,title:"2.1. \u9879\u76EE\u80CC\u666F",slug:"_2-1-\u9879\u76EE\u80CC\u666F",children:[]},{level:3,title:"2.2. \u6DFB\u52A0\u4F9D\u8D56",slug:"_2-2-\u6DFB\u52A0\u4F9D\u8D56",children:[]},{level:3,title:"2.3. \u6DFB\u52A0\u6CE8\u89E3",slug:"_2-3-\u6DFB\u52A0\u6CE8\u89E3",children:[]},{level:3,title:"2.4. \u53D1\u5E03\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9",slug:"_2-4-\u53D1\u5E03\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9",children:[]},{level:3,title:"2.5. \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",slug:"_2-5-\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",children:[]},{level:3,title:"2.6. \u521B\u5EFA\u672C\u5730\u7F13\u5B58\u76EE\u5F55",slug:"_2-6-\u521B\u5EFA\u672C\u5730\u7F13\u5B58\u76EE\u5F55",children:[]},{level:3,title:"2.7. \u542F\u52A8\u540E\u8FDB\u884C\u9A8C\u8BC1",slug:"_2-7-\u542F\u52A8\u540E\u8FDB\u884C\u9A8C\u8BC1",children:[]},{level:3,title:"2.8. \u6CE8\u610F\u4E8B\u9879",slug:"_2-8-\u6CE8\u610F\u4E8B\u9879",children:[]},{level:3,title:"2.9. \u53C2\u8003\u5730\u5740",slug:"_2-9-\u53C2\u8003\u5730\u5740",children:[]}]},{level:2,title:"3. \u4FEE\u6539\u672C\u5730\u7F13\u5B58\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u5730\u5740",slug:"_3-\u4FEE\u6539\u672C\u5730\u7F13\u5B58\u7684\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55\u5730\u5740",children:[]},{level:2,title:"4. \u5B89\u88C5\u90E8\u7F72nacos",slug:"_4-\u5B89\u88C5\u90E8\u7F72nacos",children:[{level:3,title:"4.1. \u90E8\u7F72nacos",slug:"_4-1-\u90E8\u7F72nacos",children:[]},{level:3,title:"4.2.",slug:"_4-2",children:[]},{level:3,title:"4.3. \u53C2\u8003\u94FE\u63A5",slug:"_4-3-\u53C2\u8003\u94FE\u63A5",children:[]}]}],git:{createdTime:1666187835e3,updatedTime:1666187835e3,contributors:[{name:"zeanzai",email:"zeanzai.me@gmail.com",commits:1}]},readingTime:{minutes:3.61,words:1082},filePathRelative:"java/arch/springcloud/Ch12.md"};export{l as data};
