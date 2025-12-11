<section class="hero">
    <div class="tag-right tag">
        <p>
            NEW DEVIL PUFFER
        </p>
    </div>
    <div class="tag-left tag">
        <p>ONLY $129.99</p>
    </div>
    <div class="subject"></div>
</section>

<style>
    .subject {
        height: 100vh;
        min-height: 600px;
        background: url('/images/subject.png') center/cover no-repeat;
        position: relative;
    }
    .hero {
        height: 100vh;
        min-height: 600px;
        background: url('/images/hero.jpg') center/cover no-repeat;
        position: relative;
    }

    .tag-right {
        position: absolute;
        top: 25%;
        left: 53%;
    }
    .tag-left {
        position: absolute;
        bottom: 10%;
        right: 50%;
        margin-right: 14vw;

    }

    .tag {
        display: inline-block;
        padding: 12px 50px;
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
        text-transform: uppercase;
        background: url('/images/price-background.svg') center/contain no-repeat;
        z-index: 1;
    }
    @media (max-width: 900px) {
    p {
      font-size: 1.1rem;
    }
  }
</style>
