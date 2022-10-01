function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

Vue.createApp({
    data() {
      return {
        nameUser: "Võ Hoàn Hảo",
        className: "Lớp Yu",
        MaSV: "20110472",
      };
    },
  }).mount("#interpolation");

  Vue.createApp({
    data() {
      return {
        ImgUrl:"https://cdn.baogiaothong.vn/upload/images/2021-3/article_img/2021-07-07/img-bgt-2021-unnamed-1--1625645540-width700height1050.jpg",
        LinkInfo: "https://vi.wikipedia.org/wiki/Lisa_(rapper)",

      };
    },
  }).mount("#bind-attribute");

  Vue.createApp({
    data(){
      const mangXucXac = [
        getRandomInt(1, 6),
        getRandomInt(1, 6),
        getRandomInt(1, 6),
      ];
      soNut = mangXucXac.reduce((tong, xucXac) => (tong += xucXac), 0);
      if (soNut > 11)
        TaiHayXiu="Tài";
      else
        TaiHayXiu="Xỉu";
      return {
        soNut,
        TaiHayXiu
      }
    },
    methods: {
      
      renderTaiHayXiu() {
        const mangXucXac = [
          getRandomInt(1, 6),
          getRandomInt(1, 6),
          getRandomInt(1, 6),
        ];
        this.soNut = mangXucXac.reduce((tong, xucXac) => (tong += xucXac), 0);
        if (this.soNut > 11) {
          this.TaiHayXiu="Tài";
        } else {
          this.TaiHayXiu="Xỉu";
        }
      },
      reSettaiXiu(){

      }
    },
  }).mount("#method");

  Vue.createApp({
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      handleClickMe(event) {
        console.log(event.target);
        console.log("click me");
      },
      handleIncrement(params, event) {
        console.log(event.target);
        this.count = this.count + params;
      },
      hanldeSubmit() {
        alert("submit thành công");
      },
      handleLogin() {
        console.log("handleLogin");
      },
    },
  }).mount("#event");

  Vue.createApp({
    data() {
      return {
        message: "",
      };
    },
  }).mount("#two-way-binding");

  Vue.createApp({
    data() {
      return {
        count: 0,
        lastName:"Võ",
        firstName:"Hoàn Hảo",
        fullDataName: "Võ Hoàn Hảo"
      };
    },
    computed:{
      fullName(){
        return this.lastName + " " + this.firstName;
      }
    },
    watch:{
      count(newValue,oldValue){
        if(newValue===1){
          alert("Con me may đố m tăng lên 1 được đấy =))))))");
          this.count = getRandomInt(-5,0);
        }
      },
      lastName(newValue){
        return this.fullDataName=newValue + " " + this.firstName;
      },
      firstName(newValue){
        return this.fullDataName=this.lastName + " " + newValue
      },
    },
    methods: {
      handleIncreament(){
        this.count+=1;
      }
    }
  }).mount("#computed-and-watchers");

  Vue.createApp({
    data() {
    return{
      active:false,
      styleForP:{
        backgroundColor: "red",
        color: "yellow",
        fontSize : "40px"
      }
    }
    },
    methods: {
      handleStyle(){
        this.styleForP.color="blue"
      },
      handleActive(){
        this.active=true;
      }
    }
  }).mount("#styling")

  Vue.createApp({
    data() {
      return {
        isLogin: false,
        nameHero: "",
        blackpink: [
          {
            name: "Lisa",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/0/00/Blackpink_Lisa_190621_2.png",
          },
          {
            name: "Rose",
            image:
              "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRFMa9nywjuWgjQe8jO3UP9A29ggO6s0K8iEXAdrvCMcj5TSvxglNEnXaf-68OW",
          },
          {
            name: "jennie",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/3/3b/191001_Jennie_Kim_attends_CHANEL_Show_at_Paris_Fashion_Week_2019_%281%29.jpg",
          },
          {
            name: "Jisoo",
            image:
              "https://static2.yan.vn/YanNews/2167221/202107/163646839_151261790203234_4588702925784176269_n-980bbe54.jpg",
          },
        ],
      };
    },
    methods: {
      handleLogin() {
        this.isLogin = true;
      },
      handleNameHero(nameHero) {
        this.nameHero = nameHero;
      },
    },
  }).mount("#directive");
