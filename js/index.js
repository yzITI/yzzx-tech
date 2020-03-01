function sleep(time) { // ms
  return new Promise((resolve) => setTimeout(resolve, time));
}
function random(l, r) { // [l, r]
  return Math.floor(Math.random() * (r - l + 1)) + l;
}

const app = new Vue({
  el: "#app",
  data: {
    window: {},
    curSection: 0,
    open: [],
    banner: {
      texts: ["信息", "发展", "潮流", "信心", "合作", "效率", "和谐", "交流", "学习", "进步"],
      text: "ITI",
      bgHeight: 0,
      showTip: false
    },
    yzzx: {
      showContent: false
    }
  },
  mounted() {
    this.window = { // get body size
      width: window.innerWidth,
      height: window.innerHeight
    };
    window.addEventListener('scroll', this.scroll)
    this.start();
  },
  computed: {

  },
  methods: {
    start: async function() {
      await sleep(1000);
      for (let i = 0; i < 100; i++) {
        this.banner.text = this.banner.texts[i % this.banner.texts.length];
        await sleep(Math.exp(i / 10) / 70);
      }
      this.banner.text = "未来";
      await sleep(500);
      this.banner.bgHeight = "100vh";
      await sleep(1100);
      this.banner.showTip = true;
    },
    scroll: async function() {
      let y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let newSection = Math.round(y / this.window.height);
      if (this.curSection != newSection) {
        this.closeSection(this.curSection);
        this.curSection = newSection;
        this.$set(this.open, newSection, true);
      }
    },
    closeSection: function(s) {
      setTimeout(() => {
        if (this.curSection != s) {
          this.$set(this.open, s, false);
        }
      }, 2000);
    }
  }
})