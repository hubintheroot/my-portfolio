import Container from "./Container"
import React, { useState } from 'react'


const data = {
    about: {
        id: 'about',
        title: 'About Me',
        desc: [
            '안녕하세요, 프론트엔드 개발자 편상건입니다.\n저는 다양한 환경에서 동일한 경험을 제공하는 웹 플랫폼을 통해 사용자의 니즈를 충족시키고, 문제를 해결하는 과정에서 성장하는 것에 보람을 느낍니다.\n개발을 통해 사용자에게 더 좋은 경험을 만드는 것이 목표입니다.'
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
                desc: '월급 계산기 사이트',
                stack: ['vue.js', 'OpenAPI'],
                img: 'salary_calculator_img',
                git: 'https://github.com/hubintheroot/salary-calculator' 
            },
            {
                title: '이터널리턴 로테이션',
                desc: '랭크와 로테이션 정보를 제공하는 웹사이트',
                stack: ['html', 'css', 'javascript'],
                img: 'eternalReturn_rotation_img',
                git: 'https://github.com/hubintheroot/EternalReturn' 
            },
            {
                title: '포트폴리오',
                desc: '포트폴리오 사이트',
                //  컴포넌트의 스타일 관리를 위해 Styled-component와 react-icon 라이브러리를 활용하여 구현했습니다.
                stack: ['react', 'styled-component', 'react-icon'],
                img: 'react_portfolio_img',
                git: 'https://github.com/hubintheroot/my-portfolio'
            },
            {
                title: '이터널리턴 조회',
                desc: '게임 정보를 제공하는 웹 사이트',
                stack: ['react', 'react-router', 'styled-components', 'supabase', 'useNavigate'],
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