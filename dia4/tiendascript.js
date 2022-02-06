let productoN = [];
let productoP = [];
let temp ="";
let divisa = "€";
let total = 0;
let j=1;

 jQuery(()=>{
     $("#boton1").on("click", ()=>{
        productoN.push($("#producto1").text());
        temp = parseInt($("#precio1").text());
        productoP.push(temp);
     })
     $("#boton2").on("click", ()=>{
      productoN.push($("#producto2").text());
      temp = parseInt($("#precio2").text());
      productoP.push(temp);
      console.log(productoN);
   })
   $("#boton3").on("click", ()=>{
      productoN.push($("#producto3").text());
      temp = parseInt($("#precio3").text());
      productoP.push(temp);
   })
   $("#boton4").on("click", ()=>{
      productoN.push($("#producto4").text());
      temp = parseInt($("#precio4").text());
      productoP.push(temp);
   })
   $("#boton5").on("click", ()=>{
      productoN.push($("#producto5").text());
      temp = parseInt($("#precio5").text());
      productoP.push(temp);
   })
   $("#boton6").on("click", ()=>{
      productoN.push($("#producto6").text());
      temp = parseInt($("#precio6").text());
      productoP.push(temp);
   })
   $("#boton7").on("click", ()=>{
      productoN.push($("#producto7").text());
      temp = parseInt($("#precio7").text());
      productoP.push(temp);
   })
   $("#boton8").on("click", ()=>{
      productoN.push($("#producto8").text());
      temp = parseInt($("#precio8").text());
      productoP.push(temp);
   })
   $("#boton9").on("click", ()=>{
      productoN.push($("#producto9").text());
      temp = parseInt($("#precio9").text());
      productoP.push(temp);
   })

   $("#carrito").on("click", ()=>{
      total = productoP.reduce((a, b) => a + b, 0);
      for(let i=0;i<productoN.length;i++)
      {
      $("#tabla-body").append(`<tr>
                              <th scope="row">`+j+`</th>
                              <td>`+productoN[i]+`</td>
                              <td>`+productoP[i]+` `+divisa+`</td>
                           </tr>`);
                           j++;                    
      }
      $("#tabla-body").append(`<tr>
                              <td></td>
                              <td><b>Precio total</b></td>
                              <td>`+total+` `+divisa+`</td>
                              </tr>`)
   })
 })


