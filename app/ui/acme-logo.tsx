import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts'
import phon from '@/app/lib/images/Logo.png';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
          <Image
              src= {phon}
              width={120}
              height={80}
              className="hidden md:block"
              alt="Screenshots of the dashboard project showing desktop version"
            />
    </div>
  );
}
