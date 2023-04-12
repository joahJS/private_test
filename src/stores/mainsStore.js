//메인페이지 전체 스토어

import { defineStore } from "pinia";

export const useMainsStore = defineStore('mains', () => {
    const upperPath = '/temp/'

    //메인슬라이드

    const mainSlides = ref([
        {
            uniqueKey: 0,
            slideTitle: '자연을 생각하는 친환경 콘크리트',
            subText: '생산 과정에서 배출되는 오염물질을 2% 미만으로 줄였습니다',
            visType: 'video',
            visSrc: `${upperPath}images/video.mp4`
        },
        {
            uniqueKey: 1,
            slideTitle: '어떠한 건축 조건에도 적합한 벽돌',
            subText: '고층 빌딩 시공이 가능한 초고밀도 벽돌',
            visType: 'video',
            visSrc: `${upperPath}images/vodeo02.mp4`
        },
        {
            uniqueKey: 2,
            slideTitle: '곰팡이 걱정 없는 시멘트',
            subText: '통기성이 좋은 항균력 99.99% 신소재 시멘트 개발',
            visType: 'image',
            visSrc: `${upperPath}images/img13.jpg`
        },
    ])

    return { mainSlides }
})