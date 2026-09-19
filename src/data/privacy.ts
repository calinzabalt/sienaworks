import { site } from "./site";

export const privacy = {
  lastUpdated: "19 September 2026",
  intro:
    "This notice describes the personal data we collect on this website, why we collect it, how long we keep it, and the choices you have. It covers the contact form, cookies, and Google Analytics.",
  sections: [
    {
      title: "Who we are",
      paragraphs: [
        `${site.spokenName} is a boutique WordPress and web development studio. We work with businesses and digital agencies in the UK, the US, Canada and Europe. For this website, ${site.legalName} is the controller of personal data.`,
        `If you have questions about this notice, or you want to ask about data we hold, email ${site.email}.`,
      ],
    },
    {
      title: "What we collect",
      paragraphs: [
        "We collect personal data in two ways: when you send an enquiry, and through Google Analytics on page visits.",
        "From the contact form we collect your name, email address, message, project type and budget range. Company name and website are optional. We also receive the time of the enquiry. A hidden field is included to reduce automated spam; you do not fill it in.",
        "We do not ask for payment details, passwords, or identity documents through this site.",
        "If you email us directly instead of using the form, we will have whatever you include in that message — typically your email address, name, and the content of the correspondence.",
      ],
    },
    {
      title: "How we use enquiry data",
      paragraphs: [
        "We use enquiry data to reply to you, understand what you need, and discuss a possible project or agency partnership. If work goes ahead, we keep the conversation as part of that project.",
        "We do not sell enquiry data. We do not add you to a newsletter or marketing list because you sent a form. We do not use form submissions for advertising.",
        "The legal basis is taking steps toward a contract at your request, or our legitimate interest in answering a message you chose to send.",
      ],
    },
    {
      title: "How long we keep it",
      paragraphs: [
        "We keep enquiries for as long as we need them to handle the conversation and any project that follows. If nothing comes of an enquiry, we delete it when it is no longer useful — typically within two years, sooner if you ask us to.",
        "Emails that become part of an active project may be kept for the life of that work and for a reasonable period afterwards, in case we need to refer back to what was agreed.",
      ],
    },
    {
      title: "Cookies and Google Analytics",
      paragraphs: [
        "This site uses Google Analytics (GA4) so we can see which pages are visited, how people arrive here, and whether the site is working as intended. That helps us improve the content and the structure of the studio site.",
        "Google Analytics may collect pages viewed, time on page, approximate location (country or region, not a street address), browser and device type, screen size, referral source, and IP information. The contact form does not depend on Analytics cookies.",
        "Google provides the Analytics service and processes this measurement data. Google’s own terms and privacy notice apply to their service. We use Analytics for site measurement only — not to build advertising audiences or to sell data about visitors.",
        "You can block Analytics with a browser extension, or use Google’s opt-out tools. The rest of the site works without it.",
      ],
    },
    {
      title: "Who else sees the data",
      paragraphs: [
        "Enquiry messages are received by email so we can reply from our studio inbox. We do not publish form submissions, and we do not pass them to other businesses for their own marketing.",
        "Google processes the Analytics measurement data described above.",
        "We use service providers to host the website and to operate email. They process data only to provide those services to us, not for their own unrelated purposes.",
        "We would only share data further if the law required it, or if it was necessary to protect the studio or other people from harm.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "Depending on where you are — including the UK and the EEA — you may ask us to access the personal data we hold about you, correct it, delete it, restrict or object to how we use it, or receive a copy of data you provided.",
        `To do that, email ${site.email} and say what you are asking for. We may need to confirm it is you before we act on the request.`,
        "You can also complain to your local data protection authority. In the UK that is the Information Commissioner’s Office (ICO). We would rather hear from you first so we can put it right.",
      ],
    },
    {
      title: "Children",
      paragraphs: [
        "This website is aimed at businesses and agencies. We do not knowingly collect personal data from children.",
      ],
    },
    {
      title: "Changes",
      paragraphs: [
        "If we change this notice in a material way, we will update the date at the top of this page. Continued use of the site after a change means the updated notice applies to data collected from then on.",
      ],
    },
  ],
} as const;
