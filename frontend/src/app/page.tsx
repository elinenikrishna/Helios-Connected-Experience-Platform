'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { products } from '@/data/products';

const HeliosScene = dynamic(() => import('@/components/HeliosScene'), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="logo">HELIOS CLOUD</div>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#digital-twin">Digital Twins</a>
          <a href="#command">Command Center</a>
          <a href="#architecture">Architecture</a>
        </div>
      </nav>

      <section className="hero">
        <motion.div className="hero-copy" initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
          <motion.div variants={fadeUp} className="kicker">Connected Services · IoT · Real Time</motion.div>
          <motion.h1 variants={fadeUp}>The future of connected product intelligence.</motion.h1>
          <motion.p variants={fadeUp}>
            Helios is a premium Connected Device Cloud that monitors, controls, and analyzes smart products through Java Spring Boot microservices, event-driven APIs, and real-time telemetry streams.
          </motion.p>
          <motion.div variants={fadeUp} className="cta-row">
            <a className="btn primary" href="#products">Explore Products</a>
            <a className="btn" href="#command">View Command Center</a>
          </motion.div>
        </motion.div>
        <div className="canvas-wrap"><HeliosScene /></div>
      </section>

      <section id="products" className="section">
        <div className="kicker">Premium Product Showcase</div>
        <h2 className="section-title">Every scroll feels like a flagship product launch.</h2>
        <p className="section-subtitle">
          The website is designed as a cinematic 3D product experience, not just a basic dashboard. Products move, rotate, reveal live telemetry, and tell a connected services story as users scroll.
        </p>
        <div className="product-grid">
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="product-card"
              style={{ ['--accent' as string]: product.accent }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <div className="product-orb" />
              <div className="kicker">{product.category}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="telemetry">
                {product.telemetry.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="digital-twin" className="section story">
        <div className="story-visual">
          <div className="ring" />
          <div className="ring two" />
          <div className="device-core" />
        </div>
        <div className="story-steps">
          <div className="kicker">Scroll Driven Digital Twin</div>
          <h2 className="section-title">3D visual behavior changes with device events.</h2>
          {[
            ['Live State Sync', 'Device models reflect connectivity, health, firmware, alerts, temperature, energy usage, and event status.'],
            ['Product Storytelling', 'Scrolling reveals product layers: exterior design, sensor telemetry, event stream, health score, and AI insight.'],
            ['Premium Experience', 'Glass cards, glow systems, motion transitions, and cinematic depth make it feel like a real enterprise product launch.']
          ].map(([title, text]) => (
            <motion.div className="step" key={title} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="command" className="section">
        <div className="kicker">Real-Time Command Center</div>
        <h2 className="section-title">Streaming device operations powered by event-driven microservices.</h2>
        <p className="section-subtitle">The dashboard simulates a live operations center for connected products, showing fleet metrics, telemetry streams, alerts, and Kafka-style event flow.</p>
        <div className="dashboard">
          <div className="command-panel">
            <div className="metric-row">
              <div className="metric"><strong>12.8K</strong><span>Connected Devices</span></div>
              <div className="metric"><strong>98.7%</strong><span>Fleet Health</span></div>
              <div className="metric"><strong>42ms</strong><span>API Latency</span></div>
            </div>
          </div>
          <div className="events-panel">
            {['telemetry.received', 'device.command.sent', 'firmware.status.updated', 'alert.generated', 'health.score.calculated'].map((event, index) => (
              <div className="event-line" key={event}><span>{event}</span><span>{index + 2}s ago</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="section">
        <div className="kicker">Cloud Native Architecture</div>
        <h2 className="section-title">Built to match Java microservices and IoT platform roles.</h2>
        <div className="architecture">
          <div className="arch-card"><b>API Gateway</b><span>Routes product, telemetry, command, and analytics requests.</span></div>
          <div className="arch-card"><b>Device Service</b><span>Java Spring Boot REST APIs for device lifecycle management.</span></div>
          <div className="arch-card"><b>Kafka Stream</b><span>Asynchronous event flow for real-time device telemetry.</span></div>
          <div className="arch-card"><b>Telemetry Service</b><span>Validates and processes sensor data from connected products.</span></div>
          <div className="arch-card"><b>Analytics Service</b><span>Calculates health scores, usage insights, and alert summaries.</span></div>
        </div>
      </section>

      <footer className="footer">Helios Connected Device Cloud · Java Spring Boot · Kafka · Microservices · Premium 3D Product Experience</footer>
    </main>
  );
}
