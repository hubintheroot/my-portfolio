import { Outlet, useLocation } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import { useLayoutEffect, useState } from "react";

export default function Root() {
  // TODO: supabase로 데이터 정리 밑 관리하기
  // 1. supabase db에 데이터(only text) 저장하기
  // 2. supabase db를 관리할(post 요청) 로그인 기능 구현(admin 페이지)
  // 3. supabase db에서 데이터를 가져와(get 요청) 페이지에 노출시키는 기능 구현
  // 4. 에러 발생 시 처리할 방안 고민하기
  const tmpData = {
    about: {
      id: "about",
      title: `안녕하세요,
프론트엔드 개발자
편상건입니다.`,
      desc: `일상에서 마주할 수 있는 문제를 개발을 통해 해결하고,
      해결하는 과정을 즐기며 성장하는 개발자입니다.`,
      github: "https://github.com/hubintheroot",
    },
    // TODO: 스킬 아이콘은 SVG를 활용하기
    skills: {
      id: "skills",
      frontend: [
        {
          name: "HTML",
          level: ["시맨틱 태그를 이해하고 활용할 수 있습니다."],
        },
        {
          name: "CSS",
          level: ["기본 선택자와 가상 클래스, 가상 요소를 다룰 수 있습니다."],
        },
        {
          name: "JavaScript",
          level: ["ES6+ 문법을 이해하고 활용할 수 있습니다."],
        },
        {
          name: "react",
          level: [
            "hooks를 활용하여 불필요한 렌더링을 줄일 수 있습니다.",
            "가상 DOM의 원리를 이해하고 있습니다.",
          ],
        },
        {
          name: "TypeScript",
          level: [
            "데이터 타입을 지정하여 예상치 못한 오류를 방지할 수 있습니다.",
          ],
        },
      ],
    },
    projects: {
      id: "projects",
      projects: [
        {
          id: 1,
          title: "ps.G",
          type: "개인",
          desc: "포트폴리오 사이트",
          stack: [
            "react",
            "styled-component",
            "react-icon",
            "react-router-dom",
          ],
          img: "/public_assets/projectImgs/portfolio_img.png",
          git: "https://github.com/hubintheroot/my-portfolio",
          descDetail: `react를 활용하여 제작한 포트폴리오입니다.
          깔끔하고 직관적인 정보 전달과 효율적인 코드관리를 위해 Styled-Component와 react-icon을 활용하여 디자인했습니다.`,
          workInfo: {
            date: "2023.10 ~ ",
            worked: [
              {
                mainProblem: `의도하지 않은 스크롤 이동`,
                descProblem: `프로젝트 상세 페이지에서 메인 페이지로 이동 시 프로젝트 목록을 보여줘야 했으나 메인 페이지의 최상단으로 스크롤 이동되는 현상을 확인했습니다.`,
                descCause: `원인은 React Router가 URL과 매칭되는 컴포넌트를 마운트하여 새로운 콘텐츠를 렌더링하면 브라우저가 새로운 콘텐츠의 시작부분을 노출시키기 위해 상단으로 스크롤하는 것으로 확인되었습니다.`,
                myPlan: `페이지 전환 전의 스크롤 위치를 기억하고, 돌아올 때 기억한 위치로 이동하는 방식으로 해결하고자 했습니다.`,
                solution: `useLayoutEffect 훅을 활용하여 pathname이 변경되었을 때 기억하는 스크롤 위치로 이동하는 로직으로 문제를 해결했습니다.
                또한 의도하지 않은 동작을 방지하기 위해 사용된 스크롤 위치를 삭제하는 로직을 추가했습니다.`,
                learningPoint: ``,
              },
              {
                mainProblem: `url 접근 시 데이터를 받지 못하는 문제`,
                descProblem: `url을 통해 프로젝트 상세 페이지에 접근할 때, 프로젝트 데이터를 받아오지 못하는 문제가 발생했습니다.`,
                descCause: `사용자의 인터렉션을 통해 프로젝트 상세 페이지에 접근할 때 해당 프로젝트의 데이터를 props로 넘겨주는데, 상세 페이지 url로 접근할 경우 데이터를 받지 못하여 발생한 문제임을 확인했습니다.`,
                myPlan: `사용자가 잘못된 접근을 했을 때, 에러가 발생한 페이지 대신 잘못된 접근을 안내하는 페이지를 노출시켜 해결하고자 했습니다.`,
                solution: `상세 페이지 컴포넌트가 처음 렌더링 될 때 useEffect 훅을 활용하여 데이터 유무를 체크하고 react-router의 navigate 함수를 통해 안내 페이지로 이동시키는 로직을 추가하여 해결했습니다.`,
                learningPoint: ``,
              },
            ],
            useTools: [
              "react.js",
              "Styled-component",
              "react-icon",
              "react-router-dom",
              "Git",
            ],
          },
        },
        // 진행중인 프로젝트
        {
          id: 2,
          title: "eternalreturn-lookup",
          type: "개인",
          desc: "게임 정보를 제공하는 웹 사이트",
          stack: [
            "react",
            "react-router-dom",
            "styled-components",
            "supabase",
            "django",
          ],
          img: "/public_assets/projectImgs/er-lookup_img.png",
          git: "https://github.com/hubintheroot/eternalRetrun-lookup",
          demo: "https://eternalreturn-lookup.pages.dev/",
          descDetail: `eternalreturn-lookup은 배틀로얄게임 이터널리턴의 공식 정보를 제공하는 서비스입니다.
          인게임에서 제공되는 캐릭터의 스토리와 신상정보를 웹 사이트에서 제공하고자 만들었습니다.
          캐릭터 스토리, 신상정보, 금주의 무료 캐릭터 로테이션 정보를 제공합니다.`,
          workInfo: {
            date: "2024.3 ~ ",
            worked: [
              {
                mainProblem: `OpenAPI 사용량 제한`,
                descProblem: `다수의 사용자가 OpenAPI 데이터를 가져오지 못하는 문제가 발생했습니다.`,
                descCause: `OpenAPI의 사용량이 제한되어 발생한 문제임을 확인했습니다.`,
                myPlan: `OpenAPI의 데이터가 정기적인 업데이트가 되는 점을 고려하여 OpenAPI의 데이터를 DB에 저장하고, 사용자는 데이터를 DB에서 가져오는 방식으로 해결하고자 했습니다.`,
                solution: `DB는 백엔드 서비스 플랫폼 firebase와 supabase 중 정형 데이터를 다루는 프로젝트에 보다 적합하다고 생각된 supabase의 PostgreSQL를 선택했습니다.
                django의 crontab을 활용하여 주기적인 데이터 업데이트를 구현하여 OpenAPI 사용량의 문제를 해결했습니다.`,
                learningPoint: ``,
              },
              {
                mainProblem: `중복 데이터 요청 방지`,
                descProblem: `supabase 데이터를 요청하는 과정이 페이지가 새롭게 렌더링 될 때 마다 반복되는 문제가 발생했습니다.`,
                descCause: `useEffect를 사용하여 첫 렌더링 이후 데이터 요청이 반복되는 문제는 없었으나, 다른 페이지로 이동 후 돌아올 때 첫 렌더링이 발생하면서 요청했던 데이터를 다시 요청하는 문제임을 확인했습니다.`,
                myPlan: `받은 데이터를 저장한 후, 첫 렌더링이 발생할 때 저장된 데이터를 확인하여 중복된 데이터 요청을 방지하고자 했습니다.`,
                solution: `우선, 페이지 전환 시에 중복되는 데이터를 방지하고, 새로고침이나 브라우저가 닫힐 경우 데이터를 보관하지 않는 공간이 필요했습니다.
                로컬스토리지, 세션스토리지, redux의 storage 중에서 조건을 충족하는 redux의 storage를 선택했습니다.
                redux storage에 저장된 데이터를 확인하는 로직을 추가하여 데이터 요청 중복 문제를 해결했습니다.`,
                learningPoint: ``,
              },
              {
                mainProblem: `로딩 ux 개선`,
                descProblem: `이미지 로딩이 길어졌을 때 빈 화면에 노출된 사용자의 이탈이 우려되는 문제가 있었습니다.`,
                descCause: ``,
                myPlan: `제공할 정보의 위치 구조를 보여주어 사용자의 이탈을 방지하고, 빠르게 정보를 습득할 수 있도록 하기 위해 스켈레톤 UI를 통해 해결하고자 했습니다.`,
                solution: `기존의 css를 컴포넌트화 할 수 있다는 점이 코드 관리 측면에서 장점으로 느껴져서 Styled Components 라이브러리를 사용하여 스켈레톤 UI를 구현했습니다.
                onLoad 함수를 활용하여 모든 이미지의 로딩 상태를 redux로 관리하고, 모든 이미지가 로딩을 완료했을 때 스켈레톤UI를 감추고 데이터를 드러내는 로직을 추가하여 UX를 개선했습니다.`,
                learningPoint: ``,
              },
              {
                mainProblem: `로딩 시간 개선`,
                descProblem: `정적사이트 배포 서비스를 통해 배포한 프로젝트의 이미지 로딩 시간이 1초 이상 걸리는 문제가 있었습니다.`,
                descCause: `사용한 정적사이트 배포 서비스인 Netlify의 CDN 서버가 적어, 서버로부터 이미지를 받아와야 하는 구조상 서버와의 물리적 거리가 멀어서 로딩 시간이 길어지는 것을 확인했습니다.`,
                myPlan: `이미지를 최적화하여 서버로부터 받아올 이미지 용량을 최소한으로 줄이고, 상대적으로 많은 CDN 서버를 보유한 배포 서비스로 변경하여 로딩 시간을 개선하고자 했습니다.`,
                solution: `이미지의 비율이 일정하도록 크기를 1024px로 변경하고, 기존의 이미지 확장자인 png를 webp로 변경하여 약 30%의 용량을 축소했습니다.
                배포 서비스는 Netlify보다 더 많은 CDN서버를 보유한 Cloudflare의 pages 서비스로 변경하여 로딩 시간을 약 0.5초가량 단축할 수 있었습니다.`,
                learningPoint: ``,
              },
            ],
            useTools: [
              "react.js",
              "Styled-component",
              "react-icon",
              "react-router-dom",
              "django",
              "Git",
            ],
          },
        },
      ],
    },
  };
  // eslint-disable-next-line
  const [data, setData] = useState(tmpData);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (sessionStorage.gobackEvent) {
      window.scrollTo(0, sessionStorage.anchor);
      sessionStorage.removeItem("anchor");
      sessionStorage.removeItem("gobackEvent");
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div>
      <AppHeader />
      <Outlet context={data} />
      <AppFooter />
    </div>
  );
}
