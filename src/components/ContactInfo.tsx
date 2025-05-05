
import { Linkedin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
      <div className="space-y-4">
        <p className="flex items-center">
          <span className="w-20 font-medium">Email:</span>
          <a href="mailto:haq.sajjad220@gmail.com" className="text-white hover:text-blue-200 underline underline-offset-4">
            haq.sajjad220@gmail.com
          </a>
        </p>
        <p className="flex items-center">
          <span className="w-20 font-medium">LinkedIn:</span>
          <a 
            href="https://linkedin.com/in/sajjadhaq" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-blue-200 underline underline-offset-4"
          >
            <Linkedin className="mr-1 h-5 w-5" />
            sajjadhaq
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
