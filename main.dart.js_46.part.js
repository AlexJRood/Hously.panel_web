((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_46",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,H,E,F,A={
bUK(d){var x,w,v,u,t,s,r,q="agreement",p="register",o=J.a0(d),n=o.i(d,"id"),m=o.i(d,"name"),l=o.i(d,"company_name"),k=o.i(d,"note"),j=o.i(d,"phones")
if(j==null)j=[]
j=J.t9(J.fW(j,new A.b0D(),y.j))
x=o.i(d,"emails")
if(x==null)x=[]
x=J.t9(J.fW(x,new A.b0E(),y.i))
w=o.i(d,"interactions")
if(w==null)w=[]
w=J.t9(J.fW(w,new A.b0F(),y.a))
if(o.i(d,q)!=null){v=o.i(d,q)
u=J.a0(v)
v=new A.b0c(u.i(v,"has_agreement"),u.i(v,"agreement_status"),u.i(v,"is_meeting_scheduled"))}else v=null
if(o.i(d,p)!=null){u=o.i(d,p)
t=J.a0(u)
s=t.i(u,"is_register")
if(s==null)s=!1
u=new A.b0y(s,t.i(u,"register_user"))}else u=null
if(o.i(d,"status")!=null){o=o.i(d,"status")
t=J.a0(o)
s=t.i(o,"id")
r=t.i(o,"status_name")
t.i(o,"lead_index")
r=new A.b0C(s,r)
o=r}else o=null
return new A.jT(n,m,l,k,j,x,w,v,u,o)},
jT:function jT(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
b0D:function b0D(){},
b0E:function b0E(){},
b0F:function b0F(){},
zU:function zU(d,e,f){this.a=d
this.b=e
this.c=f},
zs:function zs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
JU:function JU(d,e){this.a=d
this.b=e},
b0c:function b0c(d,e,f){this.a=d
this.b=e
this.c=f},
b0y:function b0y(d,e){this.a=d
this.b=e},
b0C:function b0C(d,e){this.a=d
this.b=e},
bT0(d,e,f){return new A.a8R(d,f,e,null)},
a8R:function a8R(d,e,f,g){var _=this
_.e=d
_.f=e
_.r=f
_.a=g}},D,I,K,G,L
J=c[1]
B=c[0]
C=c[2]
H=c[79]
E=c[67]
F=c[90]
A=a.updateHolder(c[38],A)
D=c[182]
I=c[55]
K=c[117]
G=c[119]
L=c[118]
A.jT.prototype={
gc8(d){return this.a}}
A.zU.prototype={}
A.zs.prototype={}
A.JU.prototype={}
A.b0c.prototype={}
A.b0y.prototype={}
A.b0C.prototype={
gc8(d){return this.a}}
A.a8R.prototype={
br(d,e){var x,w=this,v=null,u=B.ar(d,v,y.h).w.a.a<800,t=w.f,s=y.e,r=B.a([],s)
if(!u){x=B.a([],s)
if(!w.r)x.push(F.jm)
C.b.O(x,w.e)
C.b.O(r,B.a([B.Q(v,B.a4(B.a([new E.mx(t,v),B.ap(B.V(x,C.l,C.j,C.h,0),1)],s),C.l,C.j,C.h,0,v),C.i,C.cy,v,v,v,v,v,v,v,v,v,v),D.aW_],s))}if(u){x=B.a([],s)
if(!w.r)x.push(F.jm)
C.b.O(x,w.e)
C.b.O(r,B.a([B.Q(v,B.V(x,C.l,C.j,C.h,0),C.i,C.cy,v,v,v,v,v,v,v,v,v,v),D.aVZ,D.aW0],s))}return B.lK(!0,I.b7t(E.uy(new B.br(C.R,v,C.P,C.w,r,v),t,new E.nB(t,v)),L.Ev),!0,C.a0,!0,!0)}}
var z=a.updateTypes(["zU(@)","zs(@)","JU(@)"])
A.b0D.prototype={
$1(d){var x=J.a0(d),w=x.i(d,"number"),v=x.i(d,"label")
x=x.i(d,"is_primary")
return new A.zU(w,v,x==null?!1:x)},
$S:z+0}
A.b0E.prototype={
$1(d){var x,w,v=J.a0(d),u=v.i(d,"mail_content"),t=v.i(d,"is_mail_sent")
if(t==null)t=!1
x=v.i(d,"mail_sent_date")
w=v.i(d,"is_mail_received")
if(w==null)w=!1
return new A.zs(u,t,x,w,v.i(d,"receive_mail_content"),v.i(d,"mail_response_date"))},
$S:z+1}
A.b0F.prototype={
$1(d){var x=J.a0(d),w=x.i(d,"interaction_type"),v=x.i(d,"content")
x.i(d,"created_at")
return new A.JU(w,v)},
$S:z+2};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.C,[A.jT,A.zU,A.zs,A.JU,A.b0c,A.b0y,A.b0C])
x(B.d8,[A.b0D,A.b0E,A.b0F])
w(A.a8R,H.hb)})()
B.cC(b.typeUniverse,JSON.parse('{"a8R":{"B":[],"d":[]}}'))
var y={e:B.G("p<d>"),i:B.G("zs"),a:B.G("JU"),h:B.G("eZ"),j:B.G("zU")};(function constants(){D.aVZ=new B.oG(0,0,0,null,null,null,G.nA,null)
D.aW_=new B.oG(60,0,0,null,null,null,G.nA,null)
D.aW0=new B.oG(0,null,0,0,null,null,K.yr,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"cFt","bSh",()=>"https://www.hously.cloud/admin-panel/leads-panel/leads/")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_46",e:"endPart",h:b})})($__dart_deferred_initializers__,"/yaIhAc26h3YgqZwEdkwy4Q+Uao=");