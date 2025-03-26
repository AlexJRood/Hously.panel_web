((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_548",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,C,B={
cbi(d){var x=J.a9(d),w=x.h(d,"id"),v=x.h(d,"status_name"),u=x.h(d,"status_index")
x=x.h(d,"contact_index")
if(x==null)x=[]
return new B.hJ(w,v,u,A.cr(x,!0,y.S))},
hJ:function hJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cPW:function cPW(){},
qj:function qj(d,e){var _=this
_.x=_.w=_.r=null
_.a=d
_.f=e},
biz:function biz(){},
biy:function biy(){},
bix:function bix(){}},E,F,G,H
J=c[1]
A=c[0]
D=c[2]
C=c[283]
B=a.updateHolder(c[190],B)
E=c[679]
F=c[192]
G=c[277]
H=c[269]
B.hJ.prototype={
cM(){var x=this
return A.a0(["contact_status",x.a,"status_name",x.b,"status_index",x.c,"contact_index",x.d],y.N,y.z)}}
B.qj.prototype={
zp(d){return this.buE(d)},
buE(d){var x=0,w=A.F(y.O),v,u=2,t=[],s,r,q,p,o,n,m,l,k
var $async$zp=A.B(function(e,f){if(e===1){t.push(f)
x=u}while(true)switch(x){case 0:u=4
x=7
return A.z(A.e0($.d6s(),!0,null,null,d,null),$async$zp)
case 7:s=f
if(s==null||s.a==null){m=A.c9("No response or data is null")
throw A.i(m)}if(s.c===200){r=D.aM.bw(0,s.a)
q=y.f.a(D.aL.bw(0,r))
p=y.j.a(J.y(q,"results"))
m=J.d0(p,new B.biz(),y.r)
o=A.a1(m,!0,m.$ti.i("as.E"))
v=o
x=1
break}else{m=A.c9("Unexpected status code: "+A.o(s.c))
throw A.i(m)}u=2
x=6
break
case 4:u=3
k=t.pop()
n=A.ag(k)
m=A.c9("Failed to load statuses: "+A.o(n))
throw A.i(m)
x=6
break
case 3:x=2
break
case 6:case 1:return A.D(v,w)
case 2:return A.C(t.at(-1),w)}})
return A.E($async$zp,w)},
x6(d,e,f){var x=null
return this.bus(d,e,f)},
a9h(){return this.x6(null,null,null)},
Wr(d){return this.x6(d,null,null)},
Mr(d){return this.x6(null,null,d)},
aym(d,e){return this.x6(d,null,e)},
bur(d){return this.x6(null,d,null)},
bus(d,e,f){var x=0,w=A.F(y.H),v=1,u=[],t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$x6=A.B(function(a0,a1){if(a0===1){u.push(a1)
x=v}while(true)switch(x){case 0:h=null
v=3
t.r=f
j=e==null?t.w:e
t.w=j
t.x=d==null?t.x:d
s=A.U(y.N,y.X)
if(j!=null)J.bD(s,"sort",j)
j=t.x
if(j!=null)J.bD(s,"search",j)
j=t.r
if(j!=null)J.bD(s,"status",j)
r=s
x=6
return A.z(A.e0($.cZy(),!0,null,r,h,null),$async$x6)
case 6:q=a1
s=q!=null&&q.c===200
j=y.Y
if(s){p=D.aM.bw(0,q.a)
o=y.f.a(D.aL.bw(0,p))
n=y.j.a(J.y(o,"results"))
s=J.d0(n,new B.biy(),y.d)
m=A.a1(s,!0,s.$ti.i("as.E"))
t.sW(0,C.iW(m,j))}else t.sW(0,C.fn("Failed to load contacts",A.eL(),j))
v=1
x=5
break
case 3:v=2
g=u.pop()
l=A.ag(g)
k=A.bt(g)
t.sW(0,C.fn(l,k,y.Y))
x=5
break
case 2:x=1
break
case 5:return A.D(null,w)
case 1:return A.C(u.at(-1),w)}})
return A.E($async$x6,w)},
Ms(){var x=null,w=null,v=null,u=null
return this.but()},
but(){var x=0,w=A.F(y.Y),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ms=A.B(function(a2,a3){if(a2===1){t.push(a3)
x=u}while(true)switch(x){case 0:f=null
e=null
d=null
a0=null
u=4
i=a0
if(i==null)i=s.r
s.r=i
h=d
s.w=h==null?s.w:h
h=e
s.x=h==null?s.x:h
r=A.U(y.N,y.X)
if(i!=null)J.bD(r,"status",i)
i=s.w
if(i!=null)J.bD(r,"sort",i)
i=s.x
if(i!=null)J.bD(r,"search",i)
q=r
r=A.o(q)
i=$.cZy()
A.cE().$1("Mahdi: fetchClients: "+r+" : "+i)
x=7
return A.z(A.e0(i,!0,null,q,f,null),$async$Ms)
case 7:p=a3
if(p!=null&&p.c===200){o=D.aL.bw(0,D.aM.bw(0,p.a))
n=y.P.a(o)
m=y.j.a(J.y(n,"results"))
r=J.d0(m,new B.bix(),y.d)
l=A.a1(r,!0,r.$ti.i("as.E"))
s.sW(0,C.iW(l,y.Y))
v=l
x=1
break}else{r=p
r=A.c9("B\u0142\u0105d API: "+A.o(r==null?null:r.c))
throw A.i(r)}u=2
x=6
break
case 4:u=3
a1=t.pop()
k=A.ag(a1)
j=A.bt(a1)
s.sW(0,C.fn(k,j,y.Y))
A.cE().$1("B\u0142\u0105d w fetchClientsList: "+A.o(k))
r=A.a([],y.G)
v=r
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.D(v,w)
case 2:return A.C(t.at(-1),w)}})
return A.E($async$Ms,w)},
Up(d){return this.bmU(d)},
bmU(d){var x=0,w=A.F(y.H),v=1,u=[],t=this,s,r,q,p,o
var $async$Up=A.B(function(e,f){if(e===1){u.push(f)
x=v}while(true)switch(x){case 0:v=3
x=6
return A.z(G.eg($.dnV(),d.cM(),null,!0,null),$async$Up)
case 6:s=f
if(s!=null&&s.c===201)t.a9h()
else A.ax("Failed to create client: ")
v=1
x=5
break
case 3:v=2
o=u.pop()
r=A.ag(o)
q=A.bt(o)
A.ax("Error adding client: "+A.o(r))
t.sW(0,C.fn(r,q,y.Y))
x=5
break
case 2:x=1
break
case 5:return A.D(null,w)
case 1:return A.C(u.at(-1),w)}})
return A.E($async$Up,w)},
LV(d){return this.bsg(d)},
bsg(d){var x=0,w=A.F(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$LV=A.B(function(e,f){if(e===1){t.push(f)
x=u}while(true)switch(x){case 0:u=4
x=7
return A.z(H.lI("https://www.hously.cloud"+("/contacts/"+d+"/delete/"),!0),$async$LV)
case 7:r=f
if(r==null){s.sW(0,C.fn(new A.EJ("Invalid request."),A.eL(),y.Y))
x=1
break}s.a9h()
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ag(n)
p=A.bt(n)
s.sW(0,C.fn(q,p,y.Y))
x=6
break
case 3:x=2
break
case 6:case 1:return A.D(v,w)
case 2:return A.C(t.at(-1),w)}})
return A.E($async$LV,w)}}
var z=a.updateTypes(["qj(ba<qj,aL<u<ef>>>)","hJ(@)"])
B.cPW.prototype={
$1(d){var x=new B.qj(new A.bj(y.U),E.auD)
x.zp(E.cA7)
x.a9h()
return x},
$S:z+0}
B.biz.prototype={
$1(d){return B.cbi(y.P.a(d))},
$S:z+1}
B.biy.prototype={
$1(d){return F.aeV(y.P.a(d))},
$S:262}
B.bix.prototype={
$1(d){return F.aeV(y.P.a(d))},
$S:262};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.hJ,A.N)
w(A.b7,[B.cPW,B.biz,B.biy,B.bix])
x(B.qj,A.aC)})()
A.aK(b.typeUniverse,JSON.parse('{"qj":{"aC":["aL<u<ef>>"],"aC.T":"aL<u<ef>>"}}'))
var y=(function rtii(){var x=A.j
return{G:x("v<ef>"),U:x("bj<ds<aL<u<ef>>>>"),Y:x("u<ef>"),O:x("u<hJ>"),j:x("u<@>"),P:x("ae<f,@>"),f:x("ae<@,@>"),N:x("f"),d:x("ef"),r:x("hJ"),z:x("@"),S:x("l"),X:x("N?"),H:x("~")}})();(function constants(){E.auD=new C.fU(!1,null,null,null,A.j("fU<u<ef>>"))
E.cA7=A.cy("dCb<N?>")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_N","cZy",()=>A.eP("/contacts/list/"))
x($,"e_b","dnV",()=>A.eP("/contacts/create/"))
x($,"e_0","d6s",()=>A.eP("/contacts/statuses/"))
x($,"e4j","kD",()=>A.dh(new B.cPW(),A.j("qj"),A.j("aL<u<ef>>")))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_548",e:"endPart",h:b})})($__dart_deferred_initializers__,"QDNfhgbv1Bi0Fo9j6T3R94hdlMY=");