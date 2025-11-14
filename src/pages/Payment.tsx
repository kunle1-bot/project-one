import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CreditCard, CheckCircle, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Payment = () => {
  const { toast } = useToast();

  const bankDetails = {
    accountName: "Oyeniyi Ifakunle",
    accountNumber: "1809959229",
    bankName: "Access Bank",
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Make{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Payment
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete your registration by making payment via bank transfer
            </p>
          </div>

          <Card className="bg-card border-border p-8 mb-8 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Bank Transfer Details</h2>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-sm text-muted-foreground">Account Name</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.accountName, "Account name")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-lg font-semibold">{bankDetails.accountName}</p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-sm text-muted-foreground">Account Number</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-2xl font-bold text-primary">{bankDetails.accountNumber}</p>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <Label className="text-sm text-muted-foreground">Bank Name</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(bankDetails.bankName, "Bank name")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-lg font-semibold">{bankDetails.bankName}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-primary/20 border-2 p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-3 mb-6">
              <CheckCircle className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">After Payment Instructions</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Make your payment to the account details above</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Take a screenshot or note your transaction reference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Send payment confirmation via WhatsApp or email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Include your name and selected course in the message</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
                onClick={() => window.open("https://wa.me/2348089376351?text=Hello%2C%20I%27ve%20completed%20my%20payment%20for%20the%20course.", "_blank")}
              >
                Confirm via WhatsApp
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.location.href = "mailto:oyeniyiifakunle@gmail.com?subject=Payment Confirmation"}
              >
                Confirm via Email
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Label = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <label className={`block text-sm font-medium ${className}`}>{children}</label>
);

export default Payment;
