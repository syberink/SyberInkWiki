if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const r=e=>a(e,c),l={module:{uri:c},exports:f,require:r};s[c]=Promise.all(i.map((e=>l[e]||r(e)))).then((e=>(d(...e),f)))}}define(["./workbox-841b7e46"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.html.5b623826.js",revision:"1ed1e6907f6cde49d867a95d0d77b95f"},{url:"assets/1.html.6154d69e.js",revision:"1164edf503bf200dada07b2d2b210218"},{url:"assets/1.html.ce208288.js",revision:"1877b840441ffea8c14e3fbaff984b0b"},{url:"assets/1.html.f902bceb.js",revision:"00fcf0c3e4169593365a9a2d6afdc7d3"},{url:"assets/404.f1521840.js",revision:"a172781ece703c8f62ac8a22559a2291"},{url:"assets/404.html.aefa4c6c.js",revision:"6880c78580395bf1a96e75f5aaaccb64"},{url:"assets/404.html.e8c61e42.js",revision:"9facdf955968ef64a84eb73b33ab61b4"},{url:"assets/align.b9425857.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/app.aaa19be4.js",revision:"101560e43574cbbab884aaf75a91607b"},{url:"assets/auto.esm.15d52109.js",revision:"ed411dd200d000543d3eee71f1ff864c"},{url:"assets/Blog.b82b5ed8.js",revision:"c818e4b473efcef4804a30011e00d281"},{url:"assets/community.html.24c5f361.js",revision:"563aa8649f3241c06ed1e33b996b95ce"},{url:"assets/community.html.56445ec2.js",revision:"20d1f986064cccf403a22e1e934da2f1"},{url:"assets/community.html.b5a57c2e.js",revision:"45ea515ab8fb05e9b1b53f2e430046e0"},{url:"assets/community.html.cf004e7e.js",revision:"cbdfc2ac3333f1539b4d78b3ffffac3f"},{url:"assets/dao.html.0eec8152.js",revision:"f64b5a965f2d444a6d615fc4630b59d0"},{url:"assets/dao.html.3dcdee61.js",revision:"72403e2bcce4cae7b2bfcfa8fa16be08"},{url:"assets/dao.html.47225283.js",revision:"945fb57c0b4f8cf567038d818b4e1366"},{url:"assets/dao.html.b2f2bc43.js",revision:"50d321f292e9c5375e00fb25fac2682a"},{url:"assets/default-skin.6dc726bc.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/develope.html.3dd224f8.js",revision:"e20f7555ada2dc35df1fb6483e6acf77"},{url:"assets/develope.html.4d958228.js",revision:"24543a73b2be8bb2ed607ccd79dfe380"},{url:"assets/develope.html.5e655a7f.js",revision:"84e997e6f6f7f2080c3a3dc0ba6ecc74"},{url:"assets/develope.html.f451d370.js",revision:"de20f9fcc78fc7fb8d48a03262cb103e"},{url:"assets/ecosystem.html.46360c92.js",revision:"d8b7614d8cc067190670cacc6edb72f8"},{url:"assets/ecosystem.html.580e993e.js",revision:"9ded0be1856e91652cc22f94f765cdf0"},{url:"assets/ecosystem.html.be393723.js",revision:"1450a96d7dcc7f93916e776b26aeb338"},{url:"assets/ecosystem.html.e2195830.js",revision:"75524bc7c15f691e818a59c9889a3c7f"},{url:"assets/faq1.html.3d9238d8.js",revision:"9fea70fe59a10d58d25f48b17f9aefe7"},{url:"assets/faq1.html.42b1f659.js",revision:"52e17b903f93c69f4ec9d2f0d4759008"},{url:"assets/faq1.html.6caf5c4a.js",revision:"59f4cdf0476128f4aa427fd6f67dd877"},{url:"assets/faq1.html.fb299313.js",revision:"89b0463a472ee5870ee5f787cb12a1be"},{url:"assets/footnote.3dff8346.js",revision:"6284fd4521d66768b8f3eae27dd9ab46"},{url:"assets/highlight.esm.d982e650.js",revision:"3457767fb4f7fe757ad6fb071f162a85"},{url:"assets/image.99d6368a.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.1842ee54.js",revision:"96111972074fcec23cd9181bc4cc5906"},{url:"assets/index.c7681852.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/index.html.00d40091.js",revision:"7ed89d3cb0f18d7b934f2d70b248c059"},{url:"assets/index.html.019240a0.js",revision:"16eca2d7264a63ef9aa4f3a8fe37d523"},{url:"assets/index.html.01a0431c.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.088503a9.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.0ae9d708.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.0c3d1c33.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.0cf3c718.js",revision:"6cfdaa998ab42abe4e1a0962afcb9da9"},{url:"assets/index.html.1846347e.js",revision:"57a51e5cba49fd363d39e8b8eb39fe6a"},{url:"assets/index.html.1990a0e2.js",revision:"170e340e540311e3a754d926ff7a5abe"},{url:"assets/index.html.1b473271.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.1da2eae9.js",revision:"b177860dec6081c6e2dc4b401a4cf741"},{url:"assets/index.html.2473cc11.js",revision:"c3413713d5afea4d56ccf422e859226e"},{url:"assets/index.html.316e0d85.js",revision:"ca67fa5aeda7877576a56b3a37ff4b47"},{url:"assets/index.html.32420190.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.37e05e6e.js",revision:"9f877e871bb7dddf58e7f813985f33cf"},{url:"assets/index.html.392c52b2.js",revision:"307cdff3bd1149253227789a46dcd425"},{url:"assets/index.html.40df7a53.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.442963d9.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.45e59028.js",revision:"58a5ab6e8ccbf0ddb480824550b5a871"},{url:"assets/index.html.45ea0bc4.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.4bbbb44e.js",revision:"1ddf972f7e55509c78f16a7f75a796ca"},{url:"assets/index.html.4cd46f69.js",revision:"17c18828e58eb653444839149be706e2"},{url:"assets/index.html.4ee60fad.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.57d613e6.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.596f5fb1.js",revision:"fa9e279a6bba11d0e9aed2cabbae478f"},{url:"assets/index.html.5a2e4375.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.645d63b2.js",revision:"367d422d4edf8e75e1e3958e5806f60b"},{url:"assets/index.html.66bd62f0.js",revision:"c88333eb670cd7e318c8d89b50b88e6d"},{url:"assets/index.html.66ddc9e3.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.69e759e3.js",revision:"0905a85cdb49d6b016ac950756c4b455"},{url:"assets/index.html.6bc3cafe.js",revision:"c317d30715eef620d55afc3b5baf5f90"},{url:"assets/index.html.6c36ca44.js",revision:"7465fbb8a20a0d0103ebe7d7a45f83d2"},{url:"assets/index.html.6cd4ed06.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.6f2d5297.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.6f942c4f.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.7114463d.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.718dd282.js",revision:"ffd7d30022cf94d758238c6ca504d302"},{url:"assets/index.html.75987758.js",revision:"f33c873daf19b2f21788845de4f4e80b"},{url:"assets/index.html.76156c1a.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.76cda451.js",revision:"c467e0478d6376706a18100481b0a409"},{url:"assets/index.html.775ad48e.js",revision:"88fac1f26ce052b4552bf309e7c758ed"},{url:"assets/index.html.7806dcdc.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.7ac51074.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.7c9d6fe5.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.80708903.js",revision:"0d37ad731ae48b25cb566a8091d16278"},{url:"assets/index.html.8bf22107.js",revision:"66bd0a5d911db603d8182c7c3d92bc35"},{url:"assets/index.html.8c024078.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.8f21ae9e.js",revision:"3e9e285007985e93deab93d8de6bfeb7"},{url:"assets/index.html.8f4e00db.js",revision:"ead8b184dbb3081d5cb513e4bd9938a6"},{url:"assets/index.html.937eb21c.js",revision:"793c010ea47b654e6a27fb728a892d52"},{url:"assets/index.html.95ced05f.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.95da8f7d.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.a1b1137b.js",revision:"8bdf56ffa69b8c429fe3e3fa19ebf38f"},{url:"assets/index.html.a4d26daa.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.a5630f12.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.a63ca424.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.a6a1c9d5.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.aa20d00b.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.b01eef28.js",revision:"e0add010bddd80bc371755e9cf88df7e"},{url:"assets/index.html.b0563cf7.js",revision:"493fd9ada3d333b6a60366a172c12b7e"},{url:"assets/index.html.b2404552.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.b6935b4a.js",revision:"c13a28ea96e80a94b0943275b0b1c9e5"},{url:"assets/index.html.ba2c3d09.js",revision:"b764d90cbe3285d147fd60a041c562c7"},{url:"assets/index.html.bb283784.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.bc704b6f.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.bd781058.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.bde84b5e.js",revision:"ab61ba5e4a9ada7f017884476b1e1dce"},{url:"assets/index.html.bf607d87.js",revision:"bd7aec9de8528e31c370242e8b2b5d95"},{url:"assets/index.html.c3517a2f.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.c7ec6445.js",revision:"4a576ca8967fa5ae115bfa09463f53b0"},{url:"assets/index.html.c81a9d68.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.cabe8c1e.js",revision:"5ad97a82aacb98ab391b7af274499a6e"},{url:"assets/index.html.cb1498ad.js",revision:"1280a69ad2b6831a1ebea5886fe95dbd"},{url:"assets/index.html.ccfa49f6.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.ceaa5d69.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.d0168c03.js",revision:"1fdaf81b93a676fd3b64c3048dccfcd6"},{url:"assets/index.html.d041e71b.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.d0428dee.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.d2c2c226.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.d31d0c21.js",revision:"f2c4ade2f93c664c2534ca0b553b28fa"},{url:"assets/index.html.d5058c17.js",revision:"2c7fd3f018af6aa990c25ffa4448d354"},{url:"assets/index.html.d5562aaa.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.d80050e5.js",revision:"88feb9ea97e2b5cf35c54b8fd75982c7"},{url:"assets/index.html.dab80399.js",revision:"014c3b793de764884c94c56b9dc60a46"},{url:"assets/index.html.df53d1e8.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.dfa26f82.js",revision:"ad528cd466248bd3986b07695ef51386"},{url:"assets/index.html.e1896505.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.e1a01fb8.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.e42218cd.js",revision:"f9e133d8d4b214f3352227c06537f547"},{url:"assets/index.html.e6c3dc4d.js",revision:"36965022a778402c77c9d2fc19103f71"},{url:"assets/index.html.e72cfe62.js",revision:"9fa3042be354c51333fbf8503f67b4a1"},{url:"assets/index.html.e8bf4a19.js",revision:"b61d33bbd8f081ae0532e91d8575adef"},{url:"assets/index.html.e98621c6.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.ecb6ee9d.js",revision:"98431c4bef01be71f2cca34560de750c"},{url:"assets/index.html.eccdcb2e.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.f48b5d49.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.f738999d.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/index.html.fe1367a6.js",revision:"0218e0a18ae79306248e2a941063d688"},{url:"assets/Layout.1cdaa7b4.js",revision:"08bedce72ac3a18c2d8631ecaf8bd3e3"},{url:"assets/markdown.esm.832a189d.js",revision:"4aa467006f9d51cf40293b9b69a0f27a"},{url:"assets/math.esm.a3f84b6f.js",revision:"cbf844f27edbc061c86ae840d70389f6"},{url:"assets/mermaid.esm.min.0306b61d.js",revision:"035bd6b5d885219b9a0c4d42ea8063d9"},{url:"assets/news1.html.14b0cfd2.js",revision:"78c2b4ac2324651cda0c007968d7944b"},{url:"assets/news1.html.8206f4db.js",revision:"e9ef1a71c024bf296c4028552ead4a32"},{url:"assets/news1.html.b9ec0b32.js",revision:"0324b0cce5259225e5b07f6cb043ae69"},{url:"assets/news1.html.ce82316d.js",revision:"eb507e6efaabac21d985d7c0386657d3"},{url:"assets/notes.esm.3c361cb7.js",revision:"eda65c99450fe02da90bde90cc614a56"},{url:"assets/notice1.html.0c530204.js",revision:"a51567885a7c18cf2dc2f4787464c79e"},{url:"assets/notice1.html.3bdf0ca6.js",revision:"1d655968a244c5a282bc50f541e66b47"},{url:"assets/notice1.html.f270cb35.js",revision:"fc250d2365a5ea28e70aa87086b222c0"},{url:"assets/notice1.html.f477bd71.js",revision:"6c127fe0d501cb2da405d162b61f1797"},{url:"assets/photoswipe-ui-default.76cf69a7.js",revision:"bc0a5154cc3ef7d928139fba7f94d10f"},{url:"assets/photoswipe.1847f37d.js",revision:"530a5f255e5729f0a6d6f3aaa866d75a"},{url:"assets/post1.html.16fa079d.js",revision:"e511b6cf420d55e47d7d6b6f49498b19"},{url:"assets/post1.html.1de2aaef.js",revision:"c4c1e978b227808c755833c4f6bc2528"},{url:"assets/post1.html.20f106a0.js",revision:"1ae8ab5a8677df070ea107c41f107702"},{url:"assets/post1.html.fb0aef59.js",revision:"3e9e9fa33ed0e5e49dc581d8a2e2b5aa"},{url:"assets/qa1.html.21dfd070.js",revision:"d631a30e4c06e5b9c06ce474d1a919ce"},{url:"assets/qa1.html.2d1cd45b.js",revision:"70c4bc8561135b8a300f336dda33e435"},{url:"assets/qa1.html.cf1c7a38.js",revision:"995c6ced5391edfe2cc8b334db3267ef"},{url:"assets/qa1.html.deef3ffc.js",revision:"9b7fb6c235aaf8cc1838466a3b391ea2"},{url:"assets/reveal.esm.b96f05d8.js",revision:"f78a424fad98faac5d5ca8ebfbebe94b"},{url:"assets/search.0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm.80da4a02.js",revision:"690b84c66badd2f8fa69d57bc7cdad19"},{url:"assets/SkipLink.56a8a36b.js",revision:"64e288b48712ef05236cf1d188a6d511"},{url:"assets/SlidePage.d2f83a14.js",revision:"c7c17fa7109d17ed6d6d63edb784fd59"},{url:"assets/style.d1696fe9.css",revision:"353e75aa20208cf4d23b10b91f3e69f1"},{url:"assets/syber-connect.html.0d54bb81.js",revision:"e2dfe95983e4b9a5319715d7355b9fee"},{url:"assets/syber-connect.html.898822e5.js",revision:"adc03d3348a765c861e5c0062816e408"},{url:"assets/syber-connect.html.a8d51166.js",revision:"0583b7aee78b863b8b8d8f2fbd9df793"},{url:"assets/syber-connect.html.b6ef1857.js",revision:"c96f11dd1d49f7c6830f9e8e2696682c"},{url:"assets/tasklist.3db80391.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/tex.f70ce2ee.js",revision:"cca9a37259222dc603c7e908d38eb27b"},{url:"assets/welcome.html.1698e4e7.js",revision:"a7b96388c1810e6feadce169dbcfb84c"},{url:"assets/welcome.html.2240b0c4.js",revision:"da2e44648e1f25f11a1808b088e8e2bf"},{url:"assets/welcome.html.4114a20b.js",revision:"cc4e52f3c23e55e09df251a7d75393ad"},{url:"assets/welcome.html.5eb5e1cb.js",revision:"ec2f38135ca7696fd9271a529e36547f"},{url:"assets/zoom.esm.8514a202.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"images/icons/safari-pinned-tab.svg",revision:"aaf6d4f1e419dc721fd72f585668d4fe"},{url:"syber.ink.ico.svg",revision:"5a567b278403bcaa24cd1bd49c5ca2b6"},{url:"syber.ink.logo.svg",revision:"a0ef583f4ffaf4f5339b8d6b96c5b8e8"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"404.html",revision:"05efab9739c9f9585d3655c6a6c47b73"},{url:"article/index.html",revision:"dc0b2c5178879757a26b779330ae4a47"},{url:"category/article/index.html",revision:"c55eaeac15806e0ccd6d1bbf1c887b07"},{url:"category/develope/index.html",revision:"fd79b6d75a185f74cd82916a8ae48502"},{url:"category/faq/index.html",revision:"9efc15e6f1e46f204a10a8f2a5a30672"},{url:"category/guide/index.html",revision:"0c49d33465d4a04633e6713e4e445e69"},{url:"category/index.html",revision:"dfefd05690530681f5326e754aaf6495"},{url:"category/news/index.html",revision:"5b744c530845efeb632781b64cc1abb7"},{url:"category/notice/index.html",revision:"1b7a64958bd7628f5bfffbbcdc4be18c"},{url:"category/q&a/index.html",revision:"bff4e26f997bf1d516c5e7bff8a0a85b"},{url:"community.html",revision:"70575c2ba40e7c5641e0fdaa1ef42e02"},{url:"dao.html",revision:"800ab314ed262fd15158eda3bc9274f0"},{url:"develope.html",revision:"b862e690901d8927fd644d4f9d12a557"},{url:"ecosystem.html",revision:"8bbfbf40a44e8063762d56182c57a834"},{url:"encrypted/index.html",revision:"69ca0c36233a6a2b97bd1534437cb5c3"},{url:"guide/index.html",revision:"643588a201a1923cb7d3ec13e07b0a15"},{url:"guide/syber-connect.html",revision:"20733d0b5044d3e57c6cdb389ac90906"},{url:"index.html",revision:"bd868657b2246f734d3ea3da48b73ba6"},{url:"info/faq/faq1.html",revision:"e7e11dd9f9726706d3d7b3b749c1e03c"},{url:"info/index.html",revision:"12c821857277367b25ab5a6f88baaf57"},{url:"info/news/news1.html",revision:"c6b67796b8c72563478777125f929654"},{url:"info/notice/notice1.html",revision:"9993bcd9cc5a8e90fb5d85b1d0f79c74"},{url:"info/post/post1.html",revision:"c065ad3554dbd5e8c0141190fa2aa318"},{url:"info/qa/qa1.html",revision:"0dfbb83e86b678a614f110dc4f2a2026"},{url:"info/roadmap/1.html",revision:"fcf708c2e9f878cb282d5e7034b2862d"},{url:"slides/index.html",revision:"c580068479aadc51c03fd26b469363b0"},{url:"star/index.html",revision:"9424c196431ec45bb46d1b59158729c1"},{url:"tag/guide/index.html",revision:"910f31705cd7f3c3d4eb7828e41876e6"},{url:"tag/index.html",revision:"4ca87991f14bfdcb332c7f67e25e8787"},{url:"tag/roadmap/index.html",revision:"8349bc04c8d53959dbada1ae1aef6949"},{url:"tag/syber-connect/index.html",revision:"5c204ac8d569b4b7e2919aeeee26e45f"},{url:"tag/tag-a/index.html",revision:"df90a86e93a7fa22dc3c0c281354940c"},{url:"tag/tag-b/index.html",revision:"6b21061fd23a12e57dd188104673af59"},{url:"tag/welcome/index.html",revision:"8d80c9a6defca1e8f2f9aa7f526751a5"},{url:"tag/zkp/index.html",revision:"77b562a1835baa1601a5f275c36824e6"},{url:"timeline/index.html",revision:"bf06bcd8a89af1e3f02ee7dc3ba60921"},{url:"welcome.html",revision:"3024c4987cbde3d7c1e4492a36e99639"},{url:"zh/article/index.html",revision:"55372795f32e5eaceb303b55f55a8cbb"},{url:"zh/category/faq/index.html",revision:"7202cb692c11f542972ccaf557147f62"},{url:"zh/category/guide/index.html",revision:"9cb843b74ae2eef1b73a1d1bb52cb613"},{url:"zh/category/index.html",revision:"f36dd66394c20d0c8678f29835a652b0"},{url:"zh/category/q&a/index.html",revision:"6e09d0c796e7e1d306879cf0ad6c69c9"},{url:"zh/category/使用指南/index.html",revision:"8e8dc1ec0a8b355cf251fc25573ab048"},{url:"zh/category/公告/index.html",revision:"fba65a6dd644e74f34ba43cfe04b0847"},{url:"zh/category/动态/index.html",revision:"7098c9723d1e61480972a7b0c2940bde"},{url:"zh/category/开发/index.html",revision:"3504a3da532b6462373460763742b8f6"},{url:"zh/category/文章/index.html",revision:"f2ea23e3e18e34b4468419c37d4aea24"},{url:"zh/community.html",revision:"ce7f79e26301d72e33f87b0fba47e452"},{url:"zh/dao.html",revision:"7293954399750101b7fcc0d5c73624ca"},{url:"zh/develope.html",revision:"0042b8e5b02eecd7c655752d5e70d63d"},{url:"zh/ecosystem.html",revision:"0dd1fe2bb8d3c36a4fdc12466433fe89"},{url:"zh/encrypted/index.html",revision:"134ad4f99cdf695b3ff3b3c0c64bb0a7"},{url:"zh/guide/index.html",revision:"f43dd71f4942b04f562ad8482b9e8c59"},{url:"zh/guide/syber-connect.html",revision:"7622d6aa2d52cf6b4fbcd050a2a51325"},{url:"zh/index.html",revision:"aafb521fd59f828589e0c523b11a66a5"},{url:"zh/info/faq/faq1.html",revision:"f46b93405c52bf2c54a3a9b29364ebd4"},{url:"zh/info/index.html",revision:"480874f75411b75c84f7482ca9fa8c59"},{url:"zh/info/news/news1.html",revision:"8d6de3d3a5e6317c8e50a5d529f2e1ff"},{url:"zh/info/notice/notice1.html",revision:"e9e6597d2a30961e2b224588602746ec"},{url:"zh/info/post/post1.html",revision:"e00c22c44cc3e36061fd543e6d38e811"},{url:"zh/info/qa/qa1.html",revision:"2c16bba5e5ca3a6e0e3ee3f0e9199e61"},{url:"zh/info/roadmap/1.html",revision:"3e657838ee8fa95791bbb90132f415a4"},{url:"zh/slides/index.html",revision:"22d30da43cf4768b2de194830a42bed4"},{url:"zh/star/index.html",revision:"ff6950f864a0f3c9293c03ebb8318d1e"},{url:"zh/tag/index.html",revision:"9a2cd9558a11c339ef2440a764bda0ca"},{url:"zh/tag/syber-connect/index.html",revision:"7032f0ca350caf4f92816c3d9cc7bd77"},{url:"zh/tag/tag-a/index.html",revision:"99861930389c800e8e4696bdf6ec7f50"},{url:"zh/tag/tag-b/index.html",revision:"707317dff40b9f767bf55f59b1e6b873"},{url:"zh/tag/welcome/index.html",revision:"a3222ca35278e25970821c10247244af"},{url:"zh/tag/使用指南/index.html",revision:"87973323d04c5f60223a7955fd876a31"},{url:"zh/tag/路线图/index.html",revision:"9a0d4d83d005b85e4641a8cfbd211c2e"},{url:"zh/tag/零知识证明/index.html",revision:"53d5750b3d11ffc3d7637ce7862fe4cc"},{url:"zh/timeline/index.html",revision:"061f3dfba6f79585bbe48c948c38155f"},{url:"zh/welcome.html",revision:"d2c095f411de959a6a7fb36b981a5ef2"},{url:"assets/hero.197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"images/icons/android-chrome-192x192.png",revision:"d31161f8e68e10f335cb17b952d3abca"},{url:"images/icons/android-chrome-512x512.png",revision:"0473b33e1e8f1b78489e6899f2f729a9"},{url:"images/icons/apple-touch-icon.png",revision:"10f9ec338bf432616ad64c86ae53a243"},{url:"images/icons/favicon-16x16.png",revision:"dbc0863db5edae8865f5cebee079c9d2"},{url:"images/icons/favicon-32x32.png",revision:"dec377ed4810e7bbfd36ce9c378a194d"},{url:"images/icons/mstile-144x144.png",revision:"6964a74bdd888b9504afd6b0306c9e68"},{url:"images/icons/mstile-150x150.png",revision:"090e2c5c6bac244f16bb9cdcbbf7eb58"},{url:"images/icons/mstile-310x150.png",revision:"602c8ba1813ce1cf0aa157afbfe0ea59"},{url:"images/icons/mstile-310x310.png",revision:"8ed4cb1e07c8b16d73c138ee09c4a5ff"},{url:"images/icons/mstile-70x70.png",revision:"ef8dd82825acae000e2f8e2132795006"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
