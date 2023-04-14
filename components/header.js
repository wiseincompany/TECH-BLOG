// import Link from 'next/link'

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-0 border-b-2 bg-white text-gray-950 body-font ">
//       <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
//         <Link href="/" legacyBehavior>
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span className="ml-3 text-xl">와이즈인컴퍼니</span>
//           </a>
//         </Link>
//         <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//           <Link href="/" legacyBehavior>
//             <a className="mr-5 hover:text-gray-900">홈</a>
//           </Link>
//           <Link href="/projects" legacyBehavior>
//             <a className="mr-5 hover:text-gray-900">프로젝트</a>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }
import Link from 'next/link'
import Image from 'next/image'
import wiseinLogo from '../public/images/wisein_logo.png'

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 w-full h-max  border-b-2 bg-white text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center mb-4 md:mb-0">
              <Image src={wiseinLogo} alt="logo" />
              {/* <span className="ml-3 text-xl">| 기술블로그</span> */}
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
          <a href="https://datain.co.kr/guide/html/info.html" target="_blank">
            <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded-lg text-base ml- md:mt-0">
              와이즈인 홈페이지
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
    </>
  )
}
