((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_471",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={bn1:function bn1(){this.d=null},
bwo(d){return $.dxh.ek(0,d.a.a,new B.bwp(d))},
Ug:function Ug(d,e,f){var _=this
_.c=null
_.d=d
_.a=e
_.b=f},
bwp:function bwp(d){this.a=d},
dd9(){D.tr.ti(new B.bL6())},
a8S:function a8S(d){this.a=d},
bL6:function bL6(){},
cRf:function cRf(){},
CA:function CA(d,e){this.a=d
this.f=e},
bsA:function bsA(d,e){this.a=d
this.b=e},
dxg(d){A.jr(d,$.yR(),!0)
return new A.ot(d)},
cQm(d,e){A.djO(d,e,"firebase_messaging")},
dOB(d){if(d==null)return C.qy
switch(d){case-1:return C.qy
case 0:return C.SK
case 1:return C.uI
case 2:return D.auP
default:return C.qy}},
Fa(d){if(d==null)return C.GB
switch(d){case-1:return C.GB
case 0:return D.auk
case 1:return D.aul
default:return C.GB}},
dOA(d){switch(d){case-1:return C.SB
case 0:return D.aun
case 1:return D.aum
case 2:return D.auo
default:return C.SB}}},D,E
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[96],B)
D=c[570]
E=c[277]
B.bn1.prototype={
gZG(){var w=0,v=A.F(x.k),u,t=this,s,r
var $async$gZG=A.B(function(d,e){if(d===1)return A.C(e,v)
while(true)switch(w){case 0:s=t.d
w=s==null?3:5
break
case 3:r=x.k
w=6
return A.z($.dlS().LZ(),$async$gZG)
case 6:e=t.d=r.a(e)
w=4
break
case 5:e=s
case 4:u=e
w=1
break
case 1:return A.D(u,v)}})
return A.E($async$gZG,v)}}
B.Ug.prototype={
ga26(){var w,v,u=this,t=u.c
if(t==null){t=u.gaBF()
if($.Uh==null)B.dd9()
w=$.Uh
if(w==null){w=$.aol()
v=new B.a8S(null)
$.oc().n(0,v,w)
$.Uh=v
w=v}t=u.c=w.a8A(u.d).a_s(J.y(t,"AUTO_INIT_ENABLED"))}return t},
th(d){return this.aHn(!0)},
aHn(d){var w=0,v=A.F(x.v),u,t=this
var $async$th=A.B(function(e,f){if(e===1)return A.C(f,v)
while(true)switch(w){case 0:u=t.ga26().th(!0)
w=1
break
case 1:return A.D(u,v)}})
return A.E($async$th,v)}}
B.a8S.prototype={
Qh(){var w=0,v=A.F(x.v),u=this
var $async$Qh=A.B(function(d,e){if(d===1)return A.C(e,v)
while(true)switch(w){case 0:w=A.cS()===C.eQ||A.cS()===C.ci?2:3
break
case 2:w=4
return A.z(u.OZ(),$async$Qh)
case 4:if(e==null)throw A.i(A.Uf("apns-token-not-set","APNS token has not been set yet. Please ensure the APNS token is available by calling `getAPNSToken()`.","firebase_messaging"))
case 3:return A.D(null,v)}})
return A.E($async$Qh,v)},
a8A(d){var w=$.aol(),v=new B.a8S(d)
$.oc().n(0,v,w)
return v},
a_s(d){return this},
OZ(){var w=0,v=A.F(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$OZ=A.B(function(d,e){if(d===1){s.push(e)
w=t}while(true)switch(w){case 0:if(A.cS()!==C.ci&&A.cS()!==C.eQ){u=null
w=1
break}t=4
n=x.w
w=7
return A.z(D.tr.xn("Messaging#getAPNSToken",A.a0(["appName",r.gBC().a.a],n,n),n,x.x),$async$OZ)
case 7:q=e
n=q
n.toString
n=J.y(n,"token")
u=n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ag(l)
o=A.bt(l)
B.cQm(p,o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.D(u,v)
case 2:return A.C(s.at(-1),v)}})
return A.E($async$OZ,v)},
oZ(d){return this.aGr(d)},
aGr(d){var w=0,v=A.F(x.x),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$oZ=A.B(function(e,f){if(e===1){s.push(f)
w=t}while(true)switch(w){case 0:w=3
return A.z(r.Qh(),$async$oZ)
case 3:t=5
n=x.w
w=8
return A.z(D.tr.xn("Messaging#getToken",A.a0(["appName",r.gBC().a.a],n,n),n,n),$async$oZ)
case 8:q=f
n=q
n.toString
n=J.y(n,"token")
u=n
w=1
break
t=2
w=7
break
case 5:t=4
l=s.pop()
p=A.ag(l)
o=A.bt(l)
B.cQm(p,o)
w=7
break
case 4:w=2
break
case 7:case 1:return A.D(u,v)
case 2:return A.C(s.at(-1),v)}})
return A.E($async$oZ,v)},
Oc(d,e,f,g,h,i,j,k,l){return this.bDN(0,!0,!1,!0,!1,!1,!1,!1,!0)},
bDN(d,e,f,g,h,i,a0,a1,a2){var w=0,v=A.F(x.l),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$Oc=A.B(function(a3,a4){if(a3===1){s.push(a4)
w=t}while(true)switch(w){case 0:if(A.cS()!==C.ci&&A.cS()!==C.eQ&&A.cS()!==C.de){u=D.cay
w=1
break}t=4
n=x.w
w=7
return A.z(D.tr.xn("Messaging#requestPermission",A.a0(["appName",r.gBC().a.a,"permissions",A.a0(["alert",!0,"announcement",!1,"badge",!0,"carPlay",!1,"criticalAlert",!1,"provisional",!1,"sound",!0,"providesAppNotificationSettings",!1],n,x.e)],n,x.E),n,x.B),$async$Oc)
case 7:q=a4
n=q
n.toString
m=J.a9(n)
l=B.dOB(m.h(n,"authorizationStatus"))
B.Fa(m.h(n,"timeSensitive"))
B.Fa(m.h(n,"criticalAlert"))
B.Fa(m.h(n,"alert"))
B.Fa(m.h(n,"announcement"))
B.Fa(m.h(n,"badge"))
B.Fa(m.h(n,"carPlay"))
B.Fa(m.h(n,"lockScreen"))
B.Fa(m.h(n,"notificationCenter"))
B.dOA(m.h(n,"showPreviews"))
B.Fa(m.h(n,"sound"))
B.Fa(m.h(n,"providesAppNotificationSettings"))
u=new A.A0(l)
w=1
break
t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ag(j)
o=A.bt(j)
B.cQm(p,o)
w=6
break
case 3:w=2
break
case 6:case 1:return A.D(u,v)
case 2:return A.C(s.at(-1),v)}})
return A.E($async$Oc,v)},
th(d){return this.aHp(!0)},
aHp(d){var w=0,v=A.F(x.v),u=1,t=[],s=this,r,q,p,o,n,m
var $async$th=A.B(function(e,f){if(e===1){t.push(f)
w=u}while(true)switch(w){case 0:u=3
o=x.w
w=6
return A.z(D.tr.xn("Messaging#setAutoInitEnabled",A.a0(["appName",s.gBC().a.a,"enabled",!0],o,x.E),o,x.b),$async$th)
case 6:r=f
o=r
o.toString
A.F2(J.y(o,"isAutoInitEnabled"))
u=1
w=5
break
case 3:u=2
m=t.pop()
q=A.ag(m)
p=A.bt(m)
B.cQm(q,p)
w=5
break
case 2:w=1
break
case 5:return A.D(null,v)
case 1:return A.C(t.at(-1),v)}})
return A.E($async$th,v)},
gaBg(){var w=$.d6f()
return new A.dx(w,A.w(w).i("dx<1>"))}}
B.CA.prototype={
uY(d){var w=0,v=A.F(x.v),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$uY=A.B(function(a0,a1){if(a0===1){s.push(a1)
w=t}while(true)switch(w){case 0:f=$.ou
f=(f==null?$.ou=$.Fk():f).gavh()
o=A.ak(f).i("a8<1,ot>")
w=A.a1(new A.a8(f,B.dPt(),o),!1,o.i("as.E")).length===0?3:4
break
case 3:A.ax("Initializing Firebase...")
w=5
return A.z(A.ayn(C.YN),$async$uY)
case 5:case 4:f=$.ou
n=(f==null?$.ou=$.Fk():f).yY("[DEFAULT]")
f=$.yR()
A.jr(n,f,!0)
w=6
return A.z(B.bwo(new A.ot(n)).ga26().Oc(0,!0,!1,!0,!1,!1,!1,!1,!0),$async$uY)
case 6:if(a1.c!==C.uI){A.ax("User declined notification permissions")
w=1
break}o=$.ou
n=(o==null?$.ou=$.Fk():o).yY("[DEFAULT]")
A.jr(n,f,!0)
w=7
return A.z(B.bwo(new A.ot(n)).th(!0),$async$uY)
case 7:q=null
f=x.b
case 8:if(!(q==null)){w=9
break}t=11
o=$.ou
n=(o==null?$.ou=$.Fk():o).yY("[DEFAULT]")
A.jr(n,$.yR(),!0)
o=B.bwo(new A.ot(n))
m=o.c
if(m==null){m=o.gaBF()
if($.Uh==null)B.dd9()
l=$.Uh
if(l==null){l=$.aol()
k=new B.a8S(null)
j=$.oc()
j.a.set(k,l)
$.Uh=k
l=k}m=o.c=l.a8A(o.d).a_s(J.y(m,"AUTO_INIT_ENABLED"))
o=m}else o=m
w=14
return A.z(o.oZ("BMhQMS7sCB-kBscb3uwS0CQy1vPKAT1NdQ9jl0uRMYgU0oHmy5AnU0Qe928pY6ZtlSF6hlasoEBy1QNwRl9Co7s"),$async$uY)
case 14:q=a1
w=q==null?15:16
break
case 15:i=$.a0W
if(i==null)A.a0V(y.b)
else i.$1(y.b)
w=17
return A.z(A.nT(C.ke,null,f),$async$uY)
case 17:case 16:t=2
w=13
break
case 11:t=10
e=s.pop()
p=A.ag(e)
g="Error getting FCM token: "+A.o(p)+". Retrying in 5 seconds..."
i=$.a0W
if(i==null)A.a0V(g)
else i.$1(g)
w=18
return A.z(A.nT(C.ke,null,f),$async$uY)
case 18:w=13
break
case 10:w=2
break
case 13:w=8
break
case 9:r.sW(0,q)
A.ax("FCM Token: "+A.o(q))
w=19
return A.z(r.Hg(q,d),$async$uY)
case 19:f=$.ou
n=(f==null?$.ou=$.Fk():f).yY("[DEFAULT]")
A.jr(n,$.yR(),!0)
B.bwo(new A.ot(n)).ga26().gaBg().hl(new B.bsA(r,d))
case 1:return A.D(u,v)
case 2:return A.C(s.at(-1),v)}})
return A.E($async$uY,v)},
Hg(d,e){return this.bCY(d,e)},
bCY(d,e){var w=0,v=A.F(x.v),u=1,t=[],s,r,q,p,o,n,m,l,k
var $async$Hg=A.B(function(f,g){if(f===1){t.push(g)
w=u}while(true)switch(w){case 0:o=e.OQ($.ix())
w=2
return A.z(new B.bn1().gZG(),$async$Hg)
case 2:n=g.bcP().k(0)
m=J.a1t(o)
l=A.a0(["registration_id",d,"type","web","name",n,"user",A.o(m==null?null:m.gAe()),"active",!0,"device_id",C.v.aP(d,0,60)],x.w,x.E)
u=4
w=7
return A.z(E.eg($.do3(),l,null,!0,null),$async$Hg)
case 7:s=g
if(s!=null)m=s.c===200||s.c===201
else m=!1
if(m)A.ax("Device registered successfully.")
else{m=s
m=m==null?null:m.c
q=s
A.ax("Device registration failed. StatusCode: "+A.o(m)+" // Response: "+A.o(q==null?null:q.a))}u=1
w=6
break
case 4:u=3
k=t.pop()
r=A.ag(k)
A.ax("Error registering device: "+A.o(r))
w=6
break
case 3:w=1
break
case 6:return A.D(null,v)
case 1:return A.C(t.at(-1),v)}})
return A.E($async$Hg,v)}}
var z=a.updateTypes(["Ug()","CA(ba<CA,f?>)","ot(rC)"])
B.bwp.prototype={
$0(){var w=this.a,v=$.d64()
w=new B.Ug(w,w.a.a,"plugins.flutter.io/firebase_messaging")
$.oc().n(0,w,v)
return w},
$S:z+0}
B.bL6.prototype={
$1(d){return this.aEA(d)},
aEA(d){var w=0,v=A.F(x.v),u,t,s
var $async$$1=A.B(function(e,f){if(e===1)return A.C(f,v)
while(true)$async$outer:switch(w){case 0:s=d.a
switch(s){case"Messaging#onTokenRefresh":$.d6f().D(0,A.cL(d.b))
break
case"Messaging#onMessage":t=A.lW(d.b,x.w,x.b)
$.cZo().D(0,A.d2J(t))
break
case"Messaging#onMessageOpenedApp":t=A.lW(d.b,x.w,x.b)
$.dm6().D(0,A.d2J(t))
break
case"Messaging#onBackgroundMessage":A.lW(d.b,x.w,x.b)
u=null
w=1
break $async$outer
default:throw A.i(A.lD(s+" has not been implemented"))}case 1:return A.D(u,v)}})
return A.E($async$$1,v)},
$S:254}
B.cRf.prototype={
$1(d){var w=new B.CA(new A.bj(x.y),null)
w.uY(d)
return w},
$S:z+1}
B.bsA.prototype={
$1(d){var w
A.ax("Token refreshed: "+d)
w=this.a
w.sW(0,d)
w.Hg(d,this.b)},
$S:11};(function installTearOffs(){var w=a._static_1
w(B,"dPt","dxg",2)})();(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.bn1,A.N)
w(B.Ug,A.aym)
w(B.bwp,A.bA)
w(B.a8S,A.ayl)
v(A.b7,[B.bL6,B.cRf,B.bsA])
w(B.CA,A.aC)})()
A.aK(b.typeUniverse,JSON.parse('{"CA":{"aC":["f?"],"aC.T":"f?"}}'))
var y={b:"FCM token is null. Retrying in 5 seconds..."}
var x=(function rtii(){var w=A.j
return{y:w("bj<ds<f?>>"),l:w("A0"),E:w("N"),w:w("f"),k:w("Z6"),e:w("J"),b:w("@"),B:w("l"),x:w("f?"),v:w("~")}})();(function constants(){var w=a.makeConstList
D.auk=new A.a2i(0,"disabled")
D.aul=new A.a2i(1,"enabled")
D.aum=new A.RM(0,"always")
D.aun=new A.RM(1,"never")
D.auo=new A.RM(3,"whenAuthenticated")
D.auP=new A.RR(3,"provisional")
D.NQ=A.a(w(["password"]),A.j("v<f>"))
D.tr=new A.mu("plugins.flutter.io/firebase_messaging",C.dB,null)
D.cay=new A.A0(C.uI)})();(function staticFields(){$.dxh=A.U(x.w,A.j("Ug"))})();(function lazyInitializers(){var w=a.lazy,v=a.lazyFinal
w($,"dYn","d6f",()=>A.ady(null,null,!1,x.w))
v($,"dWR","dm6",()=>A.ady(null,null,!1,A.j("OF")))
v($,"e_F","b5G",()=>A.eP("/user/login/"))
v($,"e_l","do3",()=>A.eP("/api/devices/"))
v($,"e5f","b5Z",()=>A.dh(new B.cRf(),A.j("CA"),x.x))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_471",e:"endPart",h:b})})($__dart_deferred_initializers__,"ja4A8Qu6q3iYR9+i2GiWAAjGW0Y=");