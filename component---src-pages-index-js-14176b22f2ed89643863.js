(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return g});a(49);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(145),l=a(163),s=a.n(l),u=a(161),d=a.n(u),p=a(157),m=a(148),f=a(144),h=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=s()(this,"props.data.site.siteMetadata.title"),e=s()(this,"props.data.site.siteMetadata.description"),a=s()(this,"props.data.allMarkdownRemark.edges");return o.a.createElement(m.a,{location:this.props.location,title:t},o.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:e}],title:t}),o.a.createElement(p.a,null),a.map(function(t){var e=t.node,a=s()(e,"frontmatter.title")||e.fields.slug;return o.a.createElement("div",{key:e.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},o.a.createElement(c.Link,{style:{boxShadow:"none"},to:e.fields.slug},a)),o.a.createElement("small",null,e.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt}}))}))},e}(o.a.Component);e.default=h;var g="2584137191"},144:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return s});var n=a(159),r=a.n(n),i=a(160),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var l=c.rhythm,s=c.scale},145:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(143),l=a.n(c);a.d(e,"Link",function(){return l.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var s=a(146),u=a.n(s);a.d(e,"PageRenderer",function(){return u.a});var d=a(34);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(t,e,a){var n;t.exports=(n=a(147))&&n.default||n},147:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(48),l=a(2),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},148:function(t,e,a){"use strict";a(33);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(145),l=a(144),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/blog/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(l.a)(-1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},t,r)},e}(o.a.Component);e.a=s},157:function(t,e,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=(a(167),a(168),a(158)),l=a.n(c),s=a(144),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},o.a.createElement("img",{src:l.a,alt:"Kasia and Bart",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,"Kasia Balcerzak")," and ",o.a.createElement("strong",null," Bart Szulc")," who live in Gdansk and works at Spartez / Atlassian making cool stuff."," ",o.a.createElement("div",null,o.a.createElement("div",{id:"bartTwitter"},o.a.createElement("a",{href:"https://twitter.com/BartSzulc"},"@BartSzulc")),o.a.createElement("div",{id:"kasiaTitter"},o.a.createElement("a",{href:"https://twitter.com/kasia_balcerzak"},"@kasia_balcerzak")))))},e}(o.a.Component);e.a=u},158:function(t,e,a){t.exports=a.p+"static/avatar-2-pic-85a72430d4fe922a2b05f3a23c375ddf.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-14176b22f2ed89643863.js.map