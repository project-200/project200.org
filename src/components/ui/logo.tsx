import Image from "next/image";
const Logo: React.FC = () => {
  return (
    <Image
      src="/project200.org/logo.png"
      alt="Project 200"
      width={72}
      height={47}
    />
  );
};
export default Logo;
