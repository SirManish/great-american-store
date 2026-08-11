"use client";
import {createContext,useContext,useEffect,useMemo,useState} from "react";import type {Product} from "../lib/products";
type Item={product:Product;qty:number};type Ctx={items:Item[];add:(p:Product)=>void;change:(id:number,d:number)=>void;remove:(id:number)=>void;clear:()=>void;count:number;total:number};
const CartContext=createContext<Ctx|null>(null);
export function CartProvider({children}:{children:React.ReactNode}){const[items,setItems]=useState<Item[]>([]);
useEffect(()=>{try{const x=localStorage.getItem("gas_cart");if(x)setItems(JSON.parse(x))}catch{}},[]);
useEffect(()=>{localStorage.setItem("gas_cart",JSON.stringify(items))},[items]);
const add=(p:Product)=>setItems(a=>{const f=a.find(x=>x.product.id===p.id);return f?a.map(x=>x.product.id===p.id?{...x,qty:Math.min(x.qty+1,p.stock)}:x):[...a,{product:p,qty:1}]});
const change=(id:number,d:number)=>setItems(a=>a.map(x=>x.product.id===id?{...x,qty:Math.max(0,Math.min(x.qty+d,x.product.stock))}:x).filter(x=>x.qty>0));
const remove=(id:number)=>setItems(a=>a.filter(x=>x.product.id!==id));const clear=()=>setItems([]);
const value=useMemo(()=>({items,add,change,remove,clear,count:items.reduce((s,x)=>s+x.qty,0),total:items.reduce((s,x)=>s+x.product.price*x.qty,0)}),[items]);
return <CartContext.Provider value={value}>{children}</CartContext.Provider>}
export function useCart(){const c=useContext(CartContext);if(!c)throw Error("CartProvider missing");return c}
