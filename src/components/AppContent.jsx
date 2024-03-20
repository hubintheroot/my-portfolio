import Container from "./Container"
import React, { useState } from 'react'


const data = {
    about: {
        id: 'about',
        title: 'About Me',
        desc: [
            '안녕하세요.',
            '해결방안을 도입하기 위한 배움을 즐기는 Frontend 개발자 편상건입니다.',
            '언어를 문제해결을 위한 도구로 사용하며 사용자 경험을 개선하는 프론트엔드 개발자가 되고 싶습니다.'
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
                title: '이전 포트폴리오 웹페이지',
                desc: `포트폴리오 웹페이지입니다.
                바닐라JS에 익숙해지기 위해 개인 프로젝트로 만들었으며 가진 기술 스택과 수행한 프로젝트를 소개합니다. 
                모듈화된 컴포넌트로 구현하였으며,12월이 되면 눈 내리는 배경화면으로 변경되는 부분을 구현했습니다.`,
                img: 'portfolio_img',
                git: 'https://github.com/hubintheroot/portfolio' 
            },
            {
                title: '포트폴리오',
                desc: `바닐라js로 만든 기존의 포트폴리오 사이트 react로 migration한 웹페이지입니다. 
                 컴포넌트의 스타일 관리를 위해 Styled-component와 react-icon 라이브러리를 활용하여 구현했습니다.
                `,
                img: 'react_portfolio_img',
                git: 'https://github.com/hubintheroot/my-portfolio'
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