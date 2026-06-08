'use client';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, RadioTower, Cloud, Workflow, ShieldCheck, Gauge } from 'lucide-react';
import { products } from '@/lib/products';
const ProductScene = dynamic(()=>import('@/components/ProductScene'),{ssr:false});

export default function Home(){
 const {scrollYProgress}=useScroll();
 const glow=useTransform(scrollYProgress,[0,1],[.35,1]);
 return <main>
  <nav><b>HELIOS CLOUD</b><div><a href="#products">Products</a><a href="#twins">Digital Twins</a><a href="#command">Command Center</a><a href="#architecture">Architecture</a></div></nav>
  <section className="hero">
    <div className="heroText"><p className="eyebrow">CONNECTED SERVICES · IOT · REAL TIME</p><h1>The premium cloud for connected product intelligence.</h1><p>Helios monitors, controls and analyzes smart products using Java Spring Boot microservices, Kafka event streaming, cloud-native APIs and immersive 3D digital twins.</p><div className="actions"><a href="#products">Explore Products</a><a className="secondary" href="#command">View Command Center</a></div></div>
    <motion.div className="hero3d" style={{opacity:glow}}><ProductScene type="ev"/></motion.div>
  </section>
  <section className="stats"><div><b>1.2M</b><span>Simulated device events/day</span></div><div><b>42ms</b><span>Telemetry API response target</span></div><div><b>99.95%</b><span>Connected services availability goal</span></div><div><b>5</b><span>Product digital twins</span></div></section>
  <section id="products" className="storyIntro"><p className="eyebrow">APPLE-STYLE PRODUCT STORYTELLING</p><h2>Scroll through a premium 3D product ecosystem.</h2><p>Each product is presented as a high-end showcase with real-time telemetry, connected status, firmware signals, cloud commands and event-driven backend integration.</p></section>
  {products.map((p,i)=><section className="productStory" key={p.id}><div className="productCopy"><p className="eyebrow">{p.type}</p><h2>{p.name}</h2><p>{p.desc}</p><div className="telemetry"><span>{p.metric}</span><span>Online</span><span>Firmware v{i+2}.0.{i}</span><span>Kafka topic: telemetry.{p.id}</span></div></div><div className="productCanvas"><ProductScene type={p.id}/></div></section>)}
  <section id="twins" className="dashboard"><div><p className="eyebrow">DIGITAL TWIN EXPERIENCE</p><h2>Real-time product state, not static screenshots.</h2><p>Digital twins react to telemetry events such as battery level, temperature, signal health, firmware state and command execution.</p></div><div className="cards">{['Battery 94%','Temperature 28°C','Signal Excellent','Firmware Healthy','Last Event 2s ago','Command Accepted'].map(x=><div className="glass" key={x}>{x}</div>)}</div></section>
  <section id="command" className="command"><p className="eyebrow">REAL-TIME COMMAND CENTER</p><h2>Kafka streaming events visualized like an enterprise operations console.</h2><div className="terminal">{['DEVICE_REGISTERED → device-service','TELEMETRY_RECEIVED → kafka.telemetry','ANOMALY_DETECTED → analytics-service','COMMAND_SENT → command-service','ALERT_CREATED → notification-service'].map(x=><code key={x}>{x}</code>)}</div></section>
  <section id="architecture" className="architecture"><p className="eyebrow">SPRING BOOT MICROSERVICES</p><h2>Built to match Cognizant Connected Services engineering.</h2><div className="archGrid">{[['API Gateway',Cloud],['Device Service',Cpu],['Kafka Streaming',RadioTower],['Telemetry Service',Gauge],['Analytics Service',Workflow],['Security + JWT',ShieldCheck]].map(([t,Icon]:any)=><div className="arch" key={t}><Icon/><b>{t}</b><p>Java 21 · Spring Boot 3 · REST APIs · Docker · Kubernetes</p></div>)}</div></section>
  <footer>Helios Connected Experience Platform · CGP3 · Java Spring Boot · Kafka · IoT · 3D Product Experience</footer>
 </main>
}
