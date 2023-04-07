//자료실 리스트페이지

import { defineStore } from 'pinia'

export const useDatasStore = defineStore('datas', () => {
    const upperPath = '/temp/'

    //리스트
    const dataList = ref([
        {
            url: '/datas/',
            children: [
                {
                    bindIndex:'0',
                    number: '1',
                    title: '카달로그 다운로드',
                    date: '2023.03.27',
                },

            ]
        }
    ])

    //상세페이지
    

    return { dataList }
    
})


    