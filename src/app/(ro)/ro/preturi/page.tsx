import { bindPage } from "@/lib/bind-page";

const bound = bindPage("pricing", "ro");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
