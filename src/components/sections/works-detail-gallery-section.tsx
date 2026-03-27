import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/common/section-label";

interface WorksDetailGalleryProps {
  headline: string;
  images: string[];
}

export function WorksDetailGallerySection({ headline, images }: WorksDetailGalleryProps) {
  const [img1, img2, img3, img4] = images;

  return (
    <section className="bg-artic-ebony py-16 md:py-24">
      <Container className="px-8 md:px-20 lg:px-44">
        <SectionLabel className="text-artic-teal-light">Gallery</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-[20px] font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-[26px]">
          {headline}
        </h2>

        {/* 2-column grid: left has 1 tall image, right has 3 stacked */}
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Left: tall image */}
          <div className="relative h-64 overflow-hidden rounded-[14px] sm:h-full sm:min-h-105">
            <Image src={img1} alt="" fill className="object-cover transition-transform duration-500 hover:scale-105" />
          </div>

          {/* Right: 3 images stacked */}
          <div className="flex flex-col gap-3">
            {[img2, img3, img4].map((src, i) => (
              <div key={i} className="relative h-48 overflow-hidden rounded-[14px] md:h-52">
                <Image src={src} alt="" fill className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
