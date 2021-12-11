//author Alejandro Moreno Camacho
'use strict';
$(function() {
  var $mybook 		= $('#mybook');
  var $bttn_next		= $('#next_page_button');
  var $bttn_prev		= $('#prev_page_button');
  var $loading		= $('#loading');
  var $mybook_images	= $mybook.find('img');
  var cnt_images		= $mybook_images.length;
  var loaded			= 0;
  //Calculo para los viewport width y height, saber altura y anchura de la pantalla del usuario
  var wt = window.innerWidth;
  var ht = window.innerHeight;
  wt = (wt*63.058)/100;
  ht = ((ht-10)*67.74)/100;
  if(window.innerWidth <=1100){ht+=12;}
  if(window.innerWidth <=900){ht+=8;}
  if(window.innerWidth <=800){wt*=2; ht+=100;}
  if(window.innerHeight <=400){ht+=5;}
  //_________________________________________________________________________________________
  $mybook_images.each(function(){
    var $img 	= $(this);
    var source	= $img.attr('src');
    $('<img/>').load(function(){
      ++loaded;
      if(loaded == cnt_images){
        $loading.hide();
        $bttn_next.show();
        $bttn_prev.show();
        $mybook.show().booklet({
          name:               null,                     //
          width:              wt,                       //
          height:             ht,                       //
          speed:              600,                      //
          direction:          'LTR',                    //
          next:               $bttn_next,          			//
          prev:               $bttn_prev,          			//

        });
      }
    }).attr('src',source);
  });
});
