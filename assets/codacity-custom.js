$(document).ready(function() {
  
   $('.product-form__color-swatch.selected').ready( function() {
     const selectedColor = $('.product-form__color-swatch.selected').attr('aria-label')
  	   hideUnselectedVariantImages(selectedColor)  

  })

   $('.product-form__color-swatch').click(function(e){
  	const selectedColor = e.currentTarget.ariaLabel;
	hideUnselectedVariantImages(selectedColor)


	});	 
  
  function hideUnselectedVariantImages(selectedColor) {
    $('.product > .product__media > .product__media-wrapper').each(function(){
      if ($(this).find('img').attr('alt') != selectedColor) {
         $(this).css('display', 'none');
      } else {
        $(this).css('display', 'block');
    }
  });
    }
});

