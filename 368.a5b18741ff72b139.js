"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[368],{6368:(b,d,o)=>{o.r(d),o.d(d,{default:()=>Y});var c=o(3848),r=o(4332),f=o(9512),n=o(6300),g=o(8083),u=o(8448),h=o(9240),p=o(5280),w=o(4936),y=o(6220),e=o(6568),v=o(6876);const x=["forgotPasswordNgForm"];function C(t,m){if(1&t&&(e.I0R(0,"fuse-alert",36),e.OEk(1),e.C$Y()),2&t){const s=e.GaO();e.E7m("appearance","outline")("showIcon",!1)("type",s.alert.type)("@shake","error"===s.alert.type),e.yG2(),e.oRS(" ",s.alert.message," ")}}function I(t,m){1&t&&(e.I0R(0,"mat-error"),e.OEk(1," Email address is required "),e.C$Y())}function R(t,m){1&t&&(e.I0R(0,"mat-error"),e.OEk(1," Please enter a valid email address "),e.C$Y())}function E(t,m){1&t&&(e.I0R(0,"span"),e.OEk(1," Send reset link "),e.C$Y())}function F(t,m){1&t&&e.wR5(0,"mat-progress-spinner",37),2&t&&e.E7m("diameter",24)("mode","indeterminate")}const P=()=>["/sign-in"],Y=[{path:"",component:(()=>{class t{constructor(s,i){this._authService=s,this._formBuilder=i,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.forgotPasswordForm=this._formBuilder.group({email:["",[r.AQ.required,r.AQ.email]]})}sendResetLink(){this.forgotPasswordForm.invalid||(this.forgotPasswordForm.disable(),this.showAlert=!1,this._authService.forgotPassword(this.forgotPasswordForm.get("email").value).pipe((0,y.U)(()=>{this.forgotPasswordForm.enable(),this.forgotPasswordNgForm.resetForm(),this.showAlert=!0})).subscribe(s=>{this.alert={type:"success",message:"Password reset sent! You'll receive an email if you are registered on our system."}},s=>{this.alert={type:"error",message:"Email does not found! Are you sure you are already a member?"}}))}static#e=this.\u0275fac=function(i){return new(i||t)(e.GI1(v.o),e.GI1(r.KE))};static#t=this.\u0275cmp=e.In1({type:t,selectors:[["auth-forgot-password"]],viewQuery:function(i,a){if(1&i&&e.CC$(x,5),2&i){let l;e.wto(l=e.Gqi())&&(a.forgotPasswordNgForm=l.first)}},standalone:!0,features:[e.UHJ],decls:52,vars:11,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-0.5","font-medium"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["forgotPasswordNgForm","ngForm"],[1,"w-full"],["id","email","matInput","",3,"formControlName"],[4,"ngIf"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-3",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(i,a){1&i&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.wR5(4,"img",4),e.C$Y(),e.I0R(5,"div",5),e.OEk(6,"Forgot password?"),e.C$Y(),e.I0R(7,"div",6),e.OEk(8,"Fill the form to reset your password"),e.C$Y(),e.yuY(9,C,2,5,"fuse-alert",7),e.I0R(10,"form",8,9)(12,"mat-form-field",10)(13,"mat-label"),e.OEk(14,"Email address"),e.C$Y(),e.wR5(15,"input",11),e.yuY(16,I,2,0,"mat-error",12)(17,R,2,0,"mat-error",12),e.C$Y(),e.I0R(18,"button",13),e.qCj("click",function(){return a.sendResetLink()}),e.yuY(19,E,2,0,"span",12)(20,F,1,2,"mat-progress-spinner",14),e.C$Y(),e.I0R(21,"div",15)(22,"span"),e.OEk(23,"Return to"),e.C$Y(),e.I0R(24,"a",16),e.OEk(25,"sign in "),e.C$Y()()()()(),e.I0R(26,"div",17),e.S2Z(),e.I0R(27,"svg",18)(28,"g",19),e.wR5(29,"circle",20)(30,"circle",21),e.C$Y()(),e.I0R(31,"svg",22)(32,"defs")(33,"pattern",23),e.wR5(34,"rect",24),e.C$Y()(),e.wR5(35,"rect",25),e.C$Y(),e.gRP(),e.I0R(36,"div",26)(37,"div",27)(38,"div"),e.OEk(39,"Welcome to"),e.C$Y(),e.I0R(40,"div"),e.OEk(41,"our community"),e.C$Y()(),e.I0R(42,"div",28),e.OEk(43," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.C$Y(),e.I0R(44,"div",29)(45,"div",30),e.wR5(46,"img",31)(47,"img",32)(48,"img",33)(49,"img",34),e.C$Y(),e.I0R(50,"div",35),e.OEk(51,"More than 17k people joined us, it's your turn"),e.C$Y()()()()()),2&i&&(e.yG2(9),e.E7m("ngIf",a.showAlert),e.yG2(),e.E7m("formGroup",a.forgotPasswordForm),e.yG2(5),e.E7m("formControlName","email"),e.yG2(),e.E7m("ngIf",a.forgotPasswordForm.get("email").hasError("required")),e.yG2(),e.E7m("ngIf",a.forgotPasswordForm.get("email").hasError("email")),e.yG2(),e.E7m("color","primary")("disabled",a.forgotPasswordForm.disabled),e.yG2(),e.E7m("ngIf",!a.forgotPasswordForm.disabled),e.yG2(),e.E7m("ngIf",a.forgotPasswordForm.disabled),e.yG2(4),e.E7m("routerLink",e.q4q(10,P)))},dependencies:[c.u_,w.G,r.y,r.sz,r.ot,r.ue,r.u,r.sl,r.uW,r.Wo,n.wb,n.Up,n.w5,n.wJ,g.cN,g.yi,f.oJ,f.Gw,u.kB,u.cm,h.ER],encapsulation:2,data:{animation:p.u}})}return t})()}]}}]);