<script>
    const { data } = $props();

    import Button from '$lib/components/Button.svelte';
    import { addToCart } from '$lib/stores/cart.js';

    const product = $derived(data.product);
    const more = $derived(data.more ?? []);

    const sizes = product.sizes?.split(",") || ["S", "M", "L", "XL"];

    // svelte-ignore non_reactive_update
        let selectedSize = sizes[0];

    const outOfStock = product.quantity <= 0;

    function handleAdd() {
        addToCart(product, selectedSize);
    }
    
</script>


<a class="back" href="/">
    <img src="/images/icons/back-icon.svg" alt="">
    BACK
</a>

<div class="page">
    <img class="main" src={`/images/products/${product.image_url}.png`} alt={product.name} />

    <div>
        <div class="price">${product.price}</div>
        <div class="name">{product.name}</div>

        <p>{product.description || "No description available."}</p>

        <div class="sizes">
            {#each sizes as size}
                <Button
                class={`btn ${selectedSize === size ? 'btn-active' : ''}`}
                on:click={() => (selectedSize = size)}
                >
                    {size}
                </Button>
            {/each}
        </div>

        <a href="/cart">
            <Button
                class="addCart-btn"
                on:click={handleAdd}
                disabled={outOfStock}
            >
                <img src="/images/icons/cart-btn-icon.svg" alt="">
                {outOfStock ? "Out of Stock" : "Add to Cart"}
            </Button>
        </a>
    </div>
</div>


<!-- MORE LIKE THIS SECTION -->
<div class="more-title">SEE MORE LIKE THIS</div>

<div class="grid">
    {#each more as item}
        <a class="item" href={`/product/${item.id}`}>
            <div class="card">
                <div class="price-tag">${item.price}</div>
                <img src={`/images/products/${item.image_url}.png`} alt={item.name} />
            </div>
            <div class="label">{item.name}</div>
        </a>
    {/each}
</div>


<style>
    .page {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .back {
        text-decoration: none;
        font-size: 0.9rem;
        margin-left: 1rem;
        color: #111;
        transition: 0.2s;
    }
    .back:hover {
        color: #c43129;
    }

    img.main {
        width: 100%;
        border-radius: 12px;
        object-fit: cover;
    }

    .price {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .name {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    /* SIZE BUTTONS */
    .sizes {
        display: flex;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    .more-title {
        margin: 4rem 0 1rem;
        font-size: 1rem;
        font-weight: 600;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
    }

    .item {
        text-decoration: none;
        color: inherit;
    }

    .item img {
        width: 100%;
        border-radius: 10px;
    }

    .price-tag {
        position: absolute;
        background: url("/images/price-background.svg") center/contain no-repeat;
        color: white;
        padding: 4px 10px;
        border-radius: 4px;
        font-size: 0.8rem;
        top: 8px;
        right: 8px;
        transition: .3s;
    }

    .item:hover .price-tag {
        background: url("/images/price-background-active.svg") center/contain no-repeat;
    }

    .card {
        position: relative;
    }

    .label {
        margin-top: 0.5rem;
        font-size: 0.9rem;
    }
</style>
