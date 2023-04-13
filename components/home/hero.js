import Link from 'next/link'
import Animation from './animation'

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 이곳은
          <br className="hidden lg:inline-block" />
          와이즈인컴퍼니 기술블로그 입니다
        </h1>
        <p className="mb-8 leading-relaxed">
          이상 풍부하게 이는 봄바람을 이상 어디 길지 찾아다녀도, 바이며, 그리하였는가?
          <br /> 용기가 인생을 옷을 그들의 우리는 어디 우리 그리하였는가? 그들을 보내는 청춘 영락과 아니다.
          <br />
          놀이 풀밭에 있는 튼튼하며, 보이는 얼음에 설레는 황금시대의 품에 듣는다. 구할 하는 살았으며,
          <br /> 인도하겠다는 아니더면, 같은 인생을 든 만물은 듣는다. 방지하는 목숨이 공자는 두기 우리의 크고
          <br /> 미인을 사라지지 인생에 봄바람이다. 방황하여도, 생생하며, 산야에 것이다. 인도하겠다는 가슴이
          <br /> 착목한는 일월과 바이며, 이것이다. 석가는 있는 속잎나고, 더운지라 꽃 꽃이 구하기 우리의 교향악이다.
          <br /> 보이는 실로 귀는 않는 원질이 가지에 사막이다. 작고 하는 구하지 수 가슴이 인도하겠다는 영원히 것이다.
        </p>
        <Link href="/projects" legacyBehavior>
          <div className="flex justify-center">
            <button className="btn-project">프로젝트 보러가기</button>
          </div>
        </Link>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}
