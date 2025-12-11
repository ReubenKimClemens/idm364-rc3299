<script>
  let { data } = $props();
  const items = data?.products || [];
  import Hero from '$lib/components/Hero.svelte';
</script>
<Hero />
<h1>Products</h1>
<div class="grid">
  {#each items as product}
    <div class="card">
      <a href={`/product/${product.id}`}>
        <div class="price-tag">
          ${product.price}
        </div>
        <img
          src={"/images/products/" + product.image_url + ".png"}
          alt={product.name}
        />
        <p class="name">{product.name}</p>
      </a>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(280px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
  }

  .card {
    position: relative;
    text-align: center;
  }

  .price-tag {
    position: absolute;
    top: 10px;
    right: 10px;
    background: url("/images/price-background.svg") center/contain no-repeat;
    color: white;
    padding: 6px 12px;
    font-size: 1.2rem;
    transition: 0.225s;
  }
  .card a {
    text-decoration: none;
  }
  .card:hover .price-tag {
    background: url("/images/price-background-active.svg") center/contain
      no-repeat;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
  }

  .name {
    margin-top: 0.75rem;
    font-size: 1rem;
    font-weight: 500;
    color: #111;
  }
  @media (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(2, minmax(280px, 1fr));
    }
  }
  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(1, minmax(280px, 1fr));
    }
  }
</style>
