import { useState } from "react";
import axios from "axios";
import AnimatedSection from "./AnimatedSection";

const Query=()=>{

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });

    const handleSubmit = async(e) => {
      e.preventDefault();
        const res = await axios.post('http://localhost:3000/home', formData);
        alert(res.data.status);
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });

    };

    return(
      <AnimatedSection>
          <div>
             <section id="contact" className="container mx-auto my-20 px-6">
        <div className="glass-card p-8 mb-8">
          <h3 className="text-3xl font-heading text-center text-glass-primary">Get In Touch</h3>
        </div>
        <form className="glass-card p-8">
          <div className="mb-6">
            <label className="block text-glass-primary mb-2 font-heading" >Name</label>
            <input type="text" className="w-full p-3 glass border-0 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-glass-primary placeholder:text-glass-muted font-body" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" />
          </div>
          <div className="mb-6">
            <label className="block text-glass-primary mb-2 font-heading">Email</label>
            <input type="email" className="w-full p-3 glass border-0 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-glass-primary placeholder:text-glass-muted font-body" value={formData.email} placeholder="Your Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <div className="mb-6">
            <label className="block text-glass-primary mb-2 font-heading" >Message</label>
            <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full p-3 glass border-0 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none text-glass-primary placeholder:text-glass-muted font-body" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" onClick={(e) =>handleSubmit(e)} className="glass-button px-6 py-3 rounded-lg w-full font-heading">Send Message</button>
        </form>
      </section>
        </div>
      </AnimatedSection>
      
    )
}

export default Query