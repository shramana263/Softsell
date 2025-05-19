import { useState } from "react"
import { ChevronRight, CheckCircle, ArrowRight, Star, Upload, DollarSign, CreditCard, Menu } from "lucide-react"
import { Button } from "../components/ui/button"
import ModeToggle from "../components/ModeToggle"
import ContactForm from "../components/ContactForm"
// If Page is a type or enum, use the correct import:
import type { Page } from "../App"
import ChatWidget from "@/components/ChatWidget"
// Or, if Page is not exported as a type, define it here as needed:
// type Page = "login" | "home" | ... // add all possible page names

interface HomePageProps {
    navigate: (page: Page) => void
}

export default function HomePage({ navigate }: HomePageProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen flex-col">
            {/* Navigation */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="px-20 flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
                            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">S</div>
                        </div>
                        <span className="text-xl font-bold">SoftSell</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <a href="#how-it-works" className="text-sm font-medium hover:text-primary">
                            How It Works
                        </a>
                        <a href="#why-choose-us" className="text-sm font-medium hover:text-primary">
                            Why Choose Us
                        </a>
                        <a href="#testimonials" className="text-sm font-medium hover:text-primary">
                            Testimonials
                        </a>
                        <a href="#contact" className="text-sm font-medium hover:text-primary">
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center gap-4">
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
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t">
                        <div className="container py-3 space-y-2">
                            <a
                                href="#how-it-works"
                                className="block py-2 text-sm font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                How It Works
                            </a>
                            <a
                                href="#why-choose-us"
                                className="block py-2 text-sm font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Why Choose Us
                            </a>
                            <a
                                href="#testimonials"
                                className="block py-2 text-sm font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Testimonials
                            </a>
                            <a
                                href="#contact"
                                className="block py-2 text-sm font-medium hover:text-primary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                            <button
                                className="block py-2 text-sm font-medium hover:text-primary w-full text-left"
                                onClick={() => {
                                    setMobileMenuOpen(false)
                                    navigate("login")
                                }}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                )}
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptLTUgMmg0djFoLTR2LTF6bTAgMmgxdi00aC0xdjR6TTI0IDMwaDR2MWgtNHYtMXptMCAyaDF2LTRoLTF2NHptLTUgMGg0djFoLTR2LTF6bTAgMmgxdi00aC0xdjR6bS01LTRoNHYxaC00di0xem0wIDJoMXYtNGgtMXY0em0tNSAwaDF2LTRoLTF2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
                    <div className="md:px-40 relative">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px] xl:gap-20">
                            <div className="flex flex-col justify-center space-y-4">
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
                                    <Button size="lg" className="group">
                                        Sell My Licenses
                                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Get a Quote
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>Secure</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>Fast Payments</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>Verified Buyers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
                                    <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-teal-500/20 to-blue-500/20 blur-3xl" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] rounded-2xl bg-white/90 dark:bg-gray-900/90 shadow-xl backdrop-blur-sm">
                                            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm p-4 shadow-lg">
                                                Up to 70% Recovery
                                            </div>
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
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="rounded-lg border p-3">
                                                            <div className="font-medium">Adobe CC</div>
                                                            <div className="text-sm text-muted-foreground">$345 avg. value</div>
                                                        </div>
                                                        <div className="rounded-lg border p-3">
                                                            <div className="font-medium">Microsoft 365</div>
                                                            <div className="text-sm text-muted-foreground">$189 avg. value</div>
                                                        </div>
                                                        <div className="rounded-lg border p-3">
                                                            <div className="font-medium">AutoCAD</div>
                                                            <div className="text-sm text-muted-foreground">$780 avg. value</div>
                                                        </div>
                                                        <div className="rounded-lg border p-3">
                                                            <div className="font-medium">Salesforce</div>
                                                            <div className="text-sm text-muted-foreground">$420 avg. value</div>
                                                        </div>
                                                    </div>
                                                    <Button className="w-full">View All Software</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="py-20">
                    <div className="md:px-40">
                        <div className="flex flex-col items-center text-center mb-12">
                            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400 mb-4">
                                Simple Process
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                Our streamlined process makes selling your unused software licenses quick and profitable.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="relative group">
                                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-70 blur transition duration-200"></div>
                                <div className="relative h-full rounded-lg border bg-card p-6 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                                        <Upload className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Upload License</h3>
                                    <p className="text-muted-foreground flex-1">
                                        Submit your license details through our secure portal. We support all major software vendors.
                                    </p>
                                    <div className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                                        <span className="font-medium">1</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-70 blur transition duration-200"></div>
                                <div className="relative h-full rounded-lg border bg-card p-6 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
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
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Get Valuation</h3>
                                    <p className="text-muted-foreground flex-1">
                                        Receive a competitive market valuation within 24 hours based on current demand and license type.
                                    </p>
                                    <div className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                                        <span className="font-medium">2</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-70 blur transition duration-200"></div>
                                <div className="relative h-full rounded-lg border bg-card p-6 flex flex-col items-center text-center">
                                    <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                                        <DollarSign className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Get Paid</h3>
                                    <p className="text-muted-foreground flex-1">
                                        Accept our offer and receive payment via your preferred method within 3 business days.
                                    </p>
                                    <div className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                                        <span className="font-medium">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="py-20 bg-muted">
                    <div className="md:px-40">
                        <div className="flex flex-col items-center text-center mb-12">
                            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400 mb-4">
                                Our Advantages
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us</h2>
                            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                SoftSell offers unique benefits that make us the preferred choice for software license resale.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
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
                                </div>
                                <h3 className="text-lg font-bold">Secure Transactions</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Bank-level encryption and secure transfer protocols protect your sensitive license information.
                                </p>
                            </div>

                            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
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
                                </div>
                                <h3 className="text-lg font-bold">Fast Turnaround</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    From submission to payment in as little as 72 hours, the fastest in the industry.
                                </p>
                            </div>

                            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
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
                                        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                                        <path d="M12 3v3" />
                                        <path d="M12 18v3" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold">Best Market Rates</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Our extensive buyer network ensures you receive up to 70% of the original license value.
                                </p>
                            </div>

                            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
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
                                </div>
                                <h3 className="text-lg font-bold">Global Reach</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Connect with buyers from over 120 countries, maximizing your chances of a quick sale.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-20">
                    <div className="md:px-40">
                        <div className="flex flex-col items-center text-center mb-12">
                            <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-600 dark:text-teal-400 mb-4">
                                Success Stories
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Testimonials</h2>
                            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                Hear from businesses that have successfully recovered value from their unused software licenses.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="relative group">
                                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-70 blur transition duration-200"></div>
                                <div className="relative rounded-xl border bg-card p-6">
                                    <div className="flex gap-2 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="mb-4 italic">
                                        "SoftSell helped us recover over $45,000 from unused Adobe and Microsoft licenses after our company
                                        downsized. The process was incredibly smooth, and we received payment within 48 hours of accepting
                                        their offer."
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold">
                                            JD
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Jennifer Davis</h4>
                                            <p className="text-sm text-muted-foreground">CTO, TechNova Solutions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 opacity-20 group-hover:opacity-70 blur transition duration-200"></div>
                                <div className="relative rounded-xl border bg-card p-6">
                                    <div className="flex gap-2 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="mb-4 italic">
                                        "As a growing startup, we needed to optimize our software budget. SoftSell not only helped us sell
                                        our excess licenses but also connected us with discounted options for the tools we actually needed.
                                        A win-win situation!"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold">
                                            MR
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Marcus Rodriguez</h4>
                                            <p className="text-sm text-muted-foreground">Operations Manager, Elevate Digital</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section id="contact" className="py-20 bg-muted">
                    <div className="md:px-40">
                        <div className="grid gap-14 lg:grid-cols-2">
                            <div className="flex flex-col justify-center">
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
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
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
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-medium">Phone</h3>
                                            <p className="text-sm text-muted-foreground">+1 (888) 555-SOFT</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
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
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-medium">Email</h3>
                                            <p className="text-sm text-muted-foreground">contact@softsell.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
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
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="font-medium">Location</h3>
                                            <p className="text-sm text-muted-foreground">123 Tech Plaza, San Francisco, CA 94105</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border bg-card p-6 shadow-md">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="md:px-40">
                        <div className="rounded-xl bg-gradient-to-r from-teal-600 to-blue-700 p-8 md:p-12 shadow-xl">
                            <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
                                        Start Recovering Value Today
                                    </h2>
                                    <p className="text-white/90 md:text-xl/relaxed">
                                        Join thousands of businesses that have already recovered millions in software license value.
                                    </p>
                                </div>
                                <div className="flex flex-col items-start gap-4 md:items-end md:justify-center">
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Button size="lg" className="bg-white text-teal-700 hover:bg-white/90">
                                            Get Started
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button size="lg" variant="outline" className="border-white">
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                    <h1 className="text-3xl font-bold">Welcome to the License Platform</h1> */}
                    <ChatWidget />
                {/* </div> */}
            </main>

            <footer className="border-t bg-muted/40">
                <div className="md:px-20 py-10">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
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
                                <a href="#" className="text-muted-foreground hover:text-foreground">
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
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground">
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
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-foreground">
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
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Company</h3>
                            <nav className="flex flex-col space-y-2">
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    About Us
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Careers
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Press
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Blog
                                </a>
                            </nav>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Services</h3>
                            <nav className="flex flex-col space-y-2">
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    License Valuation
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Bulk Sales
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Enterprise Solutions
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    License Verification
                                </a>
                            </nav>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Legal</h3>
                            <nav className="flex flex-col space-y-2">
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    Cookie Policy
                                </a>
                                <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                    GDPR Compliance
                                </a>
                            </nav>
                        </div>
                    </div>
                    <div className="mt-10 border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-muted-foreground">
                            &copy; {new Date().getFullYear()} SoftSell Inc. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 sm:mt-0">Designed with ❤️ in San Francisco</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
