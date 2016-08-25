var DOM = require('./dom-base.js');

DOM.source.platform.name = 'Windows';
DOM.source.platform.version = 'XP';
DOM.source.browser.name = 'IE';
DOM.source.browser.version = '6';
DOM.source.mode.document = "6";
DOM.source.mode.browser = "6";

DOM.navigator.userAgent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)';

DOM.document.all = {};
DOM.document.compatMode = 'BackCompat'; // <- All IE above 5 have this value

DOM.window.ActiveXObject = function ActiveXObject() {}; // <- IE Detection is using this

DOM.document.documentElement.style = {};
DOM.document.documentElement.style.accelerator = false;
DOM.document.documentElement.style.background = {};
DOM.document.documentElement.style.backgroundAttachment = {};
DOM.document.documentElement.style.backgroundColor = {};
DOM.document.documentElement.style.backgroundImage = {};
DOM.document.documentElement.style.backgroundPosition = {};
DOM.document.documentElement.style.backgroundPositionX = {};
DOM.document.documentElement.style.backgroundPositionY = {};
DOM.document.documentElement.style.backgroundRepeat = {};
DOM.document.documentElement.style.behavior = {};
DOM.document.documentElement.style.border = {};
DOM.document.documentElement.style.borderBottom = {};
DOM.document.documentElement.style.borderBottomColor = {};
DOM.document.documentElement.style.borderBottomStyle = {};
DOM.document.documentElement.style.borderBottomWidth = {};
DOM.document.documentElement.style.borderCollapse = {};
DOM.document.documentElement.style.borderColor = {};
DOM.document.documentElement.style.borderLeft = {};
DOM.document.documentElement.style.borderLeftColor = {};
DOM.document.documentElement.style.borderLeftStyle = {};
DOM.document.documentElement.style.borderLeftWidth = {};
DOM.document.documentElement.style.borderRight = {};
DOM.document.documentElement.style.borderRightColor = {};
DOM.document.documentElement.style.borderRightStyle = {};
DOM.document.documentElement.style.borderRightWidth = {};
DOM.document.documentElement.style.borderStyle = {};
DOM.document.documentElement.style.borderTop = {};
DOM.document.documentElement.style.borderTopColor = {};
DOM.document.documentElement.style.borderTopStyle = {};
DOM.document.documentElement.style.borderTopWidth = {};
DOM.document.documentElement.style.borderWidth = {};
DOM.document.documentElement.style.bottom = {};
DOM.document.documentElement.style.clear = {};
DOM.document.documentElement.style.clip = {};
DOM.document.documentElement.style.color = {};
DOM.document.documentElement.style.cssText = {};
DOM.document.documentElement.style.cursor = {};
DOM.document.documentElement.style.direction = {};
DOM.document.documentElement.style.display = {};
DOM.document.documentElement.style.filter = {};
DOM.document.documentElement.style.font = {};
DOM.document.documentElement.style.fontFamily = {};
DOM.document.documentElement.style.fontSize = {};
DOM.document.documentElement.style.fontStyle = {};
DOM.document.documentElement.style.fontVariant = {};
DOM.document.documentElement.style.fontWeight = {};
DOM.document.documentElement.style.height = {};
DOM.document.documentElement.style.imeMode = {};
DOM.document.documentElement.style.layoutFlow = {};
DOM.document.documentElement.style.layoutGrid = {};
DOM.document.documentElement.style.layoutGridChar = {};
DOM.document.documentElement.style.layoutGridLine = {};
DOM.document.documentElement.style.layoutGridMode = {};
DOM.document.documentElement.style.layoutGridType = {};
DOM.document.documentElement.style.left = {};
DOM.document.documentElement.style.letterSpacing = {};
DOM.document.documentElement.style.lineBreak = {};
DOM.document.documentElement.style.lineHeight = {};
DOM.document.documentElement.style.listStyle = {};
DOM.document.documentElement.style.listStyleImage = {};
DOM.document.documentElement.style.listStylePosition = {};
DOM.document.documentElement.style.listStyleType = {};
DOM.document.documentElement.style.margin = {};
DOM.document.documentElement.style.marginBottom = {};
DOM.document.documentElement.style.marginLeft = {};
DOM.document.documentElement.style.marginRight = {};
DOM.document.documentElement.style.marginTop = {};
DOM.document.documentElement.style.minHeight = {};
DOM.document.documentElement.style.overflow = {};
DOM.document.documentElement.style.overflowX = {};
DOM.document.documentElement.style.overflowY = {};
DOM.document.documentElement.style.padding = {};
DOM.document.documentElement.style.paddingBottom = {};
DOM.document.documentElement.style.paddingLeft = {};
DOM.document.documentElement.style.paddingRight = {};
DOM.document.documentElement.style.paddingTop = {};
DOM.document.documentElement.style.pageBreakAfter = {};
DOM.document.documentElement.style.pageBreakBefore = {};
DOM.document.documentElement.style.posBottom = {};
DOM.document.documentElement.style.posHeight = {};
DOM.document.documentElement.style.posLeft = {};
DOM.document.documentElement.style.posRight = {};
DOM.document.documentElement.style.posTop = {};
DOM.document.documentElement.style.posWidth = {};
DOM.document.documentElement.style.position = {};
DOM.document.documentElement.style.right = {};
DOM.document.documentElement.style.rubyAlign = {};
DOM.document.documentElement.style.rubyOverhang = {};
DOM.document.documentElement.style.rubyPosition = {};
DOM.document.documentElement.style.scrollbar3dLightColor = {};
DOM.document.documentElement.style.scrollbarArrowColor = {};
DOM.document.documentElement.style.scrollbarBaseColor = {};
DOM.document.documentElement.style.scrollbarDarkShadowColor = {};
DOM.document.documentElement.style.scrollbarFaceColor = {};
DOM.document.documentElement.style.scrollbarHighlightColor = {};
DOM.document.documentElement.style.scrollbarShadowColor = {};
DOM.document.documentElement.style.scrollbarTrackColor = {};
DOM.document.documentElement.style.styleFloat = {};
DOM.document.documentElement.style.tableLayout = {};
DOM.document.documentElement.style.textAlign = {};
DOM.document.documentElement.style.textAlignLast = {};
DOM.document.documentElement.style.textAutospace = {};
DOM.document.documentElement.style.textDecoration = {};
DOM.document.documentElement.style.textDecorationBlink = {};
DOM.document.documentElement.style.textDecorationLineThrough = {};
DOM.document.documentElement.style.textDecorationNone = {};
DOM.document.documentElement.style.textDecorationOverline = {};
DOM.document.documentElement.style.textDecorationUnderline = {};
DOM.document.documentElement.style.textIndent = {};
DOM.document.documentElement.style.textJustify = {};
DOM.document.documentElement.style.textJustifyTrim = {};
DOM.document.documentElement.style.textKashida = {};
DOM.document.documentElement.style.textKashidaSpace = {};
DOM.document.documentElement.style.textOverflow = {};
DOM.document.documentElement.style.textTransform = {};
DOM.document.documentElement.style.textUnderlinePosition = {};
DOM.document.documentElement.style.top = {};
DOM.document.documentElement.style.unicodeBidi = {};
DOM.document.documentElement.style.verticalAlign = {};
DOM.document.documentElement.style.visibility = {};
DOM.document.documentElement.style.whiteSpace = {};
DOM.document.documentElement.style.width = {};
DOM.document.documentElement.style.wordBreak = {};
DOM.document.documentElement.style.wordSpacing = {};
DOM.document.documentElement.style.wordWrap = {};
DOM.document.documentElement.style.writingMode = {};
DOM.document.documentElement.style.zIndex = {};
DOM.document.documentElement.style.zoom = {};

module.exports = DOM;
