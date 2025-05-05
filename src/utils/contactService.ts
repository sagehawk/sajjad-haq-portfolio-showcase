
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  hp_email?: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  // Get the Mailgun API key from environment variables
  const apiKey = import.meta.env.MAILGUN_API_KEY;
  const domain = import.meta.env.MAILGUN_DOMAIN || 'mg.sajjadhaq.com';
  
  if (!apiKey) {
    throw new Error("Mailgun API key is not configured");
  }
  
  // Send email using Mailgun API
  const response = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`api:${apiKey}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      from: `${formData.name} <${formData.email}>`,
      to: 'haq.sajjad220@gmail.com',
      subject: `Portfolio Contact: ${formData.name}`,
      text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    })
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Mailgun API error:', errorText);
    
    // If the API call fails, try with the mailto link as fallback
    try {
      const mailtoLink = `mailto:haq.sajjad220@gmail.com?subject=Portfolio Contact: ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    } catch (mailtoError) {
      console.error('Error opening mailto:', mailtoError);
    }
    
    throw new Error('Failed to send email');
  }
  
  return true;
};
