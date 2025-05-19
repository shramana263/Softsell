import { useState } from "react"
import { ChevronRight, CheckCircle, ArrowRight, Star, Upload, DollarSign, CreditCard, Menu } from "lucide-react"
import { Button } from "../components/ui/button"
import ModeToggle from "../components/ModeToggle"
import ContactForm from "../components/ContactForm"
import type { Page } from "../App"
import ChatWidget from "@/components/ChatWidget"
import { motion, AnimatePresence } from "framer-motion"

interface HomePageProps {
    navigate: (page: Page) => void
}

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const hoverVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3
        }
    }
}

export default function HomePage({ navigate }: HomePageProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="px-20 flex h-16 items-center justify-between">
                    <motion.div 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">S</div>
                        </div>
                        <span className="text-xl font-bold">SoftSell</span>
                    </motion.div>
                    <nav className="hidden md:flex gap-6">
                        {['how-it-works', 'why-choose-us', 'testimonials', 'contact'].map((section) => (
                            <motion.a
                                key={section}
                                href={`#${section}`}
                                className="text-sm font-medium hover:text-primary"
                                variants={itemVariants}
                                whileHover={{ y: -2 }}
                            >
                                {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </motion.a>
                        ))}
                    </nav>
                    <motion.div 
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ModeToggle />
                        <div className="hidden md:flex">
                            <Button variant="outline" onClick={() => navigate("login")}>
                                Log In
                            </Button>
                        </div>
                        <Button>Get Started</Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </motion.div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div 
                            className="md:hidden border-t"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="container py-3 space-y-2">
                                {['how-it-works', 'why-choose-us', 'testimonials', 'contact'].map((section) => (
                                    <motion.a
                                        key={section}
                                        href={`#${section}`}
                                        className="block py-2 text-sm font-medium hover:text-primary"
                                        onClick={() => setMobileMenuOpen(false)}
                                        variants={itemVariants}
                                    >
                                        {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </motion.a>
                                ))}
                                <motion.button
                                    className="block py-2 text-sm font-medium hover:text-primary w-full text-left"
                                    onClick={() => {
                                        setMobileMenuOpen(false)
                                        navigate("login")
                                    }}
                                    variants={itemVariants}
                                >
                                    Log In
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-800/20 dark:to-teal-800/20" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAgMmgxdi00aC0xdjR6TTI0IDMwaDR2MWgtNHYtMXptMCAyaDF2LTRoLTF2NHptLTUgMGg0djFoLTR2LTF6bTAgMmgxdi00aC0xdjR6bS01LTRoNHYxaC00di0xem0wIDJoMXYtNGgtMXY0em0tNSAwaDF2LTRoLTF2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
                    <div className="md:px-40 relative">
                        <motion.div 
                            className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px] xl:gap-20"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="flex flex-col justify-center space-y-4"
                                variants={itemVariants}
                            >
                                <div className="space-y-2">
                                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                                        Turn Unused Software Licenses Into{" "}
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                                            Cash
                                        </span>
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        SoftSell helps businesses recover value from unused software licenses with our secure, transparent,
                                        and efficient resale platform.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <motion.div whileHover="hover" variants={hoverVariants}>
                                        <Button size="lg" className="group">
                                            Sell My Licenses
                                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover="hover" variants={hoverVariants}>
                                        <Button size="lg" variant="outline">
                                            Get a Quote
                                        </Button>
                                    </motion.div>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    {['Secure', 'Fast Payments', 'Verified Buyers'].map((feature) => (
                                        <motion.div 
                                            key={feature}
                                            className="flex items-center gap-1"
                                            variants={itemVariants}
                                        >
                                            <CheckCircle className="h-4 w-4 text-green-500" />
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div 
                                className="flex items-center justify-center"
                                variants={itemVariants}
                            >
                                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
                                    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 blur-3xl" />
                                    <motion.div 
                                        className="absolute inset-0 flex items-center justify-center"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] rounded-2xl bg-white/90 dark:bg-gray-700/90 shadow-xl backdrop-blur-sm">
                                            <motion.div 
                                                className="absolute -top-4 -right-4 h-20 w-20 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm p-4 shadow-lg"
                                                initial={{ rotate: 0 }}
                                                whileHover={{ rotate: 5 }}
                                            >
                                                Up to 70% Recovery
                                            </motion.div>
                                            <div className="p-6 flex flex-col h-full justify-between">
                                                <div className="space-y-4">
                                                    <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                                                        <CreditCard className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                                                    </div>
                                                    <h3 className="text-2xl font-bold">Software License Marketplace</h3>
                                                    <p className="text-muted-foreground">
                                                        Connect with verified buyers looking for exactly what you're selling.
                                                    </p>
                                                </div>
                                                <div className="space-y-4">
                                                    <motion.div 
                                                        className="grid grid-cols-2 gap-4"
                                                        variants={containerVariants}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        viewport={{ once: true }}
                                                    >
                                                        {[
                                                            { name: 'Adobe CC', value: '$345' },
                                                            { name: 'Microsoft 365', value: '$189' },
                                                            { name: 'AutoCAD', value: '$780' },
                                                            { name: 'Salesforce', value: '$420' }
                                                        ].map((software) => (
                                                            <motion.div 
                                                                key={software.name}
                                                                className="rounded-lg border p-3"
                                                                variants={itemVariants}
                                                            >
                                                                <div className="font-medium">{software.name}</div>
                                                                <div className="text-sm text-muted-foreground">{software.value} avg. value</div>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                    <motion.div whileHover="hover" variants={hoverVariants}>
                                                        <Button className="w-full">View All Software</Button>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="py-20">
                    <div className="md:px-40">
                        <motion.div 
                            className="flex flex-col items-center text-center mb-12"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400 mb-4">
                                Simple Process
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                Our streamlined process makes selling your unused software licenses quick and profitable.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="grid gap-8 md:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: <Upload className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
                                    title: 'Upload License',
                                    description: 'Submit your license details through our secure portal. We support all major software vendors.',
                                    step: 1
                                },
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6 text-teal-600 dark:text-teal-400"
                                        >
                                            <path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M16 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M14.5 14.5l-4.5 -4.5" />
                                            <path d="M18 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                            <path d="M15 6l-6 6" />
                                            <path d="M6 8m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        </svg>
                                    ),
                                    title: 'Get Valuation',
                                    description: 'Receive a competitive market valuation within 24 hours based on current demand and license type.',
                                    step: 2
                                },
                                {
                                    icon: <DollarSign className="h-6 w-6 text-teal-600 dark:text-teal-400" />,
                                    title: 'Get Paid',
                                    description: 'Accept our offer and receive payment via your preferred method within 3 business days.',
                                    step: 3
                                }
                            ].map((step) => (
                                <motion.div 
                                    key={step.title}
                                    className="relative group"
                                    variants={itemVariants}
                                    whileHover="hover"
                                    // variants={hoverVariants}
                                >
                                    <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-70 blur transition duration-200"></div>
                                    <div className="relative h-full rounded-lg border bg-card p-6 flex flex-col items-center text-center">
                                        <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                                            {step.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground flex-1">{step.description}</p>
                                        <div className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                                            <span className="font-medium">{step.step}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="py-20 bg-muted">
                    <div className="md:px-40">
                        <motion.div 
                            className="flex flex-col items-center text-center mb-12"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400 mb-4">
                                Our Advantages
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
                            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                SoftSell offers unique benefits that make us the preferred choice for software license resale.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-teal-600 dark:text-teal-400"
                                        >
                                            <path d="M12 22s8 -4 8 -10v-4l-8 -4l-8 4v4c0 6 8 10 8 10" />
                                            <path d="M9.1 12l1.4 1.4l4.5 -4.5" />
                                        </svg>
                                    ),
                                    title: 'Secure Transactions',
                                    description: 'Bank-level encryption and secure transfer protocols protect your sensitive license information.'
                                },
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-teal-600 dark:text-teal-400"
                                        >
                                            <path d="M12 6v6l4 2" />
                                            <path d="M12 22c5.523 0 10 -4.477 10 -10s-4.477 -10 -10 -10s-10 4.477 -10 10s4.477 10 10 10z" />
                                        </svg>
                                    ),
                                    title: 'Fast Turnaround',
                                    description: 'From submission to payment in as little as 72 hours, the fastest in the industry.'
                                },
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-teal-600 dark:text-teal-400"
                                        >
                                            <path d="M16.7 8a3 3 0 0 0-2.7-3.7" />
                                            <path d="M12 3v3" />
                                            <path d="M12 18v3" />
                                        </svg>
                                    ),
                                    title: 'Best Market Rates',
                                    description: 'Our extensive buyer network ensures you receive up to 70% of the original license value.'
                                },
                                {
                                    icon: (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-teal-600 dark:text-teal-400"
                                        >
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                        </svg>
                                    ),
                                    title: 'Global Reach',
                                    description: 'Connect with buyers from over 120 countries, maximizing your chances of a quick sale.'
                                }
                            ].map((feature) => (
                                <motion.div 
                                    key={feature.title}
                                    className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                                    variants={itemVariants}
                                    whileHover="hover"
                                    // variants={hoverVariants}
                                >
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-20">
                    <div className="md:px-40">
                        <motion.div 
                            className="flex flex-col items-center text-center mb-12"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400 mb-4">
                                Success Stories
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Testimonials</h2>
                            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                Hear from businesses that have successfully recovered value from their unused software licenses.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="grid gap-8 md:grid-cols-2"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[
                                {
                                    quote: "SoftSell helped us recover over $45,000 from unused Adobe and Microsoft licenses after our company downsized. The process was incredibly smooth, and we received payment within 48 hours of accepting their offer.",
                                    author: 'Jennifer Davis',
                                    role: 'CTO, TechNova Solutions',
                                    initials: 'JD'
                                },
                                {
                                    quote: "As a growing startup, we needed to optimize our software budget. SoftSell not only helped us sell our excess licenses but also connected us with discounted options for the tools we actually needed. A win-win situation!",
                                    author: 'Marcus Rodriguez',
                                    role: 'Operations Manager, Elevate Digital',
                                    initials: 'MR'
                                }
                            ].map((testimonial) => (
                                <motion.div 
                                    key={testimonial.author}
                                    className="relative group"
                                    variants={itemVariants}
                                    whileHover="hover"
                                    // variants={hoverVariants}
                                >
                                    <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-70 blur transition duration-200"></div>
                                    <div className="relative rounded-xl border bg-card p-6">
                                        <div className="flex gap-2 mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="mb-4 italic">{testimonial.quote}</p>
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold">
                                                {testimonial.initials}
                                            </div>
                                            <div>
                                                <h4 className="font-bold">{testimonial.author}</h4>
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form */}
                <section id="contact" className="py-20 bg-muted">
                    <div className="md:px-40">
                        <motion.div 
                            className="grid gap-14 lg:grid-cols-2"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div 
                                className="flex flex-col justify-center"
                                variants={itemVariants}
                            >
                                <div className="flex w-fit rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400 mb-4">
                                    Get In Touch
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                                    Ready to Turn Unused Licenses Into Revenue?
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mb-6">
                                    Fill out the form and one of our license specialists will contact you within 24 hours to discuss your
                                    options.
                                </p>
                                <motion.div 
                                    className="space-y-4"
                                    variants={containerVariants}
                                >
                                    {[
                                        {
                                            icon: (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5 text-teal-600 dark:text-teal-400"
                                                >
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                </svg>
                                            ),
                                            title: 'Phone',
                                            value: '+1 (888) 555-SOFT'
                                        },
                                        {
                                            icon: (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5 text-teal-600 dark:text-teal-400"
                                                >
                                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                </svg>
                                            ),
                                            title: 'Email',
                                            value: 'contact@softsell.com'
                                        },
                                        {
                                            icon: (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-5 w-5 text-teal-600 dark:text-teal-400"
                                                >
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                            ),
                                            title: 'Location',
                                            value: '123 Tech Plaza, San Francisco, CA 94105'
                                        }
                                    ].map((contact) => (
                                        <motion.div 
                                            key={contact.title}
                                            className="flex items-start gap-4"
                                            variants={itemVariants}
                                        >
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                                                {contact.icon}
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-medium">{contact.title}</h3>
                                                <p className="text-sm text-muted-foreground">{contact.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                            <motion.div 
                                className="rounded-xl border bg-card p-6 shadow-md"
                                variants={itemVariants}
                            >
                                <ContactForm />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="md:px-40">
                        <motion.div 
                            className="rounded-xl bg-gradient-to-r from-teal-600 to-blue-700 p-8 md:p-12 shadow-xl"
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                                <motion.div 
                                    className="flex flex-col justify-center space-y-4"
                                    variants={itemVariants}
                                >
                                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                                        Start Recovering Value Today
                                    </h2>
                                    <p className="text-white/90 md:text-xl/relaxed">
                                        Join thousands of businesses that have already recovered millions in software license value.
                                    </p>
                                </motion.div>
                                <motion.div 
                                    className="flex flex-col items-start gap-4 md:items-end md:justify-center"
                                    variants={itemVariants}
                                >
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <motion.div whileHover="hover" variants={hoverVariants}>
                                            <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90">
                                                Get Started
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </motion.div>
                                        <motion.div whileHover="hover" variants={hoverVariants}>
                                            <Button size="lg" variant="outline" className="border-white">
                                                Learn More
                                            </Button>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                <ChatWidget />
            </main>

            <footer className="border-t bg-muted/40">
                <div className="md:px-20 py-10">
                    <motion.div 
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="space-y-4" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold">S</div>
                                </div>
                                <span className="text-xl font-bold">SoftSell</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                The leading platform for software license resale, helping businesses recover value from unused assets.
                            </p>
                            <div className="flex gap-4">
                                {['facebook', 'twitter', 'linkedin'].map((social) => (
                                    <motion.a 
                                        key={social}
                                        href="#" 
                                        className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            {social === 'facebook' && <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
                                            {social === 'twitter' && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />}
                                            {social === 'linkedin' && (
                                                <>
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect width="4" height="12" x="2" y="9" />
                                                    <circle cx="4" cy="4" r="2" />
                                                </>
                                            )}
                                        </svg>
                                        <span className="sr-only">{social.charAt(0).toUpperCase() + social.slice(1)}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                        {[
                            {
                                title: 'Company',
                                links: ['About Us', 'Careers', 'Press', 'Blog']
                            },
                            {
                                title: 'Services',
                                links: ['License Valuation', 'Bulk Sales', 'Enterprise Solutions', 'License Verification']
                            },
                            {
                                title: 'Legal',
                                links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'GDPR Compliance']
                            }
                        ].map((section) => (
                            <motion.div 
                                key={section.title} 
                                className="space-y-4"
                                variants={itemVariants}
                            >
                                <h3 className="text-lg font-medium">{section.title}</h3>
                                <nav className="flex flex-col space-y-2">
                                    {section.links.map((link) => (
                                        <motion.a 
                                            key={link}
                                            href="#" 
                                            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                            whileHover={{ x: 5 }}
                                        >
                                            {link}
                                        </motion.a>
                                    ))}
                                </nav>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div 
                        className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center"
                        variants={itemVariants}
                    >
                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()} SoftSell Inc. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 sm:mt-0">Designed with ❤️ in San Francisco</p>
                    </motion.div>
                </div>
            </footer>
        </div>
    )
}