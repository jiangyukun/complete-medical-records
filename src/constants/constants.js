/**
 * Created by jiangyukun on 2017/3/27.
 */
export let dpr = parseInt(window.devicePixelRatio || 1)
if (dpr > 3) {
  dpr = 3
}

export let motherPageStart = 1
if (process.env.NODE_ENV != 'production') {
  motherPageStart = 3
}
