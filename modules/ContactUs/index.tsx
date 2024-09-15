import {ContactForm} from "@/modules/ContactUs/ContactForm";
import {TitleComponent} from "@/modules/components/TitleComponent/TitleCoponent";

export default function ContactUs() {
    return (
        <>
            <TitleComponent title='Contact Us'/>
            <ContactForm/>
        </>
    )
}