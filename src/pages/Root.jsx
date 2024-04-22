import { Outlet, useLocation } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import { useEffect, useState } from "react";

export default function Root(){
    const tmpData = {
        about: {
            id: 'about',
            title: 'About Me',
            desc: [
                '안녕하세요, 프론트엔드 개발자 편상건입니다.\n저는 다양한 환경에서 동일한 경험을 제공하는 웹 플랫폼을 통해 사용자의 니즈를 충족시키고, 문제를 해결하는 과정에서 성장하는 것에 보람을 느낍니다.\n\n개발을 통해 사용자에게 더 좋은 경험을 만드는 것이 목표입니다.'
            ],
            github: 'https://github.com/hubintheroot'
        },
        projects: {
            id: 'projects',
            projects:[ // TODO: 프로젝트 정보 넣기
                {
                    id: 1,
                    title: 'salary-calculator',
                    desc: '월급 계산기 사이트',
                    stack: ['vue.js', 'OpenAPI'],
                    img: '/public_assets/projectImgs/salary_calculator_img.png',
                    git: 'https://github.com/hubintheroot/salary-calculator',
                    demo: 'https://hubintheroot.github.io/salary-calculator/',
                    descDetail: 'OpenAPI를 활용하여 최저시급을 받고 근무일을 입력받아서 월급을 계산하는 계산기 사이트입니다.\n모바일 환경에서 사용되는 것을 고려하여 디자인했으며, computed 속성을 이용하여 select박스 선택시 계산된 예상 월급을 보여주도록 구현했습니다.\n',
                    workInfo: {date: '2023.5 ~ 2023.5', worked: '디자인 및 기능 구현', useTools: ['vue.js', 'OpenAPI', 'Git']}
                },
                {
                    id: 2,
                    title: 'er-rotation',
                    desc: '랭크와 로테이션 정보를 제공하는 웹사이트',
                    stack: ['html', 'css', 'javascript'],
                    img: '/public_assets/projectImgs/eternalReturn_rotation_img.png',
                    git: 'https://github.com/hubintheroot/EternalReturn',
                    demo: 'https://er-rotation.netlify.app/',
                    descDetail: '바닐라javascript를 사용하여 컴포넌트를 구현한 프로젝트입니다. \n랭크 정보와 로테이션 정보를 한 화면에 담을 수 있도록 구성하였으며, 로테이션 정보의 디자인은 깔끔하게 느껴지는 dak.gg를 참고했습니다.',
                    workInfo: {date: '2023.9 ~ 2023.9', worked: '디자인 및 기능 구현', useTools: ['html', 'css', 'javascript', 'Git']}
                },
                {
                    id: 3,
                    title: 'ps.G',
                    desc: '포트폴리오 사이트',
                    stack: ['react', 'styled-component', 'react-icon', 'react-router-dom'],
                    img: '/public_assets/projectImgs/portfolio_img.png',
                    git: 'https://github.com/hubintheroot/my-portfolio',
                    demo: 'https://hubintheroot-portfolio.netlify.app/',
                    descDetail: '깔끔하고 직관적인 정보 전달을 위해 Styled-Component와 react-icon을 활용하여 디자인했습니다.\n프로젝트 디테일 페이지로 이동할 때 useLocation을 통해 전달받은 데이터를 활용했으며, url을 통해 접속할 경우 데이터를 받지 못하는 문제를 해결하기 위해 useEffect와 useNavigate를 활용하여 url접근을 막았습니다.',
                    workInfo: {date: '2023.10 ~ ', worked: '디자인 및 기능 구현', useTools: ['react.js', 'Styled-component', 'react-icon', 'react-router-dom', 'Git']}
                },
                {
                    id: 4,
                    title: 'eternalreturn-lookup',
                    desc: '게임 정보를 제공하는 웹 사이트',
                    stack: ['react', 'react-router-dom', 'styled-components', 'supabase', 'django'],
                    img: '/public_assets/projectImgs/er-lookup_img.png',
                    git: 'https://github.com/hubintheroot/eternalRetrun-lookup',
                    demo: 'https://eternalreturn-lookup.netlify.app/',
                    descDetail: '금주의 로테이션 정보와 캐릭터 정보, 랭크 검색을 제공하는 웹사이트를 목표로 한 프로젝트입니다.\n로테이션 정보는 백엔드에서 주기적으로 supabase를 업데이트하고, 프론트에서 supabase의 데이터를 가져오는 방식으로 구현했습니다.\n금주의 로테이션 정보의 디자인은 깔끔하게 느껴지는 dak.gg를 참고했습니다.\n\n 진행중인 프로젝트입니다.',
                    workInfo: {date: '2024.3 ~ ', worked: '기능 구현', useTools: ['react.js', 'Styled-component', 'react-icon', 'react-router-dom', 'django', 'Git']}
                },
            ]
        }
    };
    const [ data, setData ] = useState(tmpData); // eslint-disable-line no-unused-vars
    const { pathname } = useLocation();
    useEffect(() => {
        if(sessionStorage.gobackEvent){
            window.scrollTo(0, sessionStorage.anchor);
            sessionStorage.removeItem('anchor');
            sessionStorage.removeItem('gobackEvent');
        }else{
            window.scrollTo(0, 0);
        }
    },[pathname]);

    return (
        <div>
            <AppHeader/>
            <Outlet context={data}/>
            <AppFooter/>
        </div>
    )
}