const state = {
    navigatorOpen: false,
}

// getters
const getters = {
    isNavigatorOpen: (state) => {
        return state.navigatorOpen;
    },
}

// actions
const actions = {
    toggleNavigator({
        commit
    }) {
        commit('toggleNavigator', null);
    },
}

// mutations
const mutations = {
    toggleNavigator(state) {
        state.navigatorOpen = !state.navigatorOpen;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}