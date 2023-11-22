
import Image from "next/image";

import Link from "next/link";

const Logo = () => {
  return(  
  <Link href="/">
    <Image src="/icons8-coffee-97.png " alt="Space Coffee" width={77}  height={88}/>
  </Link>
  );
};
export default Logo;