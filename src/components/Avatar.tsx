import Image from "next/image";
import { PROFILE_PHOTO_PATH, profilePhotoSize } from "@/lib/assets";

type Props = {
  name: string;
  initials: string;
};

export function Avatar({ name, initials }: Props) {
  const photo = profilePhotoSize();

  if (photo) {
    // Shown at the photo's own aspect ratio, so nothing is cropped.
    return (
      <Image
        src={PROFILE_PHOTO_PATH}
        alt={name}
        width={photo.width}
        height={photo.height}
        sizes="(min-width: 640px) 224px, 176px"
        preload
        className="h-auto w-44 rounded-xl border border-border sm:w-56"
      />
    );
  }

  return (
    <div
      className="flex size-24 shrink-0 items-center justify-center rounded-xl border border-border bg-surface font-mono text-2xl font-medium text-accent sm:size-28 sm:text-3xl"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
