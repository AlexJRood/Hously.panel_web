((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={Tm:function Tm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},hR:function hR(d,e,f){this.a=d
this.b=e
this.c=f},b_K:function b_K(d){this.a=d},j0:function j0(){},b_L:function b_L(){},b_M:function b_M(){},awD:function awD(){},fV:function fV(){},atw:function atw(){this.d=$
this.c=this.a=null},
en(d,e,f,g){return new A.uA(d,f,e,g,null)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[83],B)
B.Tm.prototype={
k(d){var w=this
switch(w.d.a){case 0:return"ColorFilter.mode("+A.m(w.a)+", "+A.m(w.b)+")"
case 1:return"ColorFilter.matrix("+A.m(w.c)+")"
case 2:return"ColorFilter.linearToSrgbGamma()"
case 3:return"ColorFilter.srgbToLinearGamma()"}}}
B.hR.prototype={
m7(d){return new B.hR(this.a.m7(0),this.b,this.c)},
Gr(d){var w
if(d.ghd(d).Gr(this.a)){w=this.b
w=w===w&&d.gma()==this.c}else w=!1
return w},
ga39(){var w=this.a
return w.gaE(w)*w.gdD(w)*4},
l(){this.a.l()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+A.nW(this.b)+"x"},
gv(d){return A.a_(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.al(e)!==A.K(w))return!1
return x.l.b(e)&&e.ghd(e)===w.a&&e.glR(e)===w.b&&e.gma()==w.c},
ghd(d){return this.a},
glR(d){return this.b},
gma(){return this.c}}
B.b_K.prototype={
l(){var w=this.a;--w.w
w.DZ()
this.a=null}}
B.j0.prototype={
Z(d,e){var w,v,u,t,s,r,q,p=this
if(p.x)A.S(A.U(y.a))
p.f=!0
p.a.push(e)
s=p.c
if(s!=null)try{e.a.$2(s.m7(0),!p.r)}catch(r){w=A.aj(r)
v=A.b0(r)
p.an9(A.cq("by a synchronously-called image listener"),w,v)}s=p.d
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=A.aj(w)
t=A.b0(w)
if(!J.h(u,p.d.a))A.fb(new A.dt(u,t,"image resource service",A.cq("by a synchronously-called image error listener"),null,null,!1))}},
y6(){if(this.x)A.S(A.U(y.a));++this.w
return new B.b_K(this)},
L(d,e){var w,v,u,t,s,r=this
if(r.x)A.S(A.U(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].j(0,e)){C.b.fj(w,v)
break}if(w.length===0){w=r.y
u=A.a(w.slice(0),A.a4(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.Z)(u),++s)u[s].$0()
C.b.aa(w)
r.DZ()}},
a_Y(){},
DZ(){var w,v=this
if(!v.f||v.x||v.a.length!==0||v.w!==0)return
C.b.aa(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.x=!0
v.a_Y()},
aYs(d){if(this.x)A.S(A.U(y.a))
this.y.push(d)},
amW(d){if(this.x)A.S(A.U(y.a))
C.b.M(this.y,d)},
It(d){var w,v,u,t,s,r,q,p=this
if(p.x)A.S(A.U(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.aa(p.b)
t=p.a
if(t.length===0)return
s=A.a3(t,!0,x.h)
for(t=s.length,r=0;r<t;++r){w=s[r]
try{w.b88(d.m7(0),!1)}catch(q){v=A.aj(q)
u=A.b0(q)
p.an9(A.cq("by an image listener"),v,u)}}},
qh(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.dt(e,h,l,d,null,f,g)
s=m.a
s=A.a3(new A.ht(new A.X(s,new B.b_L(),A.a4(s).h("X<1,~(D,ca?)?>")),x.m),!0,x.e)
r=m.b
C.b.O(s,r)
C.b.aa(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Z)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.aj(p)
t=A.b0(p)
if(!J.h(u,e)){o=A.cq("when reporting an error to an image listener")
n=$.qW
if(n!=null)n.$1(new A.dt(u,t,l,o,null,null,!1))}}}if(!w){s=m.d
s.toString
A.fb(s)}},
an9(d,e,f){return this.qh(d,e,null,!1,f)},
baT(d,e){return this.qh(null,d,null,!1,e)},
anb(d){var w,v,u,t
if(this.x)A.S(A.U(y.a))
w=this.a
if(w.length!==0){v=x.i
u=A.a3(new A.ht(new A.X(w,new B.b_M(),A.a4(w).h("X<1,~(jV)?>")),v),!0,v.h("G.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.awD.prototype={}
B.fV.prototype={
X(){return new B.atw()}}
B.atw.prototype={
B(d){var w=this.a
w.toString
return w.bn(d,this.gH())}}
var z=a.updateTypes(["~(hS)","~(hR)","~(jV)"])
B.b_L.prototype={
$1(d){return d.c},
$S:729}
B.b_M.prototype={
$1(d){return d.b},
$S:730};(function aliases(){var w=B.j0.prototype
w.a3I=w.Z
w.at3=w.y6
w.a3J=w.L
w.at4=w.a_Y
w.at2=w.DZ})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.j0.prototype,"gEX","Z",0)
v(u,"gara","It",1)
v(u,"gana","anb",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.D,[B.Tm,B.hR,B.b_K,B.awD])
u(B.j0,B.awD)
v(A.d7,[B.b_L,B.b_M])
u(B.fV,A.ie)
u(B.atw,A.iB)
w(B.awD,A.aL)})()
A.cz(b.typeUniverse,JSON.parse('{"fV":{"A":[],"c":[]},"atw":{"R":["fV"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x={l:A.H("hR"),h:A.H("hS"),m:A.H("ht<~(D,ca?)>"),i:A.H("ht<~(jV)>"),e:A.H("~(D,ca?)")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"MWOqc//5+3XzhWaBRhVBRim1ZKU=");