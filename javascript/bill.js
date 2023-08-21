 let sum = 0 ;
 var purchaseBtn = document.getElementById('purchase')
 purchaseBtn.disabled = true;
 var btn =    document.getElementById('apply');
 btn.disabled = true ;


//     console.log(couponValue)
 function list(id){
         const list =  document.getElementById('list');
         
         const count = list.childElementCount + 1  ;
       const itemName = id.childNodes[3].childNodes[3].innerText;
       const li = document.createElement('li');
       li.innerText = count + ' ' + itemName;
       list.appendChild(li);
      
      const price =  parseFloat(id.childNodes[3].childNodes[5].childNodes[0].innerText);
        sum = sum + price ;
        
         const total = document.getElementById('total');
         total.innerText = sum;
          
         var net = document.getElementById('net-price')
         net.innerText = sum;

         if( sum > 0){
              purchaseBtn.disabled=false;
         }

         if( sum >= 200){
              btn.disabled = false;
              btn.addEventListener('click',function(){
                     var coupon = document.getElementById('coupon')
                     var couponValue = coupon.value;
                  if(couponValue==='SELL200'){
                     
                  var discountField = document.getElementById('discount-amount')

                var discount = sum*0.2;

                      discountField.innerText = discount.toFixed(2);
                     
                   var  price = sum-discount
                      
                   net.innerText = price.toFixed(2);
                     // console.log(price)

                  }
              })
       //       console.log('hi')
             }
              
       }
              
              
       
         
         
//       console.log(total)
        

          
   

//    if( btn.innerText = 'apply')
       // btn.disabled = false;
  