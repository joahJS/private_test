<template>
    <subPageHero />
    <div id="" class="web-common-inner common-main-section">
        <BreadCrumbs />
        
        <section v-if="cateGroup[getId]">
            <div class="cate-content-box">
                <img :src="cateGroup[getId].thumImg">
                <article class="cate-text-box">
                    <h1>{{cateGroup[getId].title}}</h1>
                    <article class="cate-text">
                        <p v-for="cateText in cateGroup[getId]?.textAll">{{cateText.texts}}</p>
                    </article>                   
                </article>
            </div>
            <div class="my-5 w-full">
                <h4 class="font-bold my-10">제품도면</h4>
                <img :src="cateGroup[getId].floor" class="w-full">
            </div>
            <div class="my-5">
                <h4 class="font-bold my-10">설계실무요령</h4>
                <img :src="cateGroup[getId].table" class="mx-auto">
            </div>

            <div class="mt-20 text-center ">
                <router-link :to="{name: 'Cates'}">
                    <button class="all-btn">목록</button>
                </router-link>
            </div>
        </section>
        
    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    import { useRoute } from 'vue-router'

    const upperPath = '/temp/'

    const getParams = useRoute()
    const getId = parseInt(getParams.params.id)

    const cateGroup = ref([

        {
            number: '0',
            site: 'AP신문',
            title: ' 고무링삽입형 VR관',
            date: '2023.03.15',
            thumImg: `${upperPath}images/cate/img03.jpg`,
            floor: `${upperPath}images/cate/floor01.jpg`,
            table: `${upperPath}images/cate/table.png`,
            textAll: [
                    {texts: '- 지상으로 돌출되는 부분을 최소화'},
                    {texts: '- 자전거전용도로 설치를 위한 공간 확보.'},
                    {texts: '- 인도의 공간 확보.'},
                    {texts: '- 소켓부에 매입된 고무링은 관로의 수밀에 대하여 공학적으로 설계되어 여러 단계로 최대한 누수를 방지하며 불가피한 각도조정에도 수밀성이 우수하며, 관 부설 후 접합부에 별도의 몰탈마감이 필요하지 않는다.'},
                ]
        },

    ])

</script> <!-- Logic Ends -->

<style lang="scss" scoped>

.cate-content-box {
    @apply flex gap-6;

   > img {
        aspect-ratio: 1/1;
        object-fit: cover;
        max-width: 400px;
    }

    h1 {
        @apply font-bold mt-3;

        font-size: var(--font26);
    }
}

.cate-text {
    @apply mt-10;
    
    p {
        line-height: 1.5;
        text-indent:-10px;
    }
}

//반응형

@media screen and (max-width: 1279px) {

}
@media screen and (max-width: 768px) {

    .cate-content-box > img {
        max-width: 280px;
    }


}
@media screen and (max-width: 500px) {

    .cate-content-box {
        flex-direction: column;
        gap: .5rem;

        >img {
            max-width: 100%;
        }

        h1 {
            font-size: var(--font20);
        }

    }

    .cate-text {
        margin-top: 1.5rem;
    }
}
   
</style> <!-- Stylesheet Ends -->