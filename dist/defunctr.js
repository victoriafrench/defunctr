/*!
 * Defunctr 1.3.0-beta2
 * https://github.com/cinecove/defunctr
 *
 * Copyright 2012 - 2017 Cinecove Digital, LLC and other contributors
 * Released under the MIT license
 * https://github.com/cinecove/defunctr/blob/master/LICENSE.md
 *
 * Build Date: 2017-02-10T06:43:11.040Z
 */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.defunctr=n()}(this,function(){"use strict";function e(){try{return"WebkitTransform"in c.documentElement.style&&!!E.opr&&!!E.opr.addons}catch(e){return!1}}function n(e){return function(){return e}}function i(e,n){Modernizr?Modernizr.addTest(e,n):r(n()?e:"no-"+e)}function o(e){Re.className=Re.className.replace(new RegExp("\\b"+e+"\\b"),"")}function r(e){t(e)||(Re.className+=Re.className.length>0?" "+e:e)}function t(e){return Re.className.match(new RegExp("\\b"+e+"\\b"))}function s(e){t(Ae.NOTAGGING)||(i(me(de.IE),n(e.isIE)),t(Ae.IE_ONLY)||(i(me(de.CHROME),n(e.isChrome)),i(me(de.SAFARI),n(e.isSafari)),i(me(de.OPERA),n(e.isOpera)),i(me(de.OPERANEXT),n(e.isOperaNext)),i(me(de.FIREFOX),n(e.isFirefox)),i(me(de.KHTML),n(e.isKhtml)),i(me(de.WEBKIT),n(e.isWebKit)),i(me(de.EDGE),n(e.isEdge)),i(me(de.UNKNOWN),n(e.isUndetected))),t(Ae.IE_LESSTHAN_OFF)||(i(me(de.IE_LESSTHAN_6),n(e.ieIsBelowVersion6)),i(me(de.IE_LESSTHAN_7),n(e.ieIsBelowVersion7)),i(me(de.IE_LESSTHAN_8),n(e.ieIsBelowVersion8)),i(me(de.IE_LESSTHAN_9),n(e.ieIsBelowVersion9)),i(me(de.IE_LESSTHAN_10),n(e.ieIsBelowVersion10)),i(me(de.IE_LESSTHAN_11),n(e.ieIsBelowVersion11)),i(me(de.IE_LESSTHAN_12),n(e.ieIsBelowVersion12))),t(Ae.IE_GREATERTHAN_OFF)||(i(me(de.IE_GREATERTHAN_6),n(e.ieIsAboveVersion6)),i(me(de.IE_GREATERTHAN_7),n(e.ieIsAboveVersion7)),i(me(de.IE_GREATERTHAN_8),n(e.ieIsAboveVersion8)),i(me(de.IE_GREATERTHAN_9),n(e.ieIsAboveVersion9)),i(me(de.IE_GREATERTHAN_10),n(e.ieIsAboveVersion10)),i(me(de.IE_GREATERTHAN_11),n(e.ieIsAboveVersion11))),t(Ae.VERSION_OFF)||(i(me(de.IE_VERSION_6),n(e.ieIsVersion6)),i(me(de.IE_VERSION_7),n(e.ieIsVersion7)),i(me(de.IE_VERSION_8),n(e.ieIsVersion8)),i(me(de.IE_VERSION_9),n(e.ieIsVersion9)),i(me(de.IE_VERSION_10),n(e.ieIsVersion10)),i(me(de.IE_VERSION_11),n(e.ieIsVersion11)))),u()}function u(){o(Ae.IE_GREATERTHAN_OFF),o(Ae.IE_LESSTHAN_OFF),o(Ae.VERSION_OFF),o(Ae.IE_ONLY),o(Ae.DEFUNCTR),o(Ae.NOTAGGING)}var E=window||null,c=E?E.document||null:null,f=void 0,I=function(){},l=E&&E.console?E.console:void 0,a=l?l.log||I:I,V=l?l.warn||a:I,_=l?l.error||a:I,d={log:a,warn:V,error:_},A=function(){return Boolean(E&&E.HTMLElement&&Object.prototype.toString.call(E.HTMLElement).indexOf("Constructor")>0)},N=function(){return A()},m=function(){return e()},T=function(){return Boolean(c&&c.documentElement&&c.documentElement.style&&"WebkitTransform"in c.documentElement.style)},R=function(){return Boolean(E&&"undefined"!=typeof E.msWriteProfilerMark)},S=function(){return Boolean(E&&"undefined"!=typeof E.InstallTrigger)},b=function(){return S()},h=function(){return T()&&R()===!1&&!b()},v=function(){return!N()&&!m()&&h()},O=function(){return"ActiveXObject"in E},w=function(){return Boolean(E&&E.Event&&"function"==typeof E.Event)},B=function(){return Boolean(!O()&&w()&&R())},p=function(){return Boolean(c&&c.documentElement&&c.documentElement.style&&"KhtmlMarquee"in c.documentElement.style)},H=function(){return p()&&!N()},F=function(){return Boolean(E&&E.opera&&E.opera.version!==f)},G=function(){return F()},L=function(){return O()},y=function(){return!(h()||L()||v()||B()||b()||G()||m()||N())},g=function(){return Boolean(c&&c.compatMode&&("CSS1Compat"===c.compatMode||"BackCompat"===c.compatMode))},M=function(){return L()&&g()},C=function(){return Boolean(E&&"undefined"!=typeof E.XMLHttpRequest)},z=function(){return L()&&g()&&C()},x=function(){return Boolean(c&&"undefined"!=typeof c.querySelector)},K=function(){return L()&&x()},W=function(){return Boolean(c&&"undefined"!=typeof c.addEventListener)},j=function(){return L()&&W()},k=function(){return Boolean(E&&"undefined"!=typeof E.atob)},D=function(){return L()&&k()},P=function(){return Boolean(c&&"undefined"!=typeof c.attachEvent)},U=function(){return L()&&k()&&!P()},X=function(){return L()&&w()},q=function(){return Boolean(c&&"undefined"!=typeof c.compatMode)},Y=function(){return L()&&!q()},J=function(){return Boolean(c&&c.compatMode&&"BackCompat"===c.compatMode)},Q=function(){return L()&&!J()&&!C()},Z=function(){return L()&&!x()},$=function(){return L()&&!W()},ee=function(){return L()&&!k()},ne=function(){return L()&&P()},ie=function(){return L()&&!w()},oe=function(){return M()&&Q()},re=function(){return z()&&Z()},te=function(){return K()&&$()},se=function(){return j()&&ee()},ue=function(){return D()&&ne()},Ee=function(){return U()&&ie()},ce=(Object.freeze||Object)({isAboveVersion5:M,isAboveVersion6:z,isAboveVersion7:K,isAboveVersion8:j,isAboveVersion9:D,isAboveVersion10:U,isAboveVersion11:X,isBelowVersion6:Y,isBelowVersion7:Q,isBelowVersion8:Z,isBelowVersion9:$,isBelowVersion10:ee,isBelowVersion11:ne,isBelowVersion12:ie,isVersion6:oe,isVersion7:re,isVersion8:te,isVersion9:se,isVersion10:ue,isVersion11:Ee}),fe=function(){return Boolean(E&&E.chrome&&E.chrome.webstore&&E.chrome.webstore.install)},Ie=function(){return v()&&fe()},le=(Object.freeze||Object)({isAboveVersion15:Ie}),ae={ie:ce,chrome:le},Ve=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},_e=function e(){Ve(this,e),this.isWebKit=h(),this.isOpera=G(),this.isIE=L(),this.isFirefox=b(),this.isSafari=N(),this.isKhtml=H(),this.isOperaNext=m(),this.isChrome=v(),this.isEdge=B(),this.isUndetected=y(),this.standardsCompliant=ae.ie.isAboveVersion9()||!L(),this.chromeIsAbove15=ae.chrome.isAboveVersion15(),this.ieIsVersion11=ae.ie.isVersion11(),this.ieIsVersion10=ae.ie.isVersion10(),this.ieIsVersion9=ae.ie.isVersion9(),this.ieIsVersion8=ae.ie.isVersion8(),this.ieIsVersion7=ae.ie.isVersion7(),this.ieIsVersion6=ae.ie.isVersion6(),this.ieIsBelowVersion6=ae.ie.isBelowVersion6(),this.ieIsBelowVersion7=ae.ie.isBelowVersion7(),this.ieIsBelowVersion8=ae.ie.isBelowVersion8(),this.ieIsBelowVersion9=ae.ie.isBelowVersion9(),this.ieIsBelowVersion10=ae.ie.isBelowVersion10(),this.ieIsBelowVersion11=ae.ie.isBelowVersion11(),this.ieIsBelowVersion12=ae.ie.isBelowVersion12(),this.ieIsAboveVersion5=ae.ie.isAboveVersion5(),this.ieIsAboveVersion6=ae.ie.isAboveVersion6(),this.ieIsAboveVersion7=ae.ie.isAboveVersion7(),this.ieIsAboveVersion8=ae.ie.isAboveVersion8(),this.ieIsAboveVersion9=ae.ie.isAboveVersion9(),this.ieIsAboveVersion10=ae.ie.isAboveVersion10(),this.ieIsAboveVersion11=ae.ie.isAboveVersion11()},de={IE:"ie",CHROME:"chrome",SAFARI:"safari",OPERA:"opera",OPERANEXT:"opera-next",FIREFOX:"firefox",KHTML:"khtml",WEBKIT:"webkit",EDGE:"edge",UNKNOWN:"undetected-browser",IE_LESSTHAN_6:"ie-lt-6",IE_LESSTHAN_7:"ie-lt-7",IE_LESSTHAN_8:"ie-lt-8",IE_LESSTHAN_9:"ie-lt-9",IE_LESSTHAN_10:"ie-lt-10",IE_LESSTHAN_11:"ie-lt-11",IE_LESSTHAN_12:"ie-lt-12",IE_GREATERTHAN_6:"ie-gt-6",IE_GREATERTHAN_7:"ie-gt-7",IE_GREATERTHAN_8:"ie-gt-8",IE_GREATERTHAN_9:"ie-gt-9",IE_GREATERTHAN_10:"ie-gt-10",IE_GREATERTHAN_11:"ie-gt-11",IE_VERSION_6:"ie-version-6",IE_VERSION_7:"ie-version-7",IE_VERSION_8:"ie-version-8",IE_VERSION_9:"ie-version-9",IE_VERSION_10:"ie-version-10",IE_VERSION_11:"ie-version-11"},Ae={DEFUNCTR:"defunctr",VERSION_OFF:"defunctr-version-off",IE_ONLY:"defunctr-ie-only",IE_LESSTHAN_OFF:"defunctr-lt-off",IE_GREATERTHAN_OFF:"defunctr-gt-off",NOTAGGING:"defunctr-off"},Ne="",me=function(e){return""+Ne+e},Te={modernizr:void 0};"function"==typeof require?require(["modernizr"],function(e){Te.modernizr=e}):E&&(E.Modernizr?Te.modernizr=E.Modernizr:E.modernizr&&(Te.modernizr=E.modernizr));var Re=c&&c.documentElement&&c.documentElement.className?c.documentElement:{className:""},Modernizr=Te.modernizr,Se=function(e){return{tag:function(){c&&s(e)}}},be=function e(){Ve(this,e),this.version="1.3.0-beta2",this.detective=new _e},he=new be;if(E){Se(new _e).tag(),E.defunctr=he;try{Object.defineProperty(E,"Defunctr",{get:function(){return d.warn("window.Defunctr is deprecated and will be removed. Please use window.defunctr"),he},enumerable:!0,configurable:!0})}catch(e){E.Defunctr=he}}return he});