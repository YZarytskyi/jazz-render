import Image from 'next/image';
import { convertImage, toBase64 } from 'utils/blur';

const MobileGallery = ({ itemData }) => {
  return (
    <ul className=" flex flex-col gap-[60px] md:gap-[100px]">
      {itemData.map(item => (
        <li key={item.url}>
          <Image
            className="h-auto w-full "
            src={item.url}
            alt={item.alt}
            width={item.width}
            height={item.height}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(item.width, item.height),
            )}`}
          />
        </li>
      ))}
    </ul>
  );
};
export default MobileGallery;
