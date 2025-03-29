((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Tr:function Tr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},hR:function hR(d,e,f){this.a=d
this.b=e
this.c=f},b_S:function b_S(d){this.a=d},j2:function j2(){},b_T:function b_T(){},b_U:function b_U(){},awM:function awM(){},fK:function fK(){},atD:function atD(){this.d=$
this.c=this.a=null},
eo(d,e,f,g){return new A.uB(d,f,e,g,null)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[85],B)
B.Tr.prototype={
k(d){var w=this
switch(w.d.a){case 0:return"ColorFilter.mode("+A.m(w.a)+", "+A.m(w.b)+")"
case 1:return"ColorFilter.matrix("+A.m(w.c)+")"
case 2:return"ColorFilter.linearToSrgbGamma()"
case 3:return"ColorFilter.srgbToLinearGamma()"}}}
B.hR.prototype={
m7(d){return new B.hR(this.a.m7(0),this.b,this.c)},
Gv(d){var w
if(d.ghe(d).Gv(this.a)){w=this.b
w=w===w&&d.gma()==this.c}else w=!1
return w},
ga3a(){var w=this.a
return w.gaE(w)*w.gdD(w)*4},
l(){this.a.l()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+A.nX(this.b)+"x"},
gv(d){return A.a0(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.am(e)!==A.K(w))return!1
return x.l.b(e)&&e.ghe(e)===w.a&&e.glR(e)===w.b&&e.gma()==w.c},
ghe(d){return this.a},
glR(d){return this.b},
gma(){return this.c}}
B.b_S.prototype={
l(){var w=this.a;--w.w
w.E1()
this.a=null}}
B.j2.prototype={
Z(d,e){var w,v,u,t,s,r,q,p=this
if(p.x)A.S(A.U(y.a))
p.f=!0
p.a.push(e)
s=p.c
if(s!=null)try{e.a.$2(s.m7(0),!p.r)}catch(r){w=A.aj(r)
v=A.b0(r)
p.ana(A.cq("by a synchronously-called image listener"),w,v)}s=p.d
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=A.aj(w)
t=A.b0(w)
if(!J.h(u,p.d.a))A.fb(new A.dt(u,t,"image resource service",A.cq("by a synchronously-called image error listener"),null,null,!1))}},
y7(){if(this.x)A.S(A.U(y.a));++this.w
return new B.b_S(this)},
L(d,e){var w,v,u,t,s,r=this
if(r.x)A.S(A.U(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].j(0,e)){C.b.fj(w,v)
break}if(w.length===0){w=r.y
u=A.a(w.slice(0),A.a4(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.Z)(u),++s)u[s].$0()
C.b.aa(w)
r.E1()}},
a_Z(){},
E1(){var w,v=this
if(!v.f||v.x||v.a.length!==0||v.w!==0)return
C.b.aa(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.x=!0
v.a_Z()},
aYu(d){if(this.x)A.S(A.U(y.a))
this.y.push(d)},
amX(d){if(this.x)A.S(A.U(y.a))
C.b.M(this.y,d)},
Ix(d){var w,v,u,t,s,r,q,p=this
if(p.x)A.S(A.U(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.aa(p.b)
t=p.a
if(t.length===0)return
s=A.a3(t,!0,x.h)
for(t=s.length,r=0;r<t;++r){w=s[r]
try{w.b8a(d.m7(0),!1)}catch(q){v=A.aj(q)
u=A.b0(q)
p.ana(A.cq("by an image listener"),v,u)}}},
qi(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.dt(e,h,l,d,null,f,g)
s=m.a
s=A.a3(new A.ht(new A.X(s,new B.b_T(),A.a4(s).h("X<1,~(D,ca?)?>")),x.m),!0,x.e)
r=m.b
C.b.O(s,r)
C.b.aa(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Z)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.aj(p)
t=A.b0(p)
if(!J.h(u,e)){o=A.cq("when reporting an error to an image listener")
n=$.qY
if(n!=null)n.$1(new A.dt(u,t,l,o,null,null,!1))}}}if(!w){s=m.d
s.toString
A.fb(s)}},
ana(d,e,f){return this.qi(d,e,null,!1,f)},
baV(d,e){return this.qi(null,d,null,!1,e)},
anc(d){var w,v,u,t
if(this.x)A.S(A.U(y.a))
w=this.a
if(w.length!==0){v=x.i
u=A.a3(new A.ht(new A.X(w,new B.b_U(),A.a4(w).h("X<1,~(jX)?>")),v),!0,v.h("H.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.awM.prototype={}
B.fK.prototype={
X(){return new B.atD()}}
B.atD.prototype={
B(d){var w=this.a
w.toString
return w.bn(d,this.gH())}}
var z=a.updateTypes(["~(hS)","~(hR)","~(jX)"])
B.b_T.prototype={
$1(d){return d.c},
$S:730}
B.b_U.prototype={
$1(d){return d.b},
$S:731};(function aliases(){var w=B.j2.prototype
w.a3J=w.Z
w.at5=w.y7
w.a3K=w.L
w.at6=w.a_Z
w.at4=w.E1})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.j2.prototype,"gF_","Z",0)
v(u,"gard","Ix",1)
v(u,"ganb","anc",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.D,[B.Tr,B.hR,B.b_S,B.awM])
u(B.j2,B.awM)
v(A.cZ,[B.b_T,B.b_U])
u(B.fK,A.i1)
u(B.atD,A.ih)
w(B.awM,A.aL)})()
A.cv(b.typeUniverse,JSON.parse('{"fK":{"A":[],"c":[]},"atD":{"R":["fK"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x={l:A.G("hR"),h:A.G("hS"),m:A.G("ht<~(D,ca?)>"),i:A.G("ht<~(jX)>"),e:A.G("~(D,ca?)")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"ECzAtWphSNn8XKRRW57xb8aFgVM=");