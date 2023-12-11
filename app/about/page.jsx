import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <div>
        <div className="m-4 p-4 rounded-lg bg-gray-500/50 border border-gray-500">
          <h1 className="font0-bold text-2xl underline text-indigo-500 font-bold mb-1">
            자기소개
          </h1>
          <div className="text-white">
            <p>
              중부대학교 정보보호학과에 재학 중인 22학번 박서진이라고 합니다.
            </p>
            <p>
              평생을 배운다고 해도 모르는 것이 많을테지만, 그럼에도 계속
              노력하면서 여러 지식들과 능력들을 익혀나가고 싶습니다.
            </p>
          </div>
        </div>
        <div className="m-4 p-4 rounded-lg bg-gray-500/50 border border-gray-500">
          <h1 className="font0-bold text-2xl underline text-fuchsia-600 font-bold mb-1">
            현재 프로젝트
          </h1>
          <div className="text-white relative">
            <p className="bg-white text-black w-1/3 text-center rounded-full absolute -top-10 -right-2 p-1 border-2 border-solid border-gray-600">
              팀원 -{' '}
              <button>
                <Link href="https://portfolio-hyk.vercel.app/" target="_blank">
                  신준혁
                </Link>
              </button>
              ,{' '}
              <button>
                <Link href="https://site-anvoanvo.vercel.app/" target="_blank">
                  김승언
                </Link>
              </button>
              ,{' '}
              <button>
                <Link
                  href="https://next-js-portfolio-jade.vercel.app/"
                  target="_blank"
                >
                  유혁준
                </Link>
              </button>
              , 박서진
            </p>
            <p>
              끝난 게임의 전적과 통계, 또는 타 플레이어의 정보를 검색하는
              웹사이트를 제작하고 있습니다.
              <button className="italic font-black bg-white border-2 text-red-500 px-1 pr-2 ml-3 border-gray-600/75 rounded-full">
                <Link href="https://ggwp-lol.vercel.app/" target="_blank">
                  GGWP
                </Link>
              </button>
            </p>
            <p>
              진행 단계를 확인 및 이외 다른 프로젝트에 대해 알고 싶다면 메인
              페이지에서 Projects 탭을 클릭해주세요.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
