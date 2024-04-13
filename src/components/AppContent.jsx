import Container from "./Container"
import React, { useState } from 'react'


const data = {
    about: {
        id: 'about',
        title: 'About Me',
        desc: [
            '안녕하세요.',
            '프론트엔드 개발자 편상건입니다.',
            '저는 다양한 환경에서 동일한 경험을 제공하는 웹 플랫폼을 통해 사용자의 니즈를 충족시키고, 문제를 해결하는 과정에서 성장하는 것에 보람을 느낍니다. 개발을 통해 사용자에게 더 좋은 경험을 만드는 것이 목표입니다.'
        ],
        github: 'https://github.com/hubintheroot'
    },
    skills: {
        id: 'skills',
        title: 'My Skills',
        mySkills:[
            {name:'HTML5', img:'img/mySkills/html5.png'},
            {name:'CSS3', img:'img/mySkills/css3.png'},
            {name:'BOOTSTRAP', img:'img/mySkills/bootstrap.png'},
            {name:'JAVASCRIPT', img:'img/mySkills/javascript.png'},
            {name:'VUE.JS', img:'img/mySkills/vuejs.png'},
            {name:'REACT', img:'img/mySkills/react.png'},
            {name:'jQuery', img:'img/mySkills/jquery.png'},
            {name:'git', img:'img/mySkills/git.png'},
        ]
    },
    projects: {
        id: 'projects',
        projects:[ // TODO: 프로젝트 정보 넣기
            {
                title: '월급 계산기',
                desc: `근로시간을 입력받아 주휴수당이 미포함된 월급 계산기를 제공하는 웹페이지입니다. 
                vue.js 프레임워크를 활용한 개인 프로젝트로 vue의 props와 emit을 활용하여 컴포넌트 간의 데이터 전달을 
                구현했습니다.`,
                img: 'salary_calculator_img',
                git: 'https://github.com/hubintheroot/salary-calculator' 
            },
            {
                title: '이터널리턴 로테이션',
                desc: `게임 랭크 검색과 로테이션 정보를 제공하는 웹서비스입니다. 
                로테이션 정보를 grid형식으로 구현하고 유저의 닉네임을 입력받아 현재 진행중인 시즌의 랭크 정보를 restAPI를 활용하여 받았으며,
                애니메이션으로 보여줄 수 있도록 구현했습니다.`,
                img: 'eternalReturn_rotation_img',
                git: 'https://github.com/hubintheroot/EternalReturn' 
            },
            {
                title: '포트폴리오',
                desc: `바닐라js로 만든 기존의 포트폴리오 사이트 react로 migration한 웹페이지입니다. 
                 컴포넌트의 스타일 관리를 위해 Styled-component와 react-icon 라이브러리를 활용하여 구현했습니다.
                `,
                img: 'react_portfolio_img',
                git: 'https://github.com/hubintheroot/my-portfolio'
            },
            {
                title: '이터널리턴 조회',
                desc: `게임 이터널리턴의 정보를 제공하는 웹서비스입니다.
                supabase를 활용하여 캐릭터 정보와 로테이션 정보를 제공하고 있으며, 캐릭터 스킨과 랭크 정보 제공 서비스는 준비 중입니다.
                라우터를 활용하여 페이지를 보여주고, 가장 먼저 캐릭터 정보를 보여주기 위해서 useNavigate를 활용하여 리다이렉션을 구현했습니다.
                캐릭터 정렬은 select를 활용하여 '출시 순'과 '가나다 순'으로 나누고, 로테이션 캐릭터들을 먼저 볼 수 있도록 checkbox를 활용했습니다.`,
                img: 'er-lookup_img',
                git: 'https://github.com/hubintheroot/eternalRetrun-lookup'
            },
        ]
    }
};


export default function AppContent() {
    const [about, setAbout] = useState(data.about);
    const [skills, setSkills] = useState(data.skills);
    const [projects, setProject] = useState(data.projects);
    
    return(
        <div>
            <Container props={about}/>
            <Container props={skills}/>
            <Container props={projects}/>
        </div> 
    )
}