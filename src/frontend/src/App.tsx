import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ClipboardList,
  Facebook,
  FlaskConical,
  Globe,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  User,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Subjects", href: "#subjects" },
  { label: "Features", href: "#features" },
  { label: "Admission", href: "#admission" },
  { label: "Contact Us", href: "#contact" },
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "Mathematics",
    description: "Strong concept building for CHSE students (Class 8, 9 & 10).",
  },
  {
    icon: Globe,
    title: "English",
    description: "Grammar, writing & communicative English improvement.",
  },
  {
    icon: FlaskConical,
    title: "Science",
    description: "Physics, Chemistry & basic Biology in simple explanation.",
  },
  {
    icon: User,
    title: "Personal Guidance",
    description: "Individual attention for every student.",
  },
  {
    icon: ClipboardList,
    title: "Weekly Tests",
    description: "Track your progress regularly.",
  },
  {
    icon: Zap,
    title: "Surprise Tests",
    description: "Improve your real exam performance.",
  },
  {
    icon: MessageCircle,
    title: "Doubt Sessions",
    description: "Clear all your concepts easily.",
  },
];

const COURSES = [
  {
    grade: "Class 8",
    subjects: ["Mathematics", "Science", "English"],
    badge: "Foundation",
  },
  {
    grade: "Class 9",
    subjects: ["Mathematics", "Science", "English"],
    badge: "Intermediate",
  },
  {
    grade: "Class 10",
    subjects: ["Mathematics", "Science", "English"],
    badge: "CHSE Board",
  },
];

const SUBJECTS = [
  {
    icon: "📐",
    title: "Mathematics (Class 8, 9, 10)",
    chapters: [
      "➤ Number System",
      "➤ Algebra",
      "➤ Geometry",
      "➤ Mensuration",
      "➤ Trigonometry",
      "➤ Statistics",
    ],
    note: "Concept + Practice + Tests",
  },
  {
    icon: "📖",
    title: "English (Class 8, 9, 10)",
    chapters: [
      "➤ Grammar",
      "➤ Tense",
      "➤ Essay Writing",
      "➤ Letter Writing",
      "➤ Literature",
      "➤ Spoken English",
    ],
    note: "Spoken + Communicative English",
  },
  {
    icon: "🔬",
    title: "Science (Class 8, 9, 10)",
    chapters: [
      "➤ Physics (Motion, Force, Energy)",
      "➤ Chemistry (Atoms, Reactions)",
      "➤ Biology (Cells, Human Body)",
      "➤ Environment",
      "➤ Experiments & Practical",
    ],
    note: "Easy Explanation + Doubt Clear",
  },
];

export default function App() {
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubject, setOpenSubject] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  // Admission form state
  const [admissionName, setAdmissionName] = useState("");
  const [admissionClass, setAdmissionClass] = useState("");
  const [admissionSubject, setAdmissionSubject] = useState("");
  const [admissionPhone, setAdmissionPhone] = useState("");

  const handleEnrollClick = () => {
    setEnrollOpen(true);
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const generateStudentID = () => {
    return `FT${Math.floor(1000 + Math.random() * 9000)}`;
  };

  const handleAdmissionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const studentId = generateStudentID();
    // Step 1: Open UPI payment
    window.location.href =
      "upi://pay?pa=6371411866@upi&pn=FrontlineTutorial&am=499&cu=INR";
    // Step 2: After 3 seconds, send to WhatsApp
    setTimeout(() => {
      const msg = encodeURIComponent(
        `🎓 New Admission\nID: ${studentId}\nName: ${admissionName}\nClass: ${admissionClass}\nSubject: ${admissionSubject}\nPhone: ${admissionPhone}\nPayment: Done`,
      );
      window.open(`https://wa.me/916371411866?text=${msg}`, "_blank");
    }, 3000);
  };

  const toggleSubject = (title: string) => {
    setOpenSubject((prev) => (prev === title ? null : title));
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "oklch(0.22 0.065 148)" }}
    >
      {/* ==================== HEADER ==================== */}
      <header
        id="home"
        className="sticky top-0 z-50 w-full"
        style={{ backgroundColor: "oklch(0.34 0.08 155)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              type="button"
              className="flex items-center gap-3 group"
              onClick={() => scrollToSection("#home")}
              data-ocid="nav.link"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg font-display font-bold text-sm"
                style={{
                  backgroundColor: "oklch(0.84 0.155 88)",
                  color: "oklch(0.22 0.065 148)",
                }}
              >
                FT
              </div>
              <div className="hidden sm:block text-left">
                <span
                  className="block font-display font-bold text-lg leading-tight"
                  style={{ color: "oklch(0.84 0.155 88)" }}
                >
                  Frontline Tutorial
                </span>
                <span className="block text-xs text-white/60">
                  Classes for Math, English &amp; Science
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md transition-colors hover:bg-white/10"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={handleEnrollClick}
                className="ml-4 font-semibold rounded-full px-6 transition-all hover:scale-105"
                style={{
                  backgroundColor: "oklch(0.84 0.155 88)",
                  color: "oklch(0.22 0.065 148)",
                }}
                data-ocid="nav.primary_button"
              >
                Enroll Now
              </Button>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 text-white rounded-md"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/10"
              style={{ backgroundColor: "oklch(0.30 0.08 155)" }}
            >
              <div className="px-4 py-3 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    data-ocid="nav.link"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2">
                  <Button
                    onClick={handleEnrollClick}
                    className="w-full font-semibold rounded-full"
                    style={{
                      backgroundColor: "oklch(0.84 0.155 88)",
                      color: "oklch(0.22 0.065 148)",
                    }}
                    data-ocid="nav.primary_button"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==================== HERO ==================== */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ minHeight: "80vh" }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-classroom.dim_1400x700.jpg')",
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.065 148 / 0.90) 0%, oklch(0.34 0.08 155 / 0.80) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-28 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border"
              style={{
                backgroundColor: "oklch(0.84 0.155 88 / 0.15)",
                color: "oklch(0.84 0.155 88)",
                borderColor: "oklch(0.84 0.155 88 / 0.4)",
              }}
            >
              Classes for Math, English &amp; Science (Grade 8–10)
            </span>

            <h1
              className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6"
              style={{ color: "oklch(0.84 0.155 88)" }}
            >
              Build Your Future
              <br />
              <span className="text-white">with Us</span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Personal guidance, weekly tests, surprise tests, communicative
              English, and doubt sessions to boost your performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleEnrollClick}
                size="lg"
                className="font-semibold text-base rounded-full px-10 py-6 transition-all hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: "oklch(0.84 0.155 88)",
                  color: "oklch(0.22 0.065 148)",
                }}
                data-ocid="hero.primary_button"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                onClick={() => scrollToSection("#features")}
                variant="outline"
                size="lg"
                className="font-semibold text-base rounded-full px-10 py-6 text-white border-white/40 hover:bg-white/10 hover:text-white"
                data-ocid="hero.secondary_button"
              >
                Explore Features
              </Button>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mt-16 grid grid-cols-3 gap-8 sm:gap-16"
          >
            {[
              { value: "3", label: "Subjects" },
              { value: "3", label: "Grade Levels" },
              { value: "10", label: "Seats / Batch" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display font-bold text-4xl sm:text-5xl"
                  style={{ color: "oklch(0.84 0.155 88)" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section
        id="about"
        className="py-20"
        style={{ backgroundColor: "oklch(0.96 0.008 200)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: "oklch(0.34 0.08 155 / 0.85)" }}
              >
                About Us
              </span>
              <h2
                className="font-display font-bold text-3xl sm:text-4xl leading-tight mb-6"
                style={{ color: "oklch(0.34 0.08 155)" }}
              >
                Why Choose Frontline Tutorial?
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "oklch(0.4 0.01 200)" }}
              >
                At Frontline Tutorial, we believe every student has the
                potential to excel. Our expert-guided classes focus on
                conceptual clarity, regular assessments, and personal attention
                to ensure every student reaches their academic goals.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.4 0.01 200)" }}
              >
                Located at Upperbaruan, Near Mahadev Temple, we provide a
                focused learning environment with small batch sizes of just 10
                students for maximum teacher-student interaction.
              </p>
              <Button
                onClick={handleEnrollClick}
                className="rounded-full px-8 font-semibold"
                style={{
                  backgroundColor: "oklch(0.34 0.08 155)",
                  color: "white",
                }}
                data-ocid="about.primary_button"
              >
                Join Us Today
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: GraduationCap,
                  title: "Expert Faculty",
                  desc: "Dedicated teachers with years of experience",
                },
                {
                  icon: Shield,
                  title: "Safe Learning",
                  desc: "Trusted environment for focused study",
                },
                {
                  icon: ClipboardList,
                  title: "Regular Tests",
                  desc: "Weekly & surprise tests for exam readiness",
                },
                {
                  icon: MessageCircle,
                  title: "Open Doubt Sessions",
                  desc: "Always available to clarify concepts",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: "oklch(0.34 0.08 155 / 0.1)" }}
                  >
                    <item.icon
                      size={20}
                      style={{ color: "oklch(0.34 0.08 155)" }}
                    />
                  </div>
                  <h4
                    className="font-display font-semibold text-sm mb-1"
                    style={{ color: "oklch(0.34 0.08 155)" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "oklch(0.5 0.01 200)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== COURSES ==================== */}
      <section
        id="courses"
        className="py-20"
        style={{ backgroundColor: "oklch(0.22 0.065 148)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.84 0.155 88)" }}
            >
              Our Courses
            </span>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl"
              style={{ color: "white" }}
            >
              Courses for Grade 8–10
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {COURSES.map((course, i) => (
              <motion.div
                key={course.grade}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "oklch(0.34 0.08 155)" }}
                data-ocid={`courses.item.${i + 1}`}
              >
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ backgroundColor: "oklch(0.30 0.09 155)" }}
                >
                  <h3
                    className="font-display font-bold text-xl"
                    style={{ color: "oklch(0.84 0.155 88)" }}
                  >
                    {course.grade}
                  </h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "oklch(0.84 0.155 88 / 0.2)",
                      color: "oklch(0.84 0.155 88)",
                    }}
                  >
                    {course.badge}
                  </span>
                </div>
                <div className="px-6 py-5 space-y-3">
                  {course.subjects.map((subj) => (
                    <div key={subj} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "oklch(0.84 0.155 88)" }}
                      />
                      <span className="text-white/80 text-sm">{subj}</span>
                    </div>
                  ))}
                  <div className="pt-3">
                    <Button
                      onClick={handleEnrollClick}
                      size="sm"
                      className="w-full rounded-full font-semibold text-sm"
                      style={{
                        backgroundColor: "oklch(0.84 0.155 88)",
                        color: "oklch(0.22 0.065 148)",
                      }}
                      data-ocid={`courses.primary_button.${i + 1}`}
                    >
                      Enroll for {course.grade}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SUBJECTS & CHAPTERS ==================== */}
      <section
        id="subjects"
        className="py-20"
        style={{ backgroundColor: "oklch(0.96 0.008 200)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.34 0.08 155 / 0.85)" }}
            >
              Syllabus Coverage
            </span>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl"
              style={{ color: "oklch(0.34 0.08 155)" }}
            >
              📚 Subjects &amp; Chapters
            </h2>
            <p
              className="mt-3 text-base max-w-xl mx-auto"
              style={{ color: "oklch(0.5 0.01 200)" }}
            >
              All chapters are covered for Class 8, 9 &amp; 10 (CHSE)
            </p>
          </motion.div>

          {/* Accordion list */}
          <div className="max-w-2xl mx-auto space-y-3">
            {SUBJECTS.map((subject, i) => {
              const isOpen = openSubject === subject.title;
              return (
                <motion.div
                  key={subject.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: "oklch(0.34 0.08 155)" }}
                  data-ocid={`subjects.item.${i + 1}`}
                >
                  {/* Dropdown trigger button */}
                  <button
                    type="button"
                    onClick={() => toggleSubject(subject.title)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                    style={{
                      backgroundColor: isOpen
                        ? "oklch(0.40 0.08 155)"
                        : "oklch(0.34 0.08 155)",
                    }}
                    aria-expanded={isOpen}
                    data-ocid={`subjects.toggle.${i + 1}`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="text-2xl leading-none"
                        role="img"
                        aria-label={subject.title}
                      >
                        {subject.icon}
                      </span>
                      <span
                        className="font-display font-bold text-lg"
                        style={{ color: "oklch(0.84 0.155 88)" }}
                      >
                        {subject.title}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="flex-shrink-0"
                      style={{ color: "oklch(0.84 0.155 88)" }}
                    >
                      <ChevronDown size={20} />
                    </motion.span>
                  </button>

                  {/* Animated chapter content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="px-6 pb-6 pt-2"
                          style={{ backgroundColor: "oklch(0.40 0.08 155)" }}
                        >
                          <div
                            className="h-px mb-4"
                            style={{
                              backgroundColor: "oklch(0.84 0.155 88 / 0.15)",
                            }}
                          />
                          <ul className="space-y-2.5">
                            {subject.chapters.map((chapter) => (
                              <li
                                key={chapter}
                                className="flex items-start gap-3"
                              >
                                <span
                                  className="text-sm leading-relaxed"
                                  style={{ color: "oklch(0.93 0.05 88)" }}
                                >
                                  {chapter}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div
                            className="mt-4 pt-3 border-t"
                            style={{
                              borderColor: "oklch(0.84 0.155 88 / 0.15)",
                            }}
                          >
                            <p
                              className="text-xs italic"
                              style={{ color: "oklch(1 0 0 / 0.55)" }}
                            >
                              {subject.note}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      <section
        id="features"
        className="py-20"
        style={{ backgroundColor: "oklch(0.96 0.008 200)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.34 0.08 155 / 0.85)" }}
            >
              What We Offer
            </span>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl"
              style={{ color: "oklch(0.34 0.08 155)" }}
            >
              Everything You Need to Excel
            </h2>
            <p
              className="mt-3 text-base max-w-xl mx-auto"
              style={{ color: "oklch(0.5 0.01 200)" }}
            >
              A complete learning ecosystem designed for students in Grade 8, 9
              &amp; 10.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group flex items-start gap-4 p-5 rounded-xl bg-white hover:shadow-card-hover transition-shadow duration-300"
                style={{ boxShadow: "0 2px 12px 0 rgba(0,0,0,0.07)" }}
                data-ocid={`features.item.${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors group-hover:opacity-90"
                  style={{ backgroundColor: "oklch(0.34 0.08 155 / 0.1)" }}
                >
                  <feature.icon
                    size={22}
                    style={{ color: "oklch(0.34 0.08 155)" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-display font-semibold text-base mb-1"
                    style={{ color: "oklch(0.34 0.08 155)" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.5 0.01 200)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA BAND ==================== */}
      <section
        className="py-14"
        style={{ backgroundColor: "oklch(0.34 0.08 155)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: "oklch(0.84 0.155 88)" }}
              >
                Limited Seats Available!
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Only First 10 Students Per Batch
              </h2>
              <p className="text-white/60 mt-2 text-sm">
                Hurry! Reserve your seat before it&apos;s too late.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={handleEnrollClick}
                size="lg"
                className="font-bold text-base rounded-full px-10 py-6 transition-all hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: "oklch(0.84 0.155 88)",
                  color: "oklch(0.22 0.065 148)",
                }}
                data-ocid="cta.primary_button"
              >
                Enroll Now
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== ONLINE ADMISSION ==================== */}
      <section
        id="admission"
        className="py-20"
        style={{ backgroundColor: "oklch(0.96 0.008 200)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.34 0.08 155 / 0.85)" }}
            >
              Apply Now
            </span>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl"
              style={{ color: "oklch(0.34 0.08 155)" }}
            >
              🎓 Online Admission + Payment
            </h2>
            <p
              className="mt-3 text-base max-w-md mx-auto"
              style={{ color: "oklch(0.5 0.01 200)" }}
            >
              Fill your details and apply instantly
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-md mx-auto"
          >
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "white",
                boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
              }}
              data-ocid="admission.card"
            >
              <form onSubmit={handleAdmissionSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="admission-name"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.34 0.08 155)" }}
                  >
                    Your Name
                  </Label>
                  <Input
                    id="admission-name"
                    type="text"
                    placeholder="Your Name"
                    value={admissionName}
                    onChange={(e) => setAdmissionName(e.target.value)}
                    required
                    className="rounded-xl border-gray-200 focus-visible:ring-2"
                    style={{
                      borderColor: "oklch(0.88 0.01 200)",
                    }}
                    data-ocid="admission.input"
                  />
                </div>

                {/* Class */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="admission-class"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.34 0.08 155)" }}
                  >
                    Select Class
                  </Label>
                  <Select
                    value={admissionClass}
                    onValueChange={setAdmissionClass}
                    required
                  >
                    <SelectTrigger
                      id="admission-class"
                      className="rounded-xl w-full"
                      style={{ borderColor: "oklch(0.88 0.01 200)" }}
                      data-ocid="admission.select"
                    >
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Class 8">Class 8</SelectItem>
                      <SelectItem value="Class 9">Class 9</SelectItem>
                      <SelectItem value="Class 10">Class 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="admission-subject"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.34 0.08 155)" }}
                  >
                    Select Subject
                  </Label>
                  <Select
                    value={admissionSubject}
                    onValueChange={setAdmissionSubject}
                    required
                  >
                    <SelectTrigger
                      id="admission-subject"
                      className="rounded-xl w-full"
                      style={{ borderColor: "oklch(0.88 0.01 200)" }}
                      data-ocid="admission.select"
                    >
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Math">Math</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Science">Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <Label
                    htmlFor="admission-phone"
                    className="text-sm font-semibold"
                    style={{ color: "oklch(0.34 0.08 155)" }}
                  >
                    Your Phone Number
                  </Label>
                  <Input
                    id="admission-phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={admissionPhone}
                    onChange={(e) => setAdmissionPhone(e.target.value)}
                    required
                    className="rounded-xl"
                    style={{ borderColor: "oklch(0.88 0.01 200)" }}
                    data-ocid="admission.input"
                  />
                </div>

                {/* WhatsApp Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-white text-base transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] shadow-md"
                  style={{ backgroundColor: "#25D366" }}
                  data-ocid="admission.submit_button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Proceed to Pay &amp; Apply
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "oklch(0.90 0.005 200)" }}
                />
                <span
                  className="text-xs font-medium"
                  style={{ color: "oklch(0.65 0.01 200)" }}
                >
                  or
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: "oklch(0.90 0.005 200)" }}
                />
              </div>

              {/* Call Now Button */}
              <a
                href="tel:6371411866"
                className="block w-full"
                data-ocid="admission.primary_button"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-white text-base transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] shadow-md"
                  style={{ backgroundColor: "#007BFF" }}
                >
                  <Phone size={18} className="flex-shrink-0" />📞 Call Now
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section
        id="contact"
        className="py-20"
        style={{ backgroundColor: "oklch(0.22 0.065 148)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "oklch(0.84 0.155 88)" }}
            >
              Contact Us
            </span>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl"
              style={{ color: "white" }}
            >
              Get in Touch
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: "oklch(0.34 0.08 155)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "oklch(0.84 0.155 88 / 0.15)" }}
              >
                <MapPin size={22} style={{ color: "oklch(0.84 0.155 88)" }} />
              </div>
              <h4
                className="font-display font-semibold mb-2"
                style={{ color: "oklch(0.84 0.155 88)" }}
              >
                Location
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                Upperbaruan,
                <br />
                Near Mahadev Temple
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl text-center"
              style={{ backgroundColor: "oklch(0.34 0.08 155)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "oklch(0.84 0.155 88 / 0.15)" }}
              >
                <Phone size={22} style={{ color: "oklch(0.84 0.155 88)" }} />
              </div>
              <h4
                className="font-display font-semibold mb-2"
                style={{ color: "oklch(0.84 0.155 88)" }}
              >
                Phone
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                +91 63714 11866
                <br />
                +91 70080 38344
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl text-center sm:col-span-2 lg:col-span-1"
              style={{ backgroundColor: "oklch(0.34 0.08 155)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "oklch(0.84 0.155 88 / 0.15)" }}
              >
                <Mail size={22} style={{ color: "oklch(0.84 0.155 88)" }} />
              </div>
              <h4
                className="font-display font-semibold mb-2"
                style={{ color: "oklch(0.84 0.155 88)" }}
              >
                Enroll Now
              </h4>
              <p className="text-white/70 text-sm leading-relaxed mb-3">
                Call us to secure your seat in the upcoming batch.
              </p>
              <Button
                onClick={handleEnrollClick}
                size="sm"
                className="rounded-full font-semibold"
                style={{
                  backgroundColor: "oklch(0.84 0.155 88)",
                  color: "oklch(0.22 0.065 148)",
                }}
                data-ocid="contact.primary_button"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer
        style={{ backgroundColor: "oklch(0.28 0.08 155)" }}
        className="pt-16 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-lg font-display font-bold text-sm"
                  style={{
                    backgroundColor: "oklch(0.84 0.155 88)",
                    color: "oklch(0.22 0.065 148)",
                  }}
                >
                  FT
                </div>
                <span
                  className="font-display font-bold text-lg"
                  style={{ color: "oklch(0.84 0.155 88)" }}
                >
                  Frontline Tutorial
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Quality education for Grade 8–10 students. Building bright
                futures through personal guidance and consistent practice.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h5
                className="font-display font-semibold mb-4"
                style={{ color: "oklch(0.84 0.155 88)" }}
              >
                Quick Links
              </h5>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5
                className="font-display font-semibold mb-4"
                style={{ color: "oklch(0.84 0.155 88)" }}
              >
                Contact
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="text-white/40 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/60 text-sm">
                    Upperbaruan, Near Mahadev Temple
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-white/40 flex-shrink-0" />
                  <span className="text-white/60 text-sm">+91 63714 11866</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-white/40 flex-shrink-0" />
                  <span className="text-white/60 text-sm">+91 70080 38344</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h5
                className="font-display font-semibold mb-4"
                style={{ color: "oklch(0.84 0.155 88)" }}
              >
                Follow Us
              </h5>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                ].map((social) => (
                  <button
                    key={social.label}
                    type="button"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: "oklch(0.84 0.155 88 / 0.15)" }}
                    data-ocid="footer.link"
                  >
                    <social.icon
                      size={17}
                      style={{ color: "oklch(0.84 0.155 88)" }}
                    />
                  </button>
                ))}
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleEnrollClick}
                  size="sm"
                  className="rounded-full font-semibold"
                  style={{
                    backgroundColor: "oklch(0.84 0.155 88)",
                    color: "oklch(0.22 0.065 148)",
                  }}
                  data-ocid="footer.primary_button"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Frontline Tutorial. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Built with{" "}
              <span style={{ color: "oklch(0.84 0.155 88)" }}>♥</span> using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 underline underline-offset-2 transition-colors"
                style={{ color: "oklch(0.84 0.155 88 / 0.7)" }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ==================== ENROLL DIALOG ==================== */}
      <Dialog open={enrollOpen} onOpenChange={setEnrollOpen}>
        <DialogContent
          className="sm:max-w-md"
          style={{
            backgroundColor: "oklch(0.34 0.08 155)",
            border: "1px solid oklch(0.84 0.155 88 / 0.3)",
          }}
          data-ocid="enroll.dialog"
        >
          <DialogHeader>
            <DialogTitle
              className="font-display font-bold text-2xl"
              style={{ color: "oklch(0.84 0.155 88)" }}
            >
              Enroll at Frontline Tutorial
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Reserve your spot today. Seats are limited — only 10 per batch!
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: "oklch(0.28 0.08 155)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone size={18} style={{ color: "oklch(0.84 0.155 88)" }} />
                <span
                  className="font-semibold text-sm"
                  style={{ color: "oklch(0.84 0.155 88)" }}
                >
                  Call to Enroll
                </span>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:6371411866"
                  className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
                  data-ocid="enroll.link"
                >
                  <span>+91 63714 11866</span>
                </a>
                <a
                  href="tel:7008038344"
                  className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
                  data-ocid="enroll.link"
                >
                  <span>+91 70080 38344</span>
                </a>
              </div>
            </div>

            <Button
              onClick={() => {
                setEnrollOpen(false);
                scrollToSection("#admission");
              }}
              className="w-full rounded-full font-semibold"
              style={{
                backgroundColor: "oklch(0.84 0.155 88)",
                color: "oklch(0.22 0.065 148)",
              }}
              data-ocid="enroll.primary_button"
            >
              Online Admission Form
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
