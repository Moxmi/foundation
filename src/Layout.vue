<template>
  <div class="page-container">
    <div class="header">
      <span class="logo"></span>
      <p class="name">
        <span class="name__cn">北京XXX基金会</span>
        <span class="name__en">A RESEARCH-ORIENTED FOUNDATION ON XXX XX XXX</span>
      </p>
      <ul class="navitagion-bar">
        <li v-for="(item, index) in navitagionBar" class="navitagion-bar__item" :class="{active: index == curShowIndex && !hoverSubItem}" @mouseover.self="showSelection(index)" @mouseleave="curShowIndex = -1">
          <span>{{ item.title }}</span>
          <ul v-show="index === curShowIndex" class="selection show">
            <li v-for="subItem in item.children" class="selection__option" @mouseover="test">{{ subItem }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <router-view/>
    <div class="footer">
      <span>© 版权所有 北京XXX基金会 京ICP备xxxxxxxxx号-x    地址：北京朝阳区东三环xx路xxx大厦xxx层xxx </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      hoverSubItem: false,
      navitagionBar: [
        {
          title: '首页',
        },
        {
          title: '关于本会',
          children: [
            '首页1',
            '首页2',
            '首页3',
          ]
        },
        {
          title: '本会要闻',
          children: [
            '首页1',
            '首页2',
            '首页3',
          ]
        },
        {
          title: '公益活动',
          children: [
            '首页1',
            '首页2',
            '首页3',
          ]
        },
        {
          title: '合规政策',
          children: [
            '首页1',
            '首页2',
            '首页3',
          ]
        },
        {
          title: '信息公开',
        },
        {
          title: '通知公告',
        },
        {
          title: '联系我们',
        }
      ],
      curShowIndex: -1
    }
  },
  methods: {
    test() {
      console.log(1)
      this.hoverSubItem = true;
    },
    showSelection(i) {
      this.hoverSubItem = false;
      this.curShowIndex = i;
    }
  }
}
</script>

<style lang="less">
  body,html{
    height: 100%;
    padding: 0;
    margin: 0;
  }
  #app {
    height: 100%;
    font-family: 'Microsoft YaHei','PingFang SC','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .el-table,.el-table__header-wrapper,.cell{
    text-align: center;
  }

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

.page-container {
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
    margin: 5px 0 0 0;

    .logo {
      position: relative;
      display: inline-block;
      width: 400px;
      height: 65px;
      background: url('http://www.ywjjh.org.cn/images/1124003.jpg') no-repeat center / contain;
    }

    .name {
      position: relative;
      display: inline-block;
      padding-top: 15px;
      height: 65px;
      font-size: 13px;
      color: #4D5B75;
      float: right;

      .name__cn {
        display: block;
        text-align: right;
      }

      .name__en {
        display: block;
        text-align: right;
      }
    }

    .navitagion-bar {
      position: relative;
      width: 100%;
      border-top: 1px solid #e5e5e5;
      font-size: 14px;
      text-align: center;

      .navitagion-bar__item {
        position: relative;
        display: inline-block;
        padding: 10px;
        min-width: 140px;
        height: 50px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;

        &.active {
          color: #eee;
          background: @red;
        }

        .selection {
          position: absolute;
          top: 50px;
          left: 0;
          width: 100%;
          z-index: 10;
          color: #333;
          background: #e6e6e6;
          opacity: 1;

          &.show {
            animation: slide-in 2s ease;
            -webkit-animation: slide-in 2s ease;
          }

          .selection__option {
            padding: 10px 0;
            border-bottom: #e6e6e6;

            &:hover {
              color: #EEE;
              background: @red;
            }
          }
        }
      }
    }
  }

  .footer {
    margin-top: 10px;
    padding: 5px;
    font-size: 12px;
    text-align: center;
    border-top: 1px solid #e5e5e5;
  }

  @keyframes slide-in {
    from {
      clip: rect(0 140px 0 0);
    }
    to {
      clip: rect(0 140px 1000px 0);
    }
  }
}
</style>
