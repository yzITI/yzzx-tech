const app = new Vue({
  el: "#app",
  data: {
    view: 'banner',
    I: 0,
    profiles: []
  },
  methods: {
    next: function() {
      switch (this.view) {
        case 'blank': {
          return;
        }
        case 'banner': {
          this.view = 'profile';
          return;
        }
        case 'profile': {
          this.view = 'blank';
          setTimeout(() => {
            this.view = 'profile';
          }, 600);
          this.I++;
        }
      }
    }
  }
});