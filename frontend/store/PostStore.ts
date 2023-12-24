import {defineStore} from "pinia";
import {ref} from "vue";

export const usePostStore = defineStore("postStore", () => {
    const post = ref({
        id: null,
        reactions: null,
        comments: null,
        shares: null,
        content: "",
        created: null,
        tags: [
            {
                id: null,
                isTag: true,
                name: 'Szukam'
            }
        ]
    });

    const availableTags = ref([
        {
            id: null,
            isTag: true,
            name: 'Nowy cos'
        },
        {
            id: null,
            isTag: true,
            name: 'Kot'
        },
        {
            id: null,
            isTag: false,
            name: 'sarrna na drodze'
        },
        {
            id: null,
            isTag: true,
            name: 'aaaaaaaaaaa'
        }
    ]);

    function clearPostData(): void {
        post.value = {
            id: null,
            reactions: null,
            comments: null,
            shares: null,
            content: "",
            created: null,
            tags: [
                {
                    id: null,
                    isTag: true,
                    name: 'Szukam'
                }
            ]
        }
    }

    return {
        post,
        availableTags,
        clearPostData
    };
});