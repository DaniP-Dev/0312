import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/isotipo.png"
          alt="Logo Condominios"
          width={85}
          height={85}
        />
      </Link>
    </div>
  );
};

export default Logo;
