import { bindPage } from "@/lib/bind-page";

const bound = bindPage("performance", "ro");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
