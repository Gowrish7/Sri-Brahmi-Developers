import { Phone, Mail, MapPin, Instagram, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8310737227",
    href: "tel:+918310737227",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sribrahmidevelopers7@gmail.com",
    href: "mailto:sribrahmidevelopers7@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Herle Complex 1st floor , Opp Vinayaka Theatre\nMurkai , Kundapura - 576201",
    href: "https://maps.google.com/?q=Herle+Complex+Opp+Vinayaka+Theatre+Murkai+Kundapura+576201",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <Reveal className="max-w-2xl mb-14 md:mb-16">
          <span className="eyebrow mb-5">Start your project</span>
          <h2 className="display-lg mb-5">Get In Touch</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to transform your space? Let's start a conversation about your
            project
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact info */}
          <Reveal from="left" className="lg:col-span-5">
            <h3 className="text-2xl font-semibold mb-7">Contact Information</h3>

            <div className="space-y-3">
              {details.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  {...(label === "Office"
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-hover"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-gold-ink transition-all duration-500 group-hover:bg-gradient-gold group-hover:text-accent-foreground">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-1.5">
                      {label}
                    </span>
                    <span className="block whitespace-pre-line leading-relaxed break-words group-hover:text-gold-ink transition-colors">
                      {value}
                    </span>
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    className="w-4 h-4 shrink-0 text-accent opacity-0 -translate-y-1 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  />
                </a>
              ))}
            </div>

            {/* Social */}
            <a
              href="https://www.instagram.com/sri_brahmi_developers/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold hover:text-gold-ink transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:bg-accent/10">
                <Instagram className="w-4 h-4 text-accent" />
              </span>
              Follow @sri_brahmi_developers
            </a>
          </Reveal>

          {/* Form */}
          <Reveal from="right" delay={120} className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
              <div className="border-b border-border px-6 py-5">
                <h3 className="text-xl font-semibold">Contact Form</h3>
              </div>

              <div className="h-[640px] overflow-y-auto">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe7mClWN_ud30wYc6kHi7F8xt7Cw7wLwGinImjMc1DjObpggA/viewform?embedded=true"
                  title="Sri Brahmi Developers enquiry form"
                  width="100%"
                  height="1500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="block"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
