import { useEffect } from "react";
import emailjs from "emailjs-com";

const VisitorTracker = () => {
  useEffect(() => {
    const lastSent = localStorage.getItem("lastSent");
    const ONE_DAY = 24 * 60 * 60 * 1000;

    // If email sent within last 24 hours, stop
    if (lastSent && Date.now() - parseInt(lastSent, 10) < ONE_DAY) return;

    // Fetch visitor info
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const visitorInfo = `
          Someone visited your portfolio!
          IP: ${data.ip}
          City: ${data.city}, ${data.region}, ${data.country_name}
          Latitude: ${data.latitude}
          Longitude: ${data.longitude}
          Time: ${new Date().toLocaleString()}
        `;

        // Mark as sent BEFORE sending email
        localStorage.setItem("lastSent", Date.now().toString());

        emailjs
          .send(
            "service_7e0xg6c",
            "template_f734ksj",
            { message: visitorInfo },
            "cJyoQELezULFPmtpD"
          )
          .then(() => console.log("Visit email sent!"))
          .catch((err) => console.error("Email failed:", err));
      });
  }, []);

  return null;
};

export default VisitorTracker;
