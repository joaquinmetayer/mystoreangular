"use strict";(self.webpackChunkjoaquinmetayer=self.webpackChunkjoaquinmetayer||[]).push([[592],{3354:(h,s,c)=>{c.d(s,{s:()=>t});var r=c(4650),a=c(529);class t{constructor(o){this.http=o,this.apiURl="http://localhost:3000/products"}getProducts(){return this.http.get(this.apiURl)}updateStock(o,u){return this.http.patch(`${this.apiURl}/${o}`,{stock:u})}}t.\u0275fac=function(o){return new(o||t)(r.LFG(a.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}}]);