import Image from "next/image";
import { hasProfilePhoto, PROFILE_PHOTO_PATH } from "@/lib/assets";

type Props = {
  name: string;
  initials: string;
};

const frame =
  "relative size-24 shrink-0 overflow-hidden rounded-xl border border-border sm:size-28";

export function Avatar({ name, initials }: Props) {
  if (hasProfilePhoto()) {
    return (
      <div className={frame}>
        <Image
          src={PROFILE_PHOTO_PATH}
          alt={name}
          fill
          sizes="112px"
          preload
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${frame} flex items-center justify-center bg-surface font-mono text-2xl font-medium text-accent sm:text-3xl`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
