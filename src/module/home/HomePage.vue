<template>
  <div id="homePage">
  <header class="mui-bar mui-bar-nav">
    <a class="mui-action-menu mui-icon mui-icon-bars mui-pull-left"></a>
    <h1 id="title" class="mui-title">首页</h1>
    <a class="mui-icon mui-pull-right" id="loginBth"><i class="fa fa-user-circle-o" aria-hidden="true"></i></a>
  </header>

    <div class="mui-content">
      <div class="anniu">
        <div class="lefttop1" id="item1_huli">
          <span class="mui-icon"><img src="./images/logo.png"></span>
          <div class="mui-media-body">上门护理{{msg}}</div>
        </div>
        <div class="center1">
          <span class="mui-icon"><img src="./images/logo.png"></span>
          <div class="mui-media-body"></div>
        </div>
        <div class="righttop1" id="wode_healthness">
          <span class="mui-icon"><img src="./images/logo.png"></span>
          <!--<div class="mui-media-body">我的化验单</div>-->
          <div class="mui-media-body">健康数据</div>
        </div>
        <div class="center2" id="item2_zonghe"><span class="mui-icon"><img src="./images/logo.png"></span>
          <div class="mui-media-body">综合服务</div>
        </div>
        <div class="center3" id="report_online"><span class="mui-icon"><img src="./images/logo.png"></span>
          <div class="mui-media-body">报告解读</div>
        </div>
        <div class="lefttop2" id="item1_kangfu"><span class="mui-icon"><img src="./images/logo.png"></span>
          <div class="mui-media-body">上门康复</div>
        </div>
        <div class="righttop2" id="familydoctor"><span class="mui-icon"><img src="./images/logo.png"></span>
          <!--<div class="mui-media-body">我的健康</div>-->
          <div class="mui-media-body">家庭医生</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "hello-world",
    data(){
      return {
        msg:'Hello World!',
        logo: './static/images/index_img/smhl.png'
      }
    }
  }
</script>

<style>
  .mui-grid-view.mui-grid-9 {
    margin: 0;
    padding-top: 40px;
    border: 0;
    background: none;
    margin-left: 0.5rem;
    padding-left: 10px;
    padding-right: 10px;
  }

  html {
    font-size: 100%;
    background-color: #ffffff;
  }

  body {
    background-color: #ffffff;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    margin: 0;
    border: 0;
  }

  .mui-table-view-cell {
    padding: 0px 0px;
  }

  .fuwucategory {
    margin: 10px 20px !important;
  }

  .mui-table-view-cell.mui-active,
  .mui-table-view-cell>a:not(.mui-btn).mui-active {
    background-color: #FFFFFF;
  }

  .mui-table-view-cell:after {
    left: 0;
  }

  .mui-table-view-cell.mui-collapse .mui-collapse-content>.mui-input-group,
  .mui-table-view-cell.mui-collapse .mui-collapse-content>.mui-slider {
    margin: 0px -15px;
  }

  .anniu {
    background: url("../../styles/images/main_bg.png") no-repeat;
    background-size: 110% 5.5rem;
    background-size: 110% 60vh;
    width: 100%;
    height: 5.5rem;
    height: 60vh;
    z-index: 0;
    margin-top: -45px;
    position: absolute;
    top: 4.3rem;
  }

  body {
    background: none;
  }

  .mui-slider {
    z-index: 0;
  }

  .mui-content {
    background: none;
  }

  .mui-slider-indicator {
    position: absolute;
    bottom: 45px;
    left: 0px;
    width: 100%;
    text-align: center;
    background: 0 0;
  }

  .lefttop1 img,
  .lefttop2 img,
  .righttop1 img,
  .righttop2 img,
  .center2 img,
  .center3 img {
    max-width: 1rem;
    text-align: center;
  }

  .center1 img {
    max-width: 3.1rem;
    text-align: center;
  }

  .lefttop1,
  .lefttop2,
  .righttop1,
  .righttop2,
  .center2,
  .center3,
  .center1 {
    text-align: center;
  }

  .lefttop1 {
    position: absolute;
    top: 1.42rem;
    left: 0.26rem;
  }

  .center1 {
    position: absolute;
    top: 0.27rem;
    left: 2.07rem;
  }

  .lefttop2 {
    position: absolute;
    top: 3.2rem;
    left: 0.8rem;
  }

  .righttop1 {
    position: absolute;
    top: 1.42rem;
    right: 0.26rem;
  }

  .center2 {
    position: absolute;
    top: 4.1rem;
    left: 2.2rem;
  }

  .center3 {
    position: absolute;
    top: 4.1rem;
    right: 2.2rem;
  }

  .righttop2 {
    position: absolute;
    top: 3.2rem;
    right: 0.8rem;
  }

  #myCarousel {
    z-index: -99;
  }

  .mui-badge {
    font-size: 10px;
    line-height: 1;
    display: inline-block;
    padding: 4px 0px;
    color: #333;
    border-radius: 8px;
    border: 1px solid #DFDFDF;
    background-color: #FFFFFF;
    width: 55px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    margin-top: 10px;
  }

  .mui-badge-huise {
    color: #333;
    border: 1px solid #DFDFDF;
    background-color: #FFFFFF;
    width: 40px;
    text-align: center;
    margin-left: 0;
    margin-left: 10px;
    opacity: 0.5;
    height: 20px;
  }

  .lunbo_gonggao {
    position: absolute;
    bottom: 10px;
  }

  .guanbi {
    /*margin-top: 0.25rem;*/
    float: right;
  }

  .mui-icon {
    font-size: 2em !important;
    color: #d68a47;
    max-width: 90%;
  }

  a {
    color: #d68a47;
  }

  a:visited {
    color: #d68a47;
  }

  .mui-slider {
    max-height: 4.2rem;
  }

  .hide_img {
    position: absolute;
    z-index: 999;
    right: 0;
    top: 3.2rem;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    padding: 8px 15px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell.mui-active {
    background-color: transparent;
  }

  .active_img {
    position: absolute;
    top: 0.9rem;
    right: 0px;
  }

  .gray {
    opacity: 0.4;
    filter: alpha(opacity=40);
  }

  .displayNon {
    display: none;
  }

  .displayYes {
    display: block;
  }
  .mui-media-body{
    font-size: 12px;
    margin-top: 0.05rem;
    margin-left: 0.1rem;
  }
</style>
