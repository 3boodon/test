"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[182],{9182:(ye,k,s)=>{s.r(k),s.d(k,{default:()=>pe});var e=s(6568),d=s(9240);let F=(()=>{class o{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.In1({type:o,selectors:[["app-endowments"]],standalone:!0,features:[e.UHJ],decls:1,vars:0,template:function(i,t){1&i&&e.wR5(0,"router-outlet")},dependencies:[d.cP],encapsulation:2,changeDetection:0})}return o})();var M=s(6924),m=s(4332),f=s(9512),B=s(7280),R=s(7804),L=s(568),h=s(6300),w=s(2556),C=s(8083),g=s(2523),E=s(6364),x=s(6820),u=s(8168),v=s(3848),b=s(3328),r=s(324),y=s(6312),I=s(6524),U=s(9124),p=s(8608),$=s(4320),S=s(4832),O=s(6272),_=s(6764),Y=s(6936),V=s(6488),z=s(5528);let T=(()=>{class o{constructor(n){this._httpClient=n,this._endowment=new p.g(null),this._endowments=new p.g(null),this._countries=new p.g(null),this._tags=new p.g(null),this._vmendowment=new p.g(null),this._vmendowments=new p.g(null)}get endowment$(){return this._endowment.asObservable()}get individuals$(){return this._endowments.asObservable()}get countries$(){return this._countries.asObservable()}get tags$(){return this._tags.asObservable()}get vmendowment$(){return this._vmendowment.asObservable()}get vmendowments$(){return this._vmendowments.asObservable()}getEndowments(){return this._httpClient.get("api/endowments/all").pipe((0,$.y)(n=>{this._endowments.next(n),console.log("endowment in seveice ",n)}))}searchIndividuals(n){return this._httpClient.get("api/individuals/search",{params:{query:n}}).pipe((0,$.y)(i=>{this._endowments.next(i)}))}getEndowmentlById(n){return this._endowments.pipe((0,S.U)(1),(0,O.k)(i=>{const t=i.find(a=>a.id===n)||null;return this._endowment.next(t),t}),(0,_.G)(i=>i?(0,V.of)(i):(0,Y.c)("Could not found individual with id of "+n+"!")))}deleteEndowment(n){return this.individuals$.pipe((0,S.U)(1),(0,_.G)(i=>this._httpClient.delete("api/endowments/endowment",{params:{id:n}}).pipe((0,O.k)(t=>{const a=i.findIndex(c=>c.id===n);return i.splice(a,1),this._endowments.next(i),t}))))}static#e=this.\u0275fac=function(i){return new(i||o)(e.CoB(z.KK))};static#t=this.\u0275prov=e.wxM({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var A=s(8728),P=s(3924);function Q(o,l){if(1&o&&(e.SAx(0),e.I0R(1,"mat-option",21)(2,"div",22),e.OEk(3),e.C$Y()(),e.k70()),2&o){const n=l.$implicit;e.yG2(),e.E7m("value",n.value),e.yG2(2),e.cNF(n.label)}}function j(o,l){1&o&&(e.I0R(0,"th",23),e.OEk(1,"Endowment Name"),e.C$Y())}function J(o,l){if(1&o&&(e.I0R(0,"td",24),e.OEk(1),e.C$Y()),2&o){const n=l.$implicit;e.yG2(),e.oRS(" ",n.endowmentName," ")}}function K(o,l){1&o&&(e.I0R(0,"th",23),e.OEk(1,"Amount "),e.C$Y())}function H(o,l){if(1&o&&(e.I0R(0,"td",24),e.OEk(1),e.C$Y()),2&o){const n=l.$implicit;e.yG2(),e.oRS(" ",n.amount," ")}}function W(o,l){1&o&&(e.I0R(0,"th",23),e.OEk(1,"Beneficiary"),e.C$Y())}function X(o,l){if(1&o&&(e.I0R(0,"td",24),e.OEk(1),e.C$Y()),2&o){const n=l.$implicit;e.yG2(),e.oRS(" ",n.beneficiaryName," ")}}function Z(o,l){1&o&&(e.I0R(0,"th",23),e.OEk(1,"donation Date"),e.C$Y())}function q(o,l){if(1&o&&(e.I0R(0,"td",24)(1,"span",25)(2,"span",26),e.OEk(3),e.wVc(4,"date"),e.C$Y()()()),2&o){const n=l.$implicit;e.yG2(3),e.cNF(e.g7$(4,1,n.donationDate,"yyyy/MM/dd"))}}function ee(o,l){1&o&&e.wR5(0,"tr",27)}function te(o,l){if(1&o){const n=e.KQA();e.I0R(0,"tr",28),e.qCj("click",function(){const a=e.usT(n).$implicit,c=e.GaO();return e.CGJ(c.clickedRows(a))}),e.C$Y()}}const ne=()=>[5,10,15,20];let ie=(()=>{class o{ngAfterViewInit(){}constructor(n,i,t,a,c,G,D){this._matDialog=n,this._endowmentsService=i,this._router=t,this._activatedRoute=a,this._changeDetectorRef=c,this._beneficiariesService=G,this._wealthManagmentService=D,this.displayedColumns=["Endowmentname","Amount","donationDate","Beneficiary"],this.gender="before",this._unsubscribeAll=new x.E,this.dataSource=new r._c,this.beneficiariesdataSources=new r._c,this.tangableCount=0,this.outlet=!1}ngOnInit(){this.getbeneficiaries(),this.getTangibleTypes(),this.getTangibles(),this._endowmentsService.getEndowments().pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this.data=n,this.beneficiaries.forEach(i=>{this.data.filter(t=>{t.beneficiaryId==i.id&&(this.endowmentData?this.endowmentData?.push({...t,beneficiaryName:i.name,wealthName:""}):this.endowmentData=[{...t,beneficiaryName:i.name,wealthName:""}])})}),this.dataSource=new r._c(this.endowmentData),this.dataSource.paginator=this.paginator}),this.roles=[{label:"Newest",value:"newest"},{label:"Deadline",value:"deadline"}]}getTangibles(){this.Tangables$=this._wealthManagmentService.getTangableWealth(),this._wealthManagmentService.getTangableWealth().pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this.tangableCount=n.length,this.tangables=n,this.realstate=this.tangables.filter(t=>1==t.wealthType),this.realstate.forEach(t=>{t.avg=t.acquisitionValue/this.realstate.length}),this.vehicles=this.tangables.filter(t=>2==t.wealthType),this.vehicles.forEach(t=>{if(t.avg=t.acquisitionValue/this.vehicles.length,t){let a=this.tangibleTypes.find(c=>c.id==t.wealthType)||null;a&&(t.typeRoute=a.wealthTypeRoute)}}),this.accountsReceivable=n.filter(t=>3==t.wealthType),this.accountsReceivable.forEach(t=>{if(t.avg=t.acquisitionValue/this.accountsReceivable.length,t){let a=this.tangibleTypes.find(c=>c.id==t.wealthType)||null;a&&(t.typeRoute=a.wealthTypeRoute)}}),this.marketableSecurities=n.filter(t=>4==t.wealthType),this.marketableSecurities.forEach(t=>{if(t.avg=t.acquisitionValue/this.marketableSecurities.length,t){let a=this.tangibleTypes.find(c=>c.id==t.wealthType)||null;a&&(t.typeRoute=a.wealthTypeRoute)}}),this.average=n,this.average.forEach(t=>{if(t.avg=t.acquisitionValue/this.average.length,t){let a=this.tangibleTypes.find(c=>c.id==t.wealthType)||null;a&&(t.typeRoute=a.wealthTypeRoute)}}),this._changeDetectorRef.markForCheck()})}getTangibleTypes(){this.tangibleTypes$=this._wealthManagmentService.getTangibleTypes(),this._wealthManagmentService.getTangibleTypes().pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this.tangibleTypes=n})}getbeneficiaries(){this._beneficiariesService.getIndividuals().pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this.beneficiaries=n,this.beneficiaries.filter(i=>i.tags.includes("cbde2486-5033-4e09-838e-e901b108cd41"))})}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}clickedRows(n){this._router.navigate(["./",n.id],{relativeTo:this._activatedRoute}),console.log("write id ",n),this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}trackByFn(n,i){return i.id||n}static#e=this.\u0275fac=function(i){return new(i||o)(e.GI1(U.qW),e.GI1(T),e.GI1(d.E5),e.GI1(d.gV),e.GI1(e.kD9),e.GI1(A.O),e.GI1(P.M))};static#t=this.\u0275cmp=e.In1({type:o,selectors:[["app-table"]],viewQuery:function(i,t){if(1&i&&e.CC$(b.Qb,5),2&i){let a;e.wto(a=e.Gqi())&&(t.paginator=a.first)}},standalone:!0,features:[e.UHJ],decls:32,vars:12,consts:[[1,"flex","flex-col","flex-auto","p-4"],[1,"sm:col-span-6","flex","flex-col","flex-auto","p-6","bg-card","shadow","rounded-2xl","overflow-hidden"],[1,"flex","justify-between"],[1,"text-lg","font-medium","tracking-tight","leading-6","truncate"],[1,"fuse-mat-dense","w-40","shadow-none","relaionships-border-none-mate-select",3,"subscriptSizing"],["disableOptionCentering","",3,"panelClass","value"],["roleSelect","matSelect"],[1,"text-md"],[1,"ml-1","font-medium"],[4,"ngFor","ngForOf"],[1,"flex","flex-col","flex-auto","mt-2","overflow-x-auto"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","Endowmentname"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","Amount"],["matColumnDef","Beneficiary"],["matColumnDef","donationDate"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],[1,"h-auto","py-4","leading-none",3,"value"],[1,"font-medium"],["mat-header-cell",""],["mat-cell",""],[1,"flex","items-center"],[1,"ml-3","leading-4"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(i,t){if(1&i&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.OEk(4," All Endowment "),e.C$Y(),e.I0R(5,"mat-form-field",4)(6,"mat-select",5,6)(8,"mat-select-trigger",7)(9,"span"),e.OEk(10,"Short by:"),e.C$Y(),e.I0R(11,"span",8),e.OEk(12),e.wVc(13,"titlecase"),e.C$Y()(),e.yuY(14,Q,4,2,"ng-container",9),e.C$Y()()(),e.I0R(15,"div",10)(16,"table",11),e.SAx(17,12),e.yuY(18,j,2,0,"th",13)(19,J,2,1,"td",14),e.k70(),e.SAx(20,15),e.yuY(21,K,2,0,"th",13)(22,H,2,1,"td",14),e.k70(),e.SAx(23,16),e.yuY(24,W,2,0,"th",13)(25,X,2,1,"td",14),e.k70(),e.SAx(26,17),e.yuY(27,Z,2,0,"th",13)(28,q,5,4,"td",14),e.k70(),e.yuY(29,ee,1,0,"tr",18)(30,te,1,0,"tr",19),e.C$Y(),e.wR5(31,"mat-paginator",20),e.C$Y()()()),2&i){const a=e.Gew(7);e.yG2(5),e.E7m("subscriptSizing","dynamic"),e.yG2(),e.E7m("panelClass","w-72 min-w-72 max-w-72 h-auto max-h-none")("value","newest"),e.yG2(6),e.cNF(e.kDX(13,9,a.value)),e.yG2(2),e.E7m("ngForOf",t.roles),e.yG2(2),e.E7m("dataSource",t.dataSource),e.yG2(13),e.E7m("matHeaderRowDef",t.displayedColumns),e.yG2(),e.E7m("matRowDefColumns",t.displayedColumns),e.yG2(),e.E7m("pageSizeOptions",e.q4q(11,ne))}},dependencies:[r.If,r.wL,r.ie,r.aG,r.Af,r.uc,r.gx,r.qC,r.cX,r.yC,r._I,v.oL,v.Iw,y.sb,m.y,C.cN,h.Up,E.KO,w.oB,h.wb,f.oJ,g.d5,g.kX,g.gl,R.I5,b.w5,b.Qb,v.y],styles:[".demo-table{width:100%}.mat-mdc-row .mat-mdc-cell{cursor:pointer;border:none}.mat-mdc-row:hover .mat-mdc-cell{background-color:#f5f5f5;border-color:currentColor}.demo-row-is-clicked{font-weight:700!important}\n"],encapsulation:2,changeDetection:0})}return o})();const oe=["matDrawer"];function ae(o,l){if(1&o&&(e.SAx(0),e.OEk(1),e.k70()),2&o){const n=e.GaO();e.yG2(),e.oRS(" ",n.individualsCount," ")}}const se=()=>({"=0":"No Insurances","=1":"Insurances",other:"Insurances"});let N=(()=>{class o{constructor(n,i,t){this._router=n,this._activatedRoute=i,this._changeDetectorRef=t,this.drawerMode="over",this._unsubscribeAll=new x.E,this.beneficiariesdataSources=new r._c}ngOnInit(){}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}createEndowments(){this._router.navigate(["./","create-endowment"],{relativeTo:this._activatedRoute.parent})}static#e=this.\u0275fac=function(i){return new(i||o)(e.GI1(d.E5),e.GI1(d.gV),e.GI1(e.kD9))};static#t=this.\u0275cmp=e.In1({type:o,selectors:[["app-endowments-list"]],viewQuery:function(i,t){if(1&i&&(e.CC$(oe,7),e.CC$(b.Qb,5)),2&i){let a;e.wto(a=e.Gqi())&&(t.matDrawer=a.first),e.wto(a=e.Gqi())&&(t.paginator=a.first)}},standalone:!0,features:[e.UHJ],decls:40,vars:17,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex-auto","h-full","dark:bg-transparent",3,"backdropClick"],[1,"w-full","sm:w-128","dark:bg-gray-900",3,"mode","opened","position","disableClose"],["matDrawer",""],[1,"flex","flex-col"],[1,"flex","flex-col","flex-auto"],[1,"bg-card"],[1,"flex","flex-col","w-full","max-w-screen-xl","mx-auto","px-6","sm:px-8"],[1,"flex","flex-col","sm:flex-row","flex-auto","sm:items-center","min-w-0","my-8","sm:my-12"],[1,"flex","flex-auto","items-center","min-w-0"],[1,"flex","flex-col","min-w-0","ml-4"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"ml-0.5","font-medium","text-secondary"],[4,"ngIf"],[1,"flex","items-center","mt-6","sm:mt-0","sm:ml-2","space-x-3"],["mat-flat-button","",3,"color","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-flat-button","",1,"hidden","sm:inline-flex","ml-3",3,"matMenuTriggerFor","color"],["moreMenu","matMenu"],["mat-menu-item",""],[3,"svgIcon"],[1,"flex","flex-col","flex-auto","p-6"]],template:function(i,t){if(1&i&&(e.I0R(0,"div",0)(1,"mat-drawer-container",1),e.qCj("backdropClick",function(){return t.onBackdropClicked()}),e.I0R(2,"mat-drawer",2,3),e.wR5(4,"router-outlet"),e.C$Y(),e.I0R(5,"mat-drawer-content",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10),e.SAx(12),e.I0R(13,"div",11),e.OEk(14," Endowments "),e.C$Y(),e.I0R(15,"div",12),e.yuY(16,ae,2,1,"ng-container",13),e.OEk(17),e.wVc(18,"i18nPlural"),e.C$Y(),e.k70(),e.C$Y()(),e.I0R(19,"div",14)(20,"button",15),e.qCj("click",function(){return t.createEndowments()}),e.wR5(21,"mat-icon",16),e.I0R(22,"span",17),e.OEk(23,"Add Endowments"),e.C$Y()(),e.I0R(24,"button",18),e.wR5(25,"mat-icon",16),e.I0R(26,"span",17),e.OEk(27,"Export"),e.C$Y()(),e.I0R(28,"mat-menu",null,19)(30,"button",20),e.wR5(31,"mat-icon",21),e.I0R(32,"span"),e.OEk(33,"as PDF"),e.C$Y()(),e.I0R(34,"button",20),e.wR5(35,"mat-icon",21),e.I0R(36,"span"),e.OEk(37,"as XLS"),e.C$Y()()()()()()()(),e.I0R(38,"div",22),e.wR5(39,"app-table"),e.C$Y()()()()),2&i){const a=e.Gew(29);e.yG2(2),e.E7m("mode",t.drawerMode)("opened",!1)("position","end")("disableClose",!0),e.yG2(14),e.E7m("ngIf",t.individualsCount>0),e.yG2(),e.oRS(" ",e.g7$(18,13,t.individualsCount,e.q4q(16,se))," "),e.yG2(3),e.E7m("color","primary"),e.yG2(),e.E7m("svgIcon","heroicons_outline:plus"),e.yG2(3),e.E7m("matMenuTriggerFor",a)("color","primary"),e.yG2(),e.E7m("svgIcon","heroicons_solid:arrow-up-tray"),e.yG2(6),e.E7m("svgIcon","heroicons_outline:document-text"),e.yG2(4),e.E7m("svgIcon","heroicons_outline:document-text")}},dependencies:[r.If,ie,v.u_,y.sb,y.Iz,y.G4,y.q0,m.y,b.w5,C.cN,E.KO,w.oB,w.qL,d.cP,h.wb,f.oJ,f.Gw,g.d5,v.od,I._A,I.aM,I.OQ,I.yG],encapsulation:2,changeDetection:0})}return o})();var le=s(4864),re=s(4248);const ce=["avatarFileInput"],me=["tagsPanel"],de=["tagsPanelOrigin"],ue=()=>["../"];let he=(()=>{class o{constructor(n,i,t,a,c,G,D,we,ge,ve,be){this._activatedRoute=n,this._changeDetectorRef=i,this._endowmentsListComponent=t,this._endowmentsService=a,this._formBuilder=c,this._fuseConfirmationService=G,this._renderer2=D,this._router=we,this._overlay=ge,this._viewContainerRef=ve,this._beneficiariesService=be,this.editMode=!0,this.tagsEditMode=!1,this._unsubscribeAll=new x.E}ngOnInit(){this._endowmentsListComponent.matDrawer.open(),this.endowmentForm=this._formBuilder.group({id:[""],endowmentName:["",[m.AQ.required]],amount:0,donationDate:[null],beneficiaryId:[""],beneficiary:[""],wealthId:[""],beneficiaryName:[""]}),this._endowmentsService.endowment$.pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this.data=n,this.beneficiaries.forEach(i=>{n.beneficiaryId==i.id&&(this.endowmentData?this.endowmentesData?.push({...n,beneficiaryName:i.name,wealthName:""}):this.endowmentesData=[{...n,beneficiaryName:i.name,wealthName:""}])})}),this._endowmentsService.endowment$.pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this._endowmentsListComponent.matDrawer.open(),this.endowment=n,console.log("this endowment"),this._changeDetectorRef.markForCheck()}),this._beneficiariesService.getIndividualById(this.endowment.beneficiaryId).pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this.endowmentData={...this.endowment,beneficiaryName:n.name,wealthName:""},this.endowmentForm.patchValue(this.endowmentData,{emitEvent:!1}),console.log("individuals",this.beneficiaries)})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this._tagsPanelOverlayRef&&this._tagsPanelOverlayRef.dispose()}getbeneficiaries(){this._beneficiariesService.getIndividuals().pipe((0,u.a)(this._unsubscribeAll)).subscribe(n=>{this.beneficiaries=n,this.beneficiaries.filter(i=>(i.tags.includes("cbde2486-5033-4e09-838e-e901b108cd41"),this.beneficiarydateils=i,this.beneficiarydateils)),console.log("beneficiaries 1",this.beneficiarydateils)})}deleteEndowment(){this._fuseConfirmationService.open({title:"Delete individual",message:"Are you sure you want to delete this individual? This action cannot be undone!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(i=>{"confirmed"===i&&this._endowmentsService.deleteEndowment(this.endowment.id).subscribe(a=>{a&&(this.toggleEditMode(!1),this.closeDrawer(),this._changeDetectorRef.markForCheck())})})}closeDrawer(){return this._endowmentsListComponent.matDrawer.close()}toggleEditMode(n=null){this.closeDrawer()}updateIndividual(){this.endowmentForm.getRawValue()}static#e=this.\u0275fac=function(i){return new(i||o)(e.GI1(d.gV),e.GI1(e.kD9),e.GI1(N),e.GI1(T),e.GI1(m.KE),e.GI1(le.q),e.GI1(e.q87),e.GI1(d.E5),e.GI1(re.mc),e.GI1(e.y8U),e.GI1(A.O))};static#t=this.\u0275cmp=e.In1({type:o,selectors:[["insurances-detail"]],viewQuery:function(i,t){if(1&i&&(e.CC$(ce,5),e.CC$(me,5),e.CC$(de,5)),2&i){let a;e.wto(a=e.Gqi())&&(t._avatarFileInput=a.first),e.wto(a=e.Gqi())&&(t._tagsPanel=a.first),e.wto(a=e.Gqi())&&(t._tagsPanelOrigin=a.first)}},standalone:!0,features:[e.UHJ],decls:33,vars:26,consts:[[1,"flex","flex-col","w-full"],[1,"relative","w-full","h-20","sm:h-20","px-8","sm:px-12","bg-accent-100","dark:bg-accent-700"],[1,"flex","items-center","justify-end","w-full","max-w-3xl","mx-auto","pt-6"],["mat-icon-button","",3,"matTooltip","routerLink"],[1,"text-white",3,"svgIcon"],[1,"relative","flex","flex-col","flex-auto","items-center","px-6","sm:px-12"],[1,"w-full","max-w-3xl"],[3,"formGroup"],[1,"mt-8"],[1,"w-full",3,"subscriptSizing"],["matPrefix","",1,"hidden","sm:flex","icon-size-5",3,"svgIcon"],["matInput","",3,"formControlName","placeholder","spellcheck"],[1,"flex","items-center","mt-10","-mx-6","sm:-mx-12","py-4","pr-4","pl-1","sm:pr-12","sm:pl-7","border-t","bg-gray-50","dark:bg-transparent"],["mat-button","",3,"color","matTooltip","click"],["mat-button","",1,"ml-auto",3,"matTooltip","click"],["mat-flat-button","",1,"ml-2",3,"color","disabled","matTooltip","click"]],template:function(i,t){1&i&&(e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e.wR5(4,"mat-icon",4),e.C$Y()()(),e.I0R(5,"div",5)(6,"div",6)(7,"form",7)(8,"div",8)(9,"mat-form-field",9)(10,"mat-label"),e.OEk(11," Endowment Name"),e.C$Y(),e.wR5(12,"mat-icon",10)(13,"input",11),e.C$Y()(),e.I0R(14,"div",8)(15,"mat-form-field",9)(16,"mat-label"),e.OEk(17," Beneficiary Name"),e.C$Y(),e.wR5(18,"mat-icon",10)(19,"input",11),e.C$Y()(),e.I0R(20,"div",8)(21,"mat-form-field",9)(22,"mat-label"),e.OEk(23," Amount"),e.C$Y(),e.wR5(24,"mat-icon",10)(25,"input",11),e.C$Y()(),e.I0R(26,"div",12)(27,"button",13),e.qCj("click",function(){return t.deleteEndowment()}),e.OEk(28," Delete "),e.C$Y(),e.I0R(29,"button",14),e.qCj("click",function(){return t.toggleEditMode(!1)}),e.OEk(30," Cancel "),e.C$Y(),e.I0R(31,"button",15),e.qCj("click",function(){return t.updateIndividual()}),e.OEk(32," Save "),e.C$Y()()()()()()),2&i&&(e.yG2(3),e.E7m("matTooltip","Close")("routerLink",e.q4q(25,ue)),e.yG2(),e.E7m("svgIcon","heroicons_outline:x-mark"),e.yG2(3),e.E7m("formGroup",t.endowmentForm),e.yG2(2),e.E7m("subscriptSizing","dynamic"),e.yG2(3),e.E7m("svgIcon","heroicons_solid:user-circle"),e.yG2(),e.E7m("formControlName","endowmentName")("placeholder","Name")("spellcheck",!1),e.yG2(2),e.E7m("subscriptSizing","dynamic"),e.yG2(3),e.E7m("svgIcon","heroicons_solid:user-circle"),e.yG2(),e.E7m("formControlName","beneficiaryName")("placeholder","Beneficiary Name")("spellcheck",!1),e.yG2(2),e.E7m("subscriptSizing","dynamic"),e.yG2(3),e.E7m("svgIcon","heroicons_solid:user-circle"),e.yG2(),e.E7m("formControlName","amount")("placeholder","Beneficiary Name")("spellcheck",!1),e.yG2(2),e.E7m("color","warn")("matTooltip","Delete"),e.yG2(2),e.E7m("matTooltip","Cancel"),e.yG2(2),e.E7m("color","primary")("disabled",t.endowmentForm.invalid)("matTooltip","Save"))},dependencies:[f.oJ,f.Gw,f.cP,E.KO,E.a4,d.ER,w.oB,w.qL,m.y,m.sz,m.ot,m.ue,m.u,m.sl,m.uW,m.Wo,R.KE,h.wb,h.Up,h.w5,h.is,C.cN,C.yi,B.Vn,g.d5,R.Ax,L.iU,M.aC],encapsulation:2,changeDetection:0})}return o})();var fe=s(7030);const pe=[{path:"",component:F,resolve:{},children:[{path:"",component:N,children:[{path:":id",component:he,resolve:{endowment:(o,l)=>{const n=(0,e.uUt)(T),i=(0,e.uUt)(d.E5);return n.getEndowmentlById(o.paramMap.get("id")).pipe((0,fe.a)(t=>{console.error(t);const a=l.url.split("/").slice(0,-1).join("/");return i.navigateByUrl(a),(0,Y.c)(t)}))}},canDeactivate:[(o,l,n,i)=>{let t=i.root;for(;t.firstChild;)t=t.firstChild;return!(i.url.includes("/endowment")&&!t.paramMap.get("id"))||o.closeDrawer().then(()=>!0)}]}]}]}]}}]);