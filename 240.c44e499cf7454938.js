"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[240],{6860:(M,f,r)=>{r.r(f),r.d(f,{default:()=>T});var h=r(3848),m=r(4332),c=r(9512),u=r(6300),p=r(2556),g=r(8083),w=r(8448),y=r(9240),v=r(5280),C=r(4936);class R{static isEmptyInputValue(o){return null==o||0===o.length}static mustMatch(o,n){return i=>{const a=i.get(o),s=i.get(n);if(!a||!s||(s.hasError("mustMatch")&&(delete s.errors.mustMatch,s.updateValueAndValidity()),this.isEmptyInputValue(s.value)||a.value===s.value))return null;const l={mustMatch:!0};return s.setErrors(l),l}}}var x=r(6220),t=r(6568),I=r(6876);const E=["resetPasswordNgForm"];function P(e,o){if(1&e&&(t.I0R(0,"fuse-alert",41),t.OEk(1),t.C$Y()),2&e){const n=t.GaO();t.E7m("appearance","outline")("showIcon",!1)("type",n.alert.type)("@shake","error"===n.alert.type),t.yG2(),t.oRS(" ",n.alert.message," ")}}function Y(e,o){1&e&&t.wR5(0,"mat-icon",42),2&e&&t.E7m("svgIcon","heroicons_solid:eye")}function b(e,o){1&e&&t.wR5(0,"mat-icon",42),2&e&&t.E7m("svgIcon","heroicons_solid:eye-slash")}function G(e,o){1&e&&t.wR5(0,"mat-icon",42),2&e&&t.E7m("svgIcon","heroicons_solid:eye")}function A(e,o){1&e&&t.wR5(0,"mat-icon",42),2&e&&t.E7m("svgIcon","heroicons_solid:eye-slash")}function $(e,o){1&e&&(t.I0R(0,"mat-error"),t.OEk(1," Password confirmation is required "),t.C$Y())}function k(e,o){1&e&&(t.I0R(0,"mat-error"),t.OEk(1," Passwords must match "),t.C$Y())}function F(e,o){1&e&&(t.I0R(0,"span"),t.OEk(1," Reset your password "),t.C$Y())}function O(e,o){1&e&&t.wR5(0,"mat-progress-spinner",43),2&e&&t.E7m("diameter",24)("mode","indeterminate")}const j=()=>["/sign-in"],T=[{path:"",component:(()=>{class e{constructor(n,i){this._authService=n,this._formBuilder=i,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.resetPasswordForm=this._formBuilder.group({password:["",m.AQ.required],passwordConfirm:["",m.AQ.required]},{validators:R.mustMatch("password","passwordConfirm")})}resetPassword(){this.resetPasswordForm.invalid||(this.resetPasswordForm.disable(),this.showAlert=!1,this._authService.resetPassword(this.resetPasswordForm.get("password").value).pipe((0,x.U)(()=>{this.resetPasswordForm.enable(),this.resetPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(n=>{this.alert={type:"success",message:"Your password has been reset."}},n=>{this.alert={type:"error",message:"Something went wrong, please try again."}}))}static#t=this.\u0275fac=function(i){return new(i||e)(t.GI1(I.o),t.GI1(m.KE))};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["auth-reset-password"]],viewQuery:function(i,a){if(1&i&&t.CC$(E,5),2&i){let s;t.wto(s=t.Gqi())&&(a.resetPasswordNgForm=s.first)}},standalone:!0,features:[t.UHJ],decls:66,vars:16,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["resetPasswordNgForm","ngForm"],[1,"w-full"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","password-confirm","matInput","","type","password",3,"formControlName"],["passwordConfirmField",""],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(i,a){if(1&i){const s=t.KQA();t.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.wR5(4,"img",4),t.C$Y(),t.I0R(5,"div",5),t.OEk(6,"Reset your password"),t.C$Y(),t.I0R(7,"div",6),t.OEk(8,"Create a new password for your account"),t.C$Y(),t.yuY(9,P,2,5,"fuse-alert",7),t.I0R(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),t.OEk(14,"Password"),t.C$Y(),t.wR5(15,"input",11,12),t.I0R(17,"button",13),t.qCj("click",function(){t.usT(s);const d=t.Gew(16);return t.CGJ(d.type="password"===d.type?"text":"password")}),t.yuY(18,Y,1,1,"mat-icon",14)(19,b,1,1,"mat-icon",14),t.C$Y(),t.I0R(20,"mat-error"),t.OEk(21," Password is required "),t.C$Y()(),t.I0R(22,"mat-form-field",10)(23,"mat-label"),t.OEk(24,"Password (Confirm)"),t.C$Y(),t.wR5(25,"input",15,16),t.I0R(27,"button",13),t.qCj("click",function(){t.usT(s);const d=t.Gew(26);return t.CGJ(d.type="password"===d.type?"text":"password")}),t.yuY(28,G,1,1,"mat-icon",14)(29,A,1,1,"mat-icon",14),t.C$Y(),t.yuY(30,$,2,0,"mat-error",17)(31,k,2,0,"mat-error",17),t.C$Y(),t.I0R(32,"button",18),t.qCj("click",function(){return a.resetPassword()}),t.yuY(33,F,2,0,"span",17)(34,O,1,2,"mat-progress-spinner",19),t.C$Y(),t.I0R(35,"div",20)(36,"span"),t.OEk(37,"Return to"),t.C$Y(),t.I0R(38,"a",21),t.OEk(39,"sign in "),t.C$Y()()()()(),t.I0R(40,"div",22),t.S2Z(),t.I0R(41,"svg",23)(42,"g",24),t.wR5(43,"circle",25)(44,"circle",26),t.C$Y()(),t.I0R(45,"svg",27)(46,"defs")(47,"pattern",28),t.wR5(48,"rect",29),t.C$Y()(),t.wR5(49,"rect",30),t.C$Y(),t.gRP(),t.I0R(50,"div",31)(51,"div",32)(52,"div"),t.OEk(53,"Welcome to"),t.C$Y(),t.I0R(54,"div"),t.OEk(55,"our community"),t.C$Y()(),t.I0R(56,"div",33),t.OEk(57," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t.C$Y(),t.I0R(58,"div",34)(59,"div",35),t.wR5(60,"img",36)(61,"img",37)(62,"img",38)(63,"img",39),t.C$Y(),t.I0R(64,"div",40),t.OEk(65,"More than 17k people joined us, it's your turn"),t.C$Y()()()()()}if(2&i){const s=t.Gew(16),l=t.Gew(26);t.yG2(9),t.E7m("ngIf",a.showAlert),t.yG2(),t.E7m("formGroup",a.resetPasswordForm),t.yG2(5),t.E7m("formControlName","password"),t.yG2(3),t.E7m("ngIf","password"===s.type),t.yG2(),t.E7m("ngIf","text"===s.type),t.yG2(6),t.E7m("formControlName","passwordConfirm"),t.yG2(3),t.E7m("ngIf","password"===l.type),t.yG2(),t.E7m("ngIf","text"===l.type),t.yG2(),t.E7m("ngIf",a.resetPasswordForm.get("passwordConfirm").hasError("required")),t.yG2(),t.E7m("ngIf",a.resetPasswordForm.get("passwordConfirm").hasError("mustMatch")),t.yG2(),t.E7m("color","primary")("disabled",a.resetPasswordForm.disabled),t.yG2(),t.E7m("ngIf",!a.resetPasswordForm.disabled),t.yG2(),t.E7m("ngIf",a.resetPasswordForm.disabled),t.yG2(4),t.E7m("routerLink",t.q4q(15,j))}},dependencies:[h.u_,C.G,m.y,m.sz,m.ot,m.ue,m.u,m.sl,m.uW,m.Wo,u.wb,u.Up,u.w5,u.wJ,u.Gm,g.cN,g.yi,c.oJ,c.Gw,c.um,p.oB,p.qL,w.kB,w.cm,y.ER],encapsulation:2,data:{animation:v.u}})}return e})()}]}}]);