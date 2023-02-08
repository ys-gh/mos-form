import items from "@/assets/items.json";

const pagination = {
    namespaced: true,
    state: {
        items: items,

        curPage: 1,
        perPage: 5,
        totalItem: 0,
        totalPage: 0
    },
    getters: {
        slicedItems(state) {
            const start = (state.curPage - 1) * state.perPage;
            const end = state.curPage * state.perPage;
            return Object.keys(state.items).slice(start, end);
        },

    },
    mutations: {
        calctotalItem(state) {
            state.totalItem = Object.keys(state.items).length
        },
        calcTotalPage(state) {
            state.totalPage = Math.ceil(state.totalItem / state.perPage)
        },
        prev(state) {
            state.curPage = Math.max(state.curPage - 1, 1)
        },
        next(state) {
            state.curPage = Math.min(state.curPage + 1, state.totalPage)
        },


    },
    actions: {},
    modules: {},
};

export default pagination