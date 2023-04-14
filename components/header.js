import Link from 'next/link'
import Image from 'next/image'
import wiseinLogo from '../public/images/wisein_logo.png'

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 w-full h-max border-b bg-white text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center mb-4 md:mb-0" target="_blank">
              <Image src={wiseinLogo} alt="logo" width={226} height={62} />
            </a>
          </Link>
          <nav className="font-medium md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" legacyBehavior>
              <a className="px-4 text-gray-900 hover:font-bold ">Tech</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="px-8 text-gray-900 hover:font-bold ">Contact</a>
            </Link>
          </nav>
          <a href="https://datain.co.kr/guide/html/info.html">
            <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-base ml-4 md:mt-0">와이즈인 홈페이지</button>
          </a>
        </div>
      </header>
    </>
  )
}
