(this["webpackJsonpphasmophobia-cheatsheet"]=this["webpackJsonpphasmophobia-cheatsheet"]||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/ghost.c97139a7.svg"},48:function(e,a,t){e.exports=t(62)},53:function(e,a,t){},55:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(21),i=t.n(s),o=t(15),c=(t(53),t(24)),l=t(26),u=t(8),d=t(10),p=t(11),m=t(18),h=t(14),v=t(13),g=t(5),b=(t(54),t(55),t(22)),E=t(20),y=t(39),f=t(64),j=t(65),k=t(66),x=t(67),w=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e=this,a=this.props.data.primaryevidence.map((function(a,t){var n=r.a.createElement(y.a,{className:"evidence-header"+(e.props.remainingEvidence[a]?"":" grey")},a),s=e.props.ghostNames.map((function(t){var n=" grey";return e.props.ignoredGhosts[t]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[t]||(n=""),r.a.createElement(y.a,{className:"ghost-evidence"+n,key:"col-"+t+"-"+a},e.props.ghostHasEvidence[t][a]?"X":"")})),i="evidence-row";return e.props.selectedEvidence[a]?i+=" green-background":e.props.ignoredEvidence[a]?i+=" red-background":t%2===0&&(i+=" darkgrey-background"),r.a.createElement(f.a,{className:i,onClick:function(t){return e.props.onEvidenceClick(t,a)},onContextMenu:function(t){return e.props.onEvidenceClick(t,a)},key:"row-"+a},n,s)})),t=0,n=null;(this.props.selectedEvidenceAmount>1||this.props.selectedSecondaryEvidenceAmount>0||this.props.showAllSecondaryEvidence)&&(n=this.props.data.secondaryevidence.map((function(a){var n,s=!1,i=Object(u.a)(e.props.ghostNames);try{for(i.s();!(n=i.n()).done;){var o=n.value;if(e.props.selectedGhosts[o]&&e.props.ghostHasEvidence[o][a]){s=!0;break}}}catch(p){i.e(p)}finally{i.f()}if(s||e.props.ignoredEvidence[a]||e.props.selectedEvidence[a]||e.props.showAllSecondaryEvidence){var c=r.a.createElement(y.a,{className:"evidence-header"+(e.props.remainingEvidence[a]?"":" grey"),key:"header-"+a},a),l=e.props.ghostNames.map((function(t){return r.a.createElement(y.a,{className:"ghost-evidence"+(0===e.props.selectedEvidenceAmount||e.props.selectedGhosts[t]?"":" grey"),key:"col-"+t+"-"+a},e.props.ghostHasEvidence[t][a]?"X":"")})),d="evidence-row";return e.props.selectedEvidence[a]?d+=" green-background":e.props.ignoredEvidence[a]?d+=" red-background":t%2===0&&(d+=" darkgrey-background"),t++,r.a.createElement(f.a,{className:d,onClick:function(t){return e.props.onEvidenceClick(t,a)},onContextMenu:function(t){return e.props.onEvidenceClick(t,a)},key:"row-"+a},c,l)}return null})));var s=this.props.ghostNames.map((function(a,t){var n=" grey";return e.props.ignoredGhosts[a]||0!==e.props.selectedEvidenceAmount&&!e.props.selectedGhosts[a]||(n=""),1===e.props.selectedGhostAmount&&e.props.selectedGhosts[a]&&(n=" green"),r.a.createElement(y.a,{className:"ghost-header"+n,key:"header-"+a},r.a.createElement("div",{className:"rotated45"},a))}));return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},r.a.createElement(j.a,{style:{padding:"0",margin:"20px",marginTop:"0px",maxWidth:"100000px"}},r.a.createElement(f.a,null,r.a.createElement(y.a,{style:{textAlign:"center"}},r.a.createElement("b",null,"Click izquierdo: Activa una prueba.",r.a.createElement("br",null),"Click derecho: Ignora una prueba.",r.a.createElement("br",null),"Repetir click limpiar\xe1 la selecci\xf3n."))),r.a.createElement(f.a,null,r.a.createElement(y.a,{className:"evidence-header"},r.a.createElement(k.a,{variant:"danger",onClick:function(){return e.props.resetSelected()}},"Limpiar todo"))),r.a.createElement(f.a,{style:{width:"100%"}},r.a.createElement(y.a,{className:"evidence-header"},"Pruebas"),s),a,r.a.createElement(x.a.Check,{id:"toggleSecondaryEvidence",draggable:!1,type:"checkbox",custom:"true",label:"Muestra siempre las evidencias secundarias",checked:this.props.showAllSecondaryEvidence,style:{margin:"15px"},onChange:function(a){return e.props.toggleSetting("showAllSecondaryEvidence")}}),null!==n&&r.a.createElement(f.a,{style:{width:"100%",marginTop:"25px"}},r.a.createElement(y.a,{className:"evidence-header"},"Pruebas secundarias")),n)))}}]),t}(n.Component),q=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={width:window.innerWidth,height:window.innerHeight},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(m.a)(n)),n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"render",value:function(){var e=this,a={marginTop:"5px",marginLeft:"5px"},t=function(e,t){return t<e.length?r.a.createElement(y.a,{style:a,key:"voiceline-"+e[t]},e[t]):r.a.createElement(y.a,null)},n=function(a){return r.a.createElement(f.a,{key:"voicelines-row-"+a},t(e.props.data.voicelines.general,a),t(e.props.data.voicelines.ouija,a),t(e.props.data.voicelines.spiritbox,a),t(e.props.data.voicelines.attacktrigger,a))};if(this.state.width>1e3){for(var s=[],i=0,o=Math.max(this.props.data.voicelines.general.length,this.props.data.voicelines.ouija.length,this.props.data.voicelines.spiritbox.length,this.props.data.voicelines.attacktrigger.length);i<o;)s.push(n(i++));var c=["Preguntas generales","Preguntas de Ouija","Preguntas Spirit Box","Palabras de enfado y ataque"].map((function(e,a){return r.a.createElement(y.a,{key:"header-"+e},r.a.createElement("h3",null,e))}));return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"25px 0px 15px 0px"}},r.a.createElement(j.a,{style:{padding:"0",margin:"20px",maxWidth:"90%"}},r.a.createElement(f.a,{style:{width:"100%"}},c),s)))}var l=[],u={general:"General Questions",ouija:"Ouija Board Questions",spiritbox:"Spirit Box Questions",attacktrigger:"Anger and Attack Trigger Words"};for(var d in this.props.data.voicelines){console.log(d);var p=[];p.push(r.a.createElement(y.a,{key:"header-"+u[d],style:{marginTop:"35px"}},r.a.createElement("h3",null,u[d])));for(var m=0;m<this.props.data.voicelines[d].length;m++)p.push(t(this.props.data.voicelines[d],m)),m++;l.push(p)}return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{display:"flex",margin:"25px 0px 15px 0px"}},r.a.createElement(j.a,{style:{marginLeft:"20px"}},l)))}}]),t}(n.Component),C=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},r.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},r.a.createElement("h2",{style:{textAlign:"center"}},"About Phasmophobia CheatSheet"),r.a.createElement("br",null),r.a.createElement("p",null,"Phasmophobia CheatSheet provides an interactive 2D grid overview about all ghost types and their evidence. Add evidence to rule out ghosts and narrow down your search. If you set your game to Borderless Fullscreen window mode, you can quickly Alt+TAB in and out of your game."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Phasmophobia CheatSheet isn\u2019t endorsed by Kinetic Games and doesn\u2019t reflect the views or opinions of Kinetic Games or anyone officially involved in producing or managing Phasmophobia."))))}}]),t}(n.Component),O=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"inline-block",width:"100%",height:"100%"}},r.a.createElement("div",{style:{margin:"auto",width:"600px",backgroundColor:"#4e5d6c",borderRadius:"5px",textAlign:"justify",marginTop:"100px",boxShadow:"2px 2px 5px #000000"}},r.a.createElement("div",{className:"fadeIn",style:{margin:"5px",padding:"30px"}},r.a.createElement("h2",{style:{textAlign:"center"}},"Contact"),r.a.createElement("br",null),r.a.createElement("p",null,"Hi, I am unobtanium. I created this project in my freetime. You can find the project repository with the source code on my GitHub page ",r.a.createElement("a",{href:"https://github.com/un0btanium/phasmophobia-cheatsheet"},"here"),"."),r.a.createElement("p",null,"If you want to send me some feedback, feel free to write me an ",r.a.createElement("a",{href:"mailto:unobtaniumlol@gmail.de?subject=Phasmophobia-Cheatsheet%20Feedback"},"eMail"),"."))))}}]),t}(n.Component),S={primaryevidence:["EMF Nivel 5","Huellas dactilares","Temperaturas bajo cero","Orbes","Escritura fantasma","Spirit Box"],secondaryevidence:["lanza objetos a gran velocidad","m\xe1s activos cuanta m\xe1s gente haya alrededor","varillas de incienso cerca har\xe1 que no ataque por un largo periodo de tiempo","habilidad de volar, nunca dejar\xe1 pisadas rastreables en el suelo","reacci\xf3n t\xf3xica al entrar en contacto con la sal","a veces atraviesa paredes","mirarle har\xe1 que tu cordura disminuya considerablemente","fotografiarle har\xe1 que desaparezca temporalmente","suele ser invocado mediante un tablero de Ouija","puede poseer a los vivos","puede lanzar muchos objetos a la vez","solo podr\xe1 marcar a un jugador a la vez","temen el crucifijo haciendo que sean menos agresivas si se encuentran cerca de uno","es un fantasma territorial que atacar\xe1 cuando se sienta amenazado","viajar\xe1 m\xe1s r\xe1pido cuanto mayor sea la distancia entre \xe9l y su v\xedctima","cuando el cuadro el\xe9ctrico est\xe9 apagado no podr\xe1 usar su habilidad","es muy poderoso en la oscuridad","tendr\xe1 mas posibilidades de atacarte si te encuentras a oscuras","encender las luces har\xe1 que tenga menos probabilidades de atacarte","se desplaza m\xe1s r\xe1pido si va tras su presa","esconderte har\xe1 que se mueva muy lento","no generar\xe1 actividad paranormal si hay varias personas cerca","conocidos por atacar sin ninguna raz\xf3n aparente","hacer preguntas exitosas a trav\xe9s del tablero de Ouija har\xe1 que la cordura no disminuya","gran impacto sobre la cordura de los individuos","usar las varillas de incienso en su habitaci\xf3n har\xe1 que no se pase\xe9 por ah\xed en un gran periodo de tiempo"],ghosts:[{name:"Esp\xedritu",description:"",uniquestrength:"",weaknesses:"",evidence:["Huellas dactilares","Escritura fantasma","Spirit Box","varillas de incienso cerca har\xe1 que no ataque por un largo periodo de tiempo"]},{name:"Espectro",description:"",uniquestrength:"",weaknesses:"",evidence:["Huellas dactilares","Temperaturas bajo cero","Spirit Box","habilidad de volar, nunca dejar\xe1 pisadas rastreables en el suelo","reacci\xf3n t\xf3xica al entrar en contacto con la sal","a veces atraviesa paredes"]},{name:"Ente",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Nivel 5","Temperaturas bajo cero","Orbes","mirarle har\xe1 que tu cordura disminuya considerablemente","fotografiarle har\xe1 que desaparezca temporalmente","suele ser invocado mediante un tablero de Ouija","puede poseer a los vivos"]},{name:"Poltergeist",description:"",uniquestrength:"",weaknesses:"",evidence:["Huellas dactilares","Orbes","Spirit Box","puede lanzar muchos objetos a la vez"]},{name:"Banshee",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Nivel 5","Huellas dactilares","Temperaturas bajo cero","solo podr\xe1 marcar a un jugador a la vez","temen el crucifijo haciendo que sean menos agresivas si se encuentran cerca de uno"]},{name:"Jinn",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Nivel 5","Orbes","Spirit Box","es un fantasma territorial que atacar\xe1 cuando se sienta amenazado","viajar\xe1 m\xe1s r\xe1pido cuanto mayor sea la distancia entre \xe9l y su v\xedctima","cuando el cuadro el\xe9ctrico est\xe9 apagado no podr\xe1 usar su habilidad"]},{name:"Pesadilla",description:"",uniquestrength:"",weaknesses:"",evidence:["Temperaturas bajo cero","Orbes","Spirit Box","es muy poderoso en la oscuridad","tendr\xe1 mas posibilidades de atacarte si te encuentras a oscuras","encender las luces har\xe1 que tenga menos probabilidades de atacarte"]},{name:"Revenant",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Nivel 5","Huellas dactilares","Escritura fantasma","se desplaza m\xe1s r\xe1pido si va tras su presa","esconderte har\xe1 que se mueva muy lento"]},{name:"Sombra",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Nivel 5","Orbes","Escritura fantasma","no generar\xe1 actividad paranormal si hay varias personas cerca"]},{name:"Demonio",description:"",uniquestrength:"",weaknesses:"",evidence:["Temperaturas bajo cero","Escritura fantasma","Spirit Box","conocidos por atacar sin ninguna raz\xf3n aparente","hacer preguntas exitosas a trav\xe9s del tablero de Ouija har\xe1 que la cordura no disminuya"]},{name:"Yurei",description:"",uniquestrength:"",weaknesses:"",evidence:["Temperaturas bajo cero","Orbes","Escritura fantasma","gran impacto sobre la cordura de los individuos","usar las varillas de incienso en su habitaci\xf3n har\xe1 que no se pase\xe9 por ah\xed en un gran periodo de tiempo"]},{name:"Oni",description:"",uniquestrength:"",weaknesses:"",evidence:["EMF Nivel 5","Escritura fantasma","Spirit Box","lanza objetos a gran velocidad","m\xe1s activos cuanta m\xe1s gente haya alrededor"]}],voicelines:{general:["\xbfQu\xe9 quieres?","\xbfPor qu\xe9 est\xe1s aqu\xed?","\xbfQuieres hacernos da\xf1o?","\xbfEst\xe1s enfadado?","\xbfNos quieres aqu\xed?","\xbfNos vamos?","\xbfDeber\xedamos irnos?","\xbfQuieres que nos vayamos?","\xbfQu\xe9 debemos hacer?","\xbfPodemos ayudar?","\xbfEres amistoso?","\xbfQu\xe9 eres?","\xbfEst\xe1s cerca?","\xbfPuedes mostrarte?","Danos una se\xf1al","H\xe1znos saber que est\xe1s aqu\xed","Mu\xe9strate","\xbfPuedes hablar?","H\xe1blanos","\xbfEst\xe1s aqu\xed?","\xbfEst\xe1s con nosotros?","\xbfAlguien con nosotros?","\xbfHay algui\xe9n aqu\xed?","\xbfHay algui\xe9n en la habitaci\xf3n?","\xbfAlgui\xe9n aqu\xed?","\xbfHay un Esp\xedritu aqu\xed?","\xbfHay un Fantasma aqu\xed?","\xbfQuien eres?","\xbfQue eres t\xfa?","\xbfQuien es este?","\xbfA qui\xe9n le estamos hablando?","\xbfCon qui\xe9n estoy hablando?","\xbfHola?","\xbfCu\xe1l es tu nombre?","\xbfPuedes darme tu nombre?","\xbfCuantos a\xf1os tienes?","\xbfCuan joven eres?","\xbfCu\xe1l es tu edad?","\xbfCuando naciste?","\xbfEres un ni\xf1o?","\xbfEres viejo?","\xbfEres joven?","\xbfCu\xe1l es tu ubicaci\xf3n?","\xbfCu\xe1l es tu g\xe9nero?","\xbfEres hombre o mujer?","\xbfEres una chica?","\xbfEres un chico?","\xbfEres una mujer?","\xbfEres un hombre?","\xbfEres mujer?","\xbfEres hombre?"],ouija:["\xbfAqui\xe9n mat\xe1ste?","\xbfQui\xe9n es tu v\xedctima?","\xbfCu\xe1l es el nombre de la persona que mataste?","\xbfCu\xe1l es el nombre de la persona que asesinaste?","\xbfCu\xe1l es tu v\xedctima?","\xbfAsesinaste?","\xbfA qui\xe9n asesinaste?","\xbfQuien muri\xf3?","\xbfCuantos a\xf1os tienes?","\xbfCu\xe1l es tu edad?","\xbfEres viejo?","\xbfEres joven?","\xbfCu\xe1nto tiempo llevas muerto?","\xbfCu\xe1ntos a\xf1os atr\xe1s moriste?","\xbfCuanto tiempo llevas aqui?","\xbfCu\xe1nto tiempo hace que muri\xf3?","\xbfCu\xe1ndo moriste?","\xbfCu\xe1ntos hay en esta habitaci\xf3n?","\xbfCu\xe1ntas personas hay en esta sala?","\xbfCu\xe1ntas personas hay aqu\xed?","\xbfCu\xe1ntos fantasmas hay en esta habitaci\xf3n?","\xbfCu\xe1ntos fantasmas hay aqu\xed?","\xbfEst\xe1s solo?","\xbfEstamos solos?","\xbfQui\xe9n est\xe1 aqu\xed?","\xbfQui\xe9n est\xe1 en esta habitaci\xf3n?","\xbfD\xf3nde est\xe1s?","\xbfCual es tu habitaci\xf3n favorita?","\xbfD\xf3nde est\xe1 tu habitaci\xf3n?","\xbfCu\xe1l es tu habitaci\xf3n?","\xbfEst\xe1s aqu\xed?","\xbfEst\xe1s cerca?","\xbfHay esp\xedritus?","\xbfEst\xe1s alrededor?"],spiritbox:["\xbfPuedes hablar?","\xbfPuedes hablar con nosotros?","Haz ruido","Abre una puerta","Abre esta puerta","Enciende la luz","Apaga la luz","\xbfHay fantasmas?","Danos una se\xf1al","Mu\xe9strate","H\xe1znos saber que estas aqu\xed","Haz algo","\xbfHay alguien conmigo?","Grita","\xbfPodemos hablar?","Me gustar\xeda hablar contigo","\xbfHay alguien aqu\xed?","\xbfPuedo preguntarte?","\xbfTe gustar\xeda hablar?","\xbfEres el \xfanico aqu\xed?","\xbfEst\xe1s esperando?","\xbfHay algo que pueda hacer?","\xbfSabes qui\xe9nes somos?","\xbfEst\xe1s feliz?","\xbfEst\xe1s aqu\xed todo el tiempo?","\xbfEres hombre o mujer?","\xbfQuieres que nos vayamos?","\xbfTe puedo preguntar?","\xbfPuedes hacer un sonido?","Mu\xe9stranos tu presencia","Golpea algo","Haz un sonido","Abre la puerta","Lanza algo","H\xe1blame","H\xe1blanos","No queremos hacerte da\xf1o","Somos amigos","\xbfEs esto tu casa?","\xbfPuedes hablar con nosotros?"],attacktrigger:["<El nombre del fantasma>","Estoy asustado","Asustado","Miedo","Escalofriante","Horror","Susto","Asustar","P\xe1nico","Escondete","Corre","Muestra tu presencia","Mu\xe9stranos","Mu\xe9strame","Joder","Perra","Puta","Mierda","Co\xf1o","Culo","Bastardo","Hijo de puta (alta respuesta)","Cabr\xf3n","Gilipollas","Bloody Mary"]}},A=t(40),H=t.n(A),N=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(e){var n;Object(d.a)(this,t),n=a.call(this,e);var r,s=[],i={},o={},c={},l={},p={},h={},v={},g=Object(u.a)(S.ghosts);try{for(g.s();!(r=g.n()).done;){var b=r.value;o[b.name]=!1,c[b.name]=!1,i[b.name]=b,s.push(b.name)}}catch(z){g.e(z)}finally{g.f()}var E=function(e,a){return e<a?-1:e>a?1:0};for(var y in s.sort(E),S.voicelines)S.voicelines[y].sort(E);var f,j=Object(u.a)(S.primaryevidence);try{for(j.s();!(f=j.n()).done;){var k=f.value;p[k]=!1,h[k]=!1,v[k]=!0}}catch(z){j.e(z)}finally{j.f()}var x,w=Object(u.a)(S.secondaryevidence);try{for(w.s();!(x=w.n()).done;){var q=x.value;p[q]=!1,h[q]=!1,v[q]=!0}}catch(z){w.e(z)}finally{w.f()}for(var C=0,O=s;C<O.length;C++){var A=O[C];l[A]={};var H,N=Object(u.a)(i[A].evidence);try{for(N.s();!(H=N.n()).done;){var P=H.value;l[A][P]=!0}}catch(z){N.e(z)}finally{N.f()}}return n.onEvidenceClick=n.onEvidenceClick.bind(Object(m.a)(n)),n.toggleSetting=n.toggleSetting.bind(Object(m.a)(n)),n.resetSelected=n.resetSelected.bind(Object(m.a)(n)),n.state={showAllSecondaryEvidence:!1,data:S,ghostNames:s,ghostsByName:i,selectedGhosts:o,ignoredGhosts:c,selectedEvidence:p,ignoredEvidence:h,remainingEvidence:v,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0,ghostHasEvidence:l,onEvidenceClick:n.onEvidenceClick,toggleSetting:n.toggleSetting,resetSelected:n.resetSelected},n}return Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"full-screenable-node"},r.a.createElement(b.a,{bg:"dark",variant:"dark",expand:"xl",style:{boxShadow:"0px 2px 5px #000000"}},r.a.createElement(b.a.Brand,{style:{marginLeft:"15%"}},r.a.createElement("a",{href:"http://un0btanium.github.io/phasmophobia-cheatsheet/"},r.a.createElement("img",{src:H.a,width:"35",height:"35",alt:"Logo"}),r.a.createElement("b",null," Phasmophobia CheatSheet"))),r.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"basic-navbar-nav",style:{marginRight:"10%"}},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(E.a.Link,{as:o.b,variant:"light",to:"/phasmophobia-cheatsheet/ghostsandevidence"},r.a.createElement("b",null,"Fantasmas y pruebas")),r.a.createElement(E.a.Link,{as:o.b,variant:"light",to:"/phasmophobia-cheatsheet/voicelines"},r.a.createElement("b",null,"Preguntas"))),r.a.createElement(E.a,null,r.a.createElement(E.a.Link,{as:o.b,variant:"light",to:"/phasmophobia-cheatsheet/about"},r.a.createElement("b",null,"Acerca de")),r.a.createElement(E.a.Link,{as:o.b,variant:"light",to:"/phasmophobia-cheatsheet/contact"},r.a.createElement("b",null,"Contacto")),r.a.createElement(b.a.Text,{style:{color:"rgb(223, 105, 26)",marginLeft:"20px"}},r.a.createElement("b",null,"Actualizaci\xf3n ",r.a.createElement("i",null,"Post Launch Update #2")))))),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/ghostsandevidence",render:function(a){return r.a.createElement(w,Object.assign({},a,e.state))}}),r.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/voicelines",render:function(a){return r.a.createElement(q,Object.assign({},a,e.state))}}),r.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/about",render:function(e){return r.a.createElement(C,e)}}),r.a.createElement(g.a,{exact:!0,path:"/phasmophobia-cheatsheet/contact",render:function(e){return r.a.createElement(O,e)}}),r.a.createElement(g.a,{render:function(a){return r.a.createElement(w,Object.assign({},a,e.state))}}))))}},{key:"preventEvent",value:function(e){e.preventDefault()}},{key:"toggleSetting",value:function(e){localStorage.setItem(e,!this.state[e]),this.setState(Object(l.a)({},e,!this.state[e]))}},{key:"onEvidenceClick",value:function(e,a){e.preventDefault();var t=Object(c.a)({},this.state.selectedEvidence),n=Object(c.a)({},this.state.ignoredEvidence);"click"===e.type?(t[a]=!t[a],t[a]&&(n[a]=!1)):"contextmenu"===e.type&&(n[a]=!n[a],n[a]&&(t[a]=!1));var r=0,s=0;for(var i in t)!0!==t[i]&&!0!==n[i]||(r++,this.state.data.secondaryevidence.includes(i)&&s++);var o,l={},d={},p=0,m={},h=Object(u.a)(this.state.data.ghosts);try{for(h.s();!(o=h.n()).done;){var v=o.value,g=!0;for(var b in t)if(t[b]&&!v.evidence.includes(b)){g=!1;break}for(var E in n)if(n[E]&&v.evidence.includes(E)){d[v.name]=!0,g=!1;break}if(g){l[v.name]=!0,p++;var y,f=Object(u.a)(v.evidence);try{for(f.s();!(y=f.n()).done;){m[y.value]=!0}}catch(j){f.e(j)}finally{f.f()}}else l[v.name]=!1}}catch(j){h.e(j)}finally{h.f()}this.setState({selectedGhosts:l,ignoredGhosts:d,selectedEvidence:t,ignoredEvidence:n,remainingEvidence:m,selectedGhostAmount:p,selectedEvidenceAmount:r,selectedSecondaryEvidenceAmount:s})}},{key:"resetSelected",value:function(){var e,a={},t={},n=Object(c.a)({},this.state.selectedEvidence),r=Object(c.a)({},this.state.ignoredEvidence),s={},i=Object(u.a)(S.ghosts);try{for(i.s();!(e=i.n()).done;){var o=e.value;a[o.name]=!1,t[o.name]=!1}}catch(g){i.e(g)}finally{i.f()}var l,d=Object(u.a)(S.primaryevidence);try{for(d.s();!(l=d.n()).done;){var p=l.value;n[p]=!1,r[p]=!1,s[p]=!0}}catch(g){d.e(g)}finally{d.f()}var m,h=Object(u.a)(S.secondaryevidence);try{for(h.s();!(m=h.n()).done;){var v=m.value;n[v]=!1,r[v]=!1,s[v]=!0}}catch(g){h.e(g)}finally{h.f()}this.setState({selectedGhosts:a,ignoredGhosts:t,selectedEvidence:n,ignoredEvidence:r,remainingEvidence:s,selectedGhostAmount:0,selectedEvidenceAmount:0,selectedSecondaryEvidenceAmount:0})}}]),t}(n.Component),P=Object(g.f)(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.76f66000.chunk.js.map