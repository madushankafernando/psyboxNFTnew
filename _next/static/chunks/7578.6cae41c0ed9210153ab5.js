(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7578,8752],{98752:function(e,t,a){"use strict";a.r(t);var r=a(85893),l=a(25675),n=a(41664);t.default=function(e){var t=e.items,a=e.background,o=e.textColor,c=e.gridCols,s=e.title,i=e.action;return(0,r.jsx)("section",{className:"py-8 ".concat(a," ").concat(o," lg:py-12"),children:(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)("h3",{className:"text-2xl mb-8 font-mono tracking-wide",children:s}),(0,r.jsx)("div",{className:"grid ".concat(c," gap-8 lg:gap-12"),children:t.map((function(e,t){return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"flex-shrink-0 mr-6",children:(0,r.jsx)(l.default,{src:e.icon,alt:"Roadmap",width:"35",height:"35"})}),(0,r.jsx)("p",{className:"font-mono lg:text-xs",children:e.text})]},t)}))}),i&&(0,r.jsx)("div",{className:"text-center mb-4 lg:mb-0 mt-12",children:(0,r.jsx)(n.default,{href:i.link,children:(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"bg-black text-white py-2 px-20 border border-black text-md font-bold hover:bg-lightGrey hover:text-black hover:border-black",children:i.title})})})]})})}},92167:function(e,t,a){"use strict";var r=a(53848);t.default=void 0;var l,n=(l=a(67294))&&l.__esModule?l:{default:l},o=a(21063),c=a(34651),s=a(7426);var i={};function f(e,t,a,r){if(e&&o.isLocalURL(t)){e.prefetch(t,a,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+a+(l?"%"+l:"")]=!0}}var u=function(e){var t,a=!1!==e.prefetch,l=c.useRouter(),u=n.default.useMemo((function(){var t=o.resolveHref(l,e.href,!0),a=r(t,2),n=a[0],c=a[1];return{href:n,as:e.as?o.resolveHref(l,e.as):c||n}}),[l,e.href,e.as]),d=u.href,p=u.as,h=e.children,v=e.replace,m=e.shallow,x=e.scroll,g=e.locale;"string"===typeof h&&(h=n.default.createElement("a",null,h));var b=(t=n.default.Children.only(h))&&"object"===typeof t&&t.ref,y=s.useIntersection({rootMargin:"200px"}),k=r(y,2),j=k[0],L=k[1],N=n.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);n.default.useEffect((function(){var e=L&&a&&o.isLocalURL(d),t="undefined"!==typeof g?g:l&&l.locale,r=i[d+"%"+p+(t?"%"+t:"")];e&&!r&&f(l,d,p,{locale:t})}),[p,d,L,g,a,l]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,r,l,n,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(a))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[l?"replace":"push"](a,r,{shallow:n,locale:s,scroll:c}))}(e,l,d,p,v,m,x,g)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(l,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof g?g:l&&l.locale,C=l&&l.isLocaleDomain&&o.getDomainLocale(p,w,l&&l.locales,l&&l.domainLocales);E.href=C||o.addBasePath(o.addLocale(p,w,l&&l.defaultLocale))}return n.default.cloneElement(t,E)};t.default=u},41664:function(e,t,a){e.exports=a(92167)}}]);