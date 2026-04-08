import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { Calendar, ChevronRight, Filter, Search, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ExternalBlob } from "../backend";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";
import { Layout } from "../components/Layout";
import { useTestimonials, useTransformations } from "../hooks/useBackend";
import type { Testimonial, Transformation } from "../types";

// ─── Fallback data ──────────────────────────────────────────────────────────
const makePlaceholderBlob = (url: string): ExternalBlob =>
  ExternalBlob.fromURL(url);

const SAMPLE_TRANSFORMATIONS: Transformation[] = [
  {
    id: BigInt(1),
    clientName: "Priya Sharma",
    description:
      "Lost 22kg in 5 months with personalized training & nutrition coaching. Completely transformed her fitness mindset.",
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
      "Complete body recomposition. Shed body fat while building lean muscle mass through structured progressive training.",
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
      "Post-pregnancy fitness transformation. Regained strength, confidence, and vitality through a carefully designed program.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg",
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg",
    ),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(4),
    clientName: "Vikram Nair",
    description:
      "From sedentary lifestyle to competitive physique. 8-month journey of discipline, nutrition, and consistent training.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg",
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg",
    ),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(5),
    clientName: "Sneha Gupta",
    description:
      "Athletic performance upgrade. Focused on functional strength and body composition for marathon running goals.",
    beforeImage: makePlaceholderBlob(
      "/assets/generated/transformation-placeholder.dim_600x400.jpg",
    ),
    afterImage: makePlaceholderBlob(
      "/assets/generated/hero-transformation.dim_1200x700.jpg",
    ),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(6),
    clientName: "Arjun Kapoor",
    description:
      "Busy professional who found balance. Lost significant weight and built sustainable healthy habits for life.",
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
      "Garima's approach completely changed my relationship with fitness. The personalized meal plans and training sessions made transformation feel achievable.",
    rating: BigInt(5),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(2),
    clientName: "Rahul Mehta",
    content:
      "I had tried everything before HYR. In 4 months I lost 15kg and built real muscle. The tracking tools kept me accountable.",
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
  {
    id: BigInt(4),
    clientName: "Vikram Nair",
    content:
      "8 months of consistent effort with Garima's guidance and I'm unrecognisable. The nutrition hub made it so easy to stay on track.",
    rating: BigInt(5),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(5),
    clientName: "Sneha Gupta",
    content:
      "Running my first marathon was a dream. HYR's athletic performance program helped me hit it while achieving the best body composition of my life.",
    rating: BigInt(5),
    createdAt: BigInt(0),
  },
  {
    id: BigInt(6),
    clientName: "Arjun Kapoor",
    content:
      "I was skeptical at first but the results after just 3 months were undeniable. Garima's system is structured, supportive, and it actually works.",
    rating: BigInt(4),
    createdAt: BigInt(0),
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={
            star <= rating ? "fill-accent text-accent" : "text-muted-foreground"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TransformationCard({
  item,
  index,
}: { item: Transformation; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      data-ocid={`transformation-card-${item.id}`}
      className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-smooth shadow-subtle hover:shadow-elevated group"
    >
      <BeforeAfterSlider
        beforeImage={item.beforeImage.getDirectURL()}
        afterImage={item.afterImage.getDirectURL()}
        className="w-full aspect-[4/3]"
        initialPosition={44}
      />
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <p className="font-display font-bold text-foreground">
            {item.clientName}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border text-xs text-muted-foreground">
          <Calendar size={12} aria-hidden="true" />
          <span>
            {new Date(
              Number(item.createdAt) / 1_000_000 || Date.now(),
            ).toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </motion.div>
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
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
    >
      <Card className="h-full bg-card border-border hover:border-primary/30 transition-smooth shadow-subtle">
        <CardContent className="p-5 flex flex-col gap-3 h-full">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-primary text-xs">
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
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function GalleryPage() {
  const { data: transformations, isLoading: tLoading } = useTransformations();
  const { data: testimonials, isLoading: testLoading } = useTestimonials();
  const [search, setSearch] = useState("");

  const displayTransformations =
    transformations && transformations.length > 0
      ? transformations
      : SAMPLE_TRANSFORMATIONS;
  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials
      : SAMPLE_TESTIMONIALS;

  const filtered = displayTransformations.filter((t) => {
    return (
      !search ||
      t.clientName.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Layout>
      {/* ── PAGE HEADER ──────────────────────────────────────────────────── */}
      <section
        className="py-16 border-b border-border relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.12 0.02 280) 0%, oklch(0.15 0.04 215) 60%, oklch(0.12 0.03 185) 100%)",
        }}
        data-ocid="gallery-header"
      >
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.22 185 / 0.7), transparent 60%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center flex flex-col items-center gap-4"
          >
            <Badge
              variant="outline"
              className="border-accent/40 text-accent bg-accent/10 text-xs tracking-widest uppercase"
            >
              Transformation Gallery
            </Badge>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight">
              PROOF OF{" "}
              <span style={{ color: "oklch(0.68 0.22 185)" }}>
                TRANSFORMATION
              </span>
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              Real people, real results. Drag the sliders on any card to witness
              incredible before &amp; after transformations.
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
              <span className="font-display font-bold text-foreground text-xl">
                {displayTransformations.length}
              </span>
              <span>transformations documented</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS GRID ─────────────────────────────────────────── */}
      <section className="py-14 bg-background" data-ocid="transformations-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-sm">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                placeholder="Search transformations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-card border-border"
                data-ocid="gallery-search"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter size={15} aria-hidden="true" />
              <span>{filtered.length} results</span>
            </div>
          </div>

          {/* Grid */}
          {tLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"].map((k) => (
                <div key={k} className="flex flex-col gap-3">
                  <Skeleton className="w-full aspect-[4/3] rounded-xl" />
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-8 w-1/2" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div
              data-ocid="gallery-empty"
              className="text-center py-20 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                <Search
                  size={28}
                  className="text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">
                No transformations found
              </h3>
              <p className="text-muted-foreground max-w-sm">
                Try adjusting your search to find the transformation stories
                you&apos;re looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => setSearch("")}
                className="border-primary/40 text-primary hover:bg-primary/10"
              >
                Clear search
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, i) => (
                <TransformationCard
                  key={String(item.id)}
                  item={item}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SUCCESS STORIES ──────────────────────────────────────────────── */}
      <section
        className="py-20 border-t border-border"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.14 0.015 250) 0%, oklch(0.12 0.008 280) 100%)",
        }}
        data-ocid="gallery-testimonials"
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
              Client Stories
            </Badge>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-foreground tracking-tight">
              IN THEIR{" "}
              <span style={{ color: "oklch(0.72 0.25 55)" }}>OWN WORDS</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Every transformation is a human story. Read what our members have
              to say about their journey with HYR.
            </p>
          </motion.div>

          {testLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {["tsk-1", "tsk-2", "tsk-3", "tsk-4", "tsk-5", "tsk-6"].map(
                (k) => (
                  <Skeleton key={k} className="h-48 rounded-xl" />
                ),
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayTestimonials.map((item, i) => (
                <TestimonialCard key={String(item.id)} item={item} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-20 bg-card border-t border-border"
        data-ocid="gallery-cta"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl text-foreground tracking-tight">
              READY TO BE OUR{" "}
              <span style={{ color: "oklch(0.68 0.22 185)" }}>
                NEXT SUCCESS STORY?
              </span>
            </h2>
            <p className="text-muted-foreground">
              Book your first personalized training session and start your
              transformation journey today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                asChild
                size="lg"
                data-ocid="gallery-cta-book"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold px-8 gap-2 shadow-elevated"
              >
                <Link to="/booking">
                  <Calendar size={18} aria-hidden="true" />
                  Book Your Session
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                data-ocid="gallery-cta-home"
                className="border-border text-foreground hover:bg-muted/50 font-display font-bold px-8 gap-2"
              >
                <Link to="/">
                  Back to Home
                  <ChevronRight size={18} aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
