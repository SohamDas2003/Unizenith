import ContactBanner from "@/components/Contact/ContactBanner";
import ContactUsForm from "@/components/Contact/ContactUsForm";
import StayUpdated from "@/components/Contact/StayUpdated";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <ContactBanner />
            <ContactUsForm />
            <StayUpdated />
            <Footer />
        </div>
    );
}
