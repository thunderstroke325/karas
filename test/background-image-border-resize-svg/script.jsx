let o = karas.render(
  <svg width="360" height="360">
    <div style={{
      position: 'absolute',
      left: 100,
      top: 100,
      width: 50,
      height: 20,
      border: '5px solid #0F0',
      background:'url(../image.png) no-repeat 0 0',
      backgroundSize: '100% auto',
    }}/>
  </svg>,
  '#test'
);
let input = document.querySelector('#base64');
input.value = JSON.stringify(o.virtualDom);
