<head>
   
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

   
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Order summary</title>
</head>

<body>
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

       
               
            </ul>
         
        </div>
    </nav>

    <div class="container my-4">
        <h2 class="text-center">Order summary</h2>
         
            <div class="form-group">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
                   
                  </div>
                 
                  <div>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">*</span>
                        <input type="text" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping">
                      </div>
                  </div>
                  <button class="btn btn-primary" type="submit">Log in</button>
                  <button class="btn btn-primary" type="Create account">Create account</button>
            </div>

           
            

            
            <button  id="clear" class="btn btn-primary" onclick="clearStorage()">Clear list</button>
         

        <div id="items" class="my-4">
            <h2>Your Items</h2>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">SNo</th>
                    <th scope="col">Item Title</th>
                    <th scope="col">Item Quantity</th> 
                    <th scope="col">Action</th> 
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <tr>
                    <th scope="row">1</th>
                    <td>Get some Coffee</td>
                    <td>You need coffee as you are a coder</td> 
                    <td><button class="btn btn-sm btn-primary">Delete</button></td> 
                  </tr>
                  
                </tbody>
              </table>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
        <script>
            function getAndUpdate(){
                console.log("Updating List...");
                tit = document.getElementById('title').value;
                desc = document.getElementById('description').value;
                if (localStorage.getItem('itemsJson')==null){
                    itemJsonArray = [];
                    itemJsonArray.push([tit, desc]);
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                }
                else{
                    itemJsonArrayStr = localStorage.getItem('itemsJson')
                    itemJsonArray = JSON.parse(itemJsonArrayStr);
                    itemJsonArray.push([tit, desc]);
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                }
                update();
            }

            function update(){
                if (localStorage.getItem('itemsJson')==null){
                    itemJsonArray = []; 
                    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
                } 
                else{
                    itemJsonArrayStr = localStorage.getItem('itemsJson')
                    itemJsonArray = JSON.parse(itemJsonArrayStr); 
                }
                // Populate the table
                let tableBody = document.getElementById("tableBody");
                let str = "";
                itemJsonArray.forEach((element, index) => {
                    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`; 
                });
                tableBody.innerHTML = str;
            }
            add = document.getElementById("add");
            add.addEventListener("click", getAndUpdate);
            update();
            function deleted(itemIndex){
                console.log("Delete", itemIndex);
                itemJsonArrayStr = localStorage.getItem('itemsJson')
                itemJsonArray = JSON.parse(itemJsonArrayStr);
                // Delete itemIndex element from the array
                itemJsonArray.splice(itemIndex, 1);
                localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
                update();

            }
            function clearStorage(){
                if (confirm("Do you areally want to clear?")){
                console.log('Clearing the storage')
                localStorage.clear();
                update()
                }
            }
        </script>
        
</body>

</html>
<table id="checkout-cart" class="shopping-cart">
    <thead>
        <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>

    </tbody>
</table>

<div id="pricing">
    <p id="shipping">
        <strong>Shipping</strong>: <span id="sshipping"></span>
    </p>

    <p id="sub-total">
        <strong>Total</strong>: <span id="stotal"></span>
    </p>
</div>

<form action="order.html" method="post" id="checkout-order-form">
    <h2>Your Details</h2>
        <fieldset id="fieldset-billing">
            <legend>Billing</legend>
                <!-- Name, Email, City, Address, ZIP Code, Country (select box) -->

<div>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" data-type="string" data-message="This field may not be empty" />
</div>

<div>
    <label for="email">Email</label>
    <input type="text" name="email" id="email" data-type="expression" data-message="Not a valid email address" />
</div>

<div>
    <label for="city">City</label>
    <input type="text" name="city" id="city" data-type="string" data-message="This field may not be empty" />
</div>

<div>
    <label for="address">Address</label>
        <input type="text" name="address" id="address" data-type="string" data-message="This field may not be empty" />
</div>

<div>
    <label for="zip">ZIP Code</label>
    <input type="text" name="zip" id="zip" data-type="string" data-message="This field may not be empty" />
</div>

<div>
    <label for="country">Country</label>
        <select name="country" id="country" data-type="string" data-message="This field may not be empty">
            <option value="">Select</option>
            <option value="US">USA</option>
            <option value="IT">Italy</option>
        </select>
</div>
</fieldset>

<div id="shipping-same">Same as Billing <input type="checkbox" id="same-as-billing" value=""/></div>

<fieldset id="fieldset-shipping">
<legend>Shipping</legend>
    <!-- Same fields as billing -->
</fieldset>

<p><input type="submit" id="submit-order" value="Submit" class="btn" /></p>

</form>
h1>Your Order</h1>

<table id="checkout-cart" class="shopping-cart">
    <thead>
        <tr>
            <th scope="col">Item</th>
            <th scope="col">Qty</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

<div id="pricing">
    <p id="shipping">
        <strong>Shipping</strong>: <span id="sshipping"></span>
    </p>

    <p id="sub-total">
        <strong>Total</strong>: <span id="stotal"></span>
    </p>
</div>

<div id="user-details">
    <h2>Your Data</h2>
        <div id="user-details-content"></div>
</div>

<form id="paypal-form" action="" method="post">
    <input type="hidden" name="cmd" value="_cart" />
    <input type="hidden" name="upload" value="1" />
    <input type="hidden" name="business" value="" />

    <input type="hidden" name="currency_code" value="" />
    <input type="submit" id="paypal-btn" class="btn" value="Pay with PayPal" />
</form>