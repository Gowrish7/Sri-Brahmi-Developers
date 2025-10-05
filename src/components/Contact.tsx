import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your space? Let's start a conversation about your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side: Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">+91 8310737227</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">contact@sribrahmidevelopers.com</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Office</p>
                    <p className="text-muted-foreground">
                      Herle Complex 1st floor , Opp Vinayaka Theatre<br />
                      Murkai , Kundapura - 576201
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Google Form Embed with scroll */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
            <div className="rounded-lg overflow-hidden shadow-md border p-2 h-[700px]">
              <div className="h-full overflow-y-auto">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe7mClWN_ud30wYc6kHi7F8xt7Cw7wLwGinImjMc1DjObpggA/viewform?embedded=true"
                  width="100%"
                  height="1500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
