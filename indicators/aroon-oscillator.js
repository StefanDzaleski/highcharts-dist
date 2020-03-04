/*
 Highstock JS v8.0.2 (2020-03-04)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon-oscillator",["highcharts","highcharts/modules/stock"],function(e){a(e);a.Highcharts=e;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function e(a,f,k,c){a.hasOwnProperty(f)||(a[f]=c.apply(null,k))}a=a?a._modules:{};e(a,"mixins/multipe-lines.js",[a["parts/Globals.js"],a["parts/Utilities.js"]],function(a,f){var k=
f.defined,c=f.error,e=f.merge,g=a.each,h=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(b){var a=[];g(this.pointArrayMap,function(d){d!==b&&a.push("plot"+d.charAt(0).toUpperCase()+d.slice(1))});return a},toYData:function(b){var a=[];g(this.pointArrayMap,function(d){a.push(b[d])});return a},translate:function(){var b=this,a=b.pointArrayMap,d=[],c;d=b.getTranslatedLinesNames();h.prototype.translate.apply(b,arguments);
g(b.points,function(h){g(a,function(a,g){c=h[a];null!==c&&(h[d[g]]=b.yAxis.toPixels(c,!0))})})},drawGraph:function(){var b=this,a=b.linesApiNames,d=b.points,f=d.length,m=b.options,p=b.graph,q={options:{gapSize:m.gapSize}},n=[],r=b.getTranslatedLinesNames(b.pointValKey),l;g(r,function(a,b){for(n[b]=[];f--;)l=d[f],n[b].push({x:l.x,plotX:l.plotX,plotY:l[a],isNull:!k(l[a])});f=d.length});g(a,function(a,d){n[d]?(b.points=n[d],m[a]?b.options=e(m[a].styles,q):c('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),
b.graph=b["graph"+a],h.prototype.drawGraph.call(b),b["graph"+a]=b.graph):c('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=d;b.options=m;b.graph=p;h.prototype.drawGraph.call(b)}}});e(a,"mixins/indicator-required.js",[a["parts/Utilities.js"]],function(a){var f=a.error;return{isParentLoaded:function(a,c,e,g,h){if(a)return g?g(a):!0;f(h||this.generateMessage(e,c));return!1},generateMessage:function(a,c){return'Error: "'+
a+'" indicator type requires "'+c+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});e(a,"indicators/aroon-oscillator.src.js",[a["parts/Globals.js"],a["mixins/multipe-lines.js"],a["mixins/indicator-required.js"],a["parts/Utilities.js"]],function(a,f,e,c){var k=c.merge;c=c.seriesType;var g=a.seriesTypes.aroon;c("aroonoscillator","aroon",{params:{period:25},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b>: {point.y}'}},
k(f,{nameBase:"Aroon Oscillator",pointArrayMap:["y"],pointValKey:"y",linesApiNames:[],init:function(){var a=arguments,b=this;e.isParentLoaded(g,"aroon",b.type,function(c){c.prototype.init.apply(b,a)})},getValues:function(a,b){var c=[],d=[],f=[];a=g.prototype.getValues.call(this,a,b);for(b=0;b<a.yData.length;b++){var e=a.yData[b][0];var h=a.yData[b][1];e-=h;c.push([a.xData[b],e]);d.push(a.xData[b]);f.push(e)}return{values:c,xData:d,yData:f}}}));""});e(a,"masters/indicators/aroon-oscillator.src.js",
[],function(){})});
//# sourceMappingURL=aroon-oscillator.js.map