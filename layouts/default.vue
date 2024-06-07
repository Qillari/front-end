<template>
  <div style="min-height: 100vh; display: flex; flex-direction: column">
    <LazyNavbar />
    <slot />
    <LazyBotonWha />
    <Footer style="z-index: 10; position: relative; margin-top: auto" />
  <!-- <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "978375893810865");
      fbq("track", "PageView");
    </script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q44DVRCSH3"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-Q44DVRCSH3');
    </script>
    <noscript
      ><img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=978375893810865&ev=PageView&noscript=1"
    /></noscript>-->
  </div>
</template>
<script>
export default {
  unmounted() {
    localStorage.removeItem("mercadopago1");
  },
};
</script>