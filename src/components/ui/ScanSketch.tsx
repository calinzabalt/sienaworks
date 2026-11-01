export function ScanSketch({
  eyebrow,
  title,
  note,
  items,
}: {
  eyebrow: string;
  title: string;
  note: string;
  items: { title: string; text: string }[];
}) {
  return (
    <figure className="lg:max-w-md lg:justify-self-end">
      <figcaption>
        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#99f6e4]">
          {eyebrow}
        </p>
        <p className="mt-3 text-2xl font-semibold tracking-tight text-white">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-mist">{note}</p>
      </figcaption>
      <ul className="mt-8">
        {items.map((item, index) => (
          <li key={item.title} className="border-t border-white/15 py-4">
            <p className="text-base font-medium text-white">
              <span className="mr-3 font-mono text-xs font-medium text-[#99f6e4]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </p>
            <p className="mt-1 pl-8 text-sm leading-relaxed text-mist">{item.text}</p>
          </li>
        ))}
      </ul>
    </figure>
  );
}
