{
    let paymentBlock = document.querySelector('.payment-method');
    if(paymentBlock) {
        paymentBlock.addEventListener('click', (e) => {           
            if(e.target.closest('input[type="radio"]')) {
                upDownBottomBlock();
            }
        })

        function upDownBottomBlock() {
            for(let item of paymentBlock.children) {
                let radio = item.querySelector('input[type="radio"]');
                let bottomBLock = item.querySelector('.payment-method__data-input');
                
                if(radio.checked) {
                    _slideDown(bottomBLock);
                } else {
                    _slideUp(bottomBLock);
                }
                
            }
        }

        upDownBottomBlock(); 
    }



}