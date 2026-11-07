# PRODUCT.md — Multi-Tenant Workshop SaaS & Live Service Telemetry

## Audience
1. **End Customers (`index.html`, `nota.html`)**: Urban sneaker collectors and motorcycle enthusiasts in Indonesia dropping off high-value items (Rp 1.5M–20M sneakers or Rp 30M–250M motorcycles) at local specialist workshops. They suffer from "service anxiety" (wondering if their item is being worked on, sitting in a pile, or ready for pickup) and hate messaging WhatsApp admins repeatedly just to ask for status updates.
2. **Workshop Cashiers & Technicians (`admin.html`)**: Front-desk operators and detailers working in busy physical studios with wet/gloved hands or fast customer queues. They need 1-click stage progression (Stages 1 to 5), inline technician note updates without modal friction, rapid order intake, and instant WhatsApp notification dispatch.
3. **Workshop Owners & SaaS Agency Pitchers (`analytics.html`, `pitch.html`, `admin.html`)**: Local business owners tracking revenue, active queue load, and service pricing, plus SaaS agency operators who need to clone a complete, branded store instance (`?mitra=slug`) in under 10 seconds during a live walk-in sales pitch.

## Jobs To Be Done
- **Zero-Chat Order Tracking (`index.html`)**: A customer enters their receipt code (e.g., `KLK-2601` or `MTL-2601`) or clicks a WhatsApp receipt link and immediately sees the exact 5-stage workshop progress, technician bench note, ETA, and item inspection telemetry.
- **Self-Serve Cost Estimation & Booking (`index.html`)**: A customer selects their treatment package, adds optional care add-ons, chooses Drop-Off vs. Pickup-Delivery, sees an itemized fare calculation, and dispatches a structured WhatsApp booking payload.
- **High-Speed Workshop Queue Operation (`admin.html`)**: A cashier filters orders by stage, advances an item from Stage 1 to Stage 5 with a single click, edits technician notes inline in the table row, creates new orders, and manages service pricing (`ws_services`).
- **Instant Multi-Tenant Store Duplication (`admin.html`, `pitch.html`)**: An agency seller enters a prospect workshop's name, city branch, and niche (`sneakers_care` or `moto_detailing`), invoking `duplicate_ws_tenant` (Supabase RPC + LocalStorage fallback) to spin up a live, custom-branded tenant URL on the spot.
- **Financial & Operational Telemetry (`analytics.html`)**: An owner audits collected vs. pipeline revenue, average ticket size, stage distribution, and exports a clean CSV ledger.
- **Physical & Digital Claim Ticket (`nota.html`)**: Generates an authentic workshop claim tag with a scannable QR code and `@media print` support for 80mm thermal printers or physical hang-tags.

## Brand & Feel
- **Precision Workshop Telemetry** — Inspired by physical Tyvek garment/repair hang-tags, Leica/Braun instrument readouts, and Swiss railway split-flap clarity.
- **Anti-Exemplars**: Generic purple/pink SaaS dashboards, bloated e-commerce templates with social media like/share buttons, decorative eyebrows above every heading, nested boxes inside boxes, and vague marketing fluff.
