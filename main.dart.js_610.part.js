((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_610",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,D,B={
d_p(a7){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="payment_date",a1="when_monthly_payment_is_over",a2="invoice_data",a3=J.a9(a7),a4=a3.h(a7,"id"),a5=D.aeR(a3.h(a7,"client")),a6=a3.h(a7,"is_seller")
if(a6==null)a6=!1
x=a3.h(a7,"is_buyer")
if(x==null)x=!1
w=a3.h(a7,"name")
if(w==null)w="Unknown Transaction"
v=a3.h(a7,"commission")
if(v==null)v="0.00"
u=a3.h(a7,"amount")
if(u==null)u="0.00"
t=a3.h(a7,"currency")
if(t==null)t="USD"
s=a3.h(a7,"transaction_type")
if(s==null)s="Unknown"
r=C.lo(a3.h(a7,"date_create"))
q=C.lo(a3.h(a7,"date_update"))
p=a3.h(a7,a0)!=null?C.lo(a3.h(a7,a0)):null
o=a3.h(a7,"is_monthly_payment")
if(o==null)o=!1
n=a3.h(a7,a1)!=null?C.lo(a3.h(a7,a1)):null
m=a3.h(a7,"note")
l=a3.h(a7,"transaction_name")
k=a3.h(a7,"invoice_number")
j=y.i.b(a3.h(a7,a2))?a3.h(a7,a2):A.U(y.g,y.b)
i=a3.h(a7,"send_invoice_email")
if(i==null)i=!1
h=a3.h(a7,"documents")
if(h==null)h=[]
g=a3.h(a7,"tags")
if(g==null)g=[]
f=a3.h(a7,"payment_methods")
if(f==null)f=[]
e=a3.h(a7,"status")
d=a3.h(a7,"is_payed")
if(d==null)d=!1
return new B.fy(a4,a5,a6,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a3.h(a7,"country"),a3.h(a7,"city"),a3.h(a7,"street"),a3.h(a7,"postal_code"),a3.h(a7,"tax_amount"),a3.h(a7,"draft"),a3.h(a7,"created_by"))},
fy:function fy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var _=this
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
_.dx=a0
_.dy=a1
_.fr=a2
_.fx=a3
_.fy=a4
_.go=a5
_.id=a6
_.k1=a7
_.k2=a8
_.k3=a9}}
J=c[1]
A=c[0]
C=c[268]
D=c[191]
B=a.updateHolder(c[145],B)
B.fy.prototype={
cM(){var x,w=this,v=w.b.cM(),u=w.y.jE(),t=w.z.jE(),s=w.Q
s=s==null?null:s.jE()
x=w.at
x=x==null?null:x.jE()
return A.a0(["id",w.a,"client",v,"is_seller",w.c,"is_buyer",w.d,"name",w.e,"commission",w.f,"amount",w.r,"currency",w.w,"transaction_type",w.x,"date_create",u,"date_update",t,"payment_date",s,"is_monthly_payment",w.as,"when_monthly_payment_is_over",x,"note",w.ax,"transaction_name",w.ay,"invoice_number",w.ch,"invoice_data",w.CW,"send_invoice_email",w.cx,"documents",w.cy,"tags",w.db,"payment_methods",w.dx,"status",w.dy,"is_payed",w.fr,"country",w.fx,"city",w.fy,"street",w.go,"postal_code",w.id,"tax_amount",w.k1,"draft",w.k2,"created_by",w.k3],y.g,y.b)},
gbJ(d){return this.a}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.fy,A.N)})()
var y={i:A.j("ae<f,@>"),g:A.j("f"),b:A.j("@")};(function lazyInitializers(){var x=a.lazyFinal
x($,"dZX","d6m",()=>A.eT("/agent/transaction/"))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_610",e:"endPart",h:b})})($__dart_deferred_initializers__,"0gAr/eSVa/nh0f0HBx7pLyBIH5s=");