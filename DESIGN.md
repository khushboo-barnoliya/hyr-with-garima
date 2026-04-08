# Design Brief

## Direction

HYR with Garima — Premium fitness transformation studio featuring bold, energetic, goal-driven design that celebrates progress and community.

## Tone

Bold and athletic with high-energy confidence; dark mode conveys focus and power while warm accents motivate action.

## Differentiation

Before-and-after transformation sliders paired with progress visualization charts create immediate visual proof of results; member achievements badges with glow effects reward milestones.

## Color Palette

| Token       | OKLCH         | Role                              |
| ----------- | ------------- | --------------------------------- |
| background  | 0.12 0.008 280 | Deep navy, full-screen foundation |
| foreground  | 0.92 0.01 280  | High contrast text, confidence    |
| card        | 0.18 0.01 280  | Elevated surface for content      |
| primary     | 0.68 0.22 185  | Electric teal, CTAs and progress  |
| accent      | 0.72 0.25 55   | Warm gold, highlights and warmth  |
| muted       | 0.25 0.02 280  | Secondary surface emphasis        |
| destructive | 0.55 0.22 25   | Red for warnings/dismissals       |

## Typography

- Display: Space Grotesk — geometric, modern, athletic; hero text, section headings, badges
- Body: DM Sans — clean, legible, contemporary; paragraphs, UI labels, micro-copy
- Mono: Geist Mono — data display, nutrition macros, progress tables
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Cards elevated 8–24px with subtle to emphasized shadows; no floating orbs; depth through layered surface darkness and border emphasis on primary zones (header, footer).

## Structural Zones

| Zone    | Background      | Border                  | Notes                                      |
| ------- | --------------- | ----------------------- | ------------------------------------------ |
| Header  | card (0.18)     | accent gold bottom      | Solid navigation, logo, brand color anchor |
| Content | background      | none                    | Alternates card/muted surfaces per section |
| Gallery | card (0.18)     | none                    | Hero before-and-after slider centered      |
| Cards   | card (0.18)     | subtle primary glow     | Success stories, member progress           |
| Footer  | muted (0.25)    | accent gold top         | Links, social, copyright                   |

## Spacing & Rhythm

Spacious vertical rhythm with 6rem gaps between sections; 1.5rem padding within cards; micro-spacing (0.5rem) for badges and inline elements; no crowding — each section breathes.

## Component Patterns

- Buttons: primary (electric teal bg, dark text) for CTA, secondary (dark bg, teal border) for secondary, accent (warm gold) for exclusive actions
- Cards: 8px radius, subtle shadow, thin primary border on hover, smooth transition
- Badges: 4px radius, teal or gold foreground, dark background, uppercase label, glow on achievement badges
- Before-after slider: centered full-width on gallery hero, smooth 300ms transition on drag

## Motion

- Entrance: fade-in (400ms) on page load, slide-up (500ms) on section scroll
- Hover: smooth color shift (300ms), shadow elevation on cards, scale +2% on buttons
- Decorative: pulse-glow (2s infinite) on achievement badges, subtle shimmer on progress charts

## Constraints

- No bounding max-widths on full-width sections; hero gallery spans edge-to-edge
- Charts use warm gradient (teal → gold) for cohesion with brand accents
- All body text ≥16px for readability on small screens; no text clipping

## Signature Detail

Electric teal accent paired with warm gold creates energy + warmth duality; member progress charts fade from teal (start) to gold (goal reached) visualizing transformation journey from beginning to achievement.
