const e={key:"v-2dee6d24",path:"/java/arch/springcloud/Ch04.html",title:"04 SpringCloud Feign\u7684\u4F7F\u7528\u6269\u5C55",lang:"zh-CN",frontmatter:{title:"04 SpringCloud Feign\u7684\u4F7F\u7528\u6269\u5C55",category:["arch"],tag:["springcloud"],summary:"\u672C\u7AE0\u8282\u672C\u8D28\u4E0A\u662F\u8BB2\u670D\u52A1\u4E0E\u670D\u52A1\u4E4B\u95F4\u76F8\u4E92\u8C03\u7528\u65F6\u4F7F\u7528\u7684\u6280\u672F\u3002 1. \u6982\u8FF0 1.1. \u4EC0\u4E48\u662FFeign Feign\u662F\u4E00\u4E2A\u58F0\u660E\u5F0FWeb Service\u5BA2\u6237\u7AEF\u3002\u5B83\u4E3B\u8981\u4F5C\u7528\u662F\u4F7FWeb Service\u5BA2\u6237\u7AEF\u53D8\u5F97\u5F88\u7B80\u5355\u3002\u539F\u6765\u7684HttpClient\u7684\u65B9\u5F0F\u662F\u9700\u8981\u58F0\u660E\u5BA2\u6237\u7AEF\u7684\u5730\u5740\u3001\u7AEF\u53E3\u3001\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u4F53\u3001\u89E3\u7801\u5668\u3001\u534F\u8BAE\u5185\u5BB9\u7B49\u7B49\uFF0C\u7136\u540E\u521B\u5EFA\u94FE\u63A5\u540E\u8C03\u7528\u3002\u800CFeign\u5219\u662F\u901A\u8FC7\u6DFB\u52A0\u6CE8\u89E3\uFF0C\u5C4F\u853D\u5E95\u5C42\u901A",head:[["meta",{property:"og:url",content:"https://tianqingxiaozhu.com/java/arch/springcloud/Ch04.html"}],["meta",{property:"og:site_name",content:"\u5C0F\u9633\u804A\u7F16\u7A0B"}],["meta",{property:"og:title",content:"04 SpringCloud Feign\u7684\u4F7F\u7528\u6269\u5C55"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:updated_time",content:"2022-10-19T13:57:15.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"springcloud"}],["meta",{property:"article:modified_time",content:"2022-10-19T13:57:15.000Z"}]]},excerpt:"",headers:[{level:2,title:"1. \u6982\u8FF0",slug:"_1-\u6982\u8FF0",children:[{level:3,title:"1.1. \u4EC0\u4E48\u662FFeign",slug:"_1-1-\u4EC0\u4E48\u662Ffeign",children:[]},{level:3,title:"1.2. \u5165\u95E8\u6848\u4F8B",slug:"_1-2-\u5165\u95E8\u6848\u4F8B",children:[]},{level:3,title:"1.3. Feign\u7684\u5DE5\u4F5C\u539F\u7406",slug:"_1-3-feign\u7684\u5DE5\u4F5C\u539F\u7406",children:[]}]},{level:2,title:"2. \u57FA\u7840\u529F\u80FD",slug:"_2-\u57FA\u7840\u529F\u80FD",children:[{level:3,title:"2.1. FeignClient\u6CE8\u89E3\u5256\u6790",slug:"_2-1-feignclient\u6CE8\u89E3\u5256\u6790",children:[]},{level:3,title:"2.2. Feign\u5F00\u542FGzip\u538B\u7F29",slug:"_2-2-feign\u5F00\u542Fgzip\u538B\u7F29",children:[]},{level:3,title:"2.3. \u914D\u7F6EFeign\u5BA2\u6237\u7AEF",slug:"_2-3-\u914D\u7F6Efeign\u5BA2\u6237\u7AEF",children:[]},{level:3,title:"2.4. \u914D\u7F6EFeignClient\u7684\u65E5\u5FD7\u7EA7\u522B",slug:"_2-4-\u914D\u7F6Efeignclient\u7684\u65E5\u5FD7\u7EA7\u522B",children:[]},{level:3,title:"2.5. \u914D\u7F6E\u8D85\u65F6\u65F6\u95F4",slug:"_2-5-\u914D\u7F6E\u8D85\u65F6\u65F6\u95F4",children:[]}]},{level:2,title:"3. Feign\u5B9E\u6218",slug:"_3-feign\u5B9E\u6218",children:[{level:3,title:"3.1. Feign\u4FEE\u6539\u9ED8\u8BA4\u7684\u8BF7\u6C42\u5BA2\u6237\u7AEF",slug:"_3-1-feign\u4FEE\u6539\u9ED8\u8BA4\u7684\u8BF7\u6C42\u5BA2\u6237\u7AEF",children:[]},{level:3,title:"3.2. Post\u548CGet\u591A\u53C2\u6570\u4F20\u9012",slug:"_3-2-post\u548Cget\u591A\u53C2\u6570\u4F20\u9012",children:[]},{level:3,title:"3.3. Feign\u6587\u4EF6\u4E0A\u4F20",slug:"_3-3-feign\u6587\u4EF6\u4E0A\u4F20",children:[]},{level:3,title:"3.4. Feign\u9996\u6B21\u8BF7\u6C42\u5931\u8D25\u95EE\u9898",slug:"_3-4-feign\u9996\u6B21\u8BF7\u6C42\u5931\u8D25\u95EE\u9898",children:[]},{level:3,title:"3.5. Feign\u8FD4\u56DE\u56FE\u7247\u6D41\u7684\u5904\u7406\u65B9\u5F0F",slug:"_3-5-feign\u8FD4\u56DE\u56FE\u7247\u6D41\u7684\u5904\u7406\u65B9\u5F0F",children:[]},{level:3,title:"3.6. Feign\u4F20\u9012token",slug:"_3-6-feign\u4F20\u9012token",children:[]}]},{level:2,title:"4. \u5176\u4ED6\u9AD8\u7EA7\u5E94\u7528",slug:"_4-\u5176\u4ED6\u9AD8\u7EA7\u5E94\u7528",children:[]}],git:{createdTime:1666187835e3,updatedTime:1666187835e3,contributors:[{name:"zeanzai",email:"zeanzai.me@gmail.com",commits:1}]},readingTime:{minutes:4.23,words:1269},filePathRelative:"java/arch/springcloud/Ch04.md"};export{e as data};