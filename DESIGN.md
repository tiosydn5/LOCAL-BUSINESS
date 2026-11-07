# DESIGN.md — Design System & Craft Floor

## 1. Visual Direction & Domain Exemplars
- **Creative North Star**: **"The Physical Claim Tag & Telemetry Bench"** — Every surface feels like a calibrated physical workshop instrument or a stamped Tyvek inspection tag attached to a customer's sneaker or motorcycle keyfob.
- **Surface Polarity**:
  - **Public Customer Surface (`index.html`)**: Warm architectural paper (`#F5F4F0`) contrasted against deep obsidian carbon (`#111113`) telemetry modules and crisp `1px` structural hairlines (`#DFDDD6`).
  - **Operational Surfaces (`admin.html`, `analytics.html`, `pitch.html`)**: Intentional Dark Mode (`#0B0B0D` canvas, `#121215` elevated workbenches, `#18181C` interactive rows) with cool neutral stone text (`#F3F2EE`) and zero chromatic mud.
  - **Claim Receipt (`nota.html`)**: High-contrast archival ticket surface with perforated ticket divider geometry and native `@media print` ink-saving thermal layout.

## 2. Color & Atmospheric Polarity (OKLCH / Hex Tokens)
- **Canvas & Surfaces (Customer Light / Archival Paper)**:
  - `--bg-canvas`: `#F5F4F0` (`oklch(0.968 0.005 85)`)
  - `--bg-elevated`: `#FFFFFF` (`oklch(1.0 0 0)`)
  - `--bg-subtle`: `#EBE9E2` (`oklch(0.932 0.008 85)`)
  - `--bg-obsidian`: `#111113` (`oklch(0.175 0.006 270)`)
  - `--border-hairline`: `#DCDAD2` (`oklch(0.885 0.008 85)`)
- **Canvas & Surfaces (Operator Dark / Carbon Workbench)**:
  - `--op-canvas`: `#0B0B0D` (`oklch(0.145 0.005 270)`)
  - `--op-surface`: `#121215` (`oklch(0.182 0.006 270)`)
  - `--op-elevated`: `#18181C` (`oklch(0.215 0.008 270)`)
  - `--op-glass`: `rgba(24, 24, 28, 0.84)` with `backdrop-filter: blur(12px)`
  - `--op-border`: `#242429` (`oklch(0.265 0.008 270)`)
  - `--op-border-strong`: `#34343C` (`oklch(0.335 0.010 270)`)
- **Text Hierarchy**:
  - Light mode: Primary `#111113`, Secondary `#4A4945`, Muted `#78766F`
  - Dark mode: Primary `#F3F2EE`, Secondary `#A09F9A`, Muted `#6E6D68`
- **Tenant Accent & Semantic Status Tokens**:
  - `--brand-accent`: Dynamically injected per tenant (`#D9381E` Vermilion for `crimson`, `#D97706` Signal Amber for `amber`, `#0D9488` Lab Teal for `emerald`, `#2563EB` Cobalt for `cobalt`, `#4F46E5` Slate Indigo for `violet`).
  - `--status-done`: `#10B981` (Stage 5 Ready)
  - `--status-active`: `--brand-accent` (Stages 2–4 In Progress)
  - `--status-queue`: `#F59E0B` (Stage 1 Intake / Inspection)

## 3. Typography & Scannable Hierarchy
- **Primary Sans (`--font-sans`)**: `'Chivo', -apple-system, BlinkMacSystemFont, sans-serif` — A neo-grotesque with confident, industrial geometry that reads cleanly at both display and dense table scales.
- **Technical Monospace (`--font-mono`)**: `'JetBrains Mono', monospace` — Strictly reserved for real codes (`KLK-2601`), Rupiah figures (`Rp 85.000`), durations (`2–3 Hari`), stage indices (`1/5`), and timestamps. Never used as a decorative costume for normal prose.
- **Numeric Discipline**: `font-variant-numeric: tabular-nums` enforced on all prices, receipt codes, metrics, stage counters, and tables.
- **Type Scale**:
  - Hero Headline: `clamp(2.25rem, 4vw + 0.5rem, 3.75rem)`, `font-weight: 800`, `line-height: 1.04`, `letter-spacing: -0.03em`, `text-wrap: balance`
  - Section Heading (`h2`): `clamp(1.5rem, 2.2vw, 2.125rem)`, `font-weight: 700`, `letter-spacing: -0.025em`, `text-wrap: balance`
  - Workbench Heading (`h1`/`h2` in Operate mode): `1.25rem` (`20px`), `font-weight: 700`, `letter-spacing: -0.02em`
  - Body Copy: `0.9375rem` (`15px`) to `1rem` (`16px`), `line-height: 1.6`, `max-width: 62ch`, `text-wrap: pretty`
  - Dense Table / Telemetry Cell: `0.8125rem` (`13px`), `line-height: 1.4`

## 4. Layout, Spatial Architecture & Radii
- **Grid & Rhythm**: 8pt spatial system. Max container width `1240px` on public surfaces; full-bleed workspace with `240px` fixed left rail on operator surfaces.
- **Radius Scale (Strict Craft Floor)**:
  - Structural Panels & Cards: `12px` to `16px` (`rounded-xl` / `rounded-2xl`). Never `28px` or `32px` bloated blobs.
  - Interactive Inputs & Buttons: `10px` (`rounded-[10px]`).
  - Compact Status Chips & Filter Pills: `9999px` (`rounded-full`).
- **Elevation & Borders**: Declare elevation once — crisp `1px solid` structural borders on flat surfaces, or subtle shadow on floating dialogs. Never combine a `1px` border with a wide soft drop-shadow ("ghost card"). Never nest cards inside cards.

## 5. Craft Floor Guardrails (Hard Bans)
- **No Eyebrows / Kickers Above Headings**: Every `<h1>`, `<h2>`, and `<h3>` stands on its own weight without a small uppercase label above it.
- **No Unicode Glyph Icons**: Zero `↗`, `✕`, `★`, `⏱`, `→`, or emoji standing in for icons. Every icon is an inline `<svg>` drawn with a consistent `1.75px` stroke width.
- **Themed Browser Surfaces**: Custom `::selection`, `caret-color`, `:focus-visible` outline rings, `text-underline-offset: 3px`, and custom thin scrollbars across every file.
- **Operate Mode Ergonomics (`admin.html`)**: Inline editing for technician notes directly inside the order table row (no modal required for routine updates), 1-click stage progression buttons (`1`–`5`), and keyboard shortcuts (`/` to search, `N` for new order, `Esc` to close dialogs).
