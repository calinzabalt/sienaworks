import { bindPage } from "@/lib/bind-page";

const bound = bindPage("performance", "en");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
