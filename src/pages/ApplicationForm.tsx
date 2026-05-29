import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { toast } from "sonner";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const productOptions = [
  "MAAN 913 Combine Harvester",
  "MAAN 913 Reeper",
  "MAAN 913 Reversible Disc Plough",
  "MAAN 913 Baler",
  "MAAN 913 Super Seeder",
  "MAAN 913 Rotavator",
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  mobile: z.string().trim().regex(/^[0-9+\-\s]{7,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  address: z.string().trim().min(5, "Address is too short").max(500),
  product: z.string().min(1, "Please select a product"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});


const ApplicationForm = () => {
  const [params] = useSearchParams();
  const initialProduct = params.get("product") ?? "";

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    product: initialProduct,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (key: keyof typeof form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as string;
        if (!fieldErrors[k]) fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      toast.error("Please correct the highlighted fields");
      return;
    }

    try {
      setSubmitting(true);
      await addDoc(collection(db, "orders"), {
        name: result.data.name,
        phone: result.data.mobile,
        email: result.data.email,
        location: result.data.address,
        product: result.data.product,
        message: result.data.message ?? "",
        timestamp: serverTimestamp(),
      });
      toast.success("Thank you! Your enquiry has been submitted successfully.");
      setForm({ name: "", mobile: "", email: "", address: "", product: "", message: "" });
    } catch (err) {
      console.error("Firestore submit failed", err);
      toast.error("Could not submit your enquiry. Please try again or call +91 98789 89953.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="bg-primary py-12">
        <div className="container text-center text-primary-foreground">
          <h1 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-2">Enquiry Form</h1>
          <p className="opacity-80 max-w-2xl mx-auto">Fill in your details and our team will get in touch to confirm your order.</p>
        </div>
      </section>

      <section className="py-14 bg-muted/40">
        <div className="container max-w-3xl">
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-10 shadow-sm space-y-5" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Buyer Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value.replace(/[^A-Za-z\s]/g, ""))} maxLength={100} className="mt-1.5" />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input id="mobile" type="tel" value={form.mobile} onChange={(e) => update("mobile", e.target.value)} maxLength={15} className="mt-1.5" />
                {errors.mobile && <p className="text-destructive text-xs mt-1">{errors.mobile}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} maxLength={255} className="mt-1.5" />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="address">Complete Address *</Label>
              <Textarea id="address" value={form.address} onChange={(e) => update("address", e.target.value)} maxLength={500} rows={3} className="mt-1.5" />
              {errors.address && <p className="text-destructive text-xs mt-1">{errors.address}</p>}
            </div>

            <div>
              <Label htmlFor="product">Select Product *</Label>
              <Select value={form.product} onValueChange={(v) => update("product", v)}>
                <SelectTrigger id="product" className="mt-1.5">
                  <SelectValue placeholder="Choose a product" />
                </SelectTrigger>
                <SelectContent>
                  {productOptions.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.product && <p className="text-destructive text-xs mt-1">{errors.product}</p>}
            </div>

            <div>
              <Label htmlFor="message">Message / Additional Notes</Label>
              <Textarea id="message" value={form.message} onChange={(e) => update("message", e.target.value)} maxLength={1000} rows={4} className="mt-1.5" />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" size="lg" disabled={submitting} className="w-full uppercase tracking-wider font-bold">
              <Send className="w-4 h-4 mr-2" /> {submitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              By submitting, you agree to be contacted by MAAN AGRO INDUSTRIES regarding your enquiry.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationForm;
