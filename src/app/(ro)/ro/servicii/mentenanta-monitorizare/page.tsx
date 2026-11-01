import { bindPage } from "@/lib/bind-page";

const bound = bindPage("maintenance", "ro");

export const generateMetadata = bound.generateMetadata;
export default bound.Page;
