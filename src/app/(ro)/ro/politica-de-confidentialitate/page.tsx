import { bindPage } from "@/lib/bind-page";

const bound = bindPage("privacy", "ro");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
