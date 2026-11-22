export type IconName =
  | "gauge"
  | "wrench"
  | "shield"
  | "layout"
  | "code"
  | "search"
  | "pulse"
  | "refresh"
  | "bolt"
  | "check"
  | "chat"
  | "mail";

const paths: Record<IconName, React.ReactNode> = {
  gauge: (
    <>
      <path d="M4.5 16.5a8 8 0 1 1 15 0" />
      <path d="m12 13 3.5-4" />
      <circle cx="12" cy="13" r="1.4" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2l-5 5a1.8 1.8 0 0 0 2.5 2.5l5-5a4 4 0 0 0 5.2-5.2l-2.4 2.4-2.3-.6-.6-2.3 2.4-2.4Z" />,
  shield: (
    <>
      <path d="M12 3.5 5 6v5.5c0 4.2 3 7.6 7 9 4-1.4 7-4.8 7-9V6l-7-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9h17M9 9v10.5" />
    </>
  ),
  code: <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5.5l-3 13" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m15.5 15.5 4 4" />
    </>
  ),
  pulse: <path d="M3.5 12h4l2-5 4 10 2-5h5" />,
  refresh: (
    <>
      <path d="M19.5 12a7.5 7.5 0 0 1-13.3 4.7M4.5 12a7.5 7.5 0 0 1 13.3-4.7" />
      <path d="M18 3.5v4h-4M6 20.5v-4h4" />
    </>
  ),
  bolt: <path d="M13 3.5 5.5 13.5H12l-1 7 7.5-10H12l1-7Z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  chat: <path d="M5 18.5V7a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 7v6a2.5 2.5 0 0 1-2.5 2.5H9l-4 3Z" />,
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
