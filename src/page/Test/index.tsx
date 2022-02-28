import React, {useRef, useEffect, useState} from "react";
import './index.sass';
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.min.css';
import {u} from '@/utils'


const hexToRgba = function(hex:string, opacity:number) {
  let opa = opacity !== undefined ? opacity : 1
  return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opa + ')'
};

const Test = () => {
  const sliderBox = useRef<HTMLDivElement | null>(null);
  const params = {}
  const data = [{
    img: '01.jpg',
    backgroundColor: '#0000ff',
    title: '这是第一张图片'
  }, {
    img: '02.jpg',
    backgroundColor: '#ff0000',
    title: '第二张图片'
  }, {
    img: '03.jpg',
    backgroundColor: '#008000',
    title: '这是标题'
  }, {
    img: '04.jpg',
    backgroundColor: '#ffff00',
    title: '这是文本'
  }];
  const [blur, setBlur] = useState(0);

  const getBackground = (color:string) => {
    const rgbaStart = hexToRgba(color, 0);
    return `linear-gradient(to bottom, ${rgbaStart} 0%, ${color} 10%, ${color} 100%)`
  } 

  useEffect(() => {
    // if(sliderBox.current) {
      console.log(55555555)
      window.addEventListener('scroll', function() {
        const scrollTop =  document.documentElement.scrollTop;
        if(scrollTop < 30) {
          setBlur(0);
        } else if(scrollTop > 30 && scrollTop <= 60) { // 开始模糊
          setBlur(scrollTop - 30);
        } else {
          setBlur(30);
        }
      });
    // }
     
  }, [])
  console.log(33333, blur)
  return <div className="slider-box" ref={sliderBox}>
    <Swiper {...params}>
      {
        data.map((item, idx) => {
          return <div className="image-swiper-item" key={idx}>
          <div className="item-top-img">
            <img src={u(item.img)} style={{filter: `blur(${blur}px)`}} alt="" />
          </div>
          <div className="item-mask" style={{backgroundImage: getBackground(item.backgroundColor), filter: `blur(${blur}px)`}}>
            <h3>{item.title}</h3>
          </div>
        </div>
        })
      }
    </Swiper>
    <div className="slider-content">
    渐进式JavaScript 框架 渐进式 JavaScript 框架 WHY VUE.JS?起步 GITHUB 特别赞助 易用 已经会了 HTML、CSS、JavaScript?即刻阅读指南开始构建应用! 灵活 不断繁荣的生态系统
    </div>
  </div>
}

export default Test;