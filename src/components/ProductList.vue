<template>
    <div>
        <h1>Product List</h1>

        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
        <ul v-else>
            <li v-for="(product, index) in products" :key="index">
                {{ product.title }} - {{ product.price | currency }} -
                {{ product.inventory }}
                <button
                    :disabled="!productIsStock(product)"
                    @click="addProductToCart(product)"
                >
                    Add to cart
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            loading: false,
            message: "Hello EventBus"
        };
    },

    computed: {
        ...mapState("products", {
            products: state => state.items
        }),

        ...mapGetters("products", {
            productIsStock: "productIsStock"
        })
    },

    methods: {
        ...mapActions({
            fetchProducts: "products/fetchProducts",
            addProductToCart: "cart/addProductToCart"
        })
    },

    // computed: mapState({
    //     products: state => state.products
    // }),

    // computed: {
    //     products() {
    //         // return this.$store.state.products;
    //         return this.$store.state.products;
    //     },

    //     productIsStock() {
    //         return this.$store.getters.productIsStock;
    //     }
    // },

    // methods: {
    //     addProductToCart(product) {
    //         this.$store.dispatch("addProductToCart", product);
    //     }
    // },

    created() {
        this.loading = true;
        this.fetchProducts().then(() => (this.loading = false));
    }
};
</script>

<style scoped></style>
