(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{42:function(e,a,t){e.exports=t(71)},47:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(35),r=t.n(c),s=(t(47),t(1)),i=t(2),o=t(4),m=t(3),p=t(5),d=t(15),u=t(10),h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={name:t.props.name,status:t.props.status,id:t.props.id},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col mt-3"},l.a.createElement("div",{className:"card bg-light"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title text-wrap"},this.state.name),l.a.createElement("p",{className:"card-text"},"Status:",this.state.status?" On":" Off"),l.a.createElement(u.b,{to:"/appliances/"+this.state.id,className:"btn btn-primary text-wrap"},"Modify appliance details"))))}}]),a}(n.Component),g=t(7),E=t(9),f=t.n(E),b=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).countAppliancesOn=function(e){console.log("Hello");for(var a=0,t=0;e.length>t;t++)!0===e[t].status&&(console.log(t),a++);return a},t.state={loading:!0,myAppliances:[],error:!1,appliancesOn:0},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/appliances").then((function(a){console.log("Hi there"),e.setState({loading:!1,myAppliances:a.data,appliancesOn:e.countAppliancesOn(a.data)})})).catch((function(a){e.setState({loading:!1,error:!0}),a.response&&a.response.data&&console.log(a.response.data)}))}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"d-flex justify-content-center m-5"},l.a.createElement(g.CircleSpinner,{size:60,color:"#686769",loading:this.state.loading})):this.state.error?l.a.createElement("div",null,l.a.createElement("h3",null,"There was an error")):l.a.createElement("div",null,l.a.createElement("div",{className:"row m-3"},l.a.createElement("div",{className:"col"},l.a.createElement("h1",{className:"text-center"},"My appliances"))),l.a.createElement("div",{className:"row mb-3"},l.a.createElement("div",{className:"col"},l.a.createElement("h6",{className:"text-muted text-center"},this.state.appliancesOn," of your appliances are on."))),l.a.createElement("div",{className:"row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 m-3"},this.state.myAppliances.map((function(e){return l.a.createElement(h,{name:e.name,status:e.status,id:e.id})}))),l.a.createElement(u.b,{to:"/appliances/new",className:"btn btn-success m-3"},"Register a new appliance"))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-info"},l.a.createElement(u.b,{to:"/appliances",className:"navbar-brand"},"Know It's Off"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement(u.b,{to:"/appliances",className:"nav-item nav-link active"},"Home "),l.a.createElement(u.b,{to:"/appliances",className:"nav-item nav-link"},"My appliances"),l.a.createElement(u.b,{to:"/",className:"nav-item nav-link"},"Logout"))))}}]),a}(n.Component),y=(n.Component,t(13)),N=t(19),C=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).postData=function(e){t.setState({postLoading:!0}),f.a.post("/appliances",{name:t.state.myAppliance.name,type:t.state.myAppliance.type}).then((function(e){t.setState({postLoading:!1}),alert("Appliance added.")})),e.preventDefault()},t.handleChange=function(e){t.setState({myAppliance:Object(N.a)({},t.state.myAppliance,Object(y.a)({},e.target.name,e.target.value))})},t.state={loading:!1,myAppliance:{name:"My Appliance",type:"Oven",alert_email:!1,alert_text:!1},error:!1,postLoading:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.state.error?l.a.createElement("div",{className:"m-5"},l.a.createElement("h3",null,"There was an error")):this.state.loading?l.a.createElement("div",{className:"d-flex justify-content-center m-5"},l.a.createElement(g.CircleSpinner,{size:60,color:"#686769",loading:this.state.loading})):l.a.createElement("div",{className:"m-5"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"inputName"},"Appliance name"),l.a.createElement("input",{className:"form-control",name:"name",id:"inputName","aria-describedby":"nameHelp",onChange:this.handleChange,value:this.state.myAppliance.name})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"inputType"},"Appliance type"),l.a.createElement("input",{className:"form-control",name:"type",id:"inputType",onChange:this.handleChange,value:this.state.myAppliance.type})),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"alert_email",onChange:this.handleChange,value:this.state.myAppliance.alert_email,id:"exampleCheck1"}),l.a.createElement("label",{className:"form-check-label",for:"exampleCheck1"},"Send email alerts")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck2",name:"alert_text",onChange:this.handleChange,value:this.state.myAppliance.alert_text}),l.a.createElement("label",{className:"form-check-label",for:"exampleCheck2"},"Send text alerts")),l.a.createElement("button",{onClick:this.postData,className:"btn btn-success"},"Add this appliance",l.a.createElement(g.CircleSpinner,{size:20,color:"#3BBCE5",loading:this.state.postLoading}))))}}]),a}(n.Component),O=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"404 Error: Page not found"))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).doLogin=function(e){t.setState({postLoading:!0}),f.a.post("/login",{email:t.state.email,password:t.state.password}).then((function(e){t.setState({postLoading:!1}),t.props.history.push("/appliances")})),e.preventDefault()},t.handleChange=function(e){t.setState(Object(y.a)({},e.target.name,e.target.value))},t.state={loading:!1,email:"",password:"",error:!1,postLoading:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.state.error?l.a.createElement("div",{classNameName:"m-5"},l.a.createElement("h3",null,"There was an error")):this.state.loading?l.a.createElement("div",{classNameName:"d-flex justify-content-center m-5"},l.a.createElement(g.CircleSpinner,{size:60,color:"#686769",loading:this.state.loading})):l.a.createElement("div",{className:"mt-5 mb-5 container bg-light border"},l.a.createElement("div",{className:"row justify-content-md-center mt-5"},l.a.createElement("h1",null,"Log In to Know It's Off")),l.a.createElement("div",{className:"row justify-content-md-center mb-5"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{name:"email",type:"email",className:"form-control",value:this.state.email,onChange:this.handleChange,id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password"),l.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange,value:this.state.password,className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("button",{onClick:this.doLogin,className:"btn btn-primary"},"Submit",l.a.createElement(g.CircleSpinner,{size:20,color:"#3BBCE5",loading:this.state.postLoading})),l.a.createElement(u.b,{id:"signupHelp",to:"/signup",className:"form-text text-muted"},"Don't have an account? Click here to sign up."))))}}]),a}(n.Component),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).doSignup=function(e){t.setState({postLoading:!0}),f.a.post("/users",{email:t.state.email,password:t.state.password}).then((function(e){t.setState({postLoading:!1}),t.props.history.push("/login")})),e.preventDefault()},t.handleChange=function(e){t.setState(Object(y.a)({},e.target.name,e.target.value))},t.state={loading:!1,email:"",password:"",error:!1,postLoading:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.state.error?l.a.createElement("div",{classNameName:"m-5"},l.a.createElement("h3",null,"There was an error")):this.state.loading?l.a.createElement("div",{classNameName:"d-flex justify-content-center m-5"},l.a.createElement(g.CircleSpinner,{size:60,color:"#686769",loading:this.state.loading})):l.a.createElement("div",{className:"mt-5 mb-5 container bg-light border"},l.a.createElement("div",{className:"row justify-content-md-center mt-5"},l.a.createElement("h1",null,"Sign up to Know It's Off")),l.a.createElement("div",{className:"row justify-content-md-center mb-5"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{name:"email",type:"email",className:"form-control",value:this.state.email,onChange:this.handleChange,id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password"),l.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange,value:this.state.password,className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),l.a.createElement("button",{onClick:this.doSignup,className:"btn btn-primary"},"Submit",l.a.createElement(g.CircleSpinner,{size:20,color:"#3BBCE5",loading:this.state.postLoading})))))}}]),a}(n.Component),x=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).patchData=function(e){t.setState({postLoading:!0}),f.a.patch("/appliances/".concat(t.state.myAppliance.id),{name:t.state.myAppliance.name,type:t.state.myAppliance.type}).then((function(e){t.setState({postLoading:!1}),alert("Changes saved.")})),e.preventDefault()},t.handleChange=function(e){t.setState({myAppliance:Object(N.a)({},t.state.myAppliance,Object(y.a)({},e.target.name,e.target.value))})},t.state={loading:!0,myAppliance:{},error:!1,postLoading:!1},t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.handle;f.a.get("/appliances/".concat(a)).then((function(a){e.setState({loading:!1,myAppliance:a.data})})).catch((function(a){e.setState({loading:!1,error:!0}),console.log(a.response.data)}))}},{key:"render",value:function(){return this.state.error?l.a.createElement("div",{className:"m-5"},l.a.createElement("h3",null,"There was an error")):this.state.loading?l.a.createElement("div",{className:"d-flex justify-content-center m-5"},l.a.createElement(g.CircleSpinner,{size:60,color:"#686769",loading:this.state.loading})):l.a.createElement("div",{className:"m-5"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"inputName"},"Appliance name"),l.a.createElement("input",{className:"form-control",name:"name",id:"inputName","aria-describedby":"nameHelp",onChange:this.handleChange,value:this.state.myAppliance.name})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"inputType"},"Appliance type"),l.a.createElement("input",{className:"form-control",name:"type",id:"inputType",onChange:this.handleChange,value:this.state.myAppliance.type})),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",name:"alert_email",onChange:this.handleChange,checked:this.state.myAppliance.alert_email,id:"exampleCheck1"}),l.a.createElement("label",{className:"form-check-label",for:"exampleCheck1"},"Send email alerts")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck2",name:"alert_text",onChange:this.handleChange,checked:this.state.myAppliance.alert_text}),l.a.createElement("label",{className:"form-check-label",for:"exampleCheck2"},"Send text alerts")),l.a.createElement("button",{onClick:this.patchData,className:"btn btn-primary"},"Save changes ",l.a.createElement(g.CircleSpinner,{size:20,color:"#3BBCE5",loading:this.state.postLoading}))))}}]),a}(n.Component);t(70);f.a.defaults.baseURL="https://know-its-off.appspot.com/api";var k=function(e){var a=e.exact,t=e.path,n=e.component;return l.a.createElement(d.a,{exact:a,path:t,render:function(e){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(n,e))}})},A=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:j}),l.a.createElement(d.a,{exact:!0,path:"/login",component:j}),l.a.createElement(d.a,{exact:!0,path:"/signup",component:w}),l.a.createElement(k,{exact:!0,path:"/appliances",component:b}),l.a.createElement(k,{exact:!0,path:"/appliances/new",component:C}),l.a.createElement(k,{exact:!0,path:"/appliances/:handle",component:x}),l.a.createElement(k,{component:O}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5e0fa036.chunk.js.map