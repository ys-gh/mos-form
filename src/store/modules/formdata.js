import items from "@/assets/items.json";

const formdata = {
    namespaced: true,

    state: {
        items: items,
        methods: new Set(),

        formAnswers: {
            // ここは実際に使うときにmethod名に修正してください。
            m1: {},
            m2: {},
            m3: {},
        }
    },
    mutations: {
        createMethodSet(state) {
            Object.values(items).forEach(item => state.methods.add(item.method));
        },

        updateFormAnswer(state, question) {
            state.formAnswers[question.methodName][question.id] = question.answer
        }
    },
};

export default formdata