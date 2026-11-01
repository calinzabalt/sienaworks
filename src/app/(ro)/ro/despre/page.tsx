import { bindPage } from "@/lib/bind-page";

const bound = bindPage("about", "ro");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
