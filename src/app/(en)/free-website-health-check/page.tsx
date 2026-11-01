import { bindPage } from "@/lib/bind-page";

const bound = bindPage("healthCheck", "en");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
