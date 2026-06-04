import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        communityRules: "pages/communityRules.html",
        contactUs: "pages/contactUs.html",
        faqs: "pages/faqs.html",
        main: "index.html",
        reportFraud: "pages/reportFraud.html",
        reportFraudForm: "pages/deeper-pages/reportFraudWebReferralForm.html",
      },
    },
  },
  plugins: [react()],
});
