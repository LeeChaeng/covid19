(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{500:function(e,a,n){"use strict";n.r(a);var o=n(1),r=n(5),c=n.n(r),t=n(41),m=n.n(t),d=(n(54),n(7)),i=n(8),s=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};function l(){var e=Object(d.a)(["\n  border-radius: 10px;\n  box-shadow: 9px 10px 30px -1px rgba(0, 0, 0, 0.13);\n  padding: 8px;\n  position: relative;\n  display: block;\n  text-align: center;\n  width: 86px;\n  /* &:not(:first-child) {\n    border-left-color: rgb(237, 240, 242);\n    border-left-style: solid;\n    border-left-width: 1px;\n  } */\n  & > .today__arrow {\n    position: absolute;\n    top: 55%;\n    left: 13%;\n    transform: translateY(-50%);\n    font-size: 13px;\n    color: ",';\n  }\n  & > .title {\n    font-family: "SCDream_light";\n    margin: 0;\n    font-size: 12px;\n    line-height: 1.8rem;\n    letter-spacing: -0.8px;\n  }\n\n  & > .today {\n    font-size: 22px;\n    line-height: 2.2rem;\n    font-weight: bold;\n    letter-spacing: -0.4px;\n  }\n\n  & > .total {\n    font-family: "SCDream_light";\n    font-size: 8px;\n  }\n']);return l=function(){return e},e}function N(e){var a=e.title,n=e.today,r=e.total,c=e.color,t=e.updown,m=void 0===t?"-":t;return Object(o.jsxs)(k,{color:c,children:[Object(o.jsx)("span",{className:"today__arrow",children:m}),Object(o.jsx)("h3",{className:"title",children:a}),Object(o.jsx)("div",{className:"today",children:Object(o.jsx)("span",{className:"todday__value",children:n?s(n):"-"})}),Object(o.jsx)("div",{className:"total",children:r?s(r):"-"})]})}var k=i.a.li(l(),(function(e){return e.color})),u=n(17),b=n(15),p=n(45),f=n.n(p);var h=function(e){var a=Object(r.useState)({loading:!0,error:null,data:null}),n=Object(b.a)(a,2),o=n[0],c=n[1];return Object(r.useEffect)((function(){f.a.get(e).then((function(e){c((function(a){return Object(u.a)(Object(u.a)({},a),{},{loading:!1,data:e.data})}))})).catch((function(e){c((function(a){return Object(u.a)(Object(u.a)({},a),{},{loading:!1,date:null,error:e})}))}))}),[e]),o},v=n(47),j=n(46);function x(){var e=Object(d.a)(["\n  font-size: 10px;\n  margin-left: 10px;\n  height: 15px;\n"]);return x=function(){return e},e}function g(){var e=Object(d.a)(["\n  margin-top: 5px;\n  display: flex;\n  align-items: flex-end;\n"]);return g=function(){return e},e}function O(){var e=Object(d.a)(['\n  font-size: 20px;\n  margin: 0;\n  padding: 0;\n  font-family: "SCDream_bold";\n']);return O=function(){return e},e}function y(){var e=Object(d.a)(["\n  background-color: #8f4c8b;\n  border-radius: 10px;\n  padding: 1px 6.5px;\n  color: #fff;\n  font-size: 13px;\n  height: 14px;\n"]);return y=function(){return e},e}function S(){var e=Object(d.a)(["\n  display: flex;\n  width: 28%;\n  justify-content: space-between;\n  align-items: center;\n  & > .span {\n    font-size: 12px;\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 13px;\n  align-items: center;\n"]);return C=function(){return e},e}var M=i.a.div(C()),I=i.a.div(S()),w=i.a.span(y()),A=i.a.h1(O()),T=i.a.div(g()),B=i.a.div(x()),G=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)(M,{children:[Object(o.jsxs)(I,{children:[Object(o.jsx)("span",{children:"\uc704\uae30\uacbd\ubcf4"})," ",Object(o.jsx)(w,{children:"\uc2ec\uac01"})]}),Object(o.jsx)(j.a,{icon:v.a})]}),Object(o.jsxs)(T,{children:[Object(o.jsx)(A,{children:"\ud22c\ub370\uc774 \ucf54\ub85c\ub098"}),Object(o.jsx)(B,{children:"Today Corona"})]})]})},K=n(501),R=n(19);function L(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  list-style-type: none;\n  padding: 30px 0px;\n"]);return L=function(){return e},e}function P(){var e=Object(d.a)(["\n  padding: 30px;\n  padding-bottom: 20px;\n"]);return P=function(){return e},e}var E=function(e,a){return e&&a?e>a?"\u25b2":e<a?"\u25bc":"-":"-"},_=function(){var e=h("https://disease.sh/v3/covid-19/countries/KR").data,a=h("https://disease.sh/v3/covid-19/countries/KR?yesterday=true&strict=true").data;return Object(o.jsxs)(D,{children:[Object(o.jsx)(G,{}),e&&Object(o.jsxs)("div",{children:["\ub9c8\uc9c0\ub9c9 \uc5c5\ub370\uc774\ud2b8 :"," ",Object(K.a)(e.updated,{locale:R.ko,addSuffix:!0})]}),Object(o.jsxs)(F,{children:[Object(o.jsx)(N,{title:"\ud655\uc9c4\uc790",total:null===e||void 0===e?void 0:e.cases,today:null===e||void 0===e?void 0:e.todayCases,color:"rgb(122,30,114)",updown:E(null===e||void 0===e?void 0:e.todayCases,null===a||void 0===a?void 0:a.todayCases)}),Object(o.jsx)(N,{title:"\uc644\uce58\uc790",total:null===e||void 0===e?void 0:e.recovered,today:null===e||void 0===e?void 0:e.todayRecovered,color:"rgb(0,94,148)",updown:E(null===e||void 0===e?void 0:e.todayRecovered,null===a||void 0===a?void 0:a.todayRecovered)}),Object(o.jsx)(N,{title:"\uc0ac\ub9dd\uc790",total:null===e||void 0===e?void 0:e.deaths,today:null===e||void 0===e?void 0:e.todayDeaths,color:"rgb(102,102,102)",updown:E(null===e||void 0===e?void 0:e.todayDeaths,null===a||void 0===a?void 0:a.todayDeaths)})]})]})},D=i.a.div(P()),F=i.a.ul(L()),U=n(20),z=n.n(U);function V(){var e=Object(d.a)(['\n  width: 100%;\n  & > h1 {\n    margin-left: 23px;\n    margin-bottom: 0px;\n    font-family: "SCDream_bold";\n  }\n']);return V=function(){return e},e}function H(){var e=h("https://disease.sh/v3/covid-19/historical/KR?lastdays=8").data,a=Object(r.useMemo)((function(){var a=[],n=[],o=[];if(!e)return{key:a,value:n};for(var r in e.timeline.cases)a.push(r.substring(0,r.length-3)),o.push(e.timeline.cases[r]);for(var c=1;c<o.length;c++)n.push(o[c]-o[c-1]);return a.shift(),{key:a,value:n}}),[e]),n=a.key,c=a.value;return Object(o.jsxs)(J,{children:[Object(o.jsx)("h1",{children:"\uc77c\ubcc4 \ud655\uc9c4\uc790 \uadf8\ub798\ud504"}),Object(o.jsx)(z.a,{options:{chart:{id:"basic-bar",toolbar:{show:!1}},xaxis:{categories:n,labels:{style:{colors:"#6d6b6c",fontSize:"13px"},formatter:function(e){return"".concat(String.fromCharCode(8403)," ").concat(e," ").concat(String.fromCharCode(8403))},offsetY:-4},axisBorder:{show:!1},axisTicks:{show:!1}},grid:{row:{colors:["#f2f2f2","#fff"]},borderColor:"#transparent"},fill:{colors:["#265e9077"],type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:1,gradientToColors:["#6b266abb"],opacityFrom:1,opacityTo:1,stops:[0,100,150],colorStops:[]}},plotOptions:{bar:{columnWidth:"60%",dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(e){return s(e)},offsetY:-20,style:{fontFamily:"SCDream_light",fontSize:"12.5px",colors:["#650D5F"]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},tickAmount:8},tooltip:{custom:function(e){var a=e.dataPointIndex,o=e.series,r=e.seriesIndex,c=n[a].split("/"),t=Object(b.a)(c,2),m=t[0],d=t[1],i=o[r][a];return'<div class="tooltip">\n                  <div class="tooltip__date">'.concat(m,"\uc6d4 ").concat(d,'\uc77c</div>\n                  <div class="tooltip__cases">\n                    <span class="tooltip__cases__title">\ud655\uc9c4\uc790 \uc218</span>\n                    <span class="tooltip__cases__value">').concat(s(i),"\uba85<span>\n                  </div>\n                </div>")}}},series:[{name:"\ud655\uc9c4\uc790\uc218",data:c}],type:"bar",width:"400px"})]})}var J=i.a.div(V());function Z(){var e=Object(d.a)(['\n  width: 100%;\n  & > h1 {\n    margin-left: 23px;\n    margin-bottom: 0px;\n    font-family: "SCDream_bold";\n  }\n']);return Z=function(){return e},e}function W(){var e=h("https://disease.sh/v3/covid-19/historical/KR?lastdays=all").data,a=Object(r.useMemo)((function(){var a=[],n=[],o=[];if(!e)return{key:a,value:n};for(var r in e.timeline.cases)a.push(r.substring(0,r.length-3)),o.push(e.timeline.cases[r]);for(var c=0;c<o.length;c++)n.push(o[c]);return{key:a,value:n}}),[e]),n=a.key,c=a.value;return Object(o.jsxs)(Y,{children:[Object(o.jsx)("h1",{children:"\ub204\uc801 \ud655\uc9c4\uc790\uc218 \uc99d\uac00 \uadf8\ub798\ud504"}),Object(o.jsx)(z.a,{options:{chart:{id:"basic-bar",toolbar:{show:!1}},colors:["#884884"],xaxis:{categories:n,hideOverlappingLabels:!0,axisBorder:{show:!1},axisTicks:{show:!1},labels:{rotate:0,rotateAlways:!1,trim:!0},tooltip:{enabled:!1}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},tickAmount:6},grid:{row:{colors:["#f2f2f2","#fff"]},borderColor:"#transparent"},markers:{colors:"#650d5f",strokeWidth:2.5,hover:{size:7}},tooltip:{custom:function(e){var a=e.dataPointIndex,o=e.series,r=e.seriesIndex,c=n[a].split("/"),t=Object(b.a)(c,2),m=t[0],d=t[1],i=o[r][a];return'<div class="tooltip">\n                  <div class="tooltip__date">'.concat(m,"\uc6d4 ").concat(d,'\uc77c</div>\n                  <div class="tooltip__cases">\n                    <span class="tooltip__cases__title">\ud655\uc9c4\uc790 \uc218</span>\n                    <span class="tooltip__cases__value">').concat(s(i),"\uba85<span>\n                  </div>\n                </div>")}}},series:[{name:"\ud655\uc9c4\uc790\uc218",data:c}],type:"line",width:"400px"})]})}var Y=i.a.div(Z());function Q(){var e=Object(d.a)(["\n  width: 25px;\n  margin: 3px 10px;\n"]);return Q=function(){return e},e}function q(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: ",";\n  & > .country {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  & > .number {\n    margin-right: 10px;\n  }\n"]);return q=function(){return e},e}var X=i.a.div(q(),(function(e){return e.backgroundColor})),$=i.a.img(Q()),ee=function(e){var a=e.name,n=e.cases,r=e.flag,c=e.backgroundColor;return Object(o.jsxs)(X,{backgroundColor:c,children:[Object(o.jsxs)("div",{className:"country",children:[Object(o.jsx)("span",{children:Object(o.jsx)($,{src:r,alt:a})}),Object(o.jsx)("span",{children:a})]}),Object(o.jsx)("div",{className:"number",children:s(n)})]})},ae=[{code:"AF",name:"Afghanistan",korName:"\uc544\ud504\uce74\ub2c8\uc2a4\ud0c4"},{code:"AF",name:"Afghanistan",korName:"\uc544\ud504\uac00\ub2c8\uc2a4\ud0c4"},{code:"DZ",name:"Algeria",korName:"\uc54c\uc81c\ub9ac"},{code:"AD",name:"Andorra",korName:"\uc548\ub3c4\ub77c"},{code:"AI",name:"Anguilla",korName:"\uc559\uadc8\ub77c"},{code:"AG",name:"Antigua and Barbuda",korName:"\uc548\ud2f0\uac00\ubc14\ubd80\ub2e4"},{code:"AM",name:"Armenia",korName:"\uc544\ub974\uba54\ub2c8\uc544"},{code:"AU",name:"Australia",korName:"\ud638\uc8fc"},{code:"AZ",name:"Azerbaijan",korName:"\uc544\uc81c\ub974\ubc14\uc774\uc794"},{code:"BH",name:"Bahrain",korName:"\ubc14\ub808\uc778"},{code:"BB",name:"Barbados",korName:"\ubc14\ubca0\uc774\ub3c4\uc2a4"},{code:"BE",name:"Belgium",korName:"\ubca8\uae30\uc5d0"},{code:"BJ",name:"Benin",korName:"\ubca0\ub2dd"},{code:"BT",name:"Bhutan",korName:"\ubd80\ud0c4"},{code:"BA",name:"Bosnia and Herzegovina",korName:"\ubcf4\uc2a4\ub2c8\uc544 \ud5e4\ub974\uccb4\uace0\ube44\ub098"},{code:"BV",name:"Bouvet Island",korName:"\ubcf4\ube57\uad70\ub3c4"},{code:"IO",name:"British Indian Ocean Territory",korName:"\uc601\ub839 \uc778\ub3c4\uc591"},{code:"BG",name:"Bulgaria",korName:"\ubd88\uac00\ub9ac\uc544"},{code:"BI",name:"Burundi",korName:"\ubd80\ub8ec\ub514"},{code:"CM",name:"Cameroon",korName:"\uce74\uba54\ub8ec"},{code:"CV",name:"Cabo Verde",korName:"\uce74\ubcf4\ubca0\ub974\ub370"},{code:"CF",name:"Central African Republic",korName:"\uc911\uc559\uc544\ud504\ub9ac\uce74"},{code:"CF",name:"CAR",korName:"\uc911\uc559\uc544\ud504\ub9ac\uce74"},{code:"CF",name:"Central African Republic",korName:"\uc911\uc559\uc544\ud504\ub9ac\uce74\uacf5\ud654\uad6d"},{code:"CL",name:"Chile",korName:"\uce60\ub808"},{code:"CX",name:"Christmas Island",korName:"\ud06c\ub9ac\uc2a4\ub9c8\uc2a4 \uc544\uc77c\ub79c\ub4dc"},{code:"CO",name:"Colombia",korName:"\ucf5c\ub86c\ube44\uc544"},{code:"CG",name:"Congo",korName:"\ucf69\uace0\uacf5\ud654\uad6d"},{code:"CG",name:"Congo",korName:"\ucf69\uace0"},{code:"CR",name:"Costa Rica",korName:"\ucf54\uc2a4\ud0c0\ub9ac\uce74"},{code:"HR",name:"Croatia",korName:"\ud06c\ub85c\uc544\ud2f0\uc544"},{code:"CY",name:"Cyprus",korName:"\uc0ac\uc774\ud504\ub7ec\uc2a4"},{code:"DK",name:"Denmark",korName:"\ub374\ub9c8\ud06c"},{code:"DM",name:"Dominica",korName:"\ub3c4\ubbf8\ub2c8\uce74"},{code:"TL",name:"Timor-Leste",korName:"\ub3d9\ud2f0\ubaa8\ub974"},{code:"EG",name:"Egypt",korName:"\uc774\uc9d1\ud2b8"},{code:"GQ",name:"Equatorial Guinea",korName:"\uc801\ub3c4\uae30\ub2c8"},{code:"EE",name:"Estonia",korName:"\uc5d0\uc2a4\ud1a0\ub2c8\uc544"},{code:"FK",name:"Falkland Islands-Malvinas",korName:"\ud3ec\ud074\ub79c\ub4dc \uad70\ub3c4"},{code:"FK",name:"Falkland Islands",korName:"\ud3ec\ud074\ub79c\ub4dc \uc81c\ub3c4"},{code:"FJ",name:"Fiji",korName:"\ud53c\uc9c0"},{code:"FR",name:"France",korName:"\ud504\ub791\uc2a4"},{code:"PF",name:"French Polynesia",korName:"\ud3f4\ub9ac\ub124\uc2dc\uc544 (\ud504\ub791\uc2a4\ub839)"},{code:"GA",name:"Gabon",korName:"\uac00\ubd09"},{code:"GE",name:"Georgia",korName:"\uc870\uc9c0\uc544"},{code:"GH",name:"Ghana",korName:"\uac00\ub098"},{code:"GR",name:"Greece",korName:"\uadf8\ub9ac\uc2a4"},{code:"GD",name:"Grenada",korName:"\uadf8\ub808\ub098\ub2e4"},{code:"GU",name:"Guam",korName:"\uad0c"},{code:"GN",name:"Guinea",korName:"\uae30\ub2c8"},{code:"GY",name:"Guyana",korName:"\uae30\uc544\ub098"},{code:"HN",name:"Honduras",korName:"\uc628\ub450\ub77c\uc2a4"},{code:"HU",name:"Hungary",korName:"\ud5dd\uac00\ub9ac"},{code:"IN",name:"India",korName:"\uc778\ub3c4"},{code:"IR",name:"Iran",korName:"\uc774\ub780"},{code:"IE",name:"Ireland",korName:"\uc544\uc77c\ub79c\ub4dc"},{code:"IT",name:"Italy",korName:"\uc774\ud0c8\ub9ac\uc544"},{code:"JP",name:"Japan",korName:"\uc77c\ubcf8"},{code:"KZ",name:"Kazakhstan",korName:"\uce74\uc790\ud750\uc2a4\ud0c4"},{code:"KI",name:"Kiribati",korName:"\ud0a4\ub9ac\ubc14\ud2f0"},{code:"KI",name:"Kiribati",korName:"\ud0a4\ub9ac\ubc14\uc2dc"},{code:"KR",name:"S. Korea",korName:"\ub300\ud55c\ubbfc\uad6d"},{code:"KR",name:"South Korea",korName:"\ub300\ud55c\ubbfc\uad6d"},{code:"KG",name:"Kyrgyzstan",korName:"\ud0a4\ub974\uae30\uc2a4\uc2a4\ud0c4"},{code:"KG",name:"Kyrgyzstan",korName:"\ud0a4\ub974\uae30\uc988\uc2a4\ud0c4"},{code:"LV",name:"Latvia",korName:"\ub77c\ud2b8\ube44\uc544"},{code:"LS",name:"Lesotho",korName:"\ub808\uc18c\ud1a0"},{code:"LY",name:"Libya",korName:"\ub9ac\ube44\uc544"},{code:"LT",name:"Lithuania",korName:"\ub9ac\ud22c\uc544\ub2c8\uc544"},{code:"MO",name:"Macao",korName:"\ub9c8\uce74\uc624"},{code:"MG",name:"Madagascar",korName:"\ub9c8\ub2e4\uac00\uc2a4\uce74\ub974"},{code:"MY",name:"Malaysia",korName:"\ub9d0\ub808\uc774\uc2dc\uc544"},{code:"ML",name:"Mali",korName:"\ub9d0\ub9ac"},{code:"MH",name:"Marshall Islands",korName:"\ub9c8\uc15c\uc81c\ub3c4"},{code:"MH",name:"Marshall Islands",korName:"\ub9c8\uc0ec\uc81c\ub3c4"},{code:"MR",name:"Mauritania",korName:"\ubaa8\ub9ac\ud0c0\ub2c8\uc544"},{code:"YT",name:"Mayotte",korName:"\uba54\uc694\ud2b8"},{code:"FM",name:"Micronesia",korName:"\ub9c8\uc774\ud06c\ub85c\ub124\uc2dc\uc544"},{code:"FM",name:"Micronesia",korName:"\ubbf8\ud06c\ub85c\ub124\uc2dc\uc544"},{code:"MC",name:"Monaco",korName:"\ubaa8\ub098\ucf54"},{code:"MS",name:"Montserrat",korName:"\ubaac\ud2b8\uc138\ub77c\ud2b8"},{code:"MZ",name:"Mozambique",korName:"\ubaa8\uc7a0\ube44\ud06c"},{code:"NA",name:"Namibia",korName:"\ub098\ubbf8\ube44\uc544"},{code:"NP",name:"Nepal",korName:"\ub124\ud314"},{code:"AN",name:"Netherlands Antilles",korName:"\ub124\ub35c\ub780\ub4dc \uc5f4\ub3c4"},{code:"NZ",name:"New Zealand",korName:"\ub274\uc9c8\ub79c\ub4dc"},{code:"NE",name:"Niger",korName:"\ub2c8\uc81c\ub974"},{code:"NU",name:"Niue",korName:"\ub2c8\uc6b0\uc5d0"},{code:"MP",name:"Northern Mariana Islands",korName:"\ubd81\ub9c8\ub9ac\uc544\ub098 \uad70\ub3c4"},{code:"OM",name:"Oman",korName:"\uc624\ub9cc"},{code:"PW",name:"Palau",korName:"\ud314\ub77c\uc6b0"},{code:"PA",name:"Panama",korName:"\ud30c\ub098\ub9c8"},{code:"PY",name:"Paraguay",korName:"\ud30c\ub77c\uacfc\uc774"},{code:"PH",name:"Philippines",korName:"\ud544\ub9ac\ud540"},{code:"PL",name:"Poland",korName:"\ud3f4\ub780\ub4dc"},{code:"PR",name:"Puerto Rico",korName:"\ud478\uc5d0\ub974\ud1a0\ub9ac\ucf54"},{code:"RE",name:"R\xe9union",korName:"\ub808\uc704\ub2c8\uc639"},{code:"RU",name:"Russia",korName:"\ub7ec\uc2dc\uc544"},{code:"SH",name:"Saint Helena",korName:"\uc138\uc778\ud2b8 \ud5ec\ub808\ub098"},{code:"LC",name:"Saint Lucia",korName:"\uc138\uc778\ud2b8\ub8e8\uc2dc\uc544"},{code:"VC",name:"St. Vincent and the Grenadines",korName:"\uc138\uc778\ud2b8\ube48\uc13c\ud2b8 \uadf8\ub808\ub098\ub518"},{code:"VC",name:"St. Vincent Grenadines",korName:"\uc138\uc778\ud2b8\ube48\uc13c\ud2b8 \uadf8\ub808\ub098\ub518"},{code:"SM",name:"San Marino",korName:"\uc0b0\ub9c8\ub9ac\ub178"},{code:"SA",name:"Saudi Arabia",korName:"\uc0ac\uc6b0\ub514\uc544\ub77c\ube44\uc544"},{code:"SC",name:"Seychelles",korName:"\uc138\uc774\uc178"},{code:"SG",name:"Singapore",korName:"\uc2f1\uac00\ud3ec\ub974"},{code:"SI",name:"Slovenia",korName:"\uc2ac\ub85c\ubca0\ub2c8\uc544"},{code:"SO",name:"Somalia",korName:"\uc18c\ub9d0\ub9ac\uc544"},{code:"GS",name:"South Georgia & the South Sandwich Islands",korName:"\ub0a8\uc870\uc9c0\uc544 & \ub0a8\uc0cc\ub4dc\uc704\uce58 \uad70\ub3c4"},{code:"LK",name:"Sri Lanka",korName:"\uc2a4\ub9ac\ub791\uce74"},{code:"SR",name:"Suriname",korName:"\uc218\ub9ac\ub0a8"},{code:"SZ",name:"Eswatini",korName:"\uc5d0\uc2a4\uc640\ud2f0\ub2c8"},{code:"CH",name:"Switzerland",korName:"\uc2a4\uc704\uc2a4"},{code:"TW",name:"Taiwan",korName:"\ub300\ub9cc"},{code:"TZ",name:"Tanzania",korName:"\ud0c4\uc790\ub2c8\uc544"},{code:"TG",name:"Togo",korName:"\ud1a0\uace0"},{code:"TO",name:"Tonga",korName:"\ud1b5\uac00"},{code:"TN",name:"Tunisia",korName:"\ud280\ub2c8\uc9c0"},{code:"TM",name:"Turkmenistan",korName:"\ud22c\ub974\ud06c\uba54\ub2c8\uc2a4\ud0c4"},{code:"TV",name:"Tuvalu",korName:"\ud22c\ubc1c\ub8e8"},{code:"UA",name:"Ukraine",korName:"\uc6b0\ud06c\ub77c\uc774\ub098"},{code:"GB",name:"UK",korName:"\uc601\uad6d"},{code:"UM",name:"United States Minor Outlying Islands",korName:"\ub9c8\uc774\ub108 \uc544\uc6b0\ud2c0\ub9c1 \ud569\uc911\uad6d \uad70\ub3c4"},{code:"UZ",name:"Uzbekistan",korName:"\uc6b0\uc988\ubca0\ud0a4\uc2a4\ud0c4"},{code:"VA",name:"Vatican City",korName:"\ubc14\ud2f0\uce78 \uc2dc\uad6d"},{code:"VN",name:"Vietnam",korName:"\ubca0\ud2b8\ub0a8"},{code:"VG",name:"VirginnIslands -British",korName:"\uc601\ub839 \ubc84\uc9c4\uad70\ub3c4"},{code:"EH",name:"Western Sahara",korName:"\uc11c\uc0ac\ud558\ub77c"},{code:"YU",name:"Yugoslavia",korName:"\uc720\uace0"},{code:"ZM",name:"Zambia",korName:"\uc7a0\ube44\uc544"},{code:"AL",name:"Albania",korName:"\uc54c\ubc14\ub2c8\uc544"},{code:"AS",name:"American Samoa",korName:"\uc0ac\ubaa8\uc544(\ubbf8\uad6d\ub839)"},{code:"AO",name:"Angola",korName:"\uc559\uace8\ub77c"},{code:"AQ",name:"Antarctica",korName:"\uc548\ud0c0\ud2f0\uce74"},{code:"AR",name:"Argentina",korName:"\uc544\ub974\ud5e8\ud2f0\ub098"},{code:"AW",name:"Aruba",korName:"\uc544\ub8e8\ubc14"},{code:"AT",name:"Austria",korName:"\uc624\uc2a4\ud2b8\ub9ac\uc544"},{code:"BS",name:"Bahamas",korName:"\ubc14\ud558\ub9c8"},{code:"BD",name:"Bangladesh",korName:"\ubc29\uae00\ub77c\ub370\uc2dc"},{code:"BY",name:"Belarus",korName:"\ubca8\ub77c\ub8e8\uc2a4"},{code:"BZ",name:"Belize",korName:"\ubca8\ub9ac\uc988"},{code:"BM",name:"Bermuda",korName:"\ubc84\ubba4\ub2e4"},{code:"BO",name:"Bolivia",korName:"\ubcfc\ub9ac\ube44\uc544"},{code:"BW",name:"Botswana",korName:"\ubcf4\uce20\uc640\ub098"},{code:"BR",name:"Brazil",korName:"\ube0c\ub77c\uc9c8"},{code:"BN",name:"Brunei",korName:"\ube0c\ub8e8\ub098\uc774"},{code:"BF",name:"Burkina Faso",korName:"\ubd80\ub974\ud0a4\ub098\ud30c\uc18c"},{code:"KH",name:"Cambodia",korName:"\uce84\ubcf4\ub514\uc544"},{code:"CA",name:"Canada",korName:"\uce90\ub098\ub2e4"},{code:"KY",name:"Cayman Islands",korName:"\uc601\ub839 \uce90\uc774\ub9e8 \uad70\ub3c4"},{code:"TD",name:"Chad",korName:"\ucc28\ub4dc"},{code:"CN",name:"China",korName:"\uc911\uad6d"},{code:"CC",name:"CocosKeeling Islands",korName:"\ucf54\uc2a4 \uad70\ub3c4"},{code:"KM",name:"Comoros",korName:"\ucf54\ubaa8\ub85c\uc2a4"},{code:"KM",name:"Comoros",korName:"\ucf54\ubaa8\ub85c"},{code:"CK",name:"Cook Islands",korName:"\ucfe1\uc81c\ub3c4"},{code:"CI",name:"Ivory Coast",korName:"\ucf54\ud2b8\ub514\ubd80\uc544\ub974"},{code:"CU",name:"Cuba",korName:"\ucfe0\ubc14"},{code:"CZ",name:"Czechia",korName:"\uccb4\ucf54"},{code:"DJ",name:"Djibouti",korName:"\uc9c0\ubd80\ud2f0"},{code:"DO",name:"Dominican Republic",korName:"\ub3c4\ubbf8\ub2c8\uce74 \uacf5\ud654\uad6d"},{code:"EC",name:"Ecuador",korName:"\uc5d0\ucf70\ub3c4\ub974"},{code:"SV",name:"El Salvador",korName:"\uc5d8\uc0b4\ubc14\ub3c4\ub974"},{code:"ER",name:"Eritrea",korName:"\uc5d0\ub9ac\ud2b8\ub9ac\uc544"},{code:"ET",name:"Ethiopia",korName:"\uc5d0\ud2f0\uc624\ud53c\uc544"},{code:"FO",name:"Faeroe Islands",korName:"\ud398\ub85c \uc81c\ub3c4"},{code:"FI",name:"Finland",korName:"\ud540\ub780\ub4dc"},{code:"GF",name:"French Guiana",korName:"\ubd88\ub839 \uac00\uc774\uc544\ub098"},{code:"TF",name:"French Southern Territories",korName:"\ubd88\ub839 \ub0a8\ubd80\uc9c0\uc5ed"},{code:"GM",name:"Gambia",korName:"\uac10\ube44\uc544"},{code:"DE",name:"Germany",korName:"\ub3c5\uc77c"},{code:"GI",name:"Gibraltar",korName:"\uc9c0\ube0c\ub784\ud0c0"},{code:"GL",name:"Greenland",korName:"\uadf8\ub9b0\ub79c\ub4dc"},{code:"GP",name:"Guadeloupe",korName:"\uacfc\ub378\ub85c\ud504"},{code:"GT",name:"Guatemala",korName:"\uacfc\ud14c\ub9d0\ub77c"},{code:"GW",name:"Guinea-Bissau",korName:"\uae30\ub124\ube44\uc18c"},{code:"HT",name:"Haiti",korName:"\uc544\uc774\ud2f0"},{code:"HK",name:"Hong Kong",korName:"\ud64d\ucf69"},{code:"IS",name:"Iceland",korName:"\uc544\uc774\uc2ac\ub780\ub4dc"},{code:"ID",name:"Indonesia",korName:"\uc778\ub3c4\ub124\uc2dc\uc544"},{code:"IQ",name:"Iraq",korName:"\uc774\ub77c\ud06c"},{code:"IL",name:"Israel",korName:"\uc774\uc2a4\ub77c\uc5d8"},{code:"JM",name:"Jamaica",korName:"\uc790\uba54\uc774\uce74"},{code:"JO",name:"Jordan",korName:"\uc694\ub974\ub2e8"},{code:"JO",name:"Jordan",korName:"\uc870\ub974\ub2e8"},{code:"KE",name:"Kenya",korName:"\ucf00\ub0d0"},{code:"KP",name:"Korea, Democratic People's Republic of",korName:"\ubd81\ud55c"},{code:"KW",name:"Kuwait",korName:"\ucfe0\uc6e8\uc774\ud2b8"},{code:"LA",name:"Laos",korName:"\ub77c\uc624\uc2a4"},{code:"LB",name:"Lebanon",korName:"\ub808\ubc14\ub17c"},{code:"LR",name:"Liberia",korName:"\ub77c\uc774\ubca0\ub9ac\uc544"},{code:"LI",name:"Liechtenstein",korName:"\ub9ac\ud788\ud150\uc288\ud0c0\uc778"},{code:"LU",name:"Luxembourg",korName:"\ub8e9\uc148\ubd80\ub974\uadf8"},{code:"MK",name:"North Macedonia",korName:"\ubd81 \ub9c8\ucf00\ub3c4\ub2c8\uc544"},{code:"MW",name:"Malawi",korName:"\ub9d0\ub77c\uc704"},{code:"MV",name:"Maldives",korName:"\ubab0\ub514\ube0c"},{code:"MT",name:"Malta",korName:"\ubab0\ud0c0"},{code:"MQ",name:"Martinique",korName:"\ub9c8\ud2f0\ub2c8\ud06c"},{code:"MU",name:"Mauritius",korName:"\ubaa8\ub9ac\uc154\uc2a4"},{code:"MU",name:"Mauritius",korName:"\ubaa8\ub9ac\ud2f0\uc6b0\uc2a4"},{code:"MX",name:"Mexico",korName:"\uba55\uc2dc\ucf54"},{code:"MD",name:"Moldova",korName:"\ubab0\ub3c4\ubc14"},{code:"MN",name:"Mongolia",korName:"\ubabd\uace8"},{code:"MA",name:"Morocco",korName:"\ubaa8\ub85c\ucf54"},{code:"MM",name:"Myanmar",korName:"\ubbf8\uc580\ub9c8"},{code:"NR",name:"Nauru",korName:"\ub098\uc6b0\ub8e8"},{code:"NL",name:"Netherlands",korName:"\ub124\ub35c\ub780\ub4dc"},{code:"NC",name:"New Caledonia",korName:"\ub274 \uce7c\ub808\ub3c4\ub2c8\uc544"},{code:"NI",name:"Nicaragua",korName:"\ub2c8\uce74\ub77c\uacfc"},{code:"NG",name:"Nigeria",korName:"\ub098\uc774\uc9c0\ub9ac\uc544"},{code:"NF",name:"Norfolk Island",korName:"\ub178\ud3f4\ud06c \uc544\uc77c\ub79c\ub4dc"},{code:"NO",name:"Norway",korName:"\ub178\ub974\uc6e8\uc774"},{code:"PK",name:"Pakistan",korName:"\ud30c\ud0a4\uc2a4\ud0c4"},{code:"PS",name:"Palestine",korName:"\ud314\ub808\uc2a4\ud0c0\uc778"},{code:"PG",name:"Papua New Guinea",korName:"\ud30c\ud478\uc544\ub274\uae30\ub2c8"},{code:"PE",name:"Peru",korName:"\ud398\ub8e8"},{code:"PN",name:"Pitcairn",korName:"\ud53c\ud2b8\uce74\uc774\ub978"},{code:"PT",name:"Portugal",korName:"\ud3ec\ub8e8\ud22c\uac08"},{code:"QA",name:"Qatar",korName:"\uce74\ud0c0\ub974"},{code:"RO",name:"Romania",korName:"\ub8e8\ub9c8\ub2c8\uc544"},{code:"RW",name:"Rwanda",korName:"\ub974\uc644\ub2e4"},{code:"KN",name:"Saint Kitts and Nevis",korName:"\uc138\uc778\ud2b8\ud0a4\uce20 \ub124\ube44\uc2a4"},{code:"PM",name:"Saint Pierre Miquelon",korName:"\uc0dd\ud53c\uc5d0\ub974 \ubbf8\ud074\ub871"},{code:"WS",name:"Samoa",korName:"\uc0ac\ubaa8\uc544"},{code:"ST",name:"Sao Tome and Principe",korName:"\uc0c1\ud1a0\uba54 \ud504\ub9b0\uc2a4\ud398"},{code:"SN",name:"Senegal",korName:"\uc138\ub124\uac08"},{code:"SL",name:"Sierra Leone",korName:"\uc2dc\uc5d0\ub77c \ub9ac\uc628"},{code:"SK",name:"Slovakia",korName:"\uc2ac\ub85c\ubc14\ud0a4\uc544"},{code:"SB",name:"Solomon Islands",korName:"\uc194\ub85c\ubaac\uc81c\ub3c4"},{code:"ZA",name:"South Africa",korName:"\ub0a8\uc544\ud504\ub9ac\uce74\uacf5\ud654\uad6d"},{code:"ES",name:"Spain",korName:"\uc2a4\ud398\uc778"},{code:"SD",name:"Sudan",korName:"\uc218\ub2e8"},{code:"SS",name:"South Sudan",korName:"\uc218\ub2e8"},{code:"SJ",name:"Svalbard and Jan Mayen",korName:"\uc2a4\ubc1c\ube44\ub4dc \uad70\ub3c4"},{code:"SE",name:"Sweden",korName:"\uc2a4\uc6e8\ub374"},{code:"SY",name:"Syria",korName:"\uc2dc\ub9ac\uc544"},{code:"TJ",name:"Tajikistan",korName:"\ud0c0\uc9c0\ud0a4\uc2a4\ud0c4"},{code:"TH",name:"Thailand",korName:"\ud0dc\uad6d"},{code:"TK",name:"Tokelau",korName:"\ud1a0\ucf08\ub77c\uc6b0"},{code:"TT",name:"Trinidad And Tobago",korName:"\ud2b8\ub9ac\ub2c8\ub2e4\ub4dc \ud1a0\ubc14\uace0"},{code:"TT",name:"Trinidad and Tobago",korName:"\ud2b8\ub9ac\ub2c8\ub2e4\ub4dc \ud1a0\ubc14\uace0"},{code:"TR",name:"Turkey",korName:"\ud130\ud0a4"},{code:"TC",name:"Turks and Caicos Islands",korName:"\ud22c\ub974\ud06c & \uce74\uc774\ucf54\uc2a4 \uad70\ub3c4"},{code:"TC",name:"Turks and Caicos",korName:"\ud130\ud06c\uc2a4 \ucf00\uc774\ucee4\uc2a4 \uc81c\ub3c4"},{code:"UG",name:"Uganda",korName:"\uc6b0\uac04\ub2e4"},{code:"AE",name:"UAE",korName:"\uc544\ub78d\uc5d0\ubbf8\ub9ac\ud2b8"},{code:"AE",name:"UAE",korName:"UAE"},{code:"US",name:"USA",korName:"\ubbf8\uad6d"},{code:"UY",name:"Uruguay",korName:"\uc6b0\ub8e8\uacfc\uc774"},{code:"VU",name:"Vanuatu",korName:"\ubc14\ub204\uc544\ud22c"},{code:"VE",name:"Venezuela",korName:"\ubca0\ub124\uc218\uc5d8\ub77c"},{code:"VI",name:"Virgin Islands-U.S.",korName:"\ubbf8\ub839 \ubc84\uc9c4\uad70\ub3c4"},{code:"VI",name:"U.S. Virgin Islands",korName:"\ubbf8\uad6d\ub839 \ubc84\uc9c4\uc544\uc77c\ub79c\ub4dc"},{code:"VG",name:"British Virgin Islands",korName:"\uc601\uad6d\ub839 \ubc84\uc9c4\uc544\uc77c\ub79c\ub4dc"},{code:"WF",name:"Wallis and futuna Islands",korName:"\uc648\ub77c\uc2a4 & \ud4e8\ud22c\ub098 \uad70\ub3c4"},{code:"YE",name:"Yemen",korName:"\uc608\uba58"},{code:"ZR",name:"Zaire",korName:"\uc790\uc774\ub808"},{code:"ZW",name:"Zimbabwe",korName:"\uc9d0\ubc14\ube0c\uc6e8"},{code:"JP",name:"Diamond Princess",korName:"\uc77c\ubcf8 \ud06c\ub8e8\uc988"},{code:"MF",name:"Saint Martin",korName:"\uc138\uc778\ud2b8\ub9c8\ud2f4 \uc12c"},{code:"GB",name:"Channel Islands",korName:"\ucc44\ub110 \uc81c\ub3c4"},{code:"BL",name:"St. Barth",korName:"\uc0dd\ubc14\ub974\ud154\ub808\ubbf8"},{code:"RS",name:"Serbia",korName:"\uc138\ub974\ube44\uc544"},{code:"CD",name:"DRC",korName:"\ubbfc\uc8fc\ucf69\uace0"},{code:"ME",name:"Montenegro",korName:"\ubaac\ud14c\ub124\uadf8\ub85c"},{code:"CW",name:"Cura\xe7ao",korName:"\ud034\ub77c\uc18c"},{code:"SX",name:"Sint Maarten",korName:"\uc2e0\ud2b8\ub9c8\ub974\ud134"},{code:"IM",name:"Isle of Man",korName:"\ub9e8\uc12c"},{code:"",name:"MS Zaandam",korName:"\uc794\ub2f4\ud638"},{code:"NL",name:"Caribbean Netherlands",korName:"\uce74\ub9ac\ube0c \ub124\ub35c\ub780\ub4dc"},{code:"WORLD",name:"World",korName:"\uc804\uc138\uacc4"},{code:"BQ",name:"Bonaire, Sint Eustatius and Saba",korName:"\uce74\ub9ac\ube0c \ub124\ub35c\ub780\ub4dc"},{code:"JE",name:"Jersey",korName:"\uc800\uc9c0\uc12c"}];function ne(){var e=Object(d.a)(["\n  width: 350px;\n  height: 120px;\n  font-size: 13px;\n  overflow-y: scroll;\n"]);return ne=function(){return e},e}function oe(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 350px;\n  font-size: 13px;\n  padding: 5px 0px;\n  & > div {\n    width: 100px;\n    text-align: center;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  & > div > .divider {\n    display: inline-block;\n    width: 0;\n    height: 8px;\n    border-left: 1px solid #ccc;\n    border-right: 1px solid #ccc;\n  }\n"]);return oe=function(){return e},e}function re(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return re=function(){return e},e}function ce(){var e=Object(d.a)(['\n  height: 200px;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 30px;\n  & > h1 {\n    margin-left: 23px;\n    margin-bottom: 10px;\n    font-family: "SCDream_bold";\n  }\n  & > .updated {\n    margin-left: 23px;\n  }\n']);return ce=function(){return e},e}var te=i.a.div(ce()),me=i.a.div(re()),de=i.a.div(oe()),ie=i.a.div(ne()),se=function(){var e=h("https://disease.sh/v3/covid-19/countries?sort=cases").data,a=Object(r.useMemo)((function(){return null===e||void 0===e?void 0:e.reduce((function(e,a){return e<a.updated?a.updated:e}),0)}),[e]);return Object(o.jsxs)(te,{children:[Object(o.jsx)("h1",{children:"\uc804\uc138\uacc4 \ud655\uc9c4\uc790 \uc218"}),a&&Object(o.jsxs)("div",{className:"updated",children:["\ub9c8\uc9c0\ub9c9 \uc5c5\ub370\uc774\ud2b8 :"," ",Object(K.a)(a,{locale:R.ko,addSuffix:!0})]}),Object(o.jsxs)(me,{children:[Object(o.jsxs)(de,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"divider"}),Object(o.jsx)("span",{children:"\uad6d\uac00"}),Object(o.jsx)("span",{className:"divider"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"divider"}),Object(o.jsx)("span",{children:"\ucd1d \ud655\uc9c4\uc790\uc218"}),Object(o.jsx)("span",{className:"divider"})]})]}),Object(o.jsx)(ie,{children:null!==e?e.map((function(e,a){var n;return Object(o.jsx)(ee,{name:null===(n=ae.find((function(a){return a.code===e.countryInfo.iso2||a.name===e.country})))||void 0===n?void 0:n.korName,cases:e.cases,flag:e.countryInfo.flag,backgroundColor:(a+1)%2?"#efeded":"white"},a)})):Object(o.jsx)("div",{})})]})]})};function le(){var e=Object(d.a)(["\n  width: 400px;\n  margin: 0 auto;\n  background-color: white;\n"]);return le=function(){return e},e}var Ne=function(){return Object(o.jsxs)(ke,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(H,{}),Object(o.jsx)(W,{}),Object(o.jsx)(se,{})]})},ke=i.a.div(le());m.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Ne,{})}),document.getElementById("root"))},54:function(e,a,n){}},[[500,1,2]]]);
//# sourceMappingURL=main.3a8cb840.chunk.js.map