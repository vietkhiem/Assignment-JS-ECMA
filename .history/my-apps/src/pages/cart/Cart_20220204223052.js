import { getAll } from "../../api/post";

const Cart = {
    async render() {
        const { data } = await getAll;
        await Cart.init();

        Cart.logContents("Load lại");

    }
    ChildRender() {
        let resultCart = "";
        if (CART.contents == "") {
            resultCart = "Giỏ hàng trống";
        } else {
            console.log(CART.contents);
            const resultTr = CART.contents.map((item) => `
            <tr style='font-family:Poppins' class='itemProductCart' data-id=>
              <td class="product-thumbnail"><a href="#"><img src="" alt="product img"></a></td>
              <td class="product-name" style='font-weight:600'> </td>
              <td class="product-price"><span class="amount">$</span></td>
              <td class="product-quantity" >
                <div style='display:flex; flex-direction:row; justify-content:center; align-content:center'>
                <div class='btnReduceP' style='cursor:pointer; font-size:15px; background-color:#ccc'>➖</div>
                <div class='quantityP' style='margin:0 15px; font-size:15px; color:black'></div>
                <div class='btnIncreaseP' style='cursor:pointer; font-size:15px; background-color:#ccc'>➕</div>
                </div>
              </td>
              <td class="product-subtotal totalOne"></td>
              <td class="product-remove">
                <div class='btnRemoveP' style='display:inline-block; cursor:pointer'>
                  <i class="icon-trash icons"></i>
                </div>
              </td>
            </tr>
          `).join("");
            resultCart = `

          <div class="row">
            <div class="col-lg-12" >
              <form action="#">               
                  <div class="table-content table-responsive">
                      <table>
                          <thead>
                              <tr>
                                  <th class="product-thumbnail">products</th>
                                  <th class="product-name">name of products</th>
                                  <th class="product-price">Price</th>
                                  <th class="product-quantity">Quantity</th>
                                  <th class="product-subtotal">Total</th>
                                  <th class="product-remove">Remove</th>
                              </tr>
                          </thead>
                          <tbody>
                              
                          ${resultTr}
                              
                          </tbody>
                      </table>
                  </div>

                  <div class="row">
                    <div class="col-lg-12">
                        <div class="buttons-cart--inner">
                            <div class="buttons-cart">
                                <a href="#">Continue Shopping</a>
                                
                            </div>

                            <div class="col-lg-6 smt-40 xmt-40">
                                <div class="htc__cart__total">
                                    <h6>cart total</h6>
                                    <div class="cart__desk__list">
                                        <ul class="cart__desc">
                                            <li>cart total</li>
                                            <li>tax</li>
                                            <li>shipping</li>
                                        </ul>
                                        <ul class="cart__price">
                                            <li class='cartTotal'></li>
                                            <li>$0</li>
                                            <li>$0</li>
                                        </ul>
                                    </div>
                                    <div class="cart__total">
                                        <span>order total</span>
                                        <span class='moneyPay'></span>
                                    </div>
                                    <ul class="payment__btn">
                                        <li class="active"><a href="#/checkout">Check Out</a></li>
                                      
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                  
              </form> 
            </div>
          </div>

        `;
        }
        return resultCart;
    },
    
    

};
export default Cart;