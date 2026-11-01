import { bindPage } from "@/lib/bind-page";

const bound = bindPage("development", "ro");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
