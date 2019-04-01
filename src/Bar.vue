<template>
  <div class="home-page-container">
    <!--div class="header">
      <span class="logo"></span>
      <p class="name">
        <span class="name__cn">xxxxxxxxxxxx</span>
        <span class="name__en">ssssssssssssssssssssssssss</span>
      </p>
    </div-->
    <div class="content">
      <!--ul class="navitagion-bar">
        <li class="navitagion-bar__item" v-for="item in navitagionBar">{{ item }}</li>
      </ul-->
      <div class="banner">
        <img v-for="(item, index) in bannerImg" :src="item.src" :class="{show: index === curImgIndex, hide: index !== curImgIndex}">
      </div>
      <div class="activity">
        <p class="activity__title">活动公告</p>
        <dl class="card" v-for="item in cards">
          <dt class="card__name">{{ item.name }}</dt>
          <dd class="card__content">{{ item.text }}</dd>
          <dd class="card__href">了解详情</dd>
        </dl>
      </div>
      <div class="friend">
        <p class="friend__title">合作伙伴</p>
        <p class="friend__content">
          <img class="friend__logo" v-for="item in friends" :src="item.logo">
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Bar',
  data() {
    return {
      curImgIndex: 0,
      cards: [
        {
          name: '关于XX',
          text: '北京xxx基金会由“xxxx”发起，于2015年12月3日获北京市民政局审批设立。基金会性质为非公募基金会，原始基金数额人民币贰佰万元。基…'
        },
        {
          name: '关于XX',
          text: '北京xxx基金会由“xxxx”发起，于2015年12月3日获北京市民政局审批设立。基金会性质为非公募基金会，原始基金数额人民币贰佰万元。基…'
        },
        {
          name: '关于XX',
          text: '北京xxx基金会由“xxxx”发起，于2015年12月3日获北京市民政局审批设立。基金会性质为非公募基金会，原始基金数额人民币贰佰万元。基…'
        }
      ],
      bannerImg: [
        {
          src: 'http://www.ywjjh.org.cn/banner/images/01.jpg',
          name: '1'
        },
        {
          src: 'http://www.ywjjh.org.cn/banner/images/02.jpg',
          name: '2'
        },
        {
          src: 'http://www.ywjjh.org.cn/banner/images/03.jpg',
          name: '3'
        }
      ],
      friends: [
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        },
        {
          logo: 'http://www.huaqiaofoundation.org/wp-content/uploads/2016/03/Lingshan.jpg',
        }
      ]
    }
  },
  methods: {
    getUserInfo() {
      this.axios.get('/api/comment/list?pageSize=5&courseId=854&_=1542185845688')
      .then(({data}) => {
        console.log(data)
      })
    },
    startSwiper() {
      setInterval(() => {
        this.curImgIndex += 1;
        this.curImgIndex = this.curImgIndex % this.bannerImg.length;
      }, 3 * 1000);
    }
  },
  created() {
    this.startSwiper();
  }
}
</script>

<style lang="less">

html, body, div, p, ul, ol, li, dl, dt, dd {
  padding: 0;
  margin: 0;
}

ul, ol, li {
  list-style: none;
}

* {
  box-sizing: border-box;
}

.home-page-container {
  position: relative;
  width: 1200px;
  margin: 0 auto;
  color: #333;
  box-sizing: border-box;

  @red: #a51c30;

  .translate50 {
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    -moz-transform: translate(0, -50%);
    -o-transform: translate(0, -50%);
  }

  .header {
    position: relative;
    height: 65px;
    margin: 5px 0;

    .logo {
      position: absolute;
      top: 50%;
      left: 0;
      .translate50();
    }

    .name {
      position: absolute;
      top: 50%;
      right: 0;
      .translate50();
      font-size: 13px;
      color: #4D5B75;

      .name__cn {
        display: block;
        text-align: right;
      }

      .name__en {
        display: block;
        text-align: right;
      }
    }
  }

  .content {
    position: relative;

    /*
    .navitagion-bar {
      position: relative;
      width: 100%;
      border-top: 1px solid #e5e5e5;
      font-size: 14px;

      .navitagion-bar__item {
        display: inline-block;
        padding: 10px;
        min-width: 140px;
        height: 50px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;

        &:hover {
          color: #eee;
          background: @red;
        }
      }
    }
    */

    .banner {
      position: relative;
      width: 100%;
      height: 300px;

      img {
        position: absolute;
        width: 100%;
        height: 300px;
        object-fit: cover;
      }

      .show {
        opacity: 1;
        animation: slowly-in 2s ease;
        -webkit-animation: slowly-in 2s ease;
      }

      .hide {
        opacity: 0;
        animation: slowly-out 2s ease;
        -webkit-animation: slowly-out 2s ease;
      }
    }

    .card {
      position: relative;
      display: inline-block;
      width: 300px;
      height: 200px;
      margin: 20px 50px;
      padding: 5px 10px;
      box-shadow: 10px 10px 5px 1px @red;
      border: 1px solid @red;

      .card__name {
        position: relative;
        margin: 10px 0 5px 5px;
        font-size: 12px;
        font-weight: bold;

        &::before {
          content: '|';
          position: absolute;
          left: -5px;
        }
      }

      .card__content {
        margin-top: 25px;
        font-size: 14px;
      }

      .card__href {
        font-size: 10px;
        margin-top: 20px;
      }
    }

    .activity {

      .activity__title {
        margin: 10px 0;
        padding-bottom: 10px;
        font-size: 16px;
        border-bottom: 1px solid #e5e5e5;
        font-weight: bold;
      }
    }

    .friend {

      .friend__title {
        margin: 10px 0;
        padding-bottom: 10px;
        font-size: 16px;
        border-bottom: 1px solid #e5e5e5;
        font-weight: bold;
      }

      .friend__content {

        .friend__logo {
          margin: 5px 25px;
          width: 120px;
          height: 40px;
          object-fit: contain;
        }
      }
    }
  }

  @keyframes slowly-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @-webkit-keyframes slowly-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slowly-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  @-webkit-keyframes slowly-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
