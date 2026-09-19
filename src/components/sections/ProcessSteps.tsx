import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { icons } from "@/lib/icons";
import { process } from "@/content/site";

export function ProcessSteps() {
  return (
    <section id="process" className="py-18 sm:py-24">
      <Container className="flex flex-col gap-11">
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />

        <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {process.steps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li
                key={step.title}
                className="border-line bg-surface flex flex-col gap-3 rounded-2xl border p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="from-brand-blue-bright to-brand-blue flex h-9.5 w-9.5 items-center justify-center rounded-[10px] bg-linear-to-br text-white">
                    <Icon
                      aria-hidden="true"
                      className="h-[18px] w-[18px]"
                      strokeWidth={2}
                    />
                  </span>
                  <span className="text-brand-blue bg-surface-tint flex h-7.5 w-7.5 items-center justify-center rounded-full text-xs font-extrabold tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-ink text-[0.95rem] font-bold">{step.title}</h3>
                  {"duration" in step && step.duration ? (
                    <p className="text-ink-soft mt-0.5 text-[0.72rem]">{step.duration}</p>
                  ) : null}
                </div>
                <p className="text-ink-soft text-[0.82rem] leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Video row */}
        <div id="videos" className="-mx-4 overflow-x-auto px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="flex gap-4 pb-2 lg:grid lg:grid-cols-4">
            {process.videos.map((video) => (
              <div key={video.id} className="w-[200px] shrink-0 lg:w-auto">
                <div className="border-line bg-[#0a0a0a] relative overflow-hidden rounded-[22px] border shadow-lg aspect-[9/16]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                  />
                </div>
                <p className="text-ink mt-3 text-center text-[0.8rem] font-semibold leading-snug">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
