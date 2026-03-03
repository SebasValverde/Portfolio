import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type Props = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  github: string;
  tags?: string[];
  reverse?: boolean;
};

export default function ProjectRow({
  title,
  subtitle,
  description,
  image,
  github,
  tags = [],
  reverse = false,
}: Props) {
  const primaryAos = reverse ? "fade-left" : "fade-right";
  const secondaryAos = reverse ? "fade-right" : "fade-left";

  return (
    <article className="py-10">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className={reverse ? "lg:order-2" : ""} data-aos={primaryAos}>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={image}
              alt={`${title} preview`}
              width={1400}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/*Content */}
        <div
          className={reverse ? "lg:order-1" : ""}
          data-aos={secondaryAos}
          data-aos-delay="120"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{title}</h3>
          {subtitle ? (
            <p className="mt-2 text-cyan-200/90 font-medium">{subtitle}</p>
          ) : null}
          <p className="mt-4 text-gray-200/80 leading-relaxed">{description}</p>
          {tags.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200/80"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-7">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={[
                "inline-flex items-center gap-2 rounded-full px-5 py-3",
                "bg-white/5 hover:bg-white/10 border border-white/10",
                "transition-all duration-300",
                "hover:shadow-[0_14px_30px_rgba(0,0,0,0.35),0_0_22px_rgba(103,232,249,0.10)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/25",
                "text-white font-medium",
              ].join(" ")}
            >
              <FaGithub className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      {/* subtle divider */}
      <div className="mt-10 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </article>
  );
}
