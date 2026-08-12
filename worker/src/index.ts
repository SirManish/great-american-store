import type { D1Database, ExportedHandler } from "@cloudflare/workers-types";
export interface Env{
  DB:D1Database;
  ADMIN_KEY?:string;
}
const json=(d:any,s=200)=>
  new Response(JSON.stringify(d),{
    status:s,
    headers:{
      "content-type":"application/json",
      "access-control-allow-origin":"*",
      "access-control-allow-methods":"GET,POST,PUT,DELETE,OPTIONS",
      "access-control-allow-headers":"content-type,x-admin-key"}});
export default {async fetch(req,env){const u=new URL(req.url);if(req.method==="OPTIONS")return new Response(null,{headers:{"access-control-allow-origin":"*","access-control-allow-methods":"GET,POST,PUT,DELETE,OPTIONS","access-control-allow-headers":"content-type,x-admin-key"}});if(u.pathname==="/api/health")return json({ok:true,service:"Great American Store API"});if(u.pathname==="/api/products"&&req.method==="GET"){const r=await env.DB.prepare("SELECT id,name,slug,category,price,mrp,stock,image_url,description FROM products WHERE active=1 ORDER BY id DESC").all();return json(r.results)}if(u.pathname==="/api/orders"&&req.method==="POST"){const b:any=await req.json();if(!b?.items?.length)return json({error:"Order must contain items"},400);const r=await env.DB.prepare("INSERT INTO orders(customer_name,phone,address,total,status,payment_method) VALUES(?,?,?,?,?,?)").bind(b.customer_name||"",b.phone||"",b.address||"",Number(b.total||0),"pending",b.payment_method||"cod").run();return json({ok:true,order_id:r.meta.last_row_id},201)}if(u.pathname==="/api/admin/orders"&&req.method==="GET"){if(env.ADMIN_KEY&&req.headers.get("x-admin-key")!==env.ADMIN_KEY)return json({error:"Unauthorized"},401);const r=await env.DB.prepare("SELECT * FROM orders ORDER BY id DESC LIMIT 100").all();return json(r.results)}return json({error:"Not found"},404)}} satisfies ExportedHandler<Env>;
