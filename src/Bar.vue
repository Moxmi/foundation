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
        <img src="./banner-1.jpeg" :class="{show: 0 === curImgIndex, hide: 0 !== curImgIndex}">
        <img src="./banner-2.jpeg" :class="{show: 1 === curImgIndex, hide: 1 !== curImgIndex}">
      </div>
      <dl class="intro">
	<dt class="intro__title">北京xxx基金会</dt>
	<dd class="intro__text">{{ intro }}</dd>
      </dl>
      <dl class="info-container">
	<dl class="news">
	  <dt class="news__title">公告</dt>
	  <dd class="news__text" v-for="item in news">{{ item }}</dd>
	</dl>
	<dl class="news">
	  <dt class="news__title">公告</dt>
	  <dd class="news__text" v-for="item in news">{{ item }}</dd>
	</dl>
      </dl>
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
      news: [
	'2018年8月12日，我市领导组织党建班子参观访问基金会发展历程博物馆领导指出',
	'2018年8月12日，我市领导组织党建班子参观访问基金会发展历程博物馆领导指出',
	'2018年8月12日，我市领导组织党建班子参观访问基金会发展历程博物馆领导指出',
	'2018年8月12日，我市领导组织党建班子参观访问基金会发展历程博物馆领导指出',
	'2018年8月12日，我市领导组织党建班子参观访问基金会发展历程博物馆领导指出'
      ],
      intro: '北京三一公益基金会（Sany Foundation，简称三一基金会）于2013年12月31日在北京市民政局注册成立。三一基金会以推动科学公益为使命，在理论研究、行动支持和公共倡导三个领域开展项目，致力于建构和推广“科学公益”理论体系、支持专业有效的公益实践行动、培养和提升公众意识，以期提升公益效能，推动中国公益的科学发展，共建充满活力、善意和信任的社会。北京三一公益基金会（Sany Foundation，简称三一基金会）于2013年12月31日在北京市民政局注册成立。三一基金会以推动科学公益为使命，在理论研究、行动支持和公共倡导三个领域开展项目，致力于建构和推广“科学公益”理论体系、支持专业有效的公益',
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
          src: './banner-1.jpeg',
          name: '1'
        },
        {
          src: './banner-2.jpeg',
          name: '2'
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
      margin-top: 25px;
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
    
    .intro {
      display: inline-block;
      width: 600px;
      padding: 50px 50px 50px 0;
      text-align: center;
      font-size: 14px;
      vertical-align: middle;
	
      .intro__title {
	margin-bottom: 5px;
	font-weight: bold;
      }

      .intro__text {
	text-align: left;
	line-height: 1.8;
      }
    }

    .info-container {
      display: inline-block;
      width: 590px;
      padding: 25px 0;
      vertical-align: middle;

      .news {
	display: inline-block;
	margin: 25px 0;
	line-height: 1.5
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
