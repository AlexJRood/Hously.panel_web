((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={SY:function SY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},hK:function hK(d,e,f){this.a=d
this.b=e
this.c=f},aZH:function aZH(d){this.a=d},iY:function iY(){},aZI:function aZI(){},aZJ:function aZJ(){},avT:function avT(){},hb:function hb(){},asS:function asS(){this.d=$
this.c=this.a=null},
ej(d,e,f,g){return new A.up(d,f,e,g,null)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[75],B)
B.SY.prototype={
k(d){var w=this
switch(w.d.a){case 0:return"ColorFilter.mode("+A.m(w.a)+", "+A.m(w.b)+")"
case 1:return"ColorFilter.matrix("+A.m(w.c)+")"
case 2:return"ColorFilter.linearToSrgbGamma()"
case 3:return"ColorFilter.srgbToLinearGamma()"}}}
B.hK.prototype={
m0(d){return new B.hK(this.a.m0(0),this.b,this.c)},
G5(d){var w
if(d.gh3(d).G5(this.a)){w=this.b
w=w===w&&d.gm3()==this.c}else w=!1
return w},
ga2I(){var w=this.a
return w.gaD(w)*w.gdu(w)*4},
l(){this.a.l()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+A.nQ(this.b)+"x"},
gv(d){return A.a_(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.ag(e)!==A.K(w))return!1
return x.l.b(e)&&e.gh3(e)===w.a&&e.glK(e)===w.b&&e.gm3()==w.c},
gh3(d){return this.a},
glK(d){return this.b},
gm3(){return this.c}}
B.aZH.prototype={
l(){var w=this.a;--w.w
w.DC()
this.a=null}}
B.iY.prototype={
Z(d,e){var w,v,u,t,s,r,q,p=this
if(p.x)A.R(A.U(y.a))
p.f=!0
p.a.push(e)
s=p.c
if(s!=null)try{e.a.$2(s.m0(0),!p.r)}catch(r){w=A.aj(r)
v=A.aZ(r)
p.amn(A.cn("by a synchronously-called image listener"),w,v)}s=p.d
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=A.aj(w)
t=A.aZ(w)
if(!J.f(u,p.d.a))A.f7(new A.dq(u,t,"image resource service",A.cn("by a synchronously-called image error listener"),null,null,!1))}},
xL(){if(this.x)A.R(A.U(y.a));++this.w
return new B.aZH(this)},
K(d,e){var w,v,u,t,s,r=this
if(r.x)A.R(A.U(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].j(0,e)){C.b.fb(w,v)
break}if(w.length===0){w=r.y
u=A.a(w.slice(0),A.a3(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.Z)(u),++s)u[s].$0()
C.b.aa(w)
r.DC()}},
a_z(){},
DC(){var w,v=this
if(!v.f||v.x||v.a.length!==0||v.w!==0)return
C.b.aa(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.x=!0
v.a_z()},
aX1(d){if(this.x)A.R(A.U(y.a))
this.y.push(d)},
ama(d){if(this.x)A.R(A.U(y.a))
C.b.L(this.y,d)},
I8(d){var w,v,u,t,s,r,q,p=this
if(p.x)A.R(A.U(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.aa(p.b)
t=p.a
if(t.length===0)return
s=A.a2(t,!0,x.h)
for(t=s.length,r=0;r<t;++r){w=s[r]
try{w.b6D(d.m0(0),!1)}catch(q){v=A.aj(q)
u=A.aZ(q)
p.amn(A.cn("by an image listener"),v,u)}}},
q2(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.dq(e,h,l,d,null,f,g)
s=m.a
s=A.a2(new A.hl(new A.X(s,new B.aZI(),A.a3(s).h("X<1,~(B,c9?)?>")),x.m),!0,x.e)
r=m.b
C.b.O(s,r)
C.b.aa(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Z)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.aj(p)
t=A.aZ(p)
if(!J.f(u,e)){o=A.cn("when reporting an error to an image listener")
n=$.qS
if(n!=null)n.$1(new A.dq(u,t,l,o,null,null,!1))}}}if(!w){s=m.d
s.toString
A.f7(s)}},
amn(d,e,f){return this.q2(d,e,null,!1,f)},
b9i(d,e){return this.q2(null,d,null,!1,e)},
amp(d){var w,v,u,t
if(this.x)A.R(A.U(y.a))
w=this.a
if(w.length!==0){v=x.i
u=A.a2(new A.hl(new A.X(w,new B.aZJ(),A.a3(w).h("X<1,~(jS)?>")),v),!0,v.h("F.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.avT.prototype={}
B.hb.prototype={
Y(){return new B.asS()}}
B.asS.prototype={
C(d){var w=this.a
w.toString
return w.br(d,this.gH())}}
var z=a.updateTypes(["~(hL)","~(hK)","~(jS)"])
B.aZI.prototype={
$1(d){return d.c},
$S:723}
B.aZJ.prototype={
$1(d){return d.b},
$S:724};(function aliases(){var w=B.iY.prototype
w.a3g=w.Z
w.arZ=w.xL
w.a3h=w.K
w.as_=w.a_z
w.arY=w.DC})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.iY.prototype,"gEy","Z",0)
v(u,"gaqd","I8",1)
v(u,"gamo","amp",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.B,[B.SY,B.hK,B.aZH,B.avT])
u(B.iY,B.avT)
v(A.d9,[B.aZI,B.aZJ])
u(B.hb,A.iw)
u(B.asS,A.iU)
w(B.avT,A.aK)})()
A.cJ(b.typeUniverse,JSON.parse('{"hb":{"C":[],"d":[]},"asS":{"S":["hb"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x={l:A.G("hK"),h:A.G("hL"),m:A.G("hl<~(B,c9?)>"),i:A.G("hl<~(jS)>"),e:A.G("~(B,c9?)")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"gbwAHAPQLOyTirVZcNDcpCoZ4P8=");