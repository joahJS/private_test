<template>
    <subPageHero />
    <div id="" class="web-common-inner common-main-section">
        <BreadCrumbs />

        <h1 class="page-title">제품 01</h1>
        <section v-for="cate in cateList" id="cate01-list-box">
            <router-link v-for="subItem in cate.children.slice().reverse()" :to="{name: 'Cates_in', params: {id: subItem.number}}"><!-- 반복구간 시작  // reverse()역순가져오기-->
                <div class="cate01-list-line">
                    <img data-cate01-img :src="subItem.thumImg">
                    <h4 data-cate01-title>{{ subItem.title }} </h4>
                    <span data-cate01-subtitle>{{subItem.subTitle}}</span>
                </div>
            </router-link>
        </section>

    </div>
    <ContactUs />
</template> <!-- Template Ends -->

<script setup>
    import subPageHero from '@/components/subPageHero.vue'
    import ContactUs from '@/components/ContactUs.vue'
    import BreadCrumbs from '@/components/breadCrumb.vue'

    const upperPath = '/temp/'

    const cateList = ref([
        {
            url: '/cate01/',
            children: [
                {
                    number: '0',
                    thumImg: `${upperPath}images/cate/img03.jpg`,
                    title: '고무링삽입형 VR관',
                    subTitle: '서브타이틀인데 있을수도 길수도 짧을수도있음 변수에 대응',
                }
            ]
        }
    ])
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

#cate01-list-box {
    @apply grid justify-start;

    grid-template-columns: repeat(4, auto);
}

.cate01-list-line {
    @apply px-2 py-4;

    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s linear;
    max-width: 240px;

    &:hover {
        transform: scale(1.04);
    }

    img {
        @apply mb-1.5;

        aspect-ratio: 1/1;
        object-fit: cover;
    }

    h4 {
        @apply font-bold pb-1;

        font-size: var(--font16);
        line-height: 1.2;
        height: 2rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    span {
        line-height: 1.2;
        height: 1.7rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: rgba(var(--black), .75);
    }
}

</style> <!-- Stylesheet Ends -->