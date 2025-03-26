((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={RL:function RL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},hs:function hs(d,e,f){this.a=d
this.b=e
this.c=f},aX5:function aX5(d){this.a=d},iG:function iG(){},aX6:function aX6(){},aX7:function aX7(){},au1:function au1(){},hq:function hq(){},ar6:function ar6(){this.d=$
this.c=this.a=null},
es(d,e,f,g){return new A.tW(d,f,e,g,null)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[65],B)
B.RL.prototype={
k(d){var w=this
switch(w.d.a){case 0:return"ColorFilter.mode("+A.n(w.a)+", "+A.n(w.b)+")"
case 1:return"ColorFilter.matrix("+A.n(w.c)+")"
case 2:return"ColorFilter.linearToSrgbGamma()"
case 3:return"ColorFilter.srgbToLinearGamma()"}}}
B.hs.prototype={
lW(d){return new B.hs(this.a.lW(0),this.b,this.c)},
FP(d){var w
if(d.gh_(d).FP(this.a)){w=this.b
w=w===w&&d.glZ()==this.c}else w=!1
return w},
ga28(){var w=this.a
return w.gaB(w)*w.gdt(w)*4},
l(){this.a.l()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+A.nz(this.b)+"x"},
gv(d){return A.X(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.ae(e)!==A.I(w))return!1
return x.l.b(e)&&e.gh_(e)===w.a&&e.glE(e)===w.b&&e.glZ()==w.c},
gh_(d){return this.a},
glE(d){return this.b},
glZ(){return this.c}}
B.aX5.prototype={
l(){var w=this.a;--w.w
w.Do()
this.a=null}}
B.iG.prototype={
X(d,e){var w,v,u,t,s,r,q,p=this
if(p.x)A.Q(A.S(y.a))
p.f=!0
p.a.push(e)
s=p.c
if(s!=null)try{e.a.$2(s.lW(0),!p.r)}catch(r){w=A.am(r)
v=A.aX(r)
p.alC(A.ch("by a synchronously-called image listener"),w,v)}s=p.d
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=A.am(w)
t=A.aX(w)
if(!J.f(u,p.d.a))A.eZ(new A.di(u,t,"image resource service",A.ch("by a synchronously-called image error listener"),null,null,!1))}},
xy(){if(this.x)A.Q(A.S(y.a));++this.w
return new B.aX5(this)},
I(d,e){var w,v,u,t,s,r=this
if(r.x)A.Q(A.S(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].j(0,e)){C.b.fk(w,v)
break}if(w.length===0){w=r.y
u=A.a(w.slice(0),A.a5(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.Y)(u),++s)u[s].$0()
C.b.a9(w)
r.Do()}},
a_1(){},
Do(){var w,v=this
if(!v.f||v.x||v.a.length!==0||v.w!==0)return
C.b.a9(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.x=!0
v.a_1()},
aVi(d){if(this.x)A.Q(A.S(y.a))
this.y.push(d)},
aln(d){if(this.x)A.Q(A.S(y.a))
C.b.L(this.y,d)},
HT(d){var w,v,u,t,s,r,q,p=this
if(p.x)A.Q(A.S(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.a9(p.b)
t=p.a
if(t.length===0)return
s=A.a4(t,!0,x.h)
for(t=s.length,r=0;r<t;++r){w=s[r]
try{w.b4r(d.lW(0),!1)}catch(q){v=A.am(q)
u=A.aX(q)
p.alC(A.ch("by an image listener"),v,u)}}},
pV(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.di(e,h,l,d,null,f,g)
s=m.a
s=A.a4(new A.hO(new A.Z(s,new B.aX6(),A.a5(s).h("Z<1,~(x,c6?)?>")),x.m),!0,x.e)
r=m.b
C.b.M(s,r)
C.b.a9(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Y)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.am(p)
t=A.aX(p)
if(!J.f(u,e)){o=A.ch("when reporting an error to an image listener")
n=$.qs
if(n!=null)n.$1(new A.di(u,t,l,o,null,null,!1))}}}if(!w){s=m.d
s.toString
A.eZ(s)}},
alC(d,e,f){return this.pV(d,e,null,!1,f)},
b70(d,e){return this.pV(null,d,null,!1,e)},
alE(d){var w,v,u,t
if(this.x)A.Q(A.S(y.a))
w=this.a
if(w.length!==0){v=x.i
u=A.a4(new A.hO(new A.Z(w,new B.aX7(),A.a5(w).h("Z<1,~(jC)?>")),v),!0,v.h("E.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.au1.prototype={}
B.hq.prototype={
a2(){return new B.ar6()}}
B.ar6.prototype={
C(d){var w=this.a
w.toString
return w.bu(d,this.gO())}}
var z=a.updateTypes(["~(ht)","~(hs)","~(jC)"])
B.aX6.prototype={
$1(d){return d.c},
$S:721}
B.aX7.prototype={
$1(d){return d.b},
$S:722};(function aliases(){var w=B.iG.prototype
w.a2I=w.X
w.ar9=w.xy
w.a2J=w.I
w.ara=w.a_1
w.ar8=w.Do})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.iG.prototype,"gEi","X",0)
v(u,"gapp","HT",1)
v(u,"galD","alE",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.x,[B.RL,B.hs,B.aX5,B.au1])
u(B.iG,B.au1)
v(A.dh,[B.aX6,B.aX7])
u(B.hq,A.jr)
u(B.ar6,A.k6)
w(B.au1,A.aI)})()
A.d3(b.typeUniverse,JSON.parse('{"hq":{"D":[],"d":[]},"ar6":{"U":["hq"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x={l:A.J("hs"),h:A.J("ht"),m:A.J("hO<~(x,c6?)>"),i:A.J("hO<~(jC)>"),e:A.J("~(x,c6?)")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"jZa4tVskGK0laCeAifIorUlYQD4=");