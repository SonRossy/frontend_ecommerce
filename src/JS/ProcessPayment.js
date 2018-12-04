export default {
  methods: {
    checkout () {
      let w = window.open('', 'W', 'width=200,height=100')
      // console.log('linked')
      let paypalForm = `
   <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_cart">
        <input type="hidden" name="upload" value="1">
        <input type="hidden" name="business" value="adrian@webdev.tube">
        `
      paypalForm += `
        <input type="hidden" name="item_name_1" value="apple">
        <input type="hidden" name="amount_1" value="1">
        <input type="hidden" name="quantity" value="2">
        <input type="submit" value="PayPal"> </form> <div class="overlay"></div>`
      document.querySelector('body').insertAdjacentHTML('beforeend', paypalForm)
      w.document.write('hello')
      // document.getElementById('paypal-form').submit()
    },
    son () {
      let myWindow = window.open('', 'MsgWindow', 'width=400,height=400')
      myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>")
    }
  }
}
