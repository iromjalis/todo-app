(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,n){e.exports={ModalBackdrop:"Modal_ModalBackdrop__3iFAG",ModalContent:"Modal_ModalContent__2V-8g"}},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),l=(n(32),n(10)),i=n(26),s=n(12),d=n(2),u=n(3),h=n(5),j=n(4),p=(n(33),n(81)),b=n(1),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:e.props.todos},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value,r=n.type,c=n.checked;e.setState(Object(l.a)({},a,"checkbox"===r?c:o)),console.log(e.state.checked)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,a=t.onDeleteTodo,o=n.length,r=n.filter((function(e){return e.completed})).length;return Object(b.jsxs)("div",{className:"TodoListWrapper",children:["TodoList:",Object(b.jsxs)("p",{children:["total : ",o," | \u2705 \u2192 ",r]}),Object(b.jsx)("ol",{children:n.map((function(t){var n=t.id,o=t.text,r=t.completed;return Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{type:"checkbox",name:"completed",id:"",checked:r,onChange:function(){return e.props.toggleCompleted(n)}}),r?"\u2705":"\u26d4"," ",o,"\u2003",Object(b.jsx)(p.a,{variant:"contained",color:"primary",onClick:function(){return a(n)},children:"\u274c Delete"})]},n)}))})]})}}]),n}(a.Component);g.defaultProps={};var f=g,O=function(e){var t=e.filter,n=e.onChange;return Object(b.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(b.jsx)("input",{type:"text",value:t,onChange:n})]})};O.defaultProps={};var m=O,v=(n(39),"junior"),x="middle",y="senior",C={login:"",password:"",email:"",agreed:!1,level:null},S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state=Object(s.a)({},C),e.handleChange=function(t){var n=t.target,a=n.name,o=n.value,r=n.checked,c=n.type;e.setState(Object(l.a)({},a,"checkbox"===c?r:o))},e.handleSubmit=function(t){t.preventDefault(),console.log("Signed up as: ".concat(e.state.login)),console.log(e.state),e.props.onSubmit(Object(s.a)({},e.state)),e.props.onClose(),e.setState(Object(s.a)({},C)),localStorage.setItem("login",e.state.login)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.login,n=e.password,a=e.email,o=e.agreed,r=e.level;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",placeholder:"Enter login",name:"login",value:t,onChange:this.handleChange})]}),Object(b.jsxs)("label",{children:["Email",Object(b.jsx)("input",{type:"email",placeholder:"Enter email",name:"email",value:a,onChange:this.handleChange})]}),Object(b.jsxs)("label",{children:["Password",Object(b.jsx)("input",{type:"password",placeholder:"Enter password",name:"password",value:n,onChange:this.handleChange})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Choose your gender"}),Object(b.jsxs)("label",{children:["Junior",Object(b.jsx)("input",{type:"radio",checked:r===v,name:"level",value:v,onChange:this.handleChange})]}),Object(b.jsxs)("label",{children:["Middle",Object(b.jsx)("input",{type:"radio",checked:r===x,name:"level",value:x,onChange:this.handleChange})]}),Object(b.jsxs)("label",{children:["Senior",Object(b.jsx)("input",{type:"radio",checked:r===y,name:"level",value:y,onChange:this.handleChange})]})]}),Object(b.jsxs)("label",{children:["Agree to terms",Object(b.jsx)("input",{name:"agreed",type:"checkbox",checked:o,onChange:this.handleChange})]}),Object(b.jsxs)("button",{type:"submit",disabled:!o,children:["Sign up as ",Object(b.jsx)("b",{children:t})]})]})}}]),n}(a.Component),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={text:""},e.handleChange=function(t){e.setState({text:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.text),e.setState({text:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.text;return Object(b.jsx)("form",{onSubmit:this.handleSubmit,children:Object(b.jsxs)("label",{children:["Add new todo",Object(b.jsx)("input",{type:"text",name:"text",value:e,placeholder:"Add new todo...",onChange:this.handleChange}),Object(b.jsx)("button",{type:"submit",children:"Add"})]})})}}]),n}(a.PureComponent);k.defaultProps={};var w=k,M=n(15),A=n.n(M),P=document.querySelector("#modal-root"),D=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(b.jsx)("div",{className:A.a.ModalBackdrop,onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:A.a.ModalContent,children:this.props.children})}),P)}}]),n}(a.PureComponent);D.defaultProps={};var L=D,N=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={url:"",title:""},e.handleClick=function(t){e.setState({title:t.target.textContent,url:t.target.attributes.href})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.articles;return Object(b.jsx)("div",{className:"ArticleListWrapper",children:Object(b.jsx)("ul",{children:t.map((function(t){var n=t.objectID,a=t.url,o=t.title;return Object(b.jsx)("li",{onClick:e.handleClick,children:Object(b.jsx)("a",{href:a,target:"_blank",rel:"noreferrer noopener",children:o||"Sorry, no title \ud83d\ude25"})},n)}))})})}}]),n}(a.PureComponent);N.defaultProps={};var T=n(11),I=n.n(T),q={fetchArticlesWithQuery:function(e){return I.a.get("https://hn.algolia.com/api/v1/search?query=".concat(e)).then((function(e){return e.data.hits}))}},E=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(t.target.value),e.setState({query:t.target.value}),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.onSubmit,t=this.state.query;return Object(b.jsxs)("form",{onSubmit:e,children:[Object(b.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(b.jsx)("input",{type:"text",value:t,onChange:this.handleChange})]}),Object(b.jsx)("button",{type:"submit",children:"\ud83d\udd0d"})]})}}]),n}(a.PureComponent);E.defaultProps={};var _=n(25),W=n.n(_),B=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={articles:[],todos:[{id:"id-2",text:"\u0420\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441 React Router",completed:!0},{id:"id-3",text:"\u041f\u0435\u0440\u0435\u0436\u0438\u0442\u044c Redux",completed:!1},{id:"LAsQIyg_x",text:"\u0412\u044b\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React",completed:!1}],filter:"",showModal:!1,isLoading:!1,error:null,searching:""},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.onChange=function(t){e.setState({filter:t.target.value})},e.handleSubmit=function(t){console.log("data",t),e.setState(Object(s.a)({},t))},e.addNewTodo=function(t){if(e.state.todos.map((function(e){return e.text})).includes(t.trim()))alert("already exists");else{var n={id:W.a.generate(),text:t.trim(),completed:!1};e.setState((function(e){var t=e.todos;return{todos:[n].concat(Object(i.a)(t))}}))}},e.toggleCompleted=function(t){e.setState((function(n){return{todos:e.toggleProperty(n,t,"completed")}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.articlesSearching=function(t){e.setState({searching:t})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});this.state.searching;q.fetchArticlesWithQuery(this.state.searching).then((function(t){return e.setState({articles:t})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})})),localStorage.getItem("todos")&&this.setState({todos:JSON.parse(localStorage.getItem("todos"))}),localStorage.getItem("login")&&this.setState({login:localStorage.getItem("login")})}},{key:"componentDidUpdate",value:function(e,t){var n=this;t!==this.state&&localStorage.setItem("todos",JSON.stringify(this.state.todos)),t.searching!==this.state.searching&&q.fetchArticlesWithQuery(this.state.searching).then((function(e){return n.setState({articles:e})})).catch((function(e){return n.setState({error:e})})).finally((function(){return n.setState({isLoading:!1})}))}},{key:"toggleProperty",value:function(e,t,n){return e.todos.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},Object(l.a)({},n,!e[n])):e}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=(e.onChange,e.filter),a=e.showModal,o=(e.agreed,e.articles,e.isLoading,e.error,e.login),r=(e.searching,t.filter((function(e){return e.text.toLowerCase().includes(n.toLowerCase())})));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"App",children:[a&&Object(b.jsxs)(L,{onClose:this.toggleModal,children:[Object(b.jsx)("button",{onClick:this.toggleModal,children:"X"}),Object(b.jsx)(S,{onSubmit:this.handleSubmit,onClose:this.toggleModal})]}),!o&&Object(b.jsx)("button",{className:"button",onClick:this.toggleModal,children:a?"":"Open registration form"}),Object(b.jsx)("h1",{children:o?"Welcome, ".concat(o):""}),Object(b.jsx)(w,{onSubmit:this.addNewTodo}),Object(b.jsx)("header",{className:"App-header"}),Object(b.jsx)(m,{filter:this.state.filter,onChange:this.onChange}),Object(b.jsx)(f,{todos:r,onDeleteTodo:this.deleteTodo,toggleCompleted:this.toggleCompleted})]})})}}]),n}(a.Component);c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.ca9f09d5.chunk.js.map