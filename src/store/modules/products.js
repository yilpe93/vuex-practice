import shop from "@/api/shop";

export default {
    namespaced: true,

    state: {
        items: []
    },

    getters: {
        availableProducts(state) {
            return state.items.filter(item => item.inventory > 0);
        },

        productIsStock() {
            return product => {
                return product.inventory > 0;
            };
        }
    },

    mutations: {
        setProducts(state, products) {
            state.items = products;
        },

        decrementProductInventory(state, product) {
            product.inventory--;
        }
    },

    actions: {
        fetchProducts({ commit }) {
            return new Promise(res => {
                // make the call
                // call setProducts mutation
                shop.getProducts(products => {
                    commit("setProducts", products);
                    res();
                });
            });
        }
    }
};
