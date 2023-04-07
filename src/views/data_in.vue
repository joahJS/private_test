<template>
    <subPageHero />
    <div id="" class="web-common-inner common-main-section">
        <BreadCrumbs />

        <section  v-if="dataGroup[getId]" id="datain-detail">
            <div class="data-title-box">
                <h1>{{dataGroup[getId].title}}</h1>
                <span>{{dataGroup[getId].date}}</span>
            </div>
            <div class="data-content-box">
                <div>
                    <img :src="dataGroup[getId].thumImg">
                </div>
                <div class="data-text-box">
                    <p class="data-text">{{dataGroup[getId].texts}}</p>
                </div>
            </div>
            
            <div id="UploadedFiles">
                <p class="">Download File List</p>
                <ul data-uploaded-list>
                    <li data-uploaded-file v-for="link in dataGroup[getId]?.uploaded">
                        <p><a :href="link.fileName" target="_blank"  >{{ link.name }}</a></p>
                    </li>

                </ul>
            </div>

            <div class="pt-40 text-center">
                <router-link :to="{name: 'Datas'}">
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

const getParams = useRoute()
const getId = parseInt(getParams.params.id)

const upperPath = '/temp/'

const dataGroup = ref([
        {
            bindIndex:'0',
            number: '1',
            title: '카달로그',
            date: '2021.12.03',
            thumImg: '',
            texts: 'XX콘크리트 카달로그 아래 파일을 클릭 후 다운로드 해주시길 바랍니다.',
            uploaded: [
                {fileName:`${upperPath}/catalog/catalog1.pdf`, name:'카달로그.pdf'}
            ]
        },
        

    ])
</script> <!-- Logic Ends -->

<style lang="scss" scoped>

.data-title-box {
    @apply flex flex-col;

    >h1 {
        @apply font-bold py-2;
        
        font-size: var(--font20);
        border-bottom: 1px solid rgba(var(--black), .05);
        line-height: 1.2
    }

    >span {
        @apply text-right py-2;
    }
}

.data-content-box {
    @apply my-10 ;
}

.data-text-box {
    @apply py-5
}

.data-text {
    line-height: 1.3;

}

#UploadedFiles {
    @apply p-2.5 ;

    background-color: rgba(var(--black), .05);
    line-height: 1.2;

    >p {
       @apply font-bold pb-1;

       font-size: var(--font16);
       
    }
}
   
</style> <!-- Stylesheet Ends -->