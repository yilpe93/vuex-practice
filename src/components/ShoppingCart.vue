<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="(product, index) in products" :key="index">
                {{ product.title }} - {{ product.price | currency }} -
                {{ product.quantity }}
            </li>
        </ul>
        <p>Total: {{ total | currency }}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapGetters("cart", {
            products: "cartProducts",
            total: "cartTotal"
        }),

        ...mapState("cart", {
            // checkoutStatus: "checkoutStatus"
            checkoutStatus: state => state.checkoutStatus
        })
    },

    methods: {
        ...mapActions("cart", ["checkout"])
    }

    // computed: {
    //     products() {
    //         return this.$store.getters.cartProducts;
    //     },
    //     total() {
    //         return this.$store.getters.cartTotal;
    //     }
    // }

    // methods: {
    //     checkout() {
    //         this.$store.dispatch("checkout");
    //     }
    // }
};
</script>

<style scoped></style>
