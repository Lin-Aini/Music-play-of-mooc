<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initSlider()
    }, 20)
  },
  methods: {
    _setSliderWidth () {
      this.children = this.$refs.sliderGroup.children
      console.info(this.children)

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      console.info(sliderWidth)
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item') // 目的给每个元素都添加 'slider-item'样式
        child.style.width = sliderWidth + 'px'
        width += sliderWidth // width = width + sliderWidth
      }
      console.info(width)
      console.info(this.loop)
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
      console.info(this.$refs.sliderGroup.style.width)
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true, // X 轴循环
        scrollY: false, // y轴循环
        momentum: false, // 惯性
        snap: {
          loop: true, // 循环
          speed: 400,
          threshold: 0.3
        },
        click: true
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

.slider
  min-height 1px
  .slider-group
    position relative
    overflow hidden
    white-space nowrap
    .slider-item
      float left
      box-sizing border-box
      overflow hidden
      text-align center
      a
        display block
        width 100%
        overflow hidden
        text-decoration none
      img
        display block
        width 100%
  .dots
    position absolute
    right 0
    left 0
    bottom 12px
    text-align center
    font-size 0
</style>
