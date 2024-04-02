import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <h1>Welcome!</h1>
        <Image
        src="/images/profile.jpg" // Route of the image file
        height={173} // Desired size with correct aspect ratio
        width={137} // Desired size with correct aspect ratio
        alt="Antonia"
        />
      <h2>My name is Antonia Cuba and I am an exchange student from Luxembourg at Hanyang University.</h2>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}