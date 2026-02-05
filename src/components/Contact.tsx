import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import bgContact from "@/assets/bg-contact.jpg";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      profession: "",
      message: ""
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section id="contato" className="py-20 relative overflow-hidden">
      {/* Fixed Parallax Background Image */}
      <div className="absolute inset-0" style={{
      backgroundImage: `url(${bgContact})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    }} />
      <div className="absolute inset-0 bg-muted/95" />

      {/* Decorative bronze elements */}
      <div className="absolute top-20 left-20 w-36 h-36 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-28 h-28 bg-secondary/25 rounded-full blur-3xl pointer-events-none" />

      
    </section>;
};
export default Contact;