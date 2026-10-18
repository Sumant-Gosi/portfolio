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
        sizes="(min-width: 1024px) 520px, 100vw"
        preload
        className="h-auto w-full rounded-xl"
      />
    );
  }

  return (
    <div
      className="flex aspect-[4/3] w-full items-center justify-center rounded-xl bg-bg font-mono text-6xl font-medium text-accent"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
