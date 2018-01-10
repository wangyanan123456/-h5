$(document).ready(function(){
   $('.backto').click(function(){
    window.history.back()
    })  

   // 加的计算
   $('.add').each(function(index,ele){
    $(this).click(function(){
      var $val = parseInt($(this).prev().val())
      var $num = $val+1
      $(this).prev().val($num)
      
    })
   })

   // 减得计算
   $('.jian').each(function(index,ele){
    $(this).click(function(){

      var $val = parseInt($(this).next('input').val())
      var $num = $val-1
      if($num<0){
        $num =0
      }
      $(this).next('input').val($num)
      
    })
   })

   $('input').each(function(){
      $(this).focus(function(){
        $(this).val("")
      });
       $(this).blur(function(){
        if($(this).val()<=0){
          $(this).val("0")
        }else{
          $(this).val(parseInt($(this).val()))
        }
      });  
   })


  $('.submit').click(function(){
     var $textarea  = $('.textarea').val()

    var $val = $('.down')
    var count=0;
    $val.each(function(index,ele){
      
      if(parseInt($(this).find('span').text()) >= parseInt($(this).find('input').val())){
        
      }else{
        
        count++   
      }
    })
    if(count>0 || $textarea.length<3 || $textarea.length>200 ){
      $('.toast').text('提交失败')
      toast()
    }else{
       $('.toast').text('提交成功')
     toast()
     
    }
  })

  function toast(){
     $('.toast').css('display','block')
        setTimeout(function(){
          $('.toast').css('display','none')
        },1000)
  }
})