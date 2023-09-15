export const transition = (url = '') => {
  window.navigator.addEventListener('navigate', () => {
    console.log('hola')
  })
}
