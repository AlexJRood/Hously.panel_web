((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_629",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,F,E,I,B={Gh:function Gh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n
_.Q=o
_.as=p
_.at=q
_.ax=r
_.ay=s
_.ch=t
_.CW=u
_.cx=v
_.cy=w
_.db=x
_.dx=a0},
d0Z(d){var x=J.a9(d)
return new B.l4(x.h(d,"id"),x.h(d,"status_name"),x.h(d,"status_index"),A.cr(x.h(d,"transaction_index"),!0,y.S))},
l4:function l4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kc:function kc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=h
_.r=i
_.w=j},
cOb:function cOb(){},
FL:function FL(){},
jI:function jI(d,e){this.a=d
this.b=e},
cRc:function cRc(){},
xm:function xm(d,e,f){this.r=d
this.a=e
this.f=f},
bs9:function bs9(){},
bsa:function bsa(){},
bsb:function bsb(){},
bse:function bse(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsc:function bsc(d){this.a=d},
bsd:function bsd(d){this.a=d},
bsg:function bsg(d,e){this.a=d
this.b=e},
bsf:function bsf(){}},G,D
J=c[1]
A=c[0]
C=c[2]
H=c[254]
F=c[283]
E=c[191]
I=c[277]
B=a.updateHolder(c[79],B)
G=c[627]
D=c[269]
B.Gh.prototype={
cM(){var x,w=this,v=w.f.jF(),u=w.r.jF(),t=w.w
t=t==null?null:t.jF()
x=w.z
x=x==null?null:x.jF()
return A.a0(["id",w.a,"name",w.b,"amount",w.c,"currency",w.d,"transaction_type",w.e,"date_create",v,"date_update",u,"payment_date",t,"is_payed",w.x,"is_monthly_payment",w.y,"when_monthly_payment_is_over",x,"note",w.Q,"invoice_number",w.as,"invoice_data",w.at,"documents",w.ax,"tags",w.ay,"payment_methods",w.ch,"status",w.CW,"object_id",w.cx,"contractor",w.cy,"clients",w.db,"content_type",w.dx],y.N,y.z)},
gbJ(d){return this.a}}
B.l4.prototype={
cM(){var x=this
return A.a0(["id",x.a,"status_name",x.b,"status_index",x.c,"transaction_index",x.d],y.N,y.z)},
gbJ(d){return this.a}}
B.kc.prototype={
gbJ(d){return this.a}}
B.FL.prototype={
pN(d){return this.bF3(d)},
bF3(d){var x=0,w=A.F(y.H),v
var $async$pN=A.B(function(e,f){if(e===1)return A.C(f,w)
while(true)switch(x){case 0:x=2
return A.z(E.wN($.do0(),A.a0(["columns",d],y.N,y.z),!0),$async$pN)
case 2:v=f
if(v!=null&&v.c!==200)throw A.i(A.c9("Failed to update column indexes"))
return A.D(null,w)}})
return A.E($async$pN,w)},
xP(d){return this.bFm(d)},
bFm(d){var x=0,w=A.F(y.H),v
var $async$xP=A.B(function(e,f){if(e===1)return A.C(f,w)
while(true)switch(x){case 0:x=2
return A.z(E.wN($.do1(),A.a0(["statuses",d],y.N,y.z),!0),$async$xP)
case 2:v=f
if(v!=null&&v.c!==200)throw A.i(A.c9("Failed to update transaction statuses"))
return A.D(null,w)}})
return A.E($async$xP,w)}}
B.jI.prototype={}
B.xm.prototype={
zo(d){return this.bux(d)},
bux(d){var x=0,w=A.F(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$zo=A.B(function(a0,a1){if(a0===1){t.push(a1)
x=u}while(true)switch(x){case 0:u=4
x=7
return A.z(A.e0($.do4(),!0,null,null,d,null),$async$zo)
case 7:r=a1
if(r==null){x=1
break}q=C.aM.bw(0,r.a)
p=y.j.a(C.aL.bw(0,q))
h=J.d0(p,new B.bs9(),y.w)
g=h.$ti.i("a8<as.E,kc>")
o=A.a1(new A.a8(h,new B.bsa(),g),!0,g.i("as.E"))
x=8
return A.z(A.e0($.b5E(),!0,null,null,d,null),$async$zo)
case 8:n=a1
if(n==null){x=1
break}m=C.aM.bw(0,n.a)
l=y.P.a(C.aL.bw(0,m))
k=y.g.a(J.y(l,"results"))
if(k==null){A.ax("No results found")
x=1
break}h=J.d0(k,new B.bsb(),y.y)
j=A.a1(h,!0,h.$ti.i("as.E"))
s.sW(0,F.iW(new B.jI(o,j),y.h))
u=2
x=6
break
case 4:u=3
e=t.pop()
i=A.ag(e)
s.sW(0,F.fn(i,A.eL(),y.h))
x=6
break
case 3:x=2
break
case 6:case 1:return A.D(v,w)
case 2:return A.C(t.at(-1),w)}})
return A.E($async$zo,w)},
aaP(d,e,f){var x=y.h
this.sW(0,E.RP(this.f,new B.bse(this,d,e,f),x,x))},
qS(d){return this.bDB(d)},
bDB(d){var x=0,w=A.F(y.H),v=this,u
var $async$qS=A.B(function(e,f){if(e===1)return A.C(f,w)
while(true)switch(x){case 0:u=y.h
v.sW(0,E.RP(v.f,new B.bsg(v,d),u,u))
return A.D(null,w)}})
return A.E($async$qS,w)},
wY(d,e){return this.brD(d,e)},
brD(d,e){var x=0,w=A.F(y.y),v,u=this,t
var $async$wY=A.B(function(f,g){if(f===1)return A.C(g,w)
while(true)switch(x){case 0:x=3
return A.z(I.eg($.b5E(),d.cM(),null,!0,null),$async$wY)
case 3:t=g
u.zo(e)
v=B.d0Z(t.a)
x=1
break
case 1:return A.D(v,w)}})
return A.E($async$wY,w)},
xO(d,e){return this.bFk(d,e)},
bFk(d,e){var x=0,w=A.F(y.y),v,u=this,t
var $async$xO=A.B(function(f,g){if(f===1)return A.C(g,w)
while(true)switch(x){case 0:x=3
return A.z(H.tB($.b5E()+d.a+"/",d.cM(),null,!0),$async$xO)
case 3:t=g
u.zo(e)
v=B.d0Z(t.a)
x=1
break
case 1:return A.D(v,w)}})
return A.E($async$xO,w)},
x_(d,e){return this.bsn(d,e)},
bsn(d,e){var x=0,w=A.F(y.H),v=this
var $async$x_=A.B(function(f,g){if(f===1)return A.C(g,w)
while(true)switch(x){case 0:x=2
return A.z(D.lI($.b5E()+d+"/",!0),$async$x_)
case 2:v.zo(e)
return A.D(null,w)}})
return A.E($async$x_,w)}}
var z=a.updateTypes(["jI(jI)","J(l4)","FL(hh<FL>)","xm(ba<xm,aL<jI>>)","Gh(@)","kc(Gh)","l4(@)","l(l4)"])
B.cOb.prototype={
$1(d){return new B.FL()},
$S:z+2}
B.cRc.prototype={
$1(d){var x=new B.xm(d.t($.dqJ(),y.f),new A.bj(y.R),G.auG)
x.zo(d)
return x},
$S:z+3}
B.bs9.prototype={
$1(a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="payment_date",g="when_monthly_payment_is_over",f="invoice_data",e=J.a9(a0),d=e.h(a0,"id")
if(d==null)d=0
x=e.h(a0,"name")
w=e.h(a0,"amount")
w=w==null?null:J.aA(w)
if(w==null)w="0.0"
v=e.h(a0,"currency")
if(v==null)v=""
u=e.h(a0,"transaction_type")
t=D.lo(e.h(a0,"date_create"))
s=D.lo(e.h(a0,"date_update"))
r=e.h(a0,h)!=null?D.lo(e.h(a0,h)):null
q=e.h(a0,"is_payed")
if(q==null)q=!1
p=e.h(a0,"is_monthly_payment")
if(p==null)p=!1
o=e.h(a0,g)!=null?D.lo(e.h(a0,g)):null
n=e.h(a0,"note")
m=e.h(a0,"invoice_number")
l=y.P.b(e.h(a0,f))?e.h(a0,f):A.U(y.N,y.z)
k=e.h(a0,"documents")
if(k==null)k=[]
j=e.h(a0,"tags")
if(j==null)j=[]
i=e.h(a0,"payment_methods")
if(i==null)i=[]
return new B.Gh(d,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,e.h(a0,"status"),e.h(a0,"object_id"),e.h(a0,"contractor"),e.h(a0,"clients"),e.h(a0,"content_type"))},
$S:z+4}
B.bsa.prototype={
$1(d){var x=d.b,w=x==null,v=w?"Unknown":x
w=w?"":x
return new B.kc(d.a,d.c,d.d,x,"https://www.hously.cloud/media/avatars/avatar.jpg",v,w)},
$S:z+5}
B.bsb.prototype={
$1(d){return B.d0Z(y.P.a(d))},
$S:z+6}
B.bse.prototype={
$1(d){var x,w,v,u,t=this,s="transaction_index",r=d.b,q=t.b,p=C.f.oD(r,new B.bsc(q)),o=C.f.oD(r,new B.bsd(t.c))
q=q.a
C.f.U(p.d,q)
v=t.d
if(v!=null&&v<=o.d.length)C.f.iy(o.d,v,q)
else o.d.push(q)
try{q=y.N
v=y.K
x=A.a([A.a0(["id",p.a,s,p.d],q,v),A.a0(["id",o.a,s,o.d],q,v)],y.J)
t.a.r.xP(x)}catch(u){w=A.ag(u)
A.ax("Failed to update transaction statuses: "+A.o(w))}return new B.jI(d.a,r)},
$S:z+0}
B.bsc.prototype={
$1(d){return C.f.p(d.d,this.a.a)},
$S:z+1}
B.bsd.prototype={
$1(d){return d.b===this.a},
$S:z+1}
B.bsg.prototype={
$1(d){var x,w,v,u,t=this.b
try{v=A.ak(t).i("a8<1,l>")
x=A.a1(new A.a8(t,new B.bsf(),v),!0,v.i("as.E"))
this.a.r.pN(x)}catch(u){w=A.ag(u)
A.ax("Failed to update column indexes: "+A.o(w))}return new B.jI(d.a,t)},
$S:z+0}
B.bsf.prototype={
$1(d){return d.a},
$S:z+7};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.N,[B.Gh,B.l4,B.kc,B.FL,B.jI])
x(A.b7,[B.cOb,B.cRc,B.bs9,B.bsa,B.bsb,B.bse,B.bsc,B.bsd,B.bsg,B.bsf])
w(B.xm,A.aC)})()
A.aK(b.typeUniverse,JSON.parse('{"xm":{"aC":["aL<jI>"],"aC.T":"aL<jI>"}}'))
var y=(function rtii(){var x=A.j
return{f:x("FL"),w:x("Gh"),h:x("jI"),y:x("l4"),J:x("v<ae<f,N>>"),R:x("bj<ds<aL<jI>>>"),j:x("u<@>"),P:x("ae<f,@>"),K:x("N"),N:x("f"),z:x("@"),S:x("l"),g:x("u<@>?"),H:x("~")}})();(function constants(){G.auG=new F.fU(!1,null,null,null,A.j("fU<jI>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_m","do4",()=>A.eP("/finance/expenses/"))
x($,"e_n","b5E",()=>A.eP("/finance/expenses/statuses/"))
x($,"e_i","do0",()=>A.eP("/finance/expenses/update-column-indexes/"))
x($,"e_j","do1",()=>A.eP("/finance/expenses/update-statuses/"))
x($,"e3x","dqJ",()=>A.iI(new B.cOb(),y.f))
x($,"e5c","Fo",()=>A.dh(new B.cRc(),A.j("xm"),A.j("aL<jI>")))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_629",e:"endPart",h:b})})($__dart_deferred_initializers__,"+XQdF5Dz8so5SMkUU7AjSworu7M=");