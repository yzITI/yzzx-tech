const color = [];
color['AD'] = "#ffccc7";
color['BE'] = "#f4ffb8";
color['CO'] = "#ffe7ba";
color['DS'] = "#ffd6e7";
color['ED'] = "#efdbff";
color['FE'] = "#d6e4ff";

const app = new Vue({
  el: "#app",
  data: {
    view: 'banner',
    I: 0,
    profiles: [{
      name: '李世衡',
      nickName: 'Phantomlsh',
      tags: ['AD', 'ED'],
      pic: './img/team/LSH.jpg',
      intro: 'ITI创始人，江苏省扬州中学毕业生，现就读于美国加州大学圣巴巴拉分校。'
    },
    {
      name: '季雨彤',
      nickName: 'Tina',
      tags: ['FE'],
      pic: './img/team/JYT.jpg',
      intro: '澳洲新南威尔士大学软件工程系学生，具有优秀的Web开发技能。'
    }]
  },
  methods: {
    tagStyle: function(tag) {
      return "background-color: " + color[tag] + ";";
    },
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
          this.I++;
          let target = 'profile';
          if (this.I >= this.profiles.length) {
            this.I = 0;
            target = 'banner';
          }
          setTimeout(() => {
            this.view = target;
          }, 600);
        }
      }
    }
  }
});