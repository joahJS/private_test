<template>
    <subPageHero />
    <div id="hsTitles" class="web-common-inner">
        <BreadCrumbs />
        <h1 class="page-title">연혁</h1>
        <ul id="hsMilestone">
            <li @click="goToSlide(0)">최근</li>
            <li @click="goToSlide(3)">~2020</li>
            <li @click="goToSlide(7)">~2010</li>        
        </ul>
    </div>
    <div id="hsSwipers">
        <swiper class="web-common-inner" v-bind ="historySwiper" @swiper="onSwiper">
            <swiper-slide v-for="hsList in hsGroup">
                <h4>{{ hsList.hsYear }}</h4>
                <ul data-hs-list v-for="hsSubItem in hsList.childrens">
                    <li data-hs-item>
                        <p>{{ hsSubItem.hsItem }}</p>
                    </li>
                </ul>
            </swiper-slide>
            <div class="hs-nav-btns">
            <button type="button" class="hs-arr-l">이전</button>
            <button type="button" class="hs-arr-r">다음</button>

        </div>
        </swiper>
        
    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';

    import 'swiper/css';

    // import Swiper core and required modules
    // import { Navigation, Scrollbar } from 'swiper';
    import { Navigation, Scrollbar } from 'swiper';

    // Import Swiper styles
    import 'swiper/css/bundle';

    const historySwiper = {
        modules: [Navigation, Scrollbar],
        slidesPerView: 2,
        spaceBetween: 20,
        
        navigation: {
            nextEl: '.hs-arr-r',
            prevEl: '.hs-arr-l',
        }
    }
    

    // 이 스와이퍼를 swiperInstance로 지정해서 value를 가져옴

    const swiperInstance = ref()

    function onSwiper(swiper) {
        swiperInstance.value = swiper
        console.log(swiperInstance.value)
    }

    // 슬라이드 이동하기

    function goToSlide(e) {
        console.log(this)
        
        swiperInstance.value?.slideTo(e)
        
    }


    const hsGroup = ref([
        {
            hsIndex: 0,
            hsYear: 2023,
            childrens: [
                { hsItem: '유망중소기업 지정' },
                { hsItem: '철근콘크리트 수로관 의장등록' },
                { hsItem: '품질경영 공로상' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2022,
            childrens: [
                { hsItem: '명문 장수기업인 표창장 (중소기업중앙회)' },
                { hsItem: '품질경영실천 표창(산업자원부장관)' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2021,
            childrens: [
                { hsItem: 'KS인증 획득(97-08-050) (한국표준협회)' },
                { hsItem: '공장 신축 이전' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2020,
            childrens: [
                { hsItem: '철근 콘크리트 벤치플룸(2종, 3종) 생산가동' },
                { hsItem: '철근콘크리트 수로관 뚜껑 (실용신안 제0185598호)' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2019,
            childrens: [
                { hsItem: '단체표준표시 인증획득' },
                { hsItem: '(한국콘크리트 공업협동조합연합회, 이형수로관)' },
                { hsItem: '품질관리유공 도지사 표창' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2018,
            childrens: [
                { hsItem: 'NET인증-PE라이너관맨홀 (환경부)' },
                { hsItem: '대형옹벽블록 성형기 도입(이태리)' },
                { hsItem: '조달청 우수제품지정 (고무링삽입 VR관)' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2017,
            childrens: [
                { hsItem: '품질경쟁력 50대기업 선정 (산업자원부)' },
                { hsItem: '기술결쟁력 우수기업 선정(중소기업청)' },
                { hsItem: '단체표준표시인증-호안및옹벽블록' }
            ]
        },
        {
            hsIndex: 0,
            hsYear: 2016,
            childrens: [
                { hsItem: 'KS인증(VR관, 맨홀, 경계블록)' },
                { hsItem: '철근콘크리트 (사각) 수로관 제조설비 도입' },
                { hsItem: '클린사업장 인증(한국산업안전보건공단)' }
            ]
        }
    ]);

    if ( matchMedia("(max-width: 1279px)").matches ) {
            // 1279px보다 화면이 작을 때
    

            // 모든 연도 뒤의 두글자만 잘라 `xx 형태로 변경
            hsGroup.value.map(function(e) {
                var yearStr = e.hsYear.toString();
                var yearElem = yearStr.substring(2, 4);

                e.hsYear = '`' + yearElem
                
                return 
            })


            // historySwiper.slidesPerView = '1.5'
            

        } else {
            // 1279px보다 화면이 클 때
            
        }


</script> <!-- Logic Ends -->

<style lang="scss" scoped>

    .page-title {
        animation: title-animate .75s ease-in backwards;
    }

    @keyframes title-animate {
        0% {
            transform: translateY(20%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

    #hsTitles {
        padding: 1rem 0;
    }

    #hsMilestone {
        @apply grid w-1/2 justify-between items-center relative top-0;

        margin:2rem auto 4rem;
        gap: 1rem;
        animation: mile-animate .75s ease-in backwards;
        grid-template-columns: repeat(3, 1fr);

        li {
            padding: 1rem;
            cursor: pointer;
            text-align: center;

            &:hover {
                color: rgba(var(--main), 1);
            }
        }
        
    }

    @keyframes mile-animate {
        0% {
            transform: translateY(15%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

    #hsSwipers {
        @apply relative;

        margin-bottom: 5rem;
        animation: swip-animate .75s ease-in backwards;
        animation-delay: .75s;

        &::after {
            @apply absolute;

            top: 7rem;
            content: '';
            display: block;
            width: 100vw;
            height: 1px;
            background-color: rgba(var(--black), .15);
        }

        h4 {
            @apply font-bold;

            font-size: var(--font100);
            margin-bottom: 4rem;
            opacity: .15;
        }

        .web-common-inner {
            overflow: visible;
        }

        .swiper-slide {
            @apply relative;

            * {
                pointer-events: none;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-use-select: none;
                user-select: none;
            }

            &.swiper-slide-active {
                h4 {
                  opacity: 1;
                } 

                &::after {
                    background-color: rgba(var(--black), 1);
                }
            }
            
            &.swiper-slide-next {
                h4 {
                  opacity: .25;
                } 

                &::after {
                    background-color: rgba(var(--black), .25);
                }
                                
            }
                
            &::after {
                @apply absolute block;

                content: '';
                width: .75rem;
                height: .75rem;
                background-color: #dcdcdc;
                top: 6.65rem;
                left: 0;
                border-radius: 1rem;
            }
        }

        .hs-nav-btns {
            @apply absolute flex font-bold;

            gap: .5rem;
            top: -2rem;
            font-size: var(--font14);
        }
    }

    @keyframes swip-animate {
        0% {
            transform: translateX(5%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
   }


    [data-hs-list] {
        @apply flex flex-col;

    }

    [data-hs-item] {
        margin: .5rem 0;

        p {
            line-height: 1.4;
            font-size: var(--font16);
        }
    }

//반응형

@media screen and (max-width: 1279px) {

}
@media screen and (max-width: 768px) {

    #hsMilestone {
        width: 100%;
    }

    [data-hs-list]{
        word-break: keep-all;
    }
}
@media screen and (max-width: 500px) {

    #hsSwipers {

        h4 {
            font-size: var(--font80);
        }
    }

    [data-hs-item] p{
        font-size: var(--font14);
    }

    #hsMilestone li {
        padding: .25rem;
    }
}
   
</style> <!-- Stylesheet Ends -->