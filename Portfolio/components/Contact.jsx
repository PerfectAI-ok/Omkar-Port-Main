'use client';


import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import React from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stars, setStars] = useState([]);
  const sectionRef = useRef(null);
  const [result, setResult] = React.useState("");

  useEffect(() => {
    // Create animated stars for background
    const newStars = [];
    for (let i = 0; i < 40; i++) {
      newStars.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        animationDelay: Math.random() * 5
      });
    }
    setStars(newStars);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
 
 
  const handleSubmit = async (e) => {
  // e.preventDefault();
  // setIsSubmitting(true);
  // setResult("Sending....");

  // const formPayload = new FormData(e.currentTarget);
  // formPayload.append("access_key", "d5c04562-2ce8-4ea3-88bc-397a248a1cfc");

  // try {
  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formPayload
  //   });
  //   const data = await response.json();

  //   if (data.success) {
  //     setResult("Form Submitted Successfully");
  //     // (e).reset();
  //     alert("Form Submitted Successfully");
  //     setFormData({
  //       name: '',
  //       email: '',
  //       subject: '',
  //       message: ''
  //     });
  //   } else {
  //     console.error("Error submitting form:", data);
  //     setResult(data.message || "Submission failed");
  //   }
  // } catch (err) {
  //   console.error("Network error:", err);
  //   setResult("Network error, please try again.");
  // } finally {
  //   setIsSubmitting(false);
  // }
   e.preventDefault();
        alert("Thank you for your message! Will Connect with ASAP.");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "d5c04562-2ce8-4ea3-88bc-397a248a1cfc",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
        }
};

  

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "omkarkathile2026@gmail.com",
      href: "mailto:omkarkathile2026@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9322916728",
      href: "tel:9322916728"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune,Maharashtra,India",
      href: "#"
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0e17 0%, #05070a 100%)'
      }}
      ref={sectionRef}
    >
      {/* Animated stars background */}
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            background: 'rgba(255, 255, 255, 0.8)',
            animationDelay: `${star.animationDelay}s`
          }}
        />
      ))}

      {/* Glowing particles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-500/20 blur-[80px] animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-xl shadow-xl transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-400/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text">
                Send Message
              </CardTitle>
              <CardDescription className="text-cyan-100">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-cyan-100">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-gray-800/50 border-cyan-500/30 text-cyan-50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-cyan-100">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-gray-800/50 border-cyan-500/30 text-cyan-50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-cyan-100">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-gray-800/50 border-cyan-500/30 text-cyan-50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-cyan-100">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-gray-800/50 border-cyan-500/30 text-cyan-50 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 resize-none transition-all"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30 rounded-xl shadow-xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-400/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text">
                  Get In Touch
                </CardTitle>
                <CardDescription className="text-cyan-100">
                  I'm always open to discussing new opportunities and interesting projects.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-xl border border-cyan-500/20 bg-gray-800/30 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-purple-900/20 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-600/20 to-purple-600/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
                    </div>
                    <div>
                      <div className="font-semibold text-cyan-100">{info.label}</div>
                      <div className="text-cyan-300 group-hover:text-cyan-100 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes text-glow {
          0% { text-shadow: 0 0 5px rgba(56, 189, 248, 0.5), 0 0 10px rgba(139, 92, 246, 0.3); }
          50% { text-shadow: 0 0 15px rgba(56, 189, 248, 0.8), 0 0 20px rgba(139, 92, 246, 0.5); }
          100% { text-shadow: 0 0 5px rgba(56, 189, 248, 0.5), 0 0 10px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 10px rgba(56, 189, 248, 0.2), 0 0 20px rgba(139, 92, 246, 0.1); }
          50% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.4), 0 0 30px rgba(139, 92, 246, 0.3); }
          100% { box-shadow: 0 0 10px rgba(56, 189, 248, 0.2), 0 0 20px rgba(139, 92, 246, 0.1); }
        }
        
        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};