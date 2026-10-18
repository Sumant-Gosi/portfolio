import Image from "next/image";
import { PROFILE_PHOTO_PATH, profilePhotoSize } from "@/lib/assets";

type Props = {
  name: string;
  initials: string;
};

export async function Avatar({ name, initials }: Props) {
  const photo = await profilePhotoSize();

  if (photo) {
    // Shown at the photo's own aspect ratio, so nothing is cropped.
    return (
      <Image
        src={PROFILE_PHOTO_PATH}
        alt={name}
        width={photo.width}
        height={photo.height}
        sizes="(min-width: 640px) 128px, 112px"
        preload
        className="h-auto w-28 shrink-0 rounded-lg border border-border sm:w-32"
      />
    );
  }

  return (
    <div
      className="flex size-16 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-mono text-xl font-medium text-accent"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
