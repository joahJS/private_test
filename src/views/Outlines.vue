<template>
    <subPageHero />
    <div id="outlineSection">
        <BreadCrumbs />
        
        <section id="grtOutline" class="web-common-inner">
            <h1 class="page-title">개요</h1>

            <p id="grtText" class="page-title-bottom">
                "고객과의 신뢰를 기업 이념으로 세계적인 기술혁신을 통하여 항상 최고의 제품만을 생산할 것을 약속합니다."
            </p>

            <section id="grtBtm">
                <div class="grt-imgs-div">
                    <img src="/src/assets/images/grt_sample.jpg" alt="CEO picture">
                </div>
                <div class="grt-texts-div">
                    <p>안녕하십니까? 저희 홈페이지를 찾아주신 고객님을 진심으로 환영합니다.</p>
                    <p>(주)CONCRETE는 1900년 설립 이래 차별화된 소재와 축적된 제조기술을 발판으로 xx 등 다양한 제품 개발로 시장을 선도하는 기업으로 거듭났습니다. </p>
                    <p>(주)CONCRETE는 앞으로도 고객님들의 목소리에 귀 기울이며 업계를 선도하는 제품과 서비스로 다가설 것을 약속드리며 항상 최선으로 노력하는 모습 보여드리겠습니다.</p>
                    <p>앞으로도 많은 애정과 관심 부탁드립니다.</p>
                    <p>감사합니다.</p>
                    <div data-grt-ceo-names>
                        <p class="grt-ceo-name">대표이사 김벽돌</p>
                        <img data-grt-ceo-sign src="/src/assets/images/sign_example.png" alt="대표자 날인">
                    </div>
                    
                </div>
            </section>
        </section>

        

        <div id="ideology"> 
            <section id="ideoTexts" class="web-common-inner">
                <div id="ideoTitle">
                    <h1 class="page-title">기업이념</h1>
                    <!-- <p class="corp-name">
                        (주)<span class="font-color-main">C</span>ONCRETE
                    </p> -->
                    <p class="page-title-bottom">
                        "현실에 만족하지 않고 앞서가는 기술력으로 세상에 기여한다"
                    </p>
                    <p class="page-subtitle-texts">(주)CONCRETE는 지속가능한 성장을 위한 목표와 미래를 제시하여 사회와 고객에 지속적으로 기여할 것입니다.</p>
                </div>
                <div id="ideoLists">
                    <ul data-ideo-list>
                        <li>
                            <p data-ideo-subtitle><span class="font-color-main">VISION</span><span>비전</span></p>
                            <p data-ideo-subtext>미래를 선도하는 기술력</p>
                        </li>
                        <li>
                            <p data-ideo-subtitle><span class="font-color-main">COREVALUE</span><span>핵심가치</span></p>
                            <p data-ideo-subtext>고객감동, 품질경영, 가치창조</p>
                        </li>
                        <li>
                            <p data-ideo-subtitle><span class="font-color-main">PHILOSOPHY</span><span>기업이념</span></p>
                            <p data-ideo-subtext>앞서가는 기술로 고객감동을 실현하고 생각하는 글로벌기업으로 성장해 나간다.</p>
                        </li>
                    </ul>
                </div>
            </section>
            
        </div>
    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

#grtSection {
        padding-bottom: 5rem;
    }

    .page-title-bottom {
        @apply flex w-full justify-center text-center break-keep;

        padding: 0 0 4rem 0;
        font-size: var(--font28);
        line-height: 1.35;
    }

    #grtBtm {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }

    #grtOutline {
        animation: grt-animate 0.75s ease-in backwards;
    }

    @keyframes grt-animate {
        0% {
            transform: translateY(8%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

    .grt-texts-div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        p {
            line-height: 1.5;

            &.grt-ceo-name {
                margin-top: 1rem;
                text-align: right;
                font-size: var(--font26);
                font-weight: bold;
            }
        }
    }

    [data-grt-ceo-names] {
        @apply flex w-full justify-end items-center;

        gap: 1rem;
    }

    [data-grt-ceo-sign] {
        width: 6rem;
    }

    #outlineSection {
        padding: 1rem 0 0 0;

        .page-subtitle {
            padding: 0 0 1rem 0;
        }
    }

    .page-subtitle {
        @apply flex w-full justify-center text-center break-keep;

        padding: 0 0 4rem 0;
        font-size: var(--font32);
        line-height: 1.35;
    }

    .page-subtitle-texts {
        @apply flex w-full justify-center text-center break-keep relative;

        font-size: var(--font16);
        color: rgba(var(--font), .45);

        // &::after {
        //     @apply absolute;

        //     content: '';
        //     display: block;
        //     top: .5rem;
        //     width: 100%;
        //     height: .75rem;
        //     background-color: rgba(var(--white), .1);
        // }
    }

    .font-color-main {
        color: rgba(var(--main), 1);
    }

   #ideology {
        gap: 3rem;
        margin-top: 10rem;
        animation: ideo-animate .75s ease-in backwards;
        animation-delay: .75s;
        background-color: rgba(var(--main), 1);
        padding: 6rem 0 8rem;

        .page-title::after {
            background-color: rgba(var(--white), .3);
        }
   }

   @keyframes ideo-animate {
        0% {
            transform: translateY(8%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
   }

   #ideoTitle {
        @apply flex flex-col justify-center items-center;

        margin-bottom: 2rem;
        color: rgb(var(--white));

        P {
            &:last-child {
                line-height: 1.35;
                color: rgba(var(--white), .5);
            }
        } 

        .page-title-bottom {
            padding: 0 0 1rem 0;
        }
   }

   [data-ideo-list] {
        display: grid;
        gap: .5rem;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 4rem 1rem;

        li {
            @apply flex flex-col items-center;

            padding: 2rem 3rem;
            background-color: rgba(var(--white), 1);
            border-radius: 0.25rem;
            gap: 1rem;

           
        }
   }

   [data-ideo-list] li p {
        @apply break-keep;

        &:last-child {
            line-height: 1.5;
            color: rgba(var(--font), 1);
        }
   }

   [data-ideo-subtitle] {
        @apply flex flex-col;

        font-size: var(--font20);
        
        span {
            display: inline-block;

            &:first-child {   
                font-size: 12px;
                margin-bottom: .75rem;
            }

            &:last-child {
                color: rgba(var(--font), 1);
            }
        }

        &::after {
            content: '';
            display: block;
            width: 1.5rem;
            height: 1px;
            background-color: rgba(var(--main), 1);
            margin: 1rem auto 0;
        }
   }

   #contactUs {
    margin-top: 0;
   }

   //반응형

   @media screen and (max-width: 1279px) {}
   @media screen and (max-width: 768px) {

        #grtBtm {
            grid-template-columns: 1fr;
            gap: 1rem;
            justify-items: center;
        }

        .page-title-bottom {
            padding-bottom: 1.5rem;
            font-size: var(--font18);
            font-weight: bold;
        }

        [data-ideo-list] {
            grid-template-columns: 1fr;
        }


   }
   @media screen and (max-width: 500px) {

        .page-title-bottom{
            padding-bottom: 1.5rem;
            font-size: var(--font16);
        }

        
        .grt-texts-div {
            p {
                &.grt-ceo-name {
                    font-size: var(--font18);
                }
            }
        }
        [data-grt-ceo-sign] {
            width: 4rem;
        }

        [data-ideo-list] {
            li{
                padding: 2rem 1rem; 
            }
        }

        [data-ideo-subtitle] {
            font-size: var(--font16);
        }

   }

</style> <!-- Stylesheet Ends -->