((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_2",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={T5:function T5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},hK:function hK(d,e,f){this.a=d
this.b=e
this.c=f},b_5:function b_5(d){this.a=d},iY:function iY(){},b_6:function b_6(){},b_7:function b_7(){},aw9:function aw9(){},hb:function hb(){},at6:function at6(){this.d=$
this.c=this.a=null},
el(d,e,f,g){return new A.us(d,f,e,g,null)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[79],B)
B.T5.prototype={
k(d){var w=this
switch(w.d.a){case 0:return"ColorFilter.mode("+A.m(w.a)+", "+A.m(w.b)+")"
case 1:return"ColorFilter.matrix("+A.m(w.c)+")"
case 2:return"ColorFilter.linearToSrgbGamma()"
case 3:return"ColorFilter.srgbToLinearGamma()"}}}
B.hK.prototype={
m7(d){return new B.hK(this.a.m7(0),this.b,this.c)},
Gp(d){var w
if(d.ghd(d).Gp(this.a)){w=this.b
w=w===w&&d.gma()==this.c}else w=!1
return w},
ga34(){var w=this.a
return w.gaE(w)*w.gdD(w)*4},
l(){this.a.l()},
k(d){var w=this.c
w=w!=null?w+" ":""
return w+this.a.k(0)+" @ "+A.nS(this.b)+"x"},
gv(d){return A.a_(this.a,this.b,this.c,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var w=this
if(e==null)return!1
if(J.al(e)!==A.K(w))return!1
return x.l.b(e)&&e.ghd(e)===w.a&&e.glR(e)===w.b&&e.gma()==w.c},
ghd(d){return this.a},
glR(d){return this.b},
gma(){return this.c}}
B.b_5.prototype={
l(){var w=this.a;--w.w
w.DY()
this.a=null}}
B.iY.prototype={
Z(d,e){var w,v,u,t,s,r,q,p=this
if(p.x)A.S(A.U(y.a))
p.f=!0
p.a.push(e)
s=p.c
if(s!=null)try{e.a.$2(s.m7(0),!p.r)}catch(r){w=A.ak(r)
v=A.b_(r)
p.an1(A.cp("by a synchronously-called image listener"),w,v)}s=p.d
if(s!=null&&e.c!=null)try{q=e.c
q.toString
q.$2(s.a,s.b)}catch(w){u=A.ak(w)
t=A.b_(w)
if(!J.h(u,p.d.a))A.f9(new A.dq(u,t,"image resource service",A.cp("by a synchronously-called image error listener"),null,null,!1))}},
y4(){if(this.x)A.S(A.U(y.a));++this.w
return new B.b_5(this)},
L(d,e){var w,v,u,t,s,r=this
if(r.x)A.S(A.U(y.a))
for(w=r.a,v=0;v<w.length;++v)if(w[v].j(0,e)){C.b.fj(w,v)
break}if(w.length===0){w=r.y
u=A.a(w.slice(0),A.a1(w))
for(t=u.length,s=0;s<u.length;u.length===t||(0,A.Z)(u),++s)u[s].$0()
C.b.aa(w)
r.DY()}},
a_T(){},
DY(){var w,v=this
if(!v.f||v.x||v.a.length!==0||v.w!==0)return
C.b.aa(v.b)
w=v.c
if(w!=null)w.l()
v.c=null
v.x=!0
v.a_T()},
aYf(d){if(this.x)A.S(A.U(y.a))
this.y.push(d)},
amP(d){if(this.x)A.S(A.U(y.a))
C.b.M(this.y,d)},
Iq(d){var w,v,u,t,s,r,q,p=this
if(p.x)A.S(A.U(y.a))
t=p.c
if(t!=null)t.l()
p.c=d
C.b.aa(p.b)
t=p.a
if(t.length===0)return
s=A.a3(t,!0,x.h)
for(t=s.length,r=0;r<t;++r){w=s[r]
try{w.b7T(d.m7(0),!1)}catch(q){v=A.ak(q)
u=A.b_(q)
p.an1(A.cp("by an image listener"),v,u)}}},
qf(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this,l="image resource service"
m.d=new A.dq(e,h,l,d,null,f,g)
s=m.a
s=A.a3(new A.hk(new A.X(s,new B.b_6(),A.a1(s).h("X<1,~(C,c9?)?>")),x.m),!0,x.e)
r=m.b
C.b.O(s,r)
C.b.aa(r)
w=!1
for(r=s.length,q=0;q<s.length;s.length===r||(0,A.Z)(s),++q){v=s[q]
try{v.$2(e,h)
w=!0}catch(p){u=A.ak(p)
t=A.b_(p)
if(!J.h(u,e)){o=A.cp("when reporting an error to an image listener")
n=$.qU
if(n!=null)n.$1(new A.dq(u,t,l,o,null,null,!1))}}}if(!w){s=m.d
s.toString
A.f9(s)}},
an1(d,e,f){return this.qf(d,e,null,!1,f)},
baD(d,e){return this.qf(null,d,null,!1,e)},
an3(d){var w,v,u,t
if(this.x)A.S(A.U(y.a))
w=this.a
if(w.length!==0){v=x.i
u=A.a3(new A.hk(new A.X(w,new B.b_7(),A.a1(w).h("X<1,~(jS)?>")),v),!0,v.h("F.E"))
for(w=u.length,t=0;t<w;++t)u[t].$1(d)}}}
B.aw9.prototype={}
B.hb.prototype={
Y(){return new B.at6()}}
B.at6.prototype={
B(d){var w=this.a
w.toString
return w.br(d,this.gH())}}
var z=a.updateTypes(["~(hL)","~(hK)","~(jS)"])
B.b_6.prototype={
$1(d){return d.c},
$S:726}
B.b_7.prototype={
$1(d){return d.b},
$S:727};(function aliases(){var w=B.iY.prototype
w.a3D=w.Z
w.asS=w.y4
w.a3E=w.L
w.asT=w.a_T
w.asR=w.DY})();(function installTearOffs(){var w=a._instance_1i,v=a._instance_1u
var u
w(u=B.iY.prototype,"gEV","Z",0)
v(u,"gaqZ","Iq",1)
v(u,"gan2","an3",2)})();(function inheritance(){var w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.C,[B.T5,B.hK,B.b_5,B.aw9])
u(B.iY,B.aw9)
v(A.d8,[B.b_6,B.b_7])
u(B.hb,A.ix)
u(B.at6,A.iV)
w(B.aw9,A.aL)})()
A.cC(b.typeUniverse,JSON.parse('{"hb":{"B":[],"d":[]},"at6":{"R":["hb"]}}'))
var y={a:"Stream has been disposed.\nAn ImageStream is considered disposed once at least one listener has been added and subsequently all listeners have been removed and no handles are outstanding from the keepAlive method.\nTo resolve this error, maintain at least one listener on the stream, or create an ImageStreamCompleterHandle from the keepAlive method, or create a new stream for the image."}
var x={l:A.G("hK"),h:A.G("hL"),m:A.G("hk<~(C,c9?)>"),i:A.G("hk<~(jS)>"),e:A.G("~(C,c9?)")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_2",e:"endPart",h:b})})($__dart_deferred_initializers__,"XNGcbZb6X9avJmQMRzcSf78Je+4=");