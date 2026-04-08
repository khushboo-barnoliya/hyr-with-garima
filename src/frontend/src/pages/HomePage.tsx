import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Calendar,
  ChevronRight,
  Flame,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { ExternalBlob } from "../backend";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { Layout } from "../components/Layout";
import { useAuth } from "../hooks/useAuth";
import { useTestimonials, useTransformations } from "../hooks/useBackend";
import type { Testimonial, Transformation } from "../types";

const makePlaceholderBlob = (url: string): ExternalBlob =>
  ExternalBlob.fromURL(url);

// ─── Sample fallback data ──────────────────────────────────────────────────────
const SAMPLE_TRANSFORMATIONS: Transformation[] = [
  {
    id: BigInt(1),
    clientName: "Priya Sharma",
    description:
      "Lost 22kg in 5 months with personalized training & nutrition coaching.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg",
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg",
    ),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(2),
    clientName: "Rahul Mehta",
    description:
      "Complete body recomposition. Shed body fat while building lean muscle mass.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg",
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg",
    ),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(3),
    clientName: "Anjali Patel",
    description:
      "Post-pregnancy transformation. Regained strength, confidence, and vitality.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg",
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg",
    ),
    createdAt: BigInt(0),
  },
];

const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: BigInt(1),
    clientName: "Priya Sharma",
    content:
      "Garima's approach completely changed my relationship with fitness. The personalized meal plans and training sessions made transformation feel achievable, not overwhelming.",
    rating: BigInt(5),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(2),
    clientName: "Rahul Mehta",
    content:
      "I had tried everything before HYR. In 4 months I lost 15kg and built real muscle. The tracking tools kept me accountable and the results speak for themselves.",
    rating: BigInt(5),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(3),
    clientName: "Anjali Patel",
    content:
      "After my pregnancy I felt lost. Garima created a program tailored to my body and goals. I'm stronger now than before — truly life-changing.",
    rating: BigInt(5),
    createdAt: BigInt(0),
  },
];

const STATS = [
  { value: "500+", label: "Transformations", icon: Zap },
  { value: "98%", label: "Success Rate", icon: TrendingUp },
  { value: "6+", label: "Years Experience", icon: Award },
  { value: "1,200+", label: "Active Members", icon: Users },
];

const FEATURES = [
  {
    icon: TrendingUp,
    iconColor: "text-primary",
    title: "Personalized Training",
    desc: "Custom programs built around your goals, schedule, and current fitness level.",
    href: "/booking" as const,
    cta: "Book a Session",
    ocid: "feature-training",
  },
  {
    icon: Flame,
    iconColor: "text-accent",
    title: "Nutrition Hub",
    desc: "Tailored meal plans, macro tracking, and downloadable recipe guides.",
    href: "/nutrition" as const,
    cta: "Explore Nutrition",
    ocid: "feature-nutrition",
  },
  {
    icon: Award,
    iconColor: "text-primary",
    title: "Progress Portal",
    desc: "Log measurements weekly and watch your transformation unfold through charts.",
    href: "/progress" as const,
    cta: "Track Progress",
    ocid: "feature-progress",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          className={
            star <= rating ? "fill-accent text-accent" : "text-muted-foreground"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  item,
  index,
}: { item: Testimonial; index: number }) {
  const initials = item.clientName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      data-ocid={`testimonial-card-${item.id}`}
      className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/40 transition-smooth shadow-subtle hover:shadow-elevated"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
            <span className="font-display font-bold text-primary text-sm">
              {initials}
            </span>
          </div>
          <div>
            <p className="font-display font-semibold text-foreground text-sm">
              {item.clientName}
            </p>
          </div>
        </div>
        <StarRating rating={Number(item.rating)} />
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
        &ldquo;{item.content}&rdquo;
      </p>
    </motion.div>
  );
}

function TransformationPreviewCard({
  item,
  index,
}: { item: Transformation; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      data-ocid={`transformation-card-${item.id}`}
      className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth shadow-subtle hover:shadow-elevated group"
    >
      <BeforeAfterSlider
        beforeImage={item.beforeImage.getDirectURL()}
        afterImage={item.afterImage.getDirectURL()}
        className="aspect-[4/3]"
        initialPosition={44}
      />
      <div className="p-5">
        <h3 className="font-display font-bold text-foreground mb-1">
          {item.clientName}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { data: transformations, isLoading: tLoading } = useTransformations();
  const { data: testimonials, isLoading: testLoading } = useTestimonials();
  const { isAuthenticated, handleLogin } = useAuth();

  const displayTransformations =
    transformations && transformations.length > 0
      ? transformations.slice(0, 3)
      : SAMPLE_TRANSFORMATIONS;

  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials.slice(0, 3)
      : SAMPLE_TESTIMONIALS;

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        data-ocid="hero-section"
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.10 0.015 280) 0%, oklch(0.14 0.04 220) 40%, oklch(0.12 0.06 185) 70%, oklch(0.09 0.02 280) 100%)",
        }}
      >
        {/* BG orbs */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.22 185 / 0.6) 0%, transparent 70%)",
            transform: "translate(30%, -20%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.25 55 / 0.5) 0%, transparent 70%)",
            transform: "translate(-20%, 20%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.68 0.22 185) 1px, transparent 1px), linear-gradient(90deg, oklch(0.68 0.22 185) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge
                  variant="outline"
                  className="border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase px-4 py-1.5 gap-2"
                >
                  <Flame size={12} aria-hidden="true" />
                  Fitness Transformation Studio
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-black leading-none tracking-tight"
              >
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl"
                  style={{ color: "oklch(0.68 0.22 185)" }}
                >
                  REWRITE
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-foreground">
                  YOUR STORY.
                </span>
                <span
                  className="block text-3xl sm:text-4xl lg:text-5xl mt-1"
                  style={{ color: "oklch(0.72 0.25 55)" }}
                >
                  TRANSFORM WITH GARIMA.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-muted-foreground text-lg leading-relaxed max-w-lg"
              >
                Science-backed training, personalized nutrition, and a proven
                system that has transformed 500+ lives. Your body&apos;s
                potential is waiting — let&apos;s unlock it together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <Button
                  asChild
                  size="lg"
                  data-ocid="hero-cta-book"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-base px-8 shadow-elevated transition-smooth"
                >
                  <Link to="/booking">
                    <Calendar size={18} className="mr-2" aria-hidden="true" />
                    Book Session
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  data-ocid="hero-cta-gallery"
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 font-display font-bold text-base px-8 transition-smooth"
                >
                  <Link to="/gallery">
                    View Transformations
                    <ChevronRight
                      size={18}
                      className="ml-1"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
                {!isAuthenticated && (
                  <Button
                    variant="ghost"
                    size="lg"
                    data-ocid="hero-cta-login"
                    onClick={handleLogin}
                    className="text-muted-foreground hover:text-foreground font-display font-bold text-base px-8"
                  >
                    Member Login
                  </Button>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3 pt-2"
              >
                <div className="flex -space-x-2">
                  {["P", "R", "A", "K"].map((initial) => (
                    <div
                      key={initial}
                      aria-hidden="true"
                      className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-xs font-display font-bold text-primary-foreground"
                      style={{
                        background: `oklch(${0.55 + ["P", "R", "A", "K"].indexOf(initial) * 0.04} 0.22 185)`,
                      }}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">
                    1,200+ members
                  </span>{" "}
                  transformed their lives
                </p>
              </motion.div>
            </div>

            {/* Before/After Hero Slider */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-2xl opacity-30"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.22 185 / 0.4), oklch(0.72 0.25 55 / 0.2))",
                    filter: "blur(20px)",
                  }}
                />
                <BeforeAfterSlider
                  beforeImage="/assets/generated/transformation-placeholder.dim_600x400.jpg"
                  afterImage="/assets/generated/hero-transformation.dim_1200x700.jpg"
                  className="relative rounded-2xl shadow-elevated w-full aspect-[4/3]"
                  initialPosition={42}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section className="bg-card border-y border-border" data-ocid="stats-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-black text-2xl text-foreground leading-none">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 tracking-wide">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATION PREVIEW ────────────────────────────────────────── */}
      <section
        id="gallery-preview"
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.12 0.008 280) 0%, oklch(0.14 0.015 250) 100%)",
        }}
        data-ocid="transformations-preview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="border-accent/40 text-accent bg-accent/10 text-xs tracking-widest uppercase mb-4"
            >
              Proven Results
            </Badge>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight">
              REAL RESULTS.{" "}
              <span style={{ color: "oklch(0.72 0.25 55)" }}>
                INSPIRING STORIES.
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Drag the slider to see the incredible transformations our members
              have achieved with our personalized programs.
            </p>
          </motion.div>

          {tLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {["sk-t1", "sk-t2", "sk-t3"].map((k) => (
                <div key={k} className="flex flex-col gap-3">
                  <Skeleton className="w-full aspect-[4/3] rounded-xl" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-full" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {displayTransformations.map((item, i) => (
                <TransformationPreviewCard
                  key={String(item.id)}
                  item={item}
                  index={i}
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-10"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="btn-view-gallery"
              className="border-primary/40 text-primary hover:bg-primary/10 font-display font-bold gap-2"
            >
              <Link to="/gallery">
                More Success Stories
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── SUCCESS STORIES ───────────────────────────────────────────────── */}
      <section
        className="py-20 bg-muted/30 border-y border-border"
        data-ocid="success-stories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="border-primary/40 text-primary bg-primary/10 text-xs tracking-widest uppercase mb-4"
            >
              Client Testimonials
            </Badge>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight">
              WHAT OUR{" "}
              <span style={{ color: "oklch(0.68 0.22 185)" }}>MEMBERS SAY</span>
            </h2>
          </motion.div>

          {testLoading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {["s-a", "s-b", "s-c"].map((k) => (
                <Skeleton key={k} className="h-52 rounded-xl" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {displayTestimonials.map((item, i) => (
                <TestimonialCard key={String(item.id)} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── FEATURES / PROGRAMS ───────────────────────────────────────────── */}
      <section className="py-20 bg-background" data-ocid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground tracking-tight">
              EVERYTHING YOU NEED TO{" "}
              <span style={{ color: "oklch(0.68 0.22 185)" }}>TRANSFORM</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-card border border-border rounded-xl p-7 flex flex-col gap-4 hover:border-primary/40 hover:shadow-elevated transition-smooth group"
                  data-ocid={feature.ocid}
                >
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-smooth">
                    <Icon
                      size={24}
                      className={feature.iconColor}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="mt-auto w-fit border-border text-foreground hover:bg-muted/60 transition-smooth"
                  >
                    <Link to={feature.href}>
                      {feature.cta}
                      <ChevronRight
                        size={14}
                        className="ml-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section
        data-ocid="bottom-cta"
        className="relative py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.14 0.04 220) 0%, oklch(0.10 0.02 280) 50%, oklch(0.13 0.05 185) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.68 0.22 185 / 0.8), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.72 0.25 55 / 0.6), transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight leading-tight">
              YOUR TRANSFORMATION{" "}
              <span style={{ color: "oklch(0.68 0.22 185)" }}>
                STARTS TODAY
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Join 1,200+ members who have transformed their bodies and minds
              with Garima&apos;s proven system.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                data-ocid="cta-book-now"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold text-lg px-10 py-6 shadow-elevated transition-smooth"
              >
                <Link to="/booking">
                  <Calendar size={18} className="mr-2" aria-hidden="true" />
                  Start Your Journey
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                data-ocid="cta-gallery"
                className="text-foreground hover:bg-foreground/5 font-display font-bold text-lg px-10 py-6"
              >
                <Link to="/gallery">See Proof First</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
