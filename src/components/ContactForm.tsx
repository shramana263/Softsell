import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { CheckCircle } from "lucide-react"

type FormState = {
  name: string
  email: string
  company: string
  licenseType: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState<Errors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Partial<FormState> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formState.company.trim()) {
      newErrors.company = "Company is required"
    }

    if (!formState.licenseType) {
      newErrors.licenseType = "Please select a license type"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        // Reset form
        setFormState({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        })
      }, 1500)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-10">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6">
          Your message has been received. One of our license specialists will contact you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Full Name
        </label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="John Smith"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="company"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Company
        </label>
        <Input
          id="company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          placeholder="Your Company"
          className={errors.company ? "border-red-500" : ""}
        />
        {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="licenseType"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          License Type
        </label>
        <Select
          value={formState.licenseType}
          onValueChange={(value) => {
            setFormState((prev) => ({ ...prev, licenseType: value }))
            if (errors.licenseType) {
              setErrors((prev) => ({ ...prev, licenseType: "" }))
            }
          }}
        >
          <SelectTrigger className={errors.licenseType ? "border-red-500" : ""}>
            <SelectValue placeholder="Select license type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="adobe">Adobe Creative Cloud</SelectItem>
            <SelectItem value="microsoft">Microsoft 365</SelectItem>
            <SelectItem value="autodesk">Autodesk</SelectItem>
            <SelectItem value="salesforce">Salesforce</SelectItem>
            <SelectItem value="oracle">Oracle</SelectItem>
            <SelectItem value="sap">SAP</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.licenseType && <p className="text-xs text-red-500">{errors.licenseType}</p>}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Tell us about your licenses and requirements"
          className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Submitting...
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  )
}
